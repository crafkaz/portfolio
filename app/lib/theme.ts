import { THEME_LIGHT, THEME_DARK } from "../constants/theme";
import { Theme, ThemeConfig } from "../types";

export function createThemeConfig(
  theme: Theme = THEME_LIGHT,
  mounted: boolean = true,
): ThemeConfig {
  const safeTheme = mounted && theme ? theme : THEME_LIGHT;
  const isDark = safeTheme === THEME_DARK;

  return {
    bgColor: isDark ? "#0f1515" : "#fafafa",
    cardBg: isDark ? "#151d1d" : "#ffffff",
    subtleBg: isDark ? "rgba(179, 205, 204, 0.07)" : "rgba(0, 0, 0, 0.04)",
    tagBg: isDark ? "rgba(159, 201, 196, 0.08)" : "rgba(179, 205, 204, 0.22)",
    borderColor: isDark ? "#273333" : "#e4e4e7",
    textColor: isDark ? "#e8eeed" : "#18181b",
    mutedColor: isDark ? "#adbbb9" : "#52525b",
    accentColor: isDark ? "#9fc9c4" : "#0c5d56",
    navBg: isDark ? "rgba(15, 21, 21, 0.8)" : "rgba(250, 250, 250, 0.8)",
    gridDot: isDark ? "rgba(179, 205, 204, 0.05)" : "rgba(9, 9, 11, 0.08)",
    glow: isDark ? "rgba(159, 201, 196, 0.08)" : "rgba(20, 184, 166, 0.16)",
  };
}
