"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  HStack,
  VStack,
  Link,
  IconButton,
  Flex,
  Avatar,
  Badge,
} from "@chakra-ui/react";
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoMoon,
  IoSunnyOutline,
  IoMusicalNotes,
  IoHeart,
} from "react-icons/io5";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // カラーテーマの定義
  const bgColor = theme === "dark" ? "gray.900" : "white";

  const cardBg = theme === "dark" ? "whiteAlpha.50" : "white";
  const borderColor = theme === "dark" ? "whiteAlpha.200" : "gray.200";
  const textColor = theme === "dark" ? "whiteAlpha.900" : "gray.800";
  const mutedColor = theme === "dark" ? "whiteAlpha.700" : "gray.600";
  const accentColor = theme === "dark" ? "teal.300" : "teal.500";
  const navBg = theme === "dark" ? "blackAlpha.300" : "whiteAlpha.800";

  if (!mounted) {
    return null;
  }

  return (
    <Box minH="100vh" bg={bgColor}>
      {/* Navigation */}
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
              Kazuki Nagasawa
            </Heading>
            <HStack gap={6}>
              <Link
                as={NextLink}
                href="https://github.com/18kazee/portfolio"
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
                Source
              </Link>
              <IconButton
                aria-label="Toggle color mode"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                size="sm"
                variant="ghost"
                color={accentColor}
                _hover={{
                  bg: theme === "dark" ? "whiteAlpha.200" : "blackAlpha.100",
                  transform: "rotate(180deg)",
                }}
                transition="all 0.3s"
              >
                {theme === "light" ? <IoMoon /> : <IoSunnyOutline />}
              </IconButton>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.md" py={8}>
        {/* Hero Section */}
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
                Hello, I&apos;m a developer based in Osaka!
              </Text>
              <Heading
                as="h1"
                size="2xl"
                mb={3}
                color={textColor}
                fontWeight="extrabold"
              >
                Kazuki Nagasawa
              </Heading>
              <Text color={mutedColor} fontSize="lg">
                Software Engineer / Drummer / Father
              </Text>
            </Box>
            <Box
              p={3}
              borderRadius="full"
              bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              boxShadow="0 10px 30px rgba(102, 126, 234, 0.3)"
            >
              <Avatar.Root size="2xl">
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

        {/* Work Section */}
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
              Work
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
              <Text fontSize="lg">大阪を拠点にWeb開発を行っています。</Text>
              <Text color={mutedColor}>
                企業での開発経験2年。Webアプリケーションの設計から開発、保守など全般担当。
              </Text>

              <Box w="full" h="1px" bg={borderColor} my={4} />

              <Box w="full">
                <Heading as="h3" size="sm" mb={4} color={accentColor}>
                  技術スタック
                </Heading>
                <Stack gap={3}>
                  <Box>
                    <Text fontSize="sm" fontWeight="bold" mb={2}>
                      Backend
                    </Text>
                    <HStack gap={2} flexWrap="wrap">
                      {[
                        "Laravel",
                        "Rails",
                        "Django",
                        "PHP",
                        "Ruby",
                        "Python",
                      ].map((tech) => (
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
                      Frontend
                    </Text>
                    <HStack gap={2} flexWrap="wrap">
                      {[
                        "Next.js",
                        "Nuxt.js",
                        "React",
                        "Vue.js",
                        "TypeScript",
                      ].map((tech) => (
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
                      Tools & Others
                    </Text>
                    <HStack gap={2} flexWrap="wrap">
                      {[
                        "Docker",
                        "AWS",
                        "MySQL",
                        "PostgreSQL",
                        "Git",
                        "Vim",
                      ].map((tech) => (
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

        {/* Hobby Section */}
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
              Hobby
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
              <Box>
                <Box fontSize="2xl" mb={2} color={accentColor}>
                  <IoMusicalNotes />
                </Box>
                <Text fontSize="lg" color={textColor} fontWeight="bold">
                  ドラム
                </Text>
                <Text fontSize="sm" color={mutedColor}>
                  音楽
                </Text>
              </Box>
              <Box>
                <Box fontSize="2xl" mb={2} color={accentColor}>
                  <IoHeart />
                </Box>
                <Text fontSize="lg" color={textColor} fontWeight="bold">
                  娘と遊ぶ
                </Text>
                <Text fontSize="sm" color={mutedColor}>
                  family
                </Text>
              </Box>
            </HStack>
          </Box>
        </Box>

        {/* On the web Section */}
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
              On the web
            </Heading>
            <Box flex="1" height="1px" bg={borderColor} ml={4} />
          </Flex>

          <Stack gap={3}>
            <Link
              as={NextLink}
              href="https://twitter.com/k_nagasawa_"
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
                  <IoLogoTwitter color="#1DA1F2" size="20" />
                  <Text fontWeight="bold" color={textColor}>
                    @k_nagasawa_
                  </Text>
                </HStack>
              </Box>
            </Link>

            <Link
              as={NextLink}
              href="https://github.com/18kazee"
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
                  <IoLogoGithub size="20" />
                  <Text fontWeight="bold" color={textColor}>
                    @18kazee
                  </Text>
                </HStack>
              </Box>
            </Link>
          </Stack>
        </Box>

        {/* Footer */}
        <Box
          as="footer"
          textAlign="center"
          mt={16}
          pt={8}
          borderTop="1px solid"
          borderColor={borderColor}
        >
          <Text fontSize="sm" color={mutedColor}>
            © 2025 Kazuki Nagasawa. All Rights Reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
