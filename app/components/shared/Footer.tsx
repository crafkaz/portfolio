import { Flex, Link, Text } from "@chakra-ui/react";
import { LuArrowUp } from "react-icons/lu";
import { personalInfo } from "../../config/profile";
import { useAppTheme } from "../../context/ThemeContext";

export function Footer() {
  const { themeConfig } = useAppTheme();
  const { borderColor, textColor, mutedColor } = themeConfig;

  return (
    <Flex
      as="footer"
      direction={{ base: "column", sm: "row" }}
      justify="space-between"
      align={{ base: "start", sm: "center" }}
      gap={4}
      py={10}
      borderTop="1px solid"
      borderColor={borderColor}
    >
      <Text fontSize="sm" color={mutedColor}>
        © {new Date().getFullYear()} {personalInfo.copyrightHolder}. All Rights
        Reserved.
      </Text>
      <Link
        href="#top"
        display="inline-flex"
        alignItems="center"
        gap={1.5}
        fontFamily="mono"
        fontSize="xs"
        color={mutedColor}
        _hover={{ color: textColor, textDecoration: "none" }}
      >
        {personalInfo.navigation.backToTopLabel}
        <LuArrowUp aria-hidden />
      </Link>
    </Flex>
  );
}
