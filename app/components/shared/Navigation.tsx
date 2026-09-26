import {
  Box,
  Container,
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
import { getActualTheme } from "../../lib/themeUtils";

const sectionLinks = [
  { href: "#experience", label: personalInfo.experience.title },
  { href: "#stack", label: personalInfo.stack.title },
  { href: "#socials", label: personalInfo.socials.title },
];

export function Navigation() {
  const { themeConfig, mounted, setTheme, resolvedTheme } = useAppTheme();
  const { borderColor, subtleBg, textColor, mutedColor, accentColor, navBg } =
    themeConfig;
  const actualTheme = getActualTheme(mounted, resolvedTheme);

  const navLinkStyle = {
    display: "flex",
    alignItems: "center",
    gap: 1.5,
    px: 3,
    h: 8,
    borderRadius: "md",
    fontSize: "sm",
    color: mutedColor,
    transition: "all 0.15s",
    _hover: { color: textColor, bg: subtleBg, textDecoration: "none" },
  } as const;

  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex={10}
      bg={navBg}
      backdropFilter="saturate(180%) blur(12px)"
      borderBottom="1px solid"
      borderColor={borderColor}
    >
      <Container maxW="3xl" px={{ base: 5, md: 8 }}>
        <Flex h={14} justify="space-between" align="center">
          <Link
            href="#top"
            display="flex"
            alignItems="center"
            gap={2}
            fontSize="sm"
            fontWeight="semibold"
            color={textColor}
            _hover={{ textDecoration: "none" }}
          >
            <Box
              boxSize={2}
              borderRadius="full"
              bg={accentColor}
              boxShadow={`0 0 0 3px ${subtleBg}`}
            />
            {personalInfo.name}
          </Link>
          <HStack gap={1}>
            <HStack
              as="ul"
              listStyleType="none"
              gap={1}
              display={{ base: "none", md: "flex" }}
            >
              {sectionLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} {...navLinkStyle}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </HStack>
            <Box
              display={{ base: "none", md: "block" }}
              w="1px"
              h={4}
              mx={1}
              bg={borderColor}
            />
            <Link
              as={NextLink}
              href={personalInfo.sourceRepo}
              target="_blank"
              rel="noopener noreferrer"
              {...navLinkStyle}
            >
              <IoLogoGithub aria-hidden />
              {personalInfo.navigation.sourceLabel}
            </Link>
            <IconButton
              aria-label={personalInfo.navigation.themeToggleLabel}
              onClick={() => {
                const isDark = actualTheme === THEME_DARK;
                setTheme(isDark ? THEME_LIGHT : THEME_DARK);
              }}
              size="sm"
              variant="ghost"
              color={mutedColor}
              _hover={{ color: textColor, bg: subtleBg }}
            >
              {actualTheme === THEME_DARK ? <IoSunnyOutline /> : <IoMoon />}
            </IconButton>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
