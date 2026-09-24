import { screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SocialsSection } from "@/app/components/SocialsSection";
import { Navigation } from "@/app/components/shared/Navigation";
import { personalInfo } from "@/app/config/profile";

import { renderWithProviders } from "../helpers/renderWithProviders";

const expectedPlatformNames: Record<string, string> = {
  twitter: "X",
  github: "GitHub",
};

function socialLinks() {
  return screen.getAllByRole("link");
}

function linkFor(url: string) {
  const link = socialLinks().find(
    (anchor) => anchor.getAttribute("href") === url,
  );

  if (!link) throw new Error(`no link rendered for ${url}`);

  return link;
}

function expectDecorativeSvgs(link: HTMLElement) {
  const svgs = Array.from(link.querySelectorAll("svg"));

  for (const svg of svgs) {
    expect(svg).toHaveAttribute("aria-hidden", "true");
  }
}

describe("SocialsSection accessible names", () => {
  it.each(personalInfo.socials.items)(
    "names the $platform link after its platform",
    (social) => {
      renderWithProviders(<SocialsSection />);

      const platformName = expectedPlatformNames[social.platform];

      expect(platformName, `expected name for ${social.platform}`).toBeDefined();
      expect(linkFor(social.url)).toHaveAccessibleName(
        expect.stringMatching(new RegExp(`\\b${platformName}\\b`)),
      );
    },
  );

  it.each(personalInfo.socials.items)(
    "keeps the visible username in the $platform link name",
    (social) => {
      renderWithProviders(<SocialsSection />);

      expect(linkFor(social.url)).toHaveAccessibleName(
        expect.stringContaining(social.username),
      );
    },
  );

  it.each(personalInfo.socials.items)(
    "announces that the $platform link opens in a new tab",
    (social) => {
      renderWithProviders(<SocialsSection />);

      expect(linkFor(social.url)).toHaveAccessibleName(
        expect.stringMatching(/new tab/i),
      );
    },
  );

  it("does not announce the logo as a separate image", () => {
    renderWithProviders(<SocialsSection />);

    for (const link of socialLinks()) {
      expect(within(link).queryByRole("img")).toBeNull();
    }
  });

  it("hides decorative icons from assistive technologies", () => {
    renderWithProviders(<SocialsSection />);

    for (const link of socialLinks()) {
      expectDecorativeSvgs(link);
    }
  });
});

describe("Navigation source link", () => {
  it("hides the decorative GitHub icon from assistive technologies", () => {
    renderWithProviders(<Navigation />);

    expectDecorativeSvgs(linkFor(personalInfo.sourceRepo));
  });
});
