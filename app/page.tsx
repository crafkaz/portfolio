"use client";

import { Home } from "./components/Home";
import { AppThemeProvider } from "./context/ThemeContext";

export default function HomePage() {
  return (
    <AppThemeProvider>
      <Home />
    </AppThemeProvider>
  );
}
