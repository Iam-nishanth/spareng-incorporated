'use client'

import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

import { HubCategory } from '#data/hub-categories'

interface MobileCategoryPickerProps {
  categories: HubCategory[]
  activeId: string | null
  onSelect: (id: string) => void
}

export const MobileCategoryPicker: React.FC<MobileCategoryPickerProps> = ({
  categories,
  activeId,
  onSelect,
}) => {
  return (
    <SimpleGrid columns={2} minH="calc(100vh - 60px)">
      {categories.map((cat) => {
        const isActive = cat.id === activeId
        return (
          <Box
            key={cat.id}
            as="button"
            onClick={() => onSelect(cat.id)}
            position="relative"
            bgGradient={cat.gradient}
            p={4}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            minH="160px"
            outline={isActive ? '2px solid white' : 'none'}
            outlineOffset="-2px"
            _hover={{ opacity: 0.9 }}
            transition="opacity 0.15s"
            textAlign="left"
          >
            {/* Number chip */}
            <Box
              alignSelf="flex-start"
              bg="whiteAlpha.300"
              borderRadius="md"
              px={2}
              py={0.5}
            >
              <Text fontSize="xs" fontWeight="700" color="white">
                {cat.number}
              </Text>
            </Box>

            {/* Name + tagline */}
            <Box>
              <Text
                fontSize="sm"
                fontWeight="700"
                color="white"
                lineHeight="short"
                mb={1}
              >
                {cat.name}
              </Text>
              <Text fontSize="xs" color="whiteAlpha.800" lineHeight="short" noOfLines={2}>
                {cat.tagline}
              </Text>
            </Box>
          </Box>
        )
      })}
    </SimpleGrid>
  )
}
