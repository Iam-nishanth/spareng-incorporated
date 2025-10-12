'use client'

import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { FiArrowLeft, FiHome, FiMail, FiPackage, FiSearch } from 'react-icons/fi'
import NextLink from 'next/link'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { FallInPlace } from '#components/motion/fall-in-place'
import { ButtonLink } from '#components/button-link/button-link'
import { MotionBox } from '#components/motion/box'

export default function NotFound() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const accentColor = useColorModeValue('primary.500', 'primary.300')

  const quickLinks = [
    {
      title: 'Home',
      description: 'Return to homepage',
      icon: FiHome,
      href: '/',
      delay: 0.4,
    },
    {
      title: 'Products',
      description: 'Browse our catalog',
      icon: FiPackage,
      href: '/products',
      delay: 0.5,
    },
    {
      title: 'Use Cases',
      description: 'See how we can help you',
      icon: FiSearch,
      href: '/use-cases',
      delay: 0.6,
    },
    {
      title: 'Contact',
      description: 'Get in touch',
      icon: FiMail,
      href: '/contact',
      delay: 0.7,
    },
  ]

  return (
    <>
      <title>404 - Page Not Found | Spareng</title>
      <meta name="description" content="The page you're looking for doesn't exist. Explore our MHE spare parts and material handling equipment solutions." />
      <meta name="robots" content="noindex, follow" />
      
      <Box position="relative" minH="100vh" overflow="hidden">
        <BackgroundGradient height="100vh" zIndex="-1" />
        
        <Container maxW="container.xl" py={{ base: 20, md: 32 }}>
          <VStack spacing={{ base: 12, md: 16 }} align="center">
            {/* 404 Animation */}
            <FallInPlace delay={0.1}>
              <VStack spacing={6} textAlign="center">
                {/* Animated 404 Number */}
                <MotionBox
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2,
                  }}
                >
                  <Heading
                    fontSize={{ base: '8xl', md: '9xl', lg: '140px' }}
                    fontWeight="black"
                    bgGradient="linear(to-r, primary.400, primary.600, purple.500)"
                    bgClip="text"
                    letterSpacing="tight"
                    lineHeight="1"
                  >
                    404
                  </Heading>
                </MotionBox>

                {/* Error Message */}
                <FallInPlace delay={0.3}>
                  <VStack spacing={3}>
                    <Heading
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight="bold"
                    >
                      Oops! Page Not Found
                    </Heading>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color={textColor}
                      maxW="lg"
                      px={4}
                    >
                      The page you're looking for seems to have moved or doesn't exist.
                      Let us help you find what you need.
                    </Text>
                  </VStack>
                </FallInPlace>

                {/* Primary Actions */}
                <FallInPlace delay={0.35}>
                  <HStack spacing={4} pt={4}>
                    <ButtonLink
                      href="/"
                      colorScheme="primary"
                      size="lg"
                      leftIcon={<Icon as={FiHome} />}
                    >
                      Go Home
                    </ButtonLink>
                    <Button
                      variant="outline"
                      size="lg"
                      leftIcon={<Icon as={FiArrowLeft} />}
                      onClick={() => window.history.back()}
                    >
                      Go Back
                    </Button>
                  </HStack>
                </FallInPlace>
              </VStack>
            </FallInPlace>

            {/* Quick Links Grid */}
            <Box w="full" maxW="4xl">
              <FallInPlace delay={0.4}>
                <VStack spacing={6}>
                  <Heading
                    fontSize={{ base: 'xl', md: '2xl' }}
                    textAlign="center"
                  >
                    Quick Links
                  </Heading>
                  
                  <SimpleGrid
                    columns={{ base: 1, sm: 2, md: 4 }}
                    spacing={4}
                    w="full"
                  >
                    {quickLinks.map((link) => (
                      <FallInPlace key={link.title} delay={link.delay}>
                        <NextLink href={link.href} passHref style={{ textDecoration: 'none' }}>
                          <MotionBox
                            as="div"
                            bg={cardBg}
                            borderRadius="xl"
                            borderWidth="1px"
                            borderColor={borderColor}
                            p={6}
                            textAlign="center"
                            cursor="pointer"
                            whileHover={{
                              scale: 1.05,
                              translateY: -4,
                            }}
                            whileTap={{ scale: 0.95 }}
                            sx={{
                              '&:hover': {
                                borderColor: accentColor,
                                boxShadow: 'xl',
                              },
                            }}
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            h="full"
                            w="full"
                          >
                            <VStack spacing={3}>
                              <Box
                                bg={useColorModeValue('primary.50', 'primary.900')}
                                p={3}
                                borderRadius="lg"
                              >
                                <Icon
                                  as={link.icon}
                                  boxSize={6}
                                  color={accentColor}
                                />
                              </Box>
                              <VStack spacing={1}>
                                <Text fontWeight="bold" fontSize="lg">
                                  {link.title}
                                </Text>
                                <Text fontSize="sm" color={textColor}>
                                  {link.description}
                                </Text>
                              </VStack>
                            </VStack>
                          </MotionBox>
                        </NextLink>
                      </FallInPlace>
                    ))}
                  </SimpleGrid>
                </VStack>
              </FallInPlace>
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  )
}
