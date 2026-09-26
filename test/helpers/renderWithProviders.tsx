import { ChakraProvider } from "@chakra-ui/react";
import { render } from "@testing-library/react";
import type { ReactElement, ReactNode } from "react";

import { AppThemeProvider } from "@/app/context/ThemeContext";
import { system } from "@/app/lib/system";

function Providers({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <AppThemeProvider>{children}</AppThemeProvider>
    </ChakraProvider>
  );
}

export function renderWithProviders(ui: ReactElement) {
  return render(ui, { wrapper: Providers });
}
