'use client'

import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { NextPage } from 'next'
import React, { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { FiArrowLeft, FiImage } from 'react-icons/fi'

import { hubCategories, HubCategory, ProductLine } from '#data/hub-categories'
import { MobileCategoryPicker } from '#components/mobile-category-picker'
import { ProductCategoryNav } from '#components/product-category-nav'
import { ProductDetailView } from '#components/product-detail-view'
import { CategoryIllustration } from '#components/category-illustrations'
import { BackgroundGradient } from '#components/gradients/background-gradient'

const MotionBox = motion(Box)

// ─── Desktop / Tablet right-panel ───────────────────────────────────────────

// Product lines that should use 'cover' instead of 'contain'
const coverProductLines = new Set([
  'belt-conveyor',
  'bucket-elevator',
  'circular-motion-screen',
  'flip-flow-screen',
  'rotary-air-valve',
  'single-roll-crusher',
])

interface RightPanelProps {
  category: HubCategory
  activeView: 'category' | 'detail'
  selectedLine: ProductLine | null
  navigatingBack: boolean
  onSelectLine: (line: ProductLine) => void
  onBackToCategory: () => void
}

const RightPanel: React.FC<RightPanelProps> = ({
  category,
  activeView,
  selectedLine,
  navigatingBack,
  onSelectLine,
  onBackToCategory,
}) => {
  const enterX = navigatingBack ? 100 : -100
  const exitX = navigatingBack ? -100 : 100

  return (
    <AnimatePresence>
      <MotionBox
        key={`${category.id}-${activeView}`}
        initial={{ opacity: 0, x: enterX }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, x: exitX, transition: { duration: 0.25, ease: 'easeIn' } }}
        flex="1"
        minH={0}
      >
        {activeView === 'category' ? (
          <Box>
            {/* Category banner */}
            <Box
              bgGradient={category.gradient}
              borderRadius="xl"
              p={8}
              mb={6}
              color="white"
            >
              <Heading size="lg" fontWeight="800" mb={2}>
                {category.name}
              </Heading>
              <Text fontSize="md" opacity={0.85} mb={3}>
                {category.tagline}
              </Text>
              <Text fontSize="sm" opacity={0.7}>
                {category.productLines.length} product line{category.productLines.length !== 1 ? 's' : ''}
              </Text>
            </Box>

            {/* Product line cards */}
            <SimpleGrid columns={[1, 2, 3]} spacing={4}>
              {category.productLines.map((line) => {
                const objectFit = coverProductLines.has(line.id) ? 'cover' : 'contain'

                return (
                  <Box
                    key={line.id}
                    borderWidth="1px"
                    borderColor="gray.200"
                    _dark={{ borderColor: 'gray.700', bg: 'gray.800' }}
                    borderRadius="lg"
                    overflow="hidden"
                    bg="white"
                    cursor="pointer"
                    _hover={{ shadow: 'md', borderColor: 'primary.200' }}
                    transition="all 0.15s"
                    onClick={() => onSelectLine(line)}
                  >
                    {/* Thumbnail */}
                    <Box
                      position="relative"
                      h="200px"
                      bg="white"
                      _dark={{ borderColor: 'gray.700' }}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      overflow="hidden"
                      borderBottom="1px solid"
                      borderColor="gray.100"
                      p={objectFit === 'cover' ? 0 : 4}
                    >
                      {line.image ? (
                        <Image
                          src={line.image}
                          alt={line.name}
                          objectFit={objectFit}
                          w="full"
                          h="full"
                          fallback={<CategoryIllustration category={category.id} size="40px" color="gray.300" />}
                        />
                      ) : (
                        <CategoryIllustration category={category.id} size="40px" color="gray.300" />
                      )}
                    </Box>

                    <Box p={4}>
                      <Text fontWeight="700" fontSize="sm" mb={1} noOfLines={1} color="gray.900" _dark={{ color: 'white' }}>
                        {line.name}
                      </Text>
                      <Text fontSize="xs" color="gray.500" _dark={{ color: 'gray.400' }} noOfLines={2} mb={3}>
                        {line.tagline}
                      </Text>
                      <Text fontSize="xs" color="primary.600" _dark={{ color: 'primary.400' }} fontWeight="600">
                        View Details &gt;
                      </Text>
                    </Box>
                  </Box>
                )
              })}
            </SimpleGrid>
          </Box>
        ) : (
          selectedLine && (
            <ProductDetailView
              line={selectedLine}
              category={category}
              onBackToCategory={onBackToCategory}
            />
          )
        )}
      </MotionBox>
    </AnimatePresence>
  )
}

