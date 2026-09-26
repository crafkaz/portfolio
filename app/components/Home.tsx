import { Box, Container } from "@chakra-ui/react";
import { Navigation } from "./shared/Navigation";
import { Footer } from "./shared/Footer";
import { HeroSection } from "./HeroSection";
import { ExperienceSection } from "./ExperienceSection";
import { StackSection } from "./StackSection";
import { HobbySection } from "./HobbySection";
import { SocialsSection } from "./SocialsSection";
import { useAppTheme } from "../context/ThemeContext";

const fadeDown = "linear-gradient(to bottom, black 20%, transparent 100%)";

function backdrop(glow: string, gridDot: string) {
  return [
    `radial-gradient(ellipse 60% 70% at 50% 0%, ${glow}, transparent 70%)`,
    `radial-gradient(${gridDot} 1px, transparent 1px)`,
  ].join(", ");
}

export function Home() {
  const { themeConfig } = useAppTheme();
  const { bgColor, textColor, gridDot, glow } = themeConfig;

  return (
    <Box
      id="top"
      position="relative"
      minH="100vh"
      bg={bgColor}
      color={textColor}
    >
      <Box
        aria-hidden
        position="absolute"
        insetX={0}
        top={0}
        h={{ base: "480px", md: "620px" }}
        pointerEvents="none"
        backgroundImage={backdrop(glow, gridDot)}
        backgroundSize="100% 100%, 22px 22px"
        css={{ maskImage: fadeDown, WebkitMaskImage: fadeDown }}
      />
      <Navigation />
      <Container
        as="main"
        position="relative"
        maxW="3xl"
        px={{ base: 5, md: 8 }}
      >
        <HeroSection />
        <ExperienceSection />
        <StackSection />
        <HobbySection />
        <SocialsSection />
      </Container>
      <Container position="relative" maxW="3xl" px={{ base: 5, md: 8 }}>
        <Footer />
      </Container>
    </Box>
  );
}
