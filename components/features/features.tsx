import * as React from 'react'
import {
  Box,
  Stack,
  VStack,
  SimpleGrid,
  Heading,
  Text,
  Icon,
  Circle,
  ResponsiveValue,
  useMultiStyleConfig,
  ThemingProps,
  SystemProps,
} from '@chakra-ui/react'
import Image from 'next/image'

import { Section, SectionTitle, SectionTitleProps } from 'components/section'

const Revealer = ({ children }: any) => {
  return children
}

export interface FeaturesProps
  extends Omit<SectionTitleProps, 'title' | 'variant'>,
    ThemingProps<'Features'> {
  title?: React.ReactNode
  description?: React.ReactNode
  features: Array<FeatureProps>
  columns?: ResponsiveValue<number>
  spacing?: string | number
  aside?: React.ReactChild
  reveal?: React.FC<any>
  iconSize?: SystemProps['boxSize']
  innerWidth?: SystemProps['maxW']
  minChildWidth?: SystemProps['minW']
}

export interface FeatureProps {
  title?: React.ReactNode
  description?: React.ReactNode
  icon?: any
  iconPosition?: 'left' | 'top'
  iconSize?: SystemProps['boxSize']
  ip?: 'left' | 'top'
  variant?: string
  delay?: number
  // Optional background image for the feature container
  bgImageSrc?: string
  bgSize?: SystemProps['backgroundSize']
  bgPosition?: SystemProps['backgroundPosition']
  bgRepeat?: SystemProps['backgroundRepeat']
  // Optional top image, shown above content
  imageSrc?: string
  imageAlt?: string
  imageHeight?: SystemProps['height']
  imageFit?: React.CSSProperties['objectFit']
  imagePosition?: React.CSSProperties['objectPosition']
  // Optional controls for overlayed icon sizing
  overlayIconSize?: SystemProps['boxSize']
  overlayBadgeSize?: SystemProps['boxSize']
}

export const Feature: React.FC<FeatureProps> = (props) => {
  const {
    title,
    description,
    icon,
    iconPosition,
    iconSize = 8,
    ip,
    variant,
    bgImageSrc,
    bgSize = 'cover',
    bgPosition = 'center',
    bgRepeat = 'no-repeat',
    imageSrc,
    imageAlt,
    imageHeight = 140,
    imageFit = 'cover',
    imagePosition = 'center',
    overlayIconSize,
    overlayBadgeSize,
  } = props
  const styles = useMultiStyleConfig('Feature', { variant })

  const pos = iconPosition || ip
  const direction = imageSrc ? 'column' : pos === 'left' ? 'row' : 'column'

  return (
    <Stack
      sx={styles.container}
      direction={direction}
      bgImage={bgImageSrc ? `url(${bgImageSrc})` : undefined}
      bgSize={bgImageSrc ? bgSize : undefined}
      bgPosition={bgImageSrc ? bgPosition : undefined}
      bgRepeat={bgImageSrc ? bgRepeat : undefined}
    >
      {imageSrc && (
        <Box position="relative" width="100%" height={imageHeight} borderRadius="lg" overflow="hidden" mb={4}>
          <Image
            src={imageSrc}
            alt={imageAlt || ''}
            fill
            style={{ objectFit: imageFit, objectPosition: imagePosition, display: 'block' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
          {icon && (
            <Circle
              position="absolute"
              left="4"
              bottom="4"
              bg="whiteAlpha.900"
              _dark={{ bg: 'blackAlpha.600' }}
              color="primary.500"
              boxShadow="lg"
              borderWidth="1px"
              borderColor="blackAlpha.200"
              backdropFilter="saturate(180%) blur(6px)"
              size={overlayBadgeSize || '9'}
            >
              <Icon
                as={icon}
                boxSize={
                  overlayIconSize || (typeof iconSize === 'number' ? Math.max(3, iconSize - 1) : iconSize)
                }
              />
            </Circle>
          )}
        </Box>
      )}
      {!imageSrc && icon && (
        <Circle sx={styles.icon}>
          <Icon as={icon} boxSize={iconSize} />
        </Circle>
      )}
      <Box>
        <Heading sx={styles.title}>{title}</Heading>
        <Text sx={styles.description}>{description}</Text>
      </Box>
    </Stack>
  )
}

export const Features: React.FC<FeaturesProps> = (props) => {
  const {
    title,
    description,
    features,
    columns = [1, 2, 3],
    spacing = 8,
    align: alignProp = 'center',
    iconSize = 8,
    aside,
    reveal: Wrap = Revealer,
    minChildWidth,
    ...rest
  } = props

  const align = !!aside ? 'left' : alignProp

  const ip = align === 'left' ? 'left' : 'top'

  return (
    <Section {...rest}>
      <Stack direction="row" height="full" align="flex-start">
        <VStack flex="1" spacing={[4, null, 8]} alignItems="stretch">
          {(title || description) && (
            <Wrap>
              <SectionTitle
                title={title}
                description={description}
                align={align}
              />
            </Wrap>
          )}
          <SimpleGrid
            columns={minChildWidth ? undefined : columns}
            minChildWidth={minChildWidth}
            spacing={spacing}
          >
            {features.map((feature, i) => {
              return (
                <Wrap key={i} delay={feature.delay}>
                  <Feature iconSize={iconSize} {...feature} ip={ip} />
                </Wrap>
              )
            })}
          </SimpleGrid>
        </VStack>
        {aside && (
          <Box flex="1" p="8">
            {aside}
          </Box>
        )}
      </Stack>
    </Section>
  )
}
