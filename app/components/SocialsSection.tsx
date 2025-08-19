import {
  Box,
  Heading,
  Text,
  Stack,
  HStack,
  Link,
  Flex,
} from "@chakra-ui/react";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io5";
import NextLink from "next/link";
import { personalInfo } from "../config/profile";
import { useAppTheme } from "../context/ThemeContext";

export function SocialsSection() {
  const { themeConfig } = useAppTheme();
  const { cardBg, borderColor, textColor, accentColor } = themeConfig;

  return (
    <Box as="section" mb={12}>
      <Flex align="center" mb={6}>
        <Heading
          as="h2"
          size="lg"
          borderBottom="3px solid"
          borderColor={accentColor}
          pb={2}
          pr={4}
          color={textColor}
        >
          {personalInfo.socials.title}
        </Heading>
        <Box flex="1" height="1px" bg={borderColor} ml={4} />
      </Flex>

      <Stack gap={3}>
        {personalInfo.socials.items.map((social) => (
          <Link
            key={social.platform}
            as={NextLink}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ textDecoration: "none" }}
          >
            <Box
              p={3}
              borderRadius="lg"
              bg={cardBg}
              border="1px solid"
              borderColor={borderColor}
              _hover={{
                transform: "translateX(4px)",
                borderColor: accentColor,
              }}
              transition="all 0.2s"
            >
              <HStack>
                {social.platform === "twitter" ? (
                  <IoLogoTwitter color="#1DA1F2" size="20" />
                ) : (
                  <IoLogoGithub size="20" />
                )}
                <Text fontWeight="bold" color={textColor}>
                  {social.username}
                </Text>
              </HStack>
            </Box>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}
