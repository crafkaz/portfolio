import { THEME_LIGHT, THEME_DARK } from '../constants/theme';

export type Theme = typeof THEME_LIGHT | typeof THEME_DARK;

export interface ThemeConfig {
  bgColor: string;
  cardBg: string;
  borderColor: string;
  textColor: string;
  mutedColor: string;
  accentColor: string;
  navBg: string;
}