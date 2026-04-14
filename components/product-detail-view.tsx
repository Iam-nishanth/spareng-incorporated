'use client'

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowLeft, FiImage } from 'react-icons/fi'

import React from 'react'

import { HubCategory, ProductLine } from '#data/hub-categories'

interface ProductDetailViewProps {
  line: ProductLine
  category: HubCategory
  onBackToCategory: () => void
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  line,
  category,
  onBackToCategory,
}) => {
  const [imgError, setImgError] = React.useState(false)

  React.useEffect(() => {
    setImgError(false)
  }, [line.image])

  return (
    <Box w="full" px={2} py={2}>
      {/* Back button and Breadcrumb */}
      <HStack align="center" spacing={0} px={0}>
        <IconButton
          aria-label="Back"
          icon={<Icon as={FiArrowLeft} />}
          variant="ghost"
          onClick={onBackToCategory}
          size="sm"
        />
        <Breadcrumb
          separator="›"
          fontSize={{ base: '10px', md: 'xs' }}
          color="gray.500"
          _dark={{ color: 'gray.400' }}
        >
          <BreadcrumbItem>
            <BreadcrumbLink onClick={onBackToCategory} cursor="pointer">
              Products
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              onClick={onBackToCategory}
              cursor="pointer"
              whiteSpace="nowrap"
            >
              {category.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              color="gray.700"
              _dark={{ color: 'gray.200' }}
              fontWeight="500"
              whiteSpace="nowrap"
            >
              {line.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </HStack>

      {/* Main Split Layout */}
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        gap={{ base: 6, lg: 10 }}
        mt={4}
      >
        {/* Left Side: Image Container */}
        <Box w={{ base: '100%', lg: '45%' }} flexShrink={0}>
          <Box
            position="relative"
            aspectRatio="4/3"
            bg="white"
            overflow="hidden"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {line.image && !imgError ? (
              <Image
                src={line.image}
                alt={line.name}
                fill
                style={{ objectFit: 'contain', borderRadius: '15px' }}
                unoptimized
                onError={() => setImgError(true)}
              />
            ) : (
              <Icon as={FiImage} boxSize="16" color="gray.300" />
            )}
          </Box>
        </Box>

        {/* Right Side: Title, Tagline, Overview, CTA */}
        <Box flex="1">
          <Heading
            as="h1"
            size="xl"
            fontWeight="800"
            color="gray.900"
            _dark={{ color: 'white' }}
            lineHeight="1.2"
          >
            {line.name}
          </Heading>

          <Text
            color="primary.600"
            _dark={{ color: 'primary.400' }}
            fontSize="lg"
            fontWeight="600"
            mt={2}
          >
            {line.tagline}
          </Text>

          <Text
            color="gray.600"
            _dark={{ color: 'gray.300' }}
            lineHeight="tall"
            fontSize="md"
            mt={6}
          >
            {line.description}
          </Text>
        </Box>
      </Flex>

      {/* Two-Column Features & Applications */}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        gap={10}
        mt={12}
        pt={8}
        borderTopWidth="1px"
        borderColor="gray.100"
        _dark={{ borderColor: 'gray.700' }}
      >
        <Box flex="1">
          <Heading size="md" mb={4} color="gray.800" _dark={{ color: 'white' }}>
            Key Features
          </Heading>
          <UnorderedList spacing={3} pl={4}>
            {line.features.map((f, i) => (
              <ListItem
                key={i}
                color="gray.600"
                _dark={{ color: 'gray.300' }}
                fontSize="sm"
              >
                {f}
              </ListItem>
            ))}
          </UnorderedList>
        </Box>

        <Box flex="1">
          <Heading size="md" mb={4} color="gray.800" _dark={{ color: 'white' }}>
            Applications
          </Heading>
          <UnorderedList spacing={3} pl={4}>
            {line.applications.map((a, i) => (
              <ListItem
                key={i}
                color="gray.600"
                _dark={{ color: 'gray.300' }}
                fontSize="sm"
              >
                {a}
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Flex>
    </Box>
  )
}
