import {
  Box,
  Heading,
  Text,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { IoMusicalNotes, IoHeart } from "react-icons/io5";
import { ThemeConfig } from "../types";
import { personalInfo } from "../lib/config";

interface HobbySectionProps {
  themeConfig: ThemeConfig;
}

export function HobbySection({ themeConfig }: HobbySectionProps) {
  const { cardBg, borderColor, textColor, mutedColor, accentColor } = themeConfig;

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
          {personalInfo.hobbies.title}
        </Heading>
        <Box flex="1" height="1px" bg={borderColor} ml={4} />
      </Flex>

      <Box
        p={6}
        borderRadius="xl"
        bg={cardBg}
        backdropFilter="blur(10px)"
        border="1px solid"
        borderColor={borderColor}
      >
        <HStack gap={6} flexWrap="wrap">
          {personalInfo.hobbies.items.map((hobby, index) => (
            <Box key={index}>
              <Box fontSize="2xl" mb={2} color={accentColor}>
                {index === 0 ? <IoMusicalNotes /> : <IoHeart />}
              </Box>
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                {hobby.title}
              </Text>
              <Text fontSize="sm" color={mutedColor}>
                {hobby.subtitle}
              </Text>
            </Box>
          ))}
        </HStack>
      </Box>
    </Box>
  );
}