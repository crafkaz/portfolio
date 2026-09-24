import { afterEach, describe, expect, it, vi } from "vitest";

import nextConfig from "@/next.config";

function parseCsp(value: string): Map<string, string[]> {
  const entries = value
    .split(";")
    .map((directive) => directive.trim())
    .filter(Boolean)
    .map((directive): [string, string[]] => {
      const [name, ...sources] = directive.split(/\s+/);
      return [name, sources];
    });

  return new Map(entries);
}

async function resolveHeaderRules() {
  const { headers } = nextConfig;
  if (typeof headers !== "function") {
    throw new Error("next.config.ts must define a headers() function");
  }
  return headers();
}

async function resolveHeaders() {
  const rules = await resolveHeaderRules();
  const [rule] = rules;
  return new Map(rule.headers.map(({ key, value }) => [key, value]));
}

async function resolveCsp() {
  const headers = await resolveHeaders();
  const csp = headers.get("Content-Security-Policy");
  if (!csp) {
    throw new Error("Content-Security-Policy header is not configured");
  }
  return parseCsp(csp);
}

describe("security header coverage", () => {
  it("applies a single rule matching every route", async () => {
    const rules = await resolveHeaderRules();

    expect(rules).toHaveLength(1);
    expect(rules[0].source).toBe("/:path*");
  });

  it("sets every security header the site relies on", async () => {
    const headers = await resolveHeaders();

    expect(headers.get("X-Frame-Options")).toBe("DENY");
    expect(headers.get("X-Content-Type-Options")).toBe("nosniff");
    expect(headers.get("Referrer-Policy")).toBe(
      "strict-origin-when-cross-origin",
    );
    expect(headers.get("Permissions-Policy")).toBe(
      "camera=(), microphone=(), geolocation=()",
    );
  });

  it("requests HTTPS for at least a year via HSTS", async () => {
    const headers = await resolveHeaders();
    const hsts = headers.get("Strict-Transport-Security");

    expect(hsts).toBeDefined();

    const maxAge = Number(/max-age=(\d+)/.exec(hsts!)?.[1]);
    const oneYearInSeconds = 365 * 24 * 60 * 60;

    expect(maxAge).toBeGreaterThanOrEqual(oneYearInSeconds);
  });
});

describe("content security policy", () => {
  it("defaults to same-origin and locks down the dangerous fetch directives", async () => {
    const csp = await resolveCsp();

    expect(csp.get("default-src")).toEqual(["'self'"]);
    expect(csp.get("object-src")).toEqual(["'none'"]);
    expect(csp.get("base-uri")).toEqual(["'self'"]);
    expect(csp.get("form-action")).toEqual(["'self'"]);
    expect(csp.get("connect-src")).toEqual(["'self'"]);
  });

  it("forbids the site from being framed", async () => {
    const csp = await resolveCsp();

    expect(csp.get("frame-ancestors")).toEqual(["'none'"]);
  });

  it("never allows unsafe-eval by default", async () => {
    const csp = await resolveCsp();

    for (const sources of csp.values()) {
      expect(sources).not.toContain("'unsafe-eval'");
    }
  });

  it("serves fonts only from the same origin", async () => {
    const csp = await resolveCsp();

    expect(csp.get("font-src")).toEqual(["'self'"]);
  });

  it("keeps unsafe-inline confined to scripts and styles", async () => {
    const csp = await resolveCsp();

    const directivesAllowingInline = [...csp.entries()]
      .filter(([, sources]) => sources.includes("'unsafe-inline'"))
      .map(([name]) => name)
      .sort();

    expect(directivesAllowingInline).toEqual(["script-src", "style-src"]);
  });
});

describe("content security policy per environment", () => {
  async function resolveCspFor(nodeEnv: string) {
    vi.stubEnv("NODE_ENV", nodeEnv);
    vi.resetModules();

    const { default: config } = await import("@/next.config");
    const rules = await config.headers!();
    const csp = rules[0].headers.find(
      ({ key }) => key === "Content-Security-Policy",
    );

    if (!csp) {
      throw new Error("Content-Security-Policy header is not configured");
    }
    return parseCsp(csp.value);
  }

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("allows unsafe-eval for scripts in development, which React needs for debugging", async () => {
    const csp = await resolveCspFor("development");

    expect(csp.get("script-src")).toContain("'unsafe-eval'");
  });

  it("confines unsafe-eval to script-src in development", async () => {
    const csp = await resolveCspFor("development");

    const directivesAllowingEval = [...csp.entries()]
      .filter(([, sources]) => sources.includes("'unsafe-eval'"))
      .map(([name]) => name);

    expect(directivesAllowingEval).toEqual(["script-src"]);
  });

  it("never allows unsafe-eval in production", async () => {
    const csp = await resolveCspFor("production");

    for (const sources of csp.values()) {
      expect(sources).not.toContain("'unsafe-eval'");
    }
  });
});
