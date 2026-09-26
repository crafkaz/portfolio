import { Box, Text, Link, Flex, VisuallyHidden } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";
import { SiZenn } from "react-icons/si";
import NextLink from "next/link";
import { personalInfo } from "../config/profile";
import { useAppTheme } from "../context/ThemeContext";
import { Section } from "./shared/Section";

const platformIcons: Record<string, IconType> = {
  twitter: FaXTwitter,
  github: IoLogoGithub,
  zenn: SiZenn,
};

export function SocialsSection() {
  const { themeConfig } = useAppTheme();
  const { cardBg, subtleBg, borderColor, textColor, mutedColor, accentColor } =
    themeConfig;

  return (
    <Section id="socials" index={4} title={personalInfo.socials.title}>
      <Box
        as="ul"
        listStyleType="none"
        bg={cardBg}
        border="1px solid"
        borderColor={borderColor}
        borderRadius="xl"
        overflow="hidden"
      >
        {personalInfo.socials.items.map((social, index) => {
          const Icon = platformIcons[social.platform];

          return (
            <Box
              as="li"
              key={social.platform}
              borderTop={index === 0 ? undefined : "1px solid"}
              borderColor={borderColor}
            >
              <Link
                as={NextLink}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                display="flex"
                alignItems="center"
                gap={3.5}
                px={{ base: 4, md: 5 }}
                py={4}
                color={textColor}
                _hover={{ textDecoration: "none", bg: subtleBg }}
                _focusVisible={{
                  outline: "2px solid",
                  outlineColor: accentColor,
                  outlineOffset: "-2px",
                }}
                transition="background 0.15s"
              >
                <Flex
                  boxSize={9}
                  flexShrink={0}
                  align="center"
                  justify="center"
                  borderRadius="lg"
                  bg={subtleBg}
                >
                  {Icon && <Icon aria-hidden size="18" />}
                </Flex>
                <Box minW={0}>
                  <Text fontWeight="semibold" lineHeight="short">
                    {social.label}
                  </Text>
                  <Text
                    fontFamily="mono"
                    fontSize="xs"
                    color={mutedColor}
                    lineHeight="short"
                    mt={0.5}
                  >
                    {social.username}
                  </Text>
                </Box>
                <VisuallyHidden>
                  {personalInfo.socials.newTabLabel}
                </VisuallyHidden>
                <Box
                  as="span"
                  ms="auto"
                  color={mutedColor}
                  fontSize="lg"
                  transition="transform 0.2s, color 0.2s"
                  _groupHover={{
                    color: accentColor,
                    transform: "translate(2px, -2px)",
                  }}
                >
                  <LuArrowUpRight aria-hidden />
                </Box>
              </Link>
            </Box>
          );
        })}
      </Box>
    </Section>
  );
}
