import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import {
  colorSchemeScript,
  setColorScheme,
  useColorScheme,
} from "@/app/lib/colorScheme";

const root = () => document.documentElement;

describe("color scheme", () => {
  afterEach(() => {
    root().className = "";
    root().style.colorScheme = "";
    localStorage.clear();
  });

  it("marks the root element with the chosen scheme", () => {
    setColorScheme("dark");

    expect(root()).toHaveClass("dark");
    expect(root()).not.toHaveClass("light");
    expect(root().style.colorScheme).toBe("dark");
  });

  it("remembers the choice for the next visit", () => {
    setColorScheme("light");

    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("updates components reading the scheme when it changes", () => {
    const { result } = renderHook(() => useColorScheme());
    expect(result.current).toBe("light");

    act(() => setColorScheme("dark"));

    expect(result.current).toBe("dark");
  });
});

describe("color scheme script", () => {
  const runScript = () => new Function(colorSchemeScript)();

  afterEach(() => {
    root().className = "";
    root().style.colorScheme = "";
    localStorage.clear();
  });

  it("applies a saved choice before the page paints", () => {
    localStorage.setItem("theme", "dark");

    runScript();

    expect(root()).toHaveClass("dark");
    expect(root().style.colorScheme).toBe("dark");
  });

  it("leaves the colours to the OS when nothing is saved", () => {
    runScript();

    expect(root()).toHaveClass("light");
    expect(root().style.colorScheme).toBe("");
  });
});
