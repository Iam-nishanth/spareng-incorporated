import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter'
import { theme as baseTheme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'

export const theme = extendTheme(
  {
    config: {
      initialColorMode: 'light',
      useSystemColorMode: false,
    },
    styles: {
      global: (props: any) => ({
        body: {
          color: 'gray.900',
          bg: 'white',
          fontSize: 'lg',
          _dark: {
            color: 'white',
            bg: 'gray.900',
          },
        },
      }),
    },
    fonts: {
      heading: 'Inter Variable, Inter, sans-serif',
      body: 'Inter Variable, Inter, sans-serif',
    },
    colors: {
      primary: {
        50: '#EBF8FF',
        100: '#BEE3F8',
        200: '#90CDF4',
        300: '#63B3ED',
        400: '#4299E1',
        500: '#3182CE',
        600: '#2C5282',
        700: '#2A69AC',
        800: '#1A365D',
        900: '#15223A',
      },
    },
    fontSizes,
    components,
  },
  baseTheme,
)
