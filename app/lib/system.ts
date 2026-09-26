import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const sansStack =
  "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif";
const monoStack =
  "var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, monospace";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: sansStack },
        body: { value: sansStack },
        mono: { value: monoStack },
      },
    },
    keyframes: {
      rise: {
        from: { opacity: "0", transform: "translateY(12px)" },
        to: { opacity: "1", transform: "translateY(0)" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
