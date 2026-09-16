import { describe, expect, it } from "vitest";

import { SocialsSection } from "@/app/components/SocialsSection";
import { Navigation } from "@/app/components/shared/Navigation";
import { personalInfo } from "@/app/config/profile";

import { renderWithProviders } from "../helpers/renderWithProviders";

function anchorsIn(container: HTMLElement) {
  return Array.from(container.querySelectorAll<HTMLAnchorElement>("a"));
}

function expectSafeBlankTargets(container: HTMLElement) {
  const blankTargets = anchorsIn(container).filter(
    (anchor) => anchor.getAttribute("target") === "_blank",
  );

  expect(blankTargets.length).toBeGreaterThan(0);

  for (const anchor of blankTargets) {
    const rel = (anchor.getAttribute("rel") ?? "").split(/\s+/);

    expect(rel, `rel on ${anchor.getAttribute("href")}`).toContain("noopener");
    expect(rel, `rel on ${anchor.getAttribute("href")}`).toContain(
      "noreferrer",
    );
  }
}

function expectNoScriptUrls(container: HTMLElement) {
  for (const anchor of anchorsIn(container)) {
    const href = anchor.getAttribute("href") ?? "";

    expect(href.trim().toLowerCase().startsWith("javascript:")).toBe(false);
    expect(href.trim().toLowerCase().startsWith("data:")).toBe(false);
  }
}

describe("Navigation external links", () => {
  it("opens the source repo link with noopener and noreferrer", () => {
    const { container } = renderWithProviders(<Navigation />);

    expectSafeBlankTargets(container);
  });

  it("renders no script-bearing hrefs", () => {
    const { container } = renderWithProviders(<Navigation />);

    expectNoScriptUrls(container);
  });
});

describe("SocialsSection external links", () => {
  it("opens every social link with noopener and noreferrer", () => {
    const { container } = renderWithProviders(<SocialsSection />);

    expectSafeBlankTargets(container);
  });

  it("renders one link per configured social account", () => {
    const { container } = renderWithProviders(<SocialsSection />);

    const hrefs = anchorsIn(container).map((anchor) =>
      anchor.getAttribute("href"),
    );

    for (const social of personalInfo.socials.items) {
      expect(hrefs).toContain(social.url);
    }
  });

  it("renders no script-bearing hrefs", () => {
    const { container } = renderWithProviders(<SocialsSection />);

    expectNoScriptUrls(container);
  });
});

describe("configured outbound URLs", () => {
  const outboundUrls = [
    ...personalInfo.socials.items.map((social) => social.url),
    personalInfo.sourceRepo,
  ];

  it.each(outboundUrls)("%s is served over https", (url) => {
    expect(new URL(url).protocol).toBe("https:");
  });
});
