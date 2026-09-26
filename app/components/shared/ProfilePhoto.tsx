import {
  Box,
  CloseButton,
  Dialog,
  Portal,
  VisuallyHidden,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { personalInfo } from "../../config/profile";
import { useAppTheme } from "../../context/ThemeContext";

const photoSrc = "/images/kazuki.JPG";

export function ProfilePhoto() {
  const { themeConfig } = useAppTheme();
  const { borderColor, subtleBg, accentColor } = themeConfig;
  const { photoViewer } = personalInfo;

  return (
    <Dialog.Root placement="center" motionPreset="scale">
      <Dialog.Trigger asChild>
        <Box
          as="button"
          aria-label={photoViewer.openLabel}
          position="relative"
          boxSize={{ base: "88px", md: "128px" }}
          flexShrink={0}
          borderRadius="full"
          overflow="hidden"
          border="1px solid"
          borderColor={borderColor}
          bg={subtleBg}
          cursor="zoom-in"
          transition="transform 0.2s"
          _hover={{ transform: "scale(1.03)" }}
          _focusVisible={{
            outline: "2px solid",
            outlineColor: accentColor,
            outlineOffset: "3px",
          }}
        >
          <NextImage
            src={photoSrc}
            alt={personalInfo.name}
            fill
            sizes="(min-width: 768px) 192px, 132px"
            quality={90}
            priority
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Dialog.Trigger>

      <Portal>
        <Dialog.Backdrop bg="blackAlpha.700" backdropFilter="blur(6px)" />
        <Dialog.Positioner>
          <Dialog.Content
            position="relative"
            w="auto"
            maxW="none"
            p={0}
            bg="transparent"
            boxShadow="none"
          >
            <VisuallyHidden>
              <Dialog.Title>{personalInfo.name}</Dialog.Title>
            </VisuallyHidden>
            <Box
              position="relative"
              boxSize="min(80vw, 420px)"
              borderRadius="full"
              overflow="hidden"
              bg={subtleBg}
            >
              <NextImage
                src={photoSrc}
                alt={personalInfo.name}
                fill
                sizes="(min-width: 640px) 630px, 120vw"
                quality={90}
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Dialog.CloseTrigger asChild top={-2} insetEnd={-2}>
              <CloseButton
                aria-label={photoViewer.closeLabel}
                size="sm"
                variant="solid"
                borderRadius="full"
              />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
