'use client'

import React, { useCallback, useEffect, useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  IconButton,
  useColorModeValue,
  Image,
} from '@chakra-ui/react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import industries from '#data/industries'

export const IndustriesCarousel: React.FC = () => {
  const industryKeys = Object.keys(industries)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 2 },
        '(min-width: 1024px)': { slidesToScroll: 3 },
      },
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  )

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const headingColor = useColorModeValue('gray.900', 'white')
  const descColor = useColorModeValue('gray.500', 'gray.400')
  const btnBg = useColorModeValue('white', 'gray.700')
  const btnHoverBg = useColorModeValue('gray.50', 'gray.600')
  const btnColor = useColorModeValue('gray.700', 'white')
  const bgGradient = useColorModeValue(
    'linear(to-br, gray.50, gray.100)',
    'linear(to-br, gray.900, gray.800)',
  )
  const sectionHeadingColor = useColorModeValue('gray.900', 'white')

  return (
    <Box py={20} position="relative" bgGradient={bgGradient}>
      <Container maxW="container.xl">
        <VStack spacing={3} mb={10}>
          <Text
            fontSize="lg"
            fontWeight="semibold"
            color="primary.500"
            textAlign="center"
            mb={3}
          >
            Industries We Serve
          </Text>
          <Heading
            as="h2"
            fontSize="4xl"
            fontWeight="extrabold"
            textAlign="center"
            color={sectionHeadingColor}
            lineHeight="shorter"
            mb={4}
          >
            Solutions for Every Industry
          </Heading>
          <Text
            fontSize="lg"
            textAlign="center"
            color={descColor}
            maxW="3xl"
            lineHeight="relaxed"
          >
            Interested in knowing what solutions we have for your specific industry? No matter your
            requirements, we can provide products that fit your needs - whether it's for
            manufacturing, hospitality or anything in between.
          </Text>
        </VStack>

        <Box position="relative">
          {/* Navigation Buttons */}
          {/* <HStack
            justify="center"
            spacing={4}
            mt={6}
            mb={8}
          >
            <IconButton
              aria-label="Previous slide"
              icon={<FiChevronLeft size={20} />}
              onClick={scrollPrev}
              isDisabled={!prevBtnEnabled}
              bg={btnBg}
              color={btnColor}
              _hover={{ bg: btnHoverBg }}
              borderRadius="md"
              size="md"
              shadow="md"
              borderWidth="1px"
              borderColor={borderColor}
            />
            <IconButton
              aria-label="Next slide"
              icon={<FiChevronRight size={20} />}
              onClick={scrollNext}
              isDisabled={!nextBtnEnabled}
              bg={btnBg}
              color={btnColor}
              _hover={{ bg: btnHoverBg }}
              borderRadius="md"
              size="md"
              shadow="md"
              borderWidth="1px"
              borderColor={borderColor}
            />
          </HStack> */}

          {/* Carousel */}
          <Box overflow="hidden" ref={emblaRef}>
            <HStack spacing={6} align="stretch">
              {industryKeys.map((key) => {
                const industry = industries[key]
                return (
                  <Box
                    key={key}
                    flex="0 0 100%"
                    minW={{ base: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)' }}
                    maxW={{ base: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)' }}
                  >
                    <Box
                      bg={cardBg}
                      borderWidth="1px"
                      borderColor={borderColor}
                      borderRadius="lg"
                      overflow="hidden"
                      h="full"
                      transition="all 0.3s"
                      _hover={{
                        transform: 'translateY(-4px)',
                        shadow: 'xl',
                      }}
                    >
                      {/* Image */}
                      <Box position="relative" h="200px" overflow="hidden">
                        <Image
                          src={industry.imageSrc}
                          alt={industry.title}
                          w="full"
                          h="full"
                          objectFit="cover"
                        />
                      </Box>

                      {/* Content */}
                      <VStack align="stretch" p={6} spacing={3}>
                        <Text
                          fontSize="xs"
                          fontWeight="bold"
                          textTransform="uppercase"
                          color="primary.500"
                          letterSpacing="wide"
                        >
                          {industry.category}
                        </Text>
                        <Heading as="h3" size="md" color={headingColor}>
                          {industry.title}
                        </Heading>
                        <Text fontSize="sm" color={descColor} noOfLines={3}>
                          {industry.description}
                        </Text>
                      </VStack>
                    </Box>
                  </Box>
                )
              })}
            </HStack>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
