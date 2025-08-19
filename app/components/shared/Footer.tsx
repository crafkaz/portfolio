import { Box, Text } from "@chakra-ui/react";
import { ThemeConfig } from "../../types";
import { personalInfo } from "../../lib/config";

interface FooterProps {
  themeConfig: ThemeConfig;
}

export function Footer({ themeConfig }: FooterProps) {
  const { borderColor, mutedColor } = themeConfig;

  return (
    <Box
      as="footer"
      textAlign="center"
      mt={16}
      pt={8}
      borderTop="1px solid"
      borderColor={borderColor}
    >
      <Text fontSize="sm" color={mutedColor}>
        {personalInfo.copyright}
      </Text>
    </Box>
  );
}