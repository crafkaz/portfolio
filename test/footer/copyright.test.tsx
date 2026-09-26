import { screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Footer } from "@/app/components/shared/Footer";
import { personalInfo } from "@/app/config/profile";

import { renderWithProviders } from "../helpers/renderWithProviders";

describe("Footer copyright", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it.each([2026, 2031])("shows the current year (%i)", (year) => {
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(new Date(year, 5, 1));

    renderWithProviders(<Footer />);

    expect(screen.getByRole("contentinfo")).toHaveTextContent(
      `© ${year} ${personalInfo.copyrightHolder}. All Rights Reserved.`,
    );
  });
});
