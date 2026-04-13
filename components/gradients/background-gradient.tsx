import { Box, useTheme, useColorModeValue } from '@chakra-ui/react'

export const BackgroundGradient = ({ hideOverlay, ...props }: any) => {
  const theme = useTheme()
  const isDark = useColorModeValue(false, true)
  
  // Light mode: vibrant colors
  const lightColors = [
    theme.colors.blue['500'],
    theme.colors.green['500'],
    theme.colors.yellow['500'],
    theme.colors.red['500'],
  ]
  
  // Dark mode: more subtle, cooler colors for better logo visibility
  const darkColors = [
    theme.colors.blue['700'],
    theme.colors.cyan['700'],
    theme.colors.purple['700'],
    theme.colors.indigo['700'],
  ]

  const colors = isDark ? darkColors : lightColors

  let fallbackBackground = `radial-gradient(at top left, ${colors[0]} 30%, transparent 80%), radial-gradient(at bottom, ${colors[1]} 0%, transparent 60%), radial-gradient(at bottom left, ${isDark ? theme.colors.cyan['800'] : theme.colors.cyan['500']} 0%, transparent 50%),
        radial-gradient(at top right, ${colors[3]}, transparent), radial-gradient(at bottom right, ${colors[0]} 0%, transparent 50%);`

  let gradientOverlay = `linear-gradient(0deg, var(--chakra-colors-${useColorModeValue(
    'white',
    'gray-900'
  )}) 60%, rgba(0, 0, 0, 0) 100%);`

  return (
    <Box
      backgroundImage={fallbackBackground}
      backgroundBlendMode={isDark ? 'normal' : 'saturation'}
      position="absolute"
      top="0"
      left="0"
      opacity={useColorModeValue('0.3', '0.15')}
      width="100%"
      overflow="hidden"
      pointerEvents="none"
      height={props.height || '100vh'}
      zIndex={props.zIndex || '0'}
    >
      <Box
        backgroundImage={!hideOverlay ? gradientOverlay : undefined}
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        zIndex="1"
      ></Box>
    </Box>
  )
}
