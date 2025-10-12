'use client'

import React from 'react'
import { Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import InfiniteLogoSlider from 'react-infinite-logo-slider'
import { SectionTitle } from '#components/section'

const LogoSlider: React.FC = () => {
  const colgateFilter = useColorModeValue('grayscale(100%) invert(1)', 'grayscale(100%)')
  const colgateHoverFilter = useColorModeValue('invert(1)', 'none')
  const sliderBlurColor = useColorModeValue('#ffffff', '#1A202C')
  const mylanFilter = useColorModeValue('grayscale(100%)', 'grayscale(100%) invert(1)')
  const mylanHoverFilter = useColorModeValue('none', 'invert(1)')
  const alplaFilter = useColorModeValue('grayscale(100%)', 'grayscale(100%) invert(1)')
  const drreddyFilter = useColorModeValue('grayscale(100%)', 'grayscale(100%) invert(1)')
  const relianceFilter = useColorModeValue('grayscale(100%)', 'grayscale(100%) invert(1)')

  const clientLogos = [
    { src: '/home/bevcon-clients/Granules.png', alt: 'Granules' },
    {
      src: '/home/bevcon-clients/Mylan_Logo.png',
      alt: 'Mylan',
      maxH: { base: '28px', md: '44px' },
    },
    { src: '/home/bevcon-clients/Sandoz-Blue.svg', alt: 'Sandoz' },
    { src: '/home/bevcon-clients/alpla.svg', alt: 'ALPLA' },
    { src: '/home/bevcon-clients/bosch.png', alt: 'Bosch' },
    { src: '/home/bevcon-clients/colgate-smile.svg', alt: 'Colgate' },
    {
      src: "/home/bevcon-clients/dr.reddys.png",
      alt: "Dr. Reddy's",
      maxW: { base: '160px', md: '200px' },
    },
    {
      src: '/home/bevcon-clients/laurus.svg',
      alt: 'Laurus Labs',
      maxH: { base: '26px', md: '40px' },
    },
    { src: '/home/bevcon-clients/perfetti.png', alt: 'Perfetti Van Melle' },
    { src: '/home/bevcon-clients/Reliance_Industries.png', alt: 'Reliance Industries' },
    { src: '/home/bevcon-clients/saint-gobian.png', alt: 'Saint-Gobain' },
  ]

  return (
    <Box py={24} bg="gray.50" _dark={{ bg: "gray.900" }}>
      <Box maxW="container.xl" mx="auto" px={4}>
        {/* <Heading 
          as="h2" 
          size="lg" 
          textAlign="center" 
          mb={8}
          color="gray.700"
          _dark={{ color: "gray.300" }}
        >
          Our Clients
        </Heading> */}
        <SectionTitle title="Our Clients" />
        
        <InfiniteLogoSlider
          width="250px"
          duration={40}
          pauseOnHover={true}
          blurBorders={true}
          blurBorderColor="transparent"
        >
          {clientLogos.map((logo) => (
            <InfiniteLogoSlider.Slide key={logo.alt}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                mx={8}
                flexShrink={0}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  maxH={logo.maxH ?? { base: '50px', md: '60px' }}
                  maxW={logo.maxW}
                  objectFit="contain"
                  filter={
                    logo.alt === 'Colgate'
                      ? colgateFilter
                        : logo.alt === 'ALPLA'
                          ? alplaFilter
                          : logo.alt === 'Dr. Reddy'
                            ? drreddyFilter
                            : logo.alt === 'Reliance'
                              ? relianceFilter
                              : ''
                  }
                  _hover={{
                    filter:
                      logo.alt === 'Colgate'
                        ? colgateHoverFilter
                        : "none"
                  }}
                  w="auto"
                  transition="all 0.3s"
                  loading="lazy"
                />
              </Box>
            </InfiniteLogoSlider.Slide>
          ))}
        </InfiniteLogoSlider>
      </Box>
    </Box>
  )
}

export default LogoSlider
