import {
  Box,
  Heading,
  Text,
  Stack,
  HStack,
  VStack,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { ThemeConfig } from "../types";
import { personalInfo } from "../lib/config";

interface WorkSectionProps {
  themeConfig: ThemeConfig;
}

export function WorkSection({ themeConfig }: WorkSectionProps) {
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
          {personalInfo.work.title}
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
        <VStack align="start" gap={4} color={textColor}>
          <Text fontSize="lg">{personalInfo.work.description}</Text>
          <Text color={mutedColor}>{personalInfo.work.experience}</Text>

          <Box w="full" h="1px" bg={borderColor} my={4} />

          <Box w="full">
            <Heading as="h3" size="sm" mb={4} color={accentColor}>
              {personalInfo.work.techStacksTitle}
            </Heading>
            <Stack gap={3}>
              <Box>
                <Text fontSize="sm" fontWeight="bold" mb={2}>
                  {personalInfo.work.techStacks.backend.title}
                </Text>
                <HStack gap={2} flexWrap="wrap">
                  {personalInfo.work.techStacks.backend.items.map((tech) => (
                    <Badge
                      key={tech}
                      bg="purple.100"
                      color="purple.800"
                      px={3}
                      py={1}
                      borderRadius="full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </HStack>
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="bold" mb={2}>
                  {personalInfo.work.techStacks.frontend.title}
                </Text>
                <HStack gap={2} flexWrap="wrap">
                  {personalInfo.work.techStacks.frontend.items.map((tech) => (
                    <Badge
                      key={tech}
                      bg="teal.100"
                      color="teal.800"
                      px={3}
                      py={1}
                      borderRadius="full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </HStack>
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="bold" mb={2}>
                  {personalInfo.work.techStacks.tools.title}
                </Text>
                <HStack gap={2} flexWrap="wrap">
                  {personalInfo.work.techStacks.tools.items.map((tech) => (
                    <Badge
                      key={tech}
                      bg="blue.100"
                      color="blue.800"
                      px={3}
                      py={1}
                      borderRadius="full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </HStack>
              </Box>
            </Stack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}