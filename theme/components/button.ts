import { mode } from '@chakra-ui/theme-tools'

type Dict = Record<string, any>

export default {
  variants: {
    'nav-link': (props: Dict) => {
      const { isActive } = props

      const hoverColor = mode('gray.900', 'white')(props)
      const activeColor = 'blue.500'
      return {
        outline: 'none',
        fontWeight: '500',
        color: isActive
          ? activeColor
          : mode('gray.700', 'whiteAlpha.700')(props),
        transition: 'color .2s ease-in',
        _hover: {
          textDecoration: 'none',
          color: hoverColor,
        },
      }
    },
    'primary': (props: Dict) => {
      const { isActive } = props
      return {
        bg: isActive ? 'blue.600' : 'blue.500',
        color: 'white',
        _hover: {
          bg: isActive ? 'blue.700' : 'blue.600',
        },
      }
    },
  },
}
