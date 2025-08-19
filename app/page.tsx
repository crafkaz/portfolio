"use client";

import { Box, Container } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { createThemeConfig } from "./lib/theme";
import { Theme } from "./types";
import { Navigation } from "./components/shared/Navigation";
import { Footer } from "./components/shared/Footer";
import { HeroSection } from "./components/HeroSection";
import { WorkSection } from "./components/WorkSection";
import { HobbySection } from "./components/HobbySection";
import { SocialsSection } from "./components/SocialsSection";

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeConfig = createThemeConfig(theme as Theme);
  const { bgColor } = themeConfig;

  if (!mounted) {
    return null;
  }

  return (
    <Box minH="100vh" bg={bgColor}>
      <Navigation themeConfig={themeConfig} />
      <Container maxW="container.md" py={8}>
        <HeroSection themeConfig={themeConfig} />
        <WorkSection themeConfig={themeConfig} />
        <HobbySection themeConfig={themeConfig} />
        <SocialsSection themeConfig={themeConfig} />
        <Footer themeConfig={themeConfig} />
      </Container>
    </Box>
  );
}
