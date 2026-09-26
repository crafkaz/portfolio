import { Box, Grid } from "@chakra-ui/react";
import { personalInfo } from "../config/profile";
import { useAppTheme } from "../context/ThemeContext";
import { Section } from "./shared/Section";

export function HobbySection() {
  const { themeConfig } = useAppTheme();
  const { textColor, mutedColor } = themeConfig;

  return (
    <Section id="hobbies" index={3} title={personalInfo.hobbies.title}>
      <Grid as="dl" rowGap={{ base: 6, sm: 5 }}>
        {personalInfo.hobbies.items.map((hobby) => (
          <Grid
            key={hobby.title}
            templateColumns={{ base: "1fr", sm: "9.5rem 1fr" }}
            gap={{ base: 1.5, sm: 4 }}
            alignItems="baseline"
          >
            <Box
              as="dt"
              fontFamily="mono"
              fontSize="xs"
              letterSpacing="wider"
              textTransform="uppercase"
              color={mutedColor}
            >
              {hobby.title}
            </Box>
            <Box as="dd" fontSize="sm" color={textColor}>
              {hobby.subtitle}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