// ─── Mobile product list (Screen 2) ─────────────────────────────────────────

interface MobileProductListProps {
  category: HubCategory
  onSelectLine: (line: ProductLine) => void
  onBack: () => void
}

const MobileProductList: React.FC<MobileProductListProps> = ({
  category,
  onSelectLine,
  onBack,
}) => {
  return (
    <Box>
      {/* Back arrow + banner */}
      <Box bgGradient={category.gradient} color="white" px={4} pt={4} pb={6}>
        <HStack align="center" spacing={3}>
          <IconButton
            aria-label="Back"
            icon={<Icon as={FiArrowLeft} />}
            variant="ghost"
            color="white"
            _hover={{ bg: 'whiteAlpha.200' }}
            onClick={onBack}
          />
          <VStack align="start" spacing={0}>
            <Heading size="md" fontWeight="800" mb={0.5} textAlign="left">
              {category.name}
            </Heading>
            <Text fontSize="sm" opacity={0.8} textAlign="left">
              {category.tagline}
            </Text>
          </VStack>
        </HStack>
      </Box>

      {/* Stacked product cards */}
      <VStack spacing={3} p={4} align="stretch">
        {category.productLines.map((line) => {
          const objectFit = coverProductLines.has(line.id) ? 'cover' : 'contain'

          return (
            <Box
              key={line.id}
              borderWidth="1px"
              borderColor="gray.200"
              _dark={{ borderColor: 'gray.700', bg: 'gray.800' }}
              borderRadius="lg"
              overflow="hidden"
              bg="white"
              cursor="pointer"
              _hover={{ shadow: 'sm' }}
              onClick={() => onSelectLine(line)}
              display="flex"
            >
              {/* Thumbnail */}
              <Box
                w="120px"
                flexShrink={0}
                bg="white"
                _dark={{ borderColor: 'gray.700' }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                overflow="hidden"
                borderRight="1px solid"
                borderColor="gray.100"
                p={objectFit === 'cover' ? 0 : 2}
              >
                {line.image ? (
                  <Image
                    src={line.image}
                    alt={line.name}
                    objectFit={objectFit}
                    w="full"
                    h="full"
                    fallback={<CategoryIllustration category={category.id} size="32px" color="gray.300" />}
                  />
                ) : (
                  <CategoryIllustration category={category.id} size="32px" color="gray.300" />
                )}
              </Box>

              <Box p={3} flex="1" minW={0}>
                <Text fontWeight="700" fontSize="sm" mb={0.5} noOfLines={1} color="gray.900" _dark={{ color: 'white' }}>
                  {line.name}
                </Text>
                <Text fontSize="xs" color="gray.500" _dark={{ color: 'gray.400' }} noOfLines={2}>
                  {line.tagline}
                </Text>
              </Box>
            </Box>
          )
        })}
      </VStack>
    </Box>
  )
}

// ─── ProductsPage Content ───────────────────────────────────────────────────

const ProductsPageContent = () => {
  const searchParams = useSearchParams()
  const initialCategoryParam = searchParams.get('category')
  const initialCategory = initialCategoryParam && hubCategories.some(c => c.id === initialCategoryParam)
    ? initialCategoryParam
    : hubCategories[0].id

  // State
  const [activeCategoryId, setActiveCategoryId] = useState(initialCategory)
  const [activeView, setActiveView] = useState<'category' | 'detail'>('category')
  const [selectedLine, setSelectedLine] = useState<ProductLine | null>(null)
  const [navigatingBack, setNavigatingBack] = useState(false)
  const [savedScrollPosition, setSavedScrollPosition] = useState(0)

  // ── URL Param Initialization ──
  React.useEffect(() => {
    const catParam = searchParams.get('category')
    if (catParam && hubCategories.some(c => c.id === catParam)) {
      setActiveCategoryId(catParam)
    }
  }, [searchParams])

  // ── Scroll Position Restoration ──
  React.useEffect(() => {
    if (activeView === 'category' && savedScrollPosition > 0) {
      window.scrollTo(0, savedScrollPosition)
      setSavedScrollPosition(0)
    }
  }, [activeView, savedScrollPosition])

  // ── Browser History Interceptor ──
  React.useEffect(() => {
    const handlePopState = () => {
      const catParam = new URLSearchParams(window.location.search).get('category')
      if (catParam && hubCategories.some(c => c.id === catParam)) {
        setActiveCategoryId(catParam)
        setActiveView('category')
        setSelectedLine(null)
      } else if (activeView === 'detail') {
        setNavigatingBack(true)
        setSavedScrollPosition(window.scrollY)
        setActiveView('category')
        setSelectedLine(null)
      }
    }
    
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [activeView])

  // ── Helpers ──
  const activeCategory =
    hubCategories.find((c) => c.id === activeCategoryId) ?? hubCategories[0]

  const handleSelectCategory = (id: string) => {
    setNavigatingBack(false)
    setActiveCategoryId(id)
    setActiveView('category')
    setSelectedLine(null)
    
    // Update URL param when switching categories
    const url = new URL(window.location.href)
    url.searchParams.set('category', id)
    window.history.pushState({ category: id }, '', url.toString())
  }

  const handleSelectLine = (line: ProductLine) => {
    setNavigatingBack(false)
    setSavedScrollPosition(window.scrollY)
    setSelectedLine(line)
    setActiveView('detail')
    window.history.pushState({ detail: true, id: line.id }, '', `#${line.id}`)
  }

  const handleBackToCategory = () => {
    window.history.back()
  }

  return (
    <>
      <title>Products — Material Handling Equipment | Spareng</title>
      <meta
        name="description"
        content="Browse Spareng's full range of material handling equipment: conveyor systems, idlers, pulleys, crushing equipment, feeding systems, and screening equipment."
      />

      <Box position="relative" overflow="hidden">
        <BackgroundGradient height="400px" zIndex="-1" />
        
        {/* ── Mobile & Tablet layout (< lg) ── */}
        <Box display={{ base: 'block', lg: 'none' }} pt={[24, 32]} pb="16">
          <Box maxW="container.2xl" mx="auto" px="15px">
            <ProductCategoryNav
              categories={hubCategories}
              activeId={activeCategoryId}
              onSelect={handleSelectCategory}
              variant="tabstrip"
            />
            <Box mt={6}>
              <RightPanel
                category={activeCategory}
                activeView={activeView}
                selectedLine={selectedLine}
                navigatingBack={navigatingBack}
                onSelectLine={handleSelectLine}
                onBackToCategory={handleBackToCategory}
              />
            </Box>
          </Box>
        </Box>

      {/* ── Desktop layout (≥ lg) ── */}
      <Box display={{ base: 'none', lg: 'block' }} pt="36" pb="16">
        <Box maxW="container.2xl" mx="auto" px="15px">
          <Flex gap={8} alignItems="flex-start">
            {/* Sidebar */}
            <ProductCategoryNav
              categories={hubCategories}
              activeId={activeCategoryId}
              onSelect={handleSelectCategory}
              variant="sidebar"
            />

            {/* Right panel */}
            <Box
              flex="1"
              minW={0}
              height="calc(100vh - 160px)"
              overflowY="auto"
              pr={2}
              sx={{
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
              }}
            >
              <RightPanel
                category={activeCategory}
                activeView={activeView}
                selectedLine={selectedLine}
                navigatingBack={navigatingBack}
                onSelectLine={handleSelectLine}
                onBackToCategory={handleBackToCategory}
              />
            </Box>
          </Flex>
        </Box>
      </Box>
      </Box>
    </>
  )
}

const ProductsPage = () => {
  return (
    <Suspense>
      <ProductsPageContent />
    </Suspense>
  )
}

export default ProductsPage
