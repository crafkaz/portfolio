import { fireEvent, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProfilePhoto } from "@/app/components/shared/ProfilePhoto";
import { personalInfo } from "@/app/config/profile";

import { renderWithProviders } from "../helpers/renderWithProviders";

const { photoViewer } = personalInfo;

describe("ProfilePhoto", () => {
  it("opens a larger photo in a dialog named after the owner", async () => {
    renderWithProviders(<ProfilePhoto />);

    fireEvent.click(screen.getByRole("button", { name: photoViewer.openLabel }));

    expect(
      await screen.findByRole("dialog", { name: personalInfo.name }),
    ).toBeInTheDocument();
  });

  it("closes the dialog from its close button", async () => {
    renderWithProviders(<ProfilePhoto />);

    fireEvent.click(screen.getByRole("button", { name: photoViewer.openLabel }));
    fireEvent.click(
      await screen.findByRole("button", { name: photoViewer.closeLabel }),
    );

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });
});
