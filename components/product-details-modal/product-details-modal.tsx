'use client'

import {
  Box,
  Grid,
  HStack,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useColorModeValue,
  SimpleGrid,
  Badge,
  Image,
  Flex,
  Icon,
  IconButton,
} from '@chakra-ui/react'
import { FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import React, { useCallback, useEffect, useState } from 'react'

import { Product, allProducts } from '#data/products'

interface ProductDetailsModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

// Product Carousel Component for Modal - Using same structure as industries-carousel
const ProductCarousel: React.FC<{ products: Product[] }> = ({ products }) => {
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

  return (
    <Box position="relative">
      {/* Carousel */}
      <Box overflow="hidden" ref={emblaRef}>
        <HStack spacing={6} align="stretch">
          {products.map((product) => (
            <Box
              key={product.id}
              flex="0 0 100%"
              minW={{ base: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)' }}
              maxW={{ base: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)' }}
              py="2"
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
                  transform: 'translateY(-2px)',
                  borderColor: 'primary.500',
                  shadow: 'md',
                }}
              >
                {/* Product Image */}
                <Box position="relative" h="200px" overflow="hidden">
                  <Image
                    src={Array.isArray(product.image) ? product.image[0] : product.image}
                    alt={product.title}
                    w="full"
                    h="full"
                    objectFit="cover"
                    fallbackSrc="/placeholder-product.jpg"
                  />
                </Box>

                {/* Product Content */}
                <VStack align="stretch" p={6} spacing={3}>
                  <Text
                    fontSize="xs"
                    fontWeight="bold"
                    textTransform="uppercase"
                    color="primary.500"
                    letterSpacing="wide"
                  >
                    {product.subcategory || 'MHE Parts'}
                  </Text>
                  <Heading as="h4" size="md" color={headingColor}>
                    {product.title}
                  </Heading>
                  <Text fontSize="sm" color={descColor} noOfLines={3}>
                    {product.description}
                  </Text>
                </VStack>
              </Box>
            </Box>
          ))}
        </HStack>
      </Box>
    </Box>
  )
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const modalBg = useColorModeValue('white', 'gray.800')
  const titleColor = useColorModeValue('gray.800', 'gray.100')
  const sectionHeadingColor = useColorModeValue('gray.700', 'gray.200')
  const bodyColor = useColorModeValue('gray.600', 'gray.300')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const cardBg = useColorModeValue('white', 'gray.700')
  const cardBorder = useColorModeValue('gray.200', 'gray.600')

  if (!product) return null

  // Map machine types to relevant spare parts/products
  const getRelevantProducts = (machineType: string) => {
    const productMappings = {
      'belt-conveyor': [
        'Conveyor Components', 'Drive Systems', 'Steep Angle Conveyors'
      ],
      'screening': [
        'Screening Spares',
      ],
      'crushing': [
        'Crushing Equipment', 'Crushers', 'Impact Mills'
      ],
      'port-handling': [
        'Port Equipment', 'Bulk Handling', 'Mobile Equipment'
      ],
      'stacker-reclaimer': [
        'Stacking Equipment', 'Reclaiming Systems', 'Conveyor Components'
      ],
      'specialized-conveyor': [
        'Specialized Conveyors', 'Pipe Conveyors', 'Screw Conveyors'
      ]
    }

    const relevantCategories = productMappings[machineType] || []
    
    return allProducts.filter(p => {
      const categories = Array.isArray(p.category) ? p.category : [p.category]
      return relevantCategories.some(cat => 
        categories.some(c => c.toLowerCase().includes(cat.toLowerCase()))
      )
    }).slice(0, 6) // Limit to 6 products
  }

  // Get machine type from product title or category
  const getMachineType = () => {
    const title = product.title?.toLowerCase() || ''
    if (title.includes('belt') || title.includes('conveyor')) return 'belt-conveyor'
    if (title.includes('screen')) return 'screening'
    if (title.includes('crush')) return 'crushing'
    if (title.includes('port') || title.includes('barge')) return 'port-handling'
    if (title.includes('stacker') || title.includes('reclaimer')) return 'stacker-reclaimer'
    if (title.includes('specialized') || title.includes('steep') || title.includes('pipe')) return 'specialized-conveyor'
    return 'belt-conveyor' // default
  }

  const machineType = getMachineType()
  const relevantProducts = getRelevantProducts(machineType)
  const images = Array.isArray(product.image) ? product.image : [product.image]

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      scrollBehavior="inside"
    >
      <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(10px)" />
      <ModalContent
        bg={modalBg}
        m={{ base: '0', md: '4' }}
        maxW={{ base: 'full', md: '95vw', lg: '1400px' }}
        h={{ base: '100vh', md: '90vh' }}
        maxH={{ base: '100vh', md: '90vh' }}
        borderRadius={{ base: '0', md: 'xl' }}
        display="flex"
        flexDirection="column"
      >
        <ModalHeader borderBottomWidth="1px" borderColor={borderColor} pb="4" flexShrink={0}>
          <VStack align="start" spacing="2">
            <Heading
              fontSize={{ base: 'xl', md: '2xl' }}
              color={titleColor}
              fontWeight="700"
            >
              {product.title}
            </Heading>
            {/* <HStack spacing="4" fontSize="sm" color={bodyColor} flexWrap="wrap">
              <Text fontWeight="600">Model: {product.model}</Text>
              <Text>•</Text>
              <Text fontWeight="600">SKU: {product.sku}</Text>
              {product.brand && (
                <>
                  <Text>•</Text>
                  <Text fontWeight="600">{product.brand}</Text>
                </>
              )}
            </HStack> */}
          </VStack>
        </ModalHeader>
        <ModalCloseButton size="lg" />
        <ModalBody 
          py="6" 
          px={{ base: '4', md: '6' }} 
          overflowY="auto" 
          flex="1"
          minH="0"
        >
          <VStack spacing="6" align="stretch">
            {/* Relevant Spare Parts Showcase */}
            <Box>
              <Heading
                fontSize={{ base: 'lg', md: 'xl' }}
                mb="4"
                color={titleColor}
                fontWeight="700"
              >
                Spare Parts & Components for This Machine
              </Heading>
              <Text
                fontSize="sm"
                color={bodyColor}
                mb="6"
                lineHeight="tall"
              >
                Build this machine using our premium MHE spare parts and components. 
                Each part is designed for reliability and optimal performance.
              </Text>
              
              {relevantProducts.length > 0 ? (
                <Box
                  overflowX="hidden"
                  w="full"
                >
                  <ProductCarousel
                    products={relevantProducts}
                  />
                </Box>
              ) : (
                <Box
                  textAlign="center"
                  py="8"
                  bg={useColorModeValue('gray.50', 'gray.700')}
                  borderRadius="lg"
                  borderWidth="1px"
                  borderColor={borderColor}
                >
                  <Text color={bodyColor} fontSize="sm">
                    No specific spare parts found for this machine type.
                  </Text>
                </Box>
              )}
            </Box>

            {/* Category and Brand Info */}
            <HStack spacing="4" flexWrap="wrap">
              {product.category && (
                <Box
                  px="4"
                  py="2"
                  bg={useColorModeValue('gray.100', 'gray.700')}
                  borderRadius="md"
                >
                  <Text fontSize="sm" fontWeight="600" color={bodyColor}>
                    {product.category}
                  </Text>
                </Box>
              )}
              {product.subcategory && (
                <Box
                  px="4"
                  py="2"
                  bg={useColorModeValue('primary.50', 'primary.900')}
                  borderRadius="md"
                >
                  <Text
                    fontSize="sm"
                    fontWeight="600"
                    color={useColorModeValue('primary.600', 'primary.300')}
                  >
                    {product.subcategory}
                  </Text>
                </Box>
              )}
            </HStack>

            {/* Content Grid */}
            <Grid
              templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
              gap="6"
              pb="6"
            >
              {/* Left Column */}
              <VStack align="stretch" spacing="5">
                {/* Description */}
                {product.description && (
                  <Box>
                    <Heading
                      fontSize={{ base: 'md', lg: 'lg' }}
                      mb="3"
                      color={titleColor}
                      fontWeight="700"
                    >
                      Description
                    </Heading>
                    <Text
                      fontSize="sm"
                      color={bodyColor}
                      lineHeight="tall"
                      whiteSpace="pre-line"
                    >
                      {typeof product.description === 'string'
                        ? product.description
                        : product.description}
                    </Text>
                  </Box>
                )}

                {/* Features */}
                <Box>
                  <Heading
                    fontSize={{ base: 'md', lg: 'lg' }}
                    mb="3"
                    color={titleColor}
                    fontWeight="700"
                  >
                    Key Features
                  </Heading>
                  <VStack align="start" spacing="2">
                    {product.features.map((feature, index) => (
                      <HStack key={index} align="start" spacing="2">
                        <Box
                          mt="0.5"
                          color="primary.500"
                          fontSize="lg"
                          fontWeight="800"
                        >
                          ✓
                        </Box>
                        <Text fontSize="sm" color={bodyColor} lineHeight="tall">
                          {feature}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </Box>
              </VStack>

              {/* Right Column */}
              <VStack align="stretch" spacing="5">
                {/* Specifications */}
                {product.specifications && (
                  <Box>
                    <Heading
                      fontSize={{ base: 'md', lg: 'lg' }}
                      mb="3"
                      color={titleColor}
                      fontWeight="700"
                    >
                      Technical Specifications
                    </Heading>
                    <VStack align="stretch" spacing="2">
                      {Object.entries(product.specifications).map(
                        ([key, value]) => (
                          <Box
                            key={key}
                            p="3"
                            bg={useColorModeValue('gray.50', 'gray.700')}
                            borderRadius="md"
                            borderWidth="1px"
                            borderColor={borderColor}
                          >
                            <Text
                              fontSize="xs"
                              color={sectionHeadingColor}
                              fontWeight="700"
                              textTransform="uppercase"
                              mb="1"
                            >
                              {key.replace(/_/g, ' ')}
                            </Text>
                            <Text
                              fontSize="sm"
                              color={bodyColor}
                              fontWeight="600"
                            >
                              {value}
                            </Text>
                          </Box>
                        ),
                      )}
                    </VStack>
                  </Box>
                )}

                {/* Applications */}
                <Box>
                  <Heading
                    fontSize={{ base: 'md', lg: 'lg' }}
                    mb="3"
                    color={titleColor}
                    fontWeight="700"
                  >
                    Applications
                  </Heading>
                  <VStack align="start" spacing="1.5">
                    {product.applications.map((application, index) => (
                      <HStack key={index} spacing="2">
                        <Box color="primary.500" fontSize="md">
                          •
                        </Box>
                        <Text fontSize="sm" color={bodyColor}>
                          {application}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </Box>

                {/* Tags */}
                {product.tags && product.tags.length > 0 && (
                  <Box>
                    <Heading
                      fontSize={{ base: 'md', lg: 'lg' }}
                      mb="3"
                      color={titleColor}
                      fontWeight="700"
                    >
                      Product Tags
                    </Heading>
                    <HStack flexWrap="wrap" spacing="2">
                      {product.tags.map((tag, index) => (
                        <Box
                          key={index}
                          px="3"
                          py="1"
                          bg={useColorModeValue('primary.50', 'primary.900')}
                          borderRadius="full"
                          borderWidth="1px"
                          borderColor={useColorModeValue(
                            'primary.200',
                            'primary.700',
                          )}
                        >
                          <Text
                            fontSize="xs"
                            color={useColorModeValue(
                              'primary.600',
                              'primary.300',
                            )}
                            fontWeight="600"
                          >
                            {tag}
                          </Text>
                        </Box>
                      ))}
                    </HStack>
                  </Box>
                )}
              </VStack>
            </Grid>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
