import {
  Box,
  Heading,
  Text,
  Flex,
  Link,
  VisuallyHidden,
} from "@chakra-ui/react";
import { IoLogoGithub } from "react-icons/io5";
import { LuArrowDown, LuArrowUpRight } from "react-icons/lu";
import NextImage from "next/image";
import NextLink from "next/link";
import { personalInfo } from "../config/profile";
import { useAppTheme } from "../context/ThemeContext";
import { riseIn } from "../lib/motion";
import { LocalTime } from "./shared/LocalTime";

export function HeroSection() {
  const { themeConfig } = useAppTheme();
  const {
    bgColor,
    cardBg,
    borderColor,
    subtleBg,
    textColor,
    mutedColor,
    accentColor,
  } = themeConfig;
  const { location } = personalInfo;
  const github = personalInfo.socials.items.find(
    (social) => social.platform === "github",
  );

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: 2,
    h: 11,
    px: 5,
    borderRadius: "full",
    fontSize: "sm",
    fontWeight: "semibold",
    transition: "all 0.15s",
  } as const;

  return (
    <Box pt={{ base: 12, md: 20 }} pb={{ base: 10, md: 14 }}>
      <Flex
        display="inline-flex"
        align="center"
        gap={2.5}
        mb={{ base: 8, md: 10 }}
        px={3}
        py={1.5}
        fontFamily="mono"
        fontSize="xs"
        color={mutedColor}
        bg={cardBg}
        border="1px solid"
        borderColor={borderColor}
        borderRadius="full"
        {...riseIn(0)}
      >
        <Box position="relative" boxSize={2}>
          <Box
            position="absolute"
            inset={0}
            borderRadius="full"
            bg={accentColor}
            opacity={0.6}
            animation="ping 2.4s cubic-bezier(0, 0, 0.2, 1) infinite"
            _motionReduce={{ animation: "none" }}
          />
          <Box
            position="relative"
            boxSize={2}
            borderRadius="full"
            bg={accentColor}
          />
        </Box>
        <Text as="span">{location.label}</Text>
        <Text as="span" aria-hidden>
          ·
        </Text>
        <Text as="span" color={textColor}>
          <LocalTime timeZone={location.timeZone} /> {location.timeZoneLabel}
        </Text>
      </Flex>

      <Flex align="center" gap={{ base: 5, md: 8 }} {...riseIn(80)}>
        <Box
          position="relative"
          boxSize={{ base: "88px", md: "128px" }}
          flexShrink={0}
          borderRadius="full"
          overflow="hidden"
          border="1px solid"
          borderColor={borderColor}
          bg={subtleBg}
        >
          <NextImage
            src="/images/kazuki.JPG"
            alt={personalInfo.name}
            fill
            sizes="(min-width: 768px) 192px, 132px"
            quality={90}
            priority
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box minW={0}>
          <Heading
            as="h1"
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            fontWeight="semibold"
            letterSpacing="tighter"
            lineHeight="1"
            color={textColor}
          >
            {personalInfo.name}
          </Heading>
          <Text
            mt={{ base: 2.5, md: 4 }}
            fontFamily="mono"
            fontSize={{ base: "xs", md: "sm" }}
            color={mutedColor}
          >
            {personalInfo.heroSubtitle}
          </Text>
        </Box>
      </Flex>

      <Text
        mt={{ base: 8, md: 10 }}
        maxW="34rem"
        fontSize={{ base: "xl", md: "2xl" }}
        fontWeight="medium"
        letterSpacing="tight"
        lineHeight="snug"
        color={textColor}
        {...riseIn(160)}
      >
        {personalInfo.intro}
      </Text>
      <Text
        mt={4}
        maxW="34rem"
        color={mutedColor}
        lineHeight="tall"
        {...riseIn(200)}
      >
        {personalInfo.summary}
      </Text>

      <Flex mt={{ base: 8, md: 10 }} gap={3} wrap="wrap" {...riseIn(260)}>
        <Link
          href="#experience"
          {...buttonStyle}
          bg={textColor}
          color={bgColor}
          _hover={{ textDecoration: "none", opacity: 0.85 }}
        >
          {personalInfo.experience.title}
          <LuArrowDown aria-hidden />
        </Link>
        {github && (
          <Link
            as={NextLink}
            href={github.url}
            target="_blank"
            rel="noopener noreferrer"
            {...buttonStyle}
            color={textColor}
            bg={cardBg}
            border="1px solid"
            borderColor={borderColor}
            _hover={{ textDecoration: "none", bg: subtleBg }}
          >
            <IoLogoGithub aria-hidden />
            {github.label}
            <VisuallyHidden>{personalInfo.socials.newTabLabel}</VisuallyHidden>
            <LuArrowUpRight aria-hidden />
          </Link>
        )}
      </Flex>
    </Box>
  );
}
