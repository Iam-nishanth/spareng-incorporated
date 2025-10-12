'use client'

import React from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Slider from 'react-slick'

interface ProductCarouselProps {
  images: string[]
  alt: string
  height?: string | { base?: string; md?: string; lg?: string }
  imageFit?: 'cover' | 'contain' | 'fill' | 'none'
}

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ images, alt, height = '200px', imageFit = 'contain' }) => {
  const [slider, setSlider] = React.useState<Slider | null>(null)
  
  const top = useBreakpointValue({ base: '50%', md: '50%' })
  const side = useBreakpointValue({ base: '10px', md: '10px' })
  const arrowBg = useColorModeValue('whiteAlpha.900', 'blackAlpha.700')
  const arrowHoverBg = useColorModeValue('white', 'blackAlpha.600')
  const arrowColor = useColorModeValue('gray.700', 'gray.100')

  if (images.length <= 1) {
    return (
      <Image
        src={images[0]}
        alt={alt}
        w="full"
        h={height}
        objectFit={imageFit}
        _hover={{ transform: 'scale(1.05)' }}
        transition="transform 0.3s ease"
      />
    )
  }

  return (
    <Box position="relative" height={height} width="full" overflow="hidden">
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      
      {/* Left Arrow */}
      <IconButton
        aria-label="previous-image"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        size="sm"
        bg={arrowBg}
        color={arrowColor}
        _hover={{ bg: arrowHoverBg }}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="20px" />
      </IconButton>
      
      {/* Right Arrow */}
      <IconButton
        aria-label="next-image"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        size="sm"
        bg={arrowBg}
        color={arrowColor}
        _hover={{ bg: arrowHoverBg }}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="20px" />
      </IconButton>
      
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {images.map((image, index) => (
          <Box key={index} height={height} position="relative">
            <Image
              src={image}
              alt={`${alt} - Image ${index + 1}`}
              w="full"
              h={height}
              objectFit={imageFit}
              _hover={{ transform: 'scale(1.05)' }}
              transition="transform 0.3s ease"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
