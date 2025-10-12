'use client'

import React from 'react'
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { ProductCarousel } from '#components/product-carousel'
import { Product } from '#data/products'

interface ProductCardProps {
  product: Product
  showDetails?: boolean
  onShowDetails?: () => void
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  showDetails, 
  onShowDetails 
}) => {
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const titleColor = useColorModeValue('gray.800', 'gray.100')
  const sectionHeadingColor = useColorModeValue('gray.700', 'gray.200')
  const bodyColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <Card
      bg={cardBg}
      borderColor={borderColor}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{
        transform: 'translateY(-4px)',
        shadow: 'xl',
        borderColor: 'primary.500',
      }}
      transition="all 0.3s ease"
      position="relative"
      h="full"
      display="flex"
      flexDirection="column"
    >
      {/* Product Image/Carousel */}
      <Box position="relative" overflow="hidden">
        <ProductCarousel
          images={
            Array.isArray(product.image) ? product.image : [product.image]
          }
          alt={product.title}
          imageFit={product.imageFit || 'contain'}
        />
      </Box>

      <CardBody p="4" flex="1" display="flex" flexDirection="column">
        <VStack align="flex-start" spacing="3" flex="1">
          {/* Title */}
          <Heading
            size="sm"
            fontWeight="700"
            color={titleColor}
            noOfLines={2}
          >
            {product.title}
          </Heading>

          {/* Features */}
          <Box w="full">
            <Text fontSize="sm" fontWeight="800" mb="2" color={sectionHeadingColor}>
              Key Features:
            </Text>
            <VStack align="flex-start" spacing="1">
              {product.features.slice(0, 3).map((feature, index) => (
                <Text
                  key={index}
                  fontSize="md"
                  color={bodyColor}
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <Box as="span" color="primary.400" fontWeight="800">
                    •
                  </Box>
                  {feature}
                </Text>
              ))}
            </VStack>
          </Box>

          {/* Applications */}
          <Box w="full">
            <Text fontSize="md" fontWeight="800" mb="2" color={sectionHeadingColor}>
              Applications:
            </Text>
            <Text fontSize="md" color={bodyColor}>
              {product.applications.slice(0, 2).join(', ')}
            </Text>
          </Box>

          {/* Action Button */}
          {showDetails && (
            <Button colorScheme="primary" size="sm" w="full" mt="auto" onClick={onShowDetails}>
              Show Details
            </Button>
          )}
        </VStack>
      </CardBody>
    </Card>
  )
}
