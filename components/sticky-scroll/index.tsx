'use client'

import React, { useRef, useState } from 'react'
import { Box, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'

export interface StickyItem {
  title: string
  description?: string
  imageSrc: string
}

export interface StickyScrollProps {
  items: StickyItem[]
  height?: string | number
}

export const StickyScroll: React.FC<StickyScrollProps> = ({ items, height = '26rem' }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ container: scrollerRef, offset: ['start start', 'end start'] })

  const total = items.length

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const breakpoints = items.map((_, i) => i / total)
    const closest = breakpoints.reduce((acc, bp, i) => (Math.abs(latest - bp) < Math.abs(latest - breakpoints[acc]) ? i : acc), 0)
    setActiveIndex(closest)
  })

  return (
    <HStack align="flex-start" spacing={10}>
      {/* Left tick list stays fixed (sticky within section) */}
      <Box flex="1" position="sticky" top={0} alignSelf="flex-start">
        <VStack align="flex-start" spacing={6}>
          {items.map((item, index) => (
            <HStack key={item.title + index} spacing={4} opacity={activeIndex === index ? 1 : 0.6}>
              <Icon as={FiCheck} color={activeIndex === index ? 'primary.500' : 'gray.400'} />
              <VStack align="flex-start" spacing={1}>
                <Text fontWeight="semibold" fontSize="lg">
                  {item.title}
                </Text>
                {item.description && (
                  <Text color="muted" fontSize="sm">
                    {item.description}
                  </Text>
                )}
              </VStack>
            </HStack>
          ))}
        </VStack>
      </Box>

      {/* Right scroller controls active index */}
      <Box flex="1" height={height} overflowY="auto" ref={scrollerRef} px={2}>
        {/* Sticky image viewport */}
        <Box position="sticky" top={2} height="15rem" width="100%" maxW="20rem" rounded="md" overflow="hidden" borderWidth="1px" bg="blackAlpha.50" _dark={{ bg: 'whiteAlpha.100' }}>
          <Box
            as={motion.img}
            key={items[activeIndex]?.imageSrc}
            src={items[activeIndex]?.imageSrc}
            initial={{ opacity: 0, y: 20 } as any}
            animate={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.3 } as any}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
        {/* Scroll segments */}
        {items.map((_, i) => (
          <Box key={`spacer-${i}`} height="15rem" />
        ))}
      </Box>
    </HStack>
  )
}

export default StickyScroll


