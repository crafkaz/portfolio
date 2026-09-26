import { ThemeConfig } from "../types";

const pair = (light: string, dark: string) => `light-dark(${light}, ${dark})`;

export const themeConfig: ThemeConfig = {
  bgColor: pair("#fafafa", "#0f1515"),
  cardBg: pair("#ffffff", "#151d1d"),
  subtleBg: pair("rgba(0, 0, 0, 0.04)", "rgba(179, 205, 204, 0.07)"),
  tagBg: pair("rgba(179, 205, 204, 0.22)", "rgba(159, 201, 196, 0.08)"),
  borderColor: pair("#e4e4e7", "#273333"),
  textColor: pair("#18181b", "#e8eeed"),
  mutedColor: pair("#52525b", "#adbbb9"),
  accentColor: pair("#0c5d56", "#9fc9c4"),
  navBg: pair("rgba(250, 250, 250, 0.8)", "rgba(15, 21, 21, 0.8)"),
  gridDot: pair("rgba(9, 9, 11, 0.08)", "rgba(179, 205, 204, 0.05)"),
  glow: pair("rgba(20, 184, 166, 0.16)", "rgba(159, 201, 196, 0.08)"),
};
