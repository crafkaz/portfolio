import { Box, Flex, Grid } from "@chakra-ui/react";
import { personalInfo } from "../config/profile";
import { useAppTheme } from "../context/ThemeContext";
import { Section } from "./shared/Section";

export function StackSection() {
  const { themeConfig } = useAppTheme();
  const { tagBg, textColor, mutedColor } = themeConfig;
  const { stack } = personalInfo;

  return (
    <Section id="stack" index={2} title={stack.title}>
      <Grid as="dl" rowGap={{ base: 6, sm: 5 }}>
        {stack.groups.map((group) => (
          <Grid
            key={group.title}
            templateColumns={{ base: "1fr", sm: "9.5rem 1fr" }}
            gap={{ base: 2.5, sm: 4 }}
          >
            <Box
              as="dt"
              pt={{ sm: 1.5 }}
              fontFamily="mono"
              fontSize="xs"
              letterSpacing="wider"
              textTransform="uppercase"
              color={mutedColor}
            >
              {group.title}
            </Box>
            <Box as="dd">
              <Flex as="ul" listStyleType="none" wrap="wrap" gap={1.5}>
                {group.items.map((tech) => (
                  <Box
                    as="li"
                    key={tech}
                    px={2.5}
                    py={1}
                    fontSize="sm"
                    lineHeight="short"
                    color={textColor}
                    bg={tagBg}
                    borderRadius="md"
                  >
                    {tech}
                  </Box>
                ))}
              </Flex>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
