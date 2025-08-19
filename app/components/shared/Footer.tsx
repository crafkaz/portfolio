import { Box, Text } from "@chakra-ui/react";
import { personalInfo } from "../../config/profile";
import { useAppTheme } from "../../context/ThemeContext";

export function Footer() {
  const { themeConfig } = useAppTheme();
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
