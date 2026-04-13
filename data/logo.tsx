import React from 'react'
import { Image, ImageProps, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<ImageProps> = (props) => {
  const isDark = useColorModeValue(false, true)
  
  return (
    <Image
      src={isDark ? "/Spareng_INC-dark.png" : "/Sparent_INC.png"}
      alt="Spareng Incorporated"
      width={{ base: 140, md: 200 }}
      maxHeight={{ base: 150, md: 100 }}
      objectFit="contain"
      display="block"
      filter={isDark ? 'brightness(1.2) saturate(1.1)' : 'none'}
      {...props}
    />
  )
}
