'use client'

import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

import { HubCategory } from '#data/hub-categories'
import { CategoryIllustration } from '#components/category-illustrations'

interface ProductCategoryNavProps {
  categories: HubCategory[]
  activeId: string
  onSelect: (id: string) => void
  variant: 'sidebar' | 'tabstrip'
}

export const ProductCategoryNav: React.FC<ProductCategoryNavProps> = ({
  categories,
  activeId,
  onSelect,
  variant,
}) => {
  if (variant === 'sidebar') {
    return (
      <Box
        width="260px"
        position="sticky"
        top="6"
        alignSelf="flex-start"
        flexShrink={0}
      >
        <VStack spacing="1" align="stretch">
          {categories.map((cat) => {
            const isActive = cat.id === activeId

            return (
              <Box
                key={cat.id}
                as="button"
                onClick={() => onSelect(cat.id)}
                display="flex"
                alignItems="center"
                gap="3"
                px="3"
                py="2.5"
                borderRadius="md"
                bg={isActive ? 'primary.50' : 'transparent'}
                _dark={{ 
                  bg: isActive ? 'primary.900' : 'transparent',
                  _hover: { bg: isActive ? 'primary.900' : 'gray.800' }
                }}
                _hover={{ bg: isActive ? 'primary.50' : 'gray.50' }}
                transition="all 0.15s"
                textAlign="left"
                w="full"
              >
                <Box
                  w="32px"
                  h="32px"
                  borderRadius="md"
                  bgGradient={cat.gradient}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexShrink={0}
                >
                  <CategoryIllustration category={cat.id} size="18px" color="white" />
                </Box>
                <Box minW={0}>
                  <Text
                    fontSize="sm"
                    fontWeight="600"
                    color={isActive ? 'primary.700' : 'gray.700'}
                    _dark={{ color: isActive ? 'primary.400' : 'gray.200' }}
                    noOfLines={1}
                  >
                    {cat.name}
                  </Text>
                  <Text fontSize="xs" color="gray.400" _dark={{ color: 'gray.500' }} whiteSpace="nowrap">
                    {cat.productLines.length} product{cat.productLines.length !== 1 ? 's' : ''}
                  </Text>
                </Box>
              </Box>
            )
          })}
        </VStack>
      </Box>
    )
  }

  // tabstrip variant
  return (
    <HStack
      spacing="0"
      overflowX="auto"
      borderBottom="1px solid"
      borderColor="gray.200"
      sx={{ scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}
    >
      {categories.map((cat) => {
        const isActive = cat.id === activeId
        return (
          <Box
            key={cat.id}
            as="button"
            onClick={() => onSelect(cat.id)}
            px="4"
            py="3"
            fontSize="sm"
            fontWeight="500"
            color={isActive ? 'primary.600' : 'gray.600'}
            borderBottom="2px solid"
            borderColor={isActive ? 'primary.500' : 'transparent'}
            whiteSpace="nowrap"
            flexShrink={0}
            _hover={{ color: 'primary.600' }}
            transition="all 0.15s"
          >
            {cat.name}
          </Box>
        )
      })}
    </HStack>
  )
}
