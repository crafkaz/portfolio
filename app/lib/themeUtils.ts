import { THEME_LIGHT } from "../constants/theme";

export function getActualTheme(
  mounted: boolean,
  resolvedTheme: string | undefined,
): string {
  if (!mounted) return THEME_LIGHT;

  return resolvedTheme || THEME_LIGHT;
}
