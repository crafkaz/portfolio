import { Box, Container } from "@chakra-ui/react";
import { Navigation } from "./shared/Navigation";
import { Footer } from "./shared/Footer";
import { HeroSection } from "./HeroSection";
import { WorkSection } from "./WorkSection";
import { HobbySection } from "./HobbySection";
import { SocialsSection } from "./SocialsSection";
import { useAppTheme } from "../context/ThemeContext";

export function Home() {
  const { themeConfig } = useAppTheme();
  const { bgColor } = themeConfig;

  return (
    <Box minH="100vh" bg={bgColor}>
      <Navigation />
      <Container maxW="container.md" py={8}>
        <HeroSection />
        <WorkSection />
        <HobbySection />
        <SocialsSection />
        <Footer />
      </Container>
    </Box>
  );
}
