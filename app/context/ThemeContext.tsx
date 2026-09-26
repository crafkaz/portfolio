"use client";

import { createContext, useContext } from "react";
import {
  setColorScheme,
  useColorScheme,
  type ColorScheme,
} from "../lib/colorScheme";
import { themeConfig } from "../lib/theme";
import { ThemeConfig } from "../types";

type ThemeContextType = {
  themeConfig: ThemeConfig;
  mounted: boolean;
  resolvedTheme: ColorScheme | undefined;
  setTheme: (theme: ColorScheme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const scheme = useColorScheme();
  const mounted = scheme !== null;

  return (
    <ThemeContext.Provider
      value={{
        themeConfig,
        mounted,
        resolvedTheme: scheme ?? undefined,
        setTheme: setColorScheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useAppTheme must be used within an AppThemeProvider");
  }
  return context;
}
