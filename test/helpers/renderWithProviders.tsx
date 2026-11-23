import { ChakraProvider } from "@chakra-ui/react";
import { render } from "@testing-library/react";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { ImageConfigContext } from "next/dist/shared/lib/image-config-context.shared-runtime";
import type { ReactElement, ReactNode } from "react";

import { AppThemeProvider } from "@/app/context/ThemeContext";
import { system } from "@/app/lib/system";
import nextConfig from "@/next.config";

const imageConfig = { ...imageConfigDefault, ...nextConfig.images };

function Providers({ children }: { children: ReactNode }) {
  return (
    <ImageConfigContext.Provider value={imageConfig}>
      <ChakraProvider value={system}>
        <AppThemeProvider>{children}</AppThemeProvider>
      </ChakraProvider>
    </ImageConfigContext.Provider>
  );
}

export function renderWithProviders(ui: ReactElement) {
  return render(ui, { wrapper: Providers });
}
