import {
  Box,
  Container,
  Heading,
  HStack,
  Link,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { IoLogoGithub, IoMoon, IoSunnyOutline } from "react-icons/io5";
import NextLink from "next/link";
import { personalInfo } from "../../config/profile";
import { THEME_DARK, THEME_LIGHT } from "../../constants/theme";
import { useAppTheme } from "../../context/ThemeContext";

export function Navigation() {
  const { themeConfig, mounted, setTheme, resolvedTheme } = useAppTheme();
  const { borderColor, textColor, mutedColor, accentColor, navBg } =
    themeConfig;

  return (
    <Box
      as="nav"
      py={4}
      px={6}
      backdropFilter="blur(10px)"
      bg={navBg}
      position="sticky"
      top={0}
      zIndex={10}
      borderBottom="1px solid"
      borderColor={borderColor}
    >
      <Container maxW="container.md">
        <Flex justify="space-between" align="center">
          <Heading size="md" fontWeight="bold" color={textColor}>
            {personalInfo.name}
          </Heading>
          <HStack gap={6}>
            <Link
              as={NextLink}
              href={personalInfo.sourceRepo}
              target="_blank"
              rel="noopener noreferrer"
              display="flex"
              alignItems="center"
              color={mutedColor}
              _hover={{
                color: accentColor,
                transform: "translateY(-2px)",
                transition: "all 0.2s",
              }}
            >
              <IoLogoGithub style={{ marginRight: "4px" }} />
              {personalInfo.navigation.sourceLabel}
            </Link>
            <IconButton
              aria-label={personalInfo.navigation.themeToggleLabel}
              onClick={() => {
                const isDark = mounted ? resolvedTheme === THEME_DARK : false;
                setTheme(isDark ? THEME_LIGHT : THEME_DARK);
              }}
              size="sm"
              variant="ghost"
              color={accentColor}
              _hover={{
                bg:
                  mounted && resolvedTheme === THEME_DARK
                    ? "whiteAlpha.200"
                    : "blackAlpha.100",
                transform: "rotate(180deg)",
              }}
              transition="all 0.3s"
            >
              {mounted && resolvedTheme === THEME_DARK ? (
                <IoSunnyOutline />
              ) : (
                <IoMoon />
              )}
            </IconButton>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
