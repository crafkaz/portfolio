import { THEME_LIGHT, THEME_DARK } from "../constants/theme";
import { Theme, ThemeConfig } from "../types";

export function createThemeConfig(theme: Theme = THEME_LIGHT): ThemeConfig {
  const isDark = theme === THEME_DARK;

  return {
    bgColor: isDark ? "gray.900" : "white",
    cardBg: isDark ? "whiteAlpha.50" : "white",
    borderColor: isDark ? "whiteAlpha.200" : "gray.200",
    textColor: isDark ? "whiteAlpha.900" : "gray.800",
    mutedColor: isDark ? "whiteAlpha.700" : "gray.600",
    accentColor: isDark ? "teal.300" : "teal.500",
    navBg: isDark ? "blackAlpha.300" : "whiteAlpha.800",
  };
}
