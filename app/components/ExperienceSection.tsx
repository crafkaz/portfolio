import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { personalInfo } from "../config/profile";
import { useAppTheme } from "../context/ThemeContext";
import { Section } from "./shared/Section";

export function ExperienceSection() {
  const { themeConfig } = useAppTheme();
  const { bgColor, borderColor, textColor, mutedColor, accentColor, glow } =
    themeConfig;
  const { experience } = personalInfo;

  return (
    <Section id="experience" index={1} title={experience.title}>
      <Box as="ol" listStyleType="none">
        {experience.items.map((item, index) => {
          const isCurrent = index === 0;
          const isLast = index === experience.items.length - 1;

          return (
            <Grid
              as="li"
              key={item.period}
              templateColumns="0.75rem 1fr"
              columnGap={{ base: 4, md: 5 }}
            >
              <Flex direction="column" align="center">
                <Box
                  mt="0.35rem"
                  boxSize={3}
                  flexShrink={0}
                  borderRadius="full"
                  border="2px solid"
                  borderColor={isCurrent ? accentColor : borderColor}
                  bg={isCurrent ? accentColor : bgColor}
                  boxShadow={isCurrent ? `0 0 0 4px ${glow}` : undefined}
                />
                {!isLast && <Box flex="1" w="1px" mt={2} bg={borderColor} />}
              </Flex>
              <Box pb={isLast ? 0 : 7}>
                <Text
                  fontFamily="mono"
                  fontSize="xs"
                  color={isCurrent ? accentColor : mutedColor}
                >
                  {item.period}
                </Text>
                <Text mt={1.5} fontWeight="semibold" color={textColor}>
                  {item.role}
                  <Text as="span" fontWeight="normal" color={mutedColor}>
                    {" "}
                    · {item.organization}
                  </Text>
                </Text>
                {item.summary && (
                  <Text mt={1} fontSize="sm" color={mutedColor}>
                    {item.summary}
                  </Text>
                )}
              </Box>
            </Grid>
          );
        })}
      </Box>
    </Section>
  );
}
