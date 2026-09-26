import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { useId, type ReactNode } from "react";
import { useAppTheme } from "../../context/ThemeContext";
import { riseIn } from "../../lib/motion";

type SectionProps = {
  id: string;
  index: number;
  title: string;
  children: ReactNode;
};

export function Section({ id, index, title, children }: SectionProps) {
  const { themeConfig } = useAppTheme();
  const { borderColor, mutedColor, accentColor } = themeConfig;
  const headingId = useId();

  return (
    <Grid
      as="section"
      id={id}
      aria-labelledby={headingId}
      templateColumns={{ base: "1fr", md: "9rem 1fr" }}
      gap={{ base: 5, md: 8 }}
      py={{ base: 10, md: 12 }}
      borderTop="1px solid"
      borderColor={borderColor}
      scrollMarginTop="3.5rem"
      {...riseIn(240 + index * 90)}
    >
      <Flex
        direction={{ base: "row", md: "column" }}
        align={{ base: "baseline", md: "start" }}
        gap={{ base: 3, md: 1.5 }}
        position={{ md: "sticky" }}
        top={{ md: 24 }}
        alignSelf="start"
      >
        <Text
          aria-hidden
          fontFamily="mono"
          fontSize="xs"
          color={accentColor}
        >
          {String(index).padStart(2, "0")}
        </Text>
        <Heading
          as="h2"
          id={headingId}
          fontFamily="mono"
          fontSize="xs"
          fontWeight="medium"
          letterSpacing="widest"
          textTransform="uppercase"
          color={mutedColor}
        >
          {title}
        </Heading>
      </Flex>
      <Box minW={0}>{children}</Box>
    </Grid>
  );
}
