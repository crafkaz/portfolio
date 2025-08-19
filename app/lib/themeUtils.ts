import {
  THEME_DARK,
  THEME_LIGHT,
  THEME_SYSTEM,
  COLORS,
} from "../constants/theme";

export function getActualTheme(
  mounted: boolean,
  theme: string | undefined,
  resolvedTheme: string | undefined,
): string {
  if (!mounted) return THEME_LIGHT;

  if (theme === THEME_SYSTEM) {
    const rootStyle = window.getComputedStyle(document.documentElement);
    const bgColor = rootStyle.backgroundColor;
    return bgColor === COLORS.GRAY_900_RGB ? THEME_DARK : THEME_LIGHT;
  }

  return resolvedTheme || THEME_LIGHT;
}
