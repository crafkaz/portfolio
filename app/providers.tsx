"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorSchemeScript } from "./components/shared/ColorSchemeScript";
import { system } from "./lib/system";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ColorSchemeScript />
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </>
  );
}
