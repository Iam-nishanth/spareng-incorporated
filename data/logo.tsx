import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'
import BevconZentry from "#data/Spareng-v1.svg"

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const color = useColorModeValue('#231f20', '#fff')
  return (
    <chakra.svg
      as={BevconZentry}
      key="Bevcon Zentry"
      color={color}
      width={[150, 200]}
      height={["80px", "auto"]}
      display="block"
    />
  )
}
