import { expect, test } from "@playwright/test";

import { personalInfo } from "../../app/config/profile";

test("closes the photo with Escape and restores focus to the trigger", async ({ page }) => {
  await page.goto("/");

  const trigger = page.getByRole("button", { name: personalInfo.photoViewer.openLabel });
  await trigger.press("Enter");

  const dialog = page.getByRole("dialog", { name: personalInfo.name });
  await expect(dialog).toBeVisible();

  await page.keyboard.press("Escape");

  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("keeps the selected theme after reloading", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");

  const root = page.locator("html");
  await expect(root).toContainClass("light");

  await page.getByRole("button", { name: personalInfo.navigation.themeToggleLabel }).click();
  await expect(root).toHaveCSS("color-scheme", "dark");

  await page.reload();

  await expect(root).toContainClass("dark");
  await expect(root).toHaveCSS("color-scheme", "dark");
});
