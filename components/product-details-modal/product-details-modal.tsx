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
} from '@chakra-ui/react'

import React from 'react'

import { ProductCarousel } from '#components/product-carousel'
import { Product } from '#data/products'

interface ProductDetailsModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
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

  if (!product) return null

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
        h={{ base: 'full', md: 'auto' }}
        maxH={{ base: 'full', md: '95vh' }}
        borderRadius={{ base: '0', md: 'xl' }}
      >
        <ModalHeader borderBottomWidth="1px" borderColor={borderColor} pb="4">
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
        <ModalBody py="6" px={{ base: '4', md: '6' }} overflowY="auto">
          <VStack spacing="6" align="stretch">
            {/* Image Carousel Section */}
            <Box
              borderRadius="lg"
              overflow="hidden"
              borderWidth="1px"
              borderColor={borderColor}
              w="full"
            >
              <ProductCarousel
                images={images}
                alt={product.title}
                height={{ base: '300px', md: '400px', lg: '500px' }}
              />
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
