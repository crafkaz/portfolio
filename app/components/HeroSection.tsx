import { Box, Heading, Text, Flex, Avatar } from "@chakra-ui/react";
import { personalInfo } from "../config/profile";
import { useAppTheme } from "../context/ThemeContext";

export function HeroSection() {
  const { themeConfig } = useAppTheme();
  const { cardBg, borderColor, textColor, mutedColor, accentColor } =
    themeConfig;

  return (
    <Box
      borderRadius="2xl"
      mb={8}
      p={8}
      bg={cardBg}
      backdropFilter="blur(10px)"
      boxShadow="xl"
      border="1px solid"
      borderColor={borderColor}
      position="relative"
    >
      <Flex
        align="center"
        justify="space-between"
        direction={{ base: "column-reverse", md: "row" }}
        gap={6}
        position="relative"
      >
        <Box flex="1">
          <Text
            fontSize="sm"
            color={accentColor}
            fontWeight="bold"
            letterSpacing="wider"
            textTransform="uppercase"
            mb={2}
          >
            {personalInfo.intro}
          </Text>
          <Heading
            as="h1"
            size="2xl"
            mb={3}
            color={textColor}
            fontWeight="extrabold"
          >
            {personalInfo.name}
          </Heading>
          <Text color={mutedColor} fontSize="lg">
            {personalInfo.heroSubtitle}
          </Text>
        </Box>
        <Box
          p={2}
          borderRadius="full"
          bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          boxShadow="0 5px 20px rgba(102, 126, 234, 0.2)"
        >
          <Avatar.Root size="2xl">
            <Avatar.Image src="/images/kazuki.JPG" alt="Kazuki Nagasawa" />
            <Avatar.Fallback
              name="Kazuki Nagasawa"
              bg="transparent"
              color={textColor}
              fontSize="3xl"
              fontWeight="bold"
            />
          </Avatar.Root>
        </Box>
      </Flex>
    </Box>
  );
}
