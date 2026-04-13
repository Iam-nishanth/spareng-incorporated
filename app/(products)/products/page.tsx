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
    <AnimatePresence mode="wait">
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
        <IconButton
          aria-label="Back"
          icon={<Icon as={FiArrowLeft} />}
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
          mb={3}
          onClick={onBack}
        />
        <Text fontSize="xs" fontWeight="600" opacity={0.7} mb={1}>
          {category.number}
        </Text>
        <Heading size="md" fontWeight="800" mb={1}>
          {category.name}
        </Heading>
        <Text fontSize="sm" opacity={0.8}>
          {category.tagline}
        </Text>
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

  // Desktop / Tablet state
  const [activeCategoryId, setActiveCategoryId] = useState(initialCategory)
  const [activeView, setActiveView] = useState<'category' | 'detail'>('category')
  const [selectedLine, setSelectedLine] = useState<ProductLine | null>(null)
  const [navigatingBack, setNavigatingBack] = useState(false)

  // Mobile state
  const isMobileInitial = typeof window !== 'undefined' && window.innerWidth < 768
  const [mobileScreen, setMobileScreen] = useState<1 | 2 | 3>(
    initialCategoryParam && isMobileInitial ? 2 : 1
  )
  const [mobileActiveCategoryId, setMobileActiveCategoryId] = useState<string | null>(
    initialCategoryParam && isMobileInitial ? initialCategoryParam : null
  )
  const [mobileSelectedLine, setMobileSelectedLine] = useState<ProductLine | null>(null)
  const [mobileNavigatingBack, setMobileNavigatingBack] = useState(false)

  // ── URL Param Initialization ──
  // (We keep this for dynamic changes if they happen, but initial state is now fully synchronous)
  React.useEffect(() => {
    const catParam = searchParams.get('category')
    if (catParam && hubCategories.some(c => c.id === catParam)) {
      if (activeCategoryId !== catParam && !mobileSelectedLine && !selectedLine) {
        setActiveCategoryId(catParam)
        setMobileActiveCategoryId(catParam)
      }
    }
  }, [searchParams])

  // ── Browser History Interceptor ──
  React.useEffect(() => {
    const handlePopState = () => {
      // Desktop
      if (activeView === 'detail') {
        setNavigatingBack(true)
        setActiveView('category')
        setSelectedLine(null)
      }
      
      // Mobile
      if (mobileScreen === 3) {
        setMobileNavigatingBack(true)
        setMobileScreen(2)
        setMobileSelectedLine(null)
      } else if (mobileScreen === 2) {
        setMobileNavigatingBack(true)
        setMobileScreen(1)
      }
    }
    
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [activeView, mobileScreen])

  // ── Desktop helpers ──
  const activeCategory =
    hubCategories.find((c) => c.id === activeCategoryId) ?? hubCategories[0]

  const handleDesktopSelectCategory = (id: string) => {
    setNavigatingBack(false)
    setActiveCategoryId(id)
    setActiveView('category')
    setSelectedLine(null)
  }

  const handleDesktopSelectLine = (line: ProductLine) => {
    setNavigatingBack(false)
    setSelectedLine(line)
    setActiveView('detail')
    window.history.pushState({ detail: true, id: line.id }, '', `#${line.id}`)
  }

  const handleDesktopBackToCategory = () => {
    window.history.back()
  }

  // ── Mobile helpers ──
  const mobileActiveCategory = hubCategories.find((c) => c.id === mobileActiveCategoryId)

  const handleMobileSelectCategory = (id: string) => {
    setMobileNavigatingBack(false)
    setMobileActiveCategoryId(id)
    setMobileScreen(2)
    window.history.pushState({ screen: 2, id }, '', `#cat-${id}`)
  }

  const handleMobileSelectLine = (line: ProductLine) => {
    setMobileNavigatingBack(false)
    setMobileSelectedLine(line)
    setMobileScreen(3)
    window.history.pushState({ screen: 3, id: line.id }, '', `#${line.id}`)
  }

  const handleMobileBackToList = () => {
    window.history.back()
  }

  const handleMobileBackToPicker = () => {
    window.history.back()
  }

  // ── Framer Motion helpers ──
  const mobileEnterX = mobileNavigatingBack ? '100%' : '-100%'
  const mobileExitX = mobileNavigatingBack ? '-100%' : '100%'

  return (
    <>
      <title>Products — Material Handling Equipment | Spareng</title>
      <meta
        name="description"
        content="Browse Spareng's full range of material handling equipment: conveyor systems, idlers, pulleys, crushing equipment, feeding systems, and screening equipment."
      />

      <Box position="relative" overflow="hidden">
        <BackgroundGradient height="400px" zIndex="-1" />
        
        {/* ── Mobile layout (< md) ── */}
        <Box display={{ base: 'block', md: 'none' }} overflow="hidden" pt="32">
        <AnimatePresence mode="wait">
          {mobileScreen === 1 && (
            <MotionBox
              key="mobile-screen-1"
              initial={{ opacity: 0, x: mobileEnterX }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.25, ease: 'easeOut' } }}
              exit={{ opacity: 0, x: mobileExitX, transition: { duration: 0.2, ease: 'easeIn' } }}
            >
              <MobileCategoryPicker
                categories={hubCategories}
                activeId={mobileActiveCategoryId}
                onSelect={handleMobileSelectCategory}
              />
            </MotionBox>
          )}

          {mobileScreen === 2 && mobileActiveCategory && (
            <MotionBox
              key="mobile-screen-2"
              initial={{ opacity: 0, x: mobileEnterX }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.25, ease: 'easeOut' } }}
              exit={{ opacity: 0, x: mobileExitX, transition: { duration: 0.2, ease: 'easeIn' } }}
            >
              <MobileProductList
                category={mobileActiveCategory}
                onSelectLine={handleMobileSelectLine}
                onBack={handleMobileBackToPicker}
              />
            </MotionBox>
          )}

          {mobileScreen === 3 && mobileSelectedLine && mobileActiveCategory && (
            <MotionBox
              key="mobile-screen-3"
              initial={{ opacity: 0, x: mobileEnterX }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.25, ease: 'easeOut' } }}
              exit={{ opacity: 0, x: mobileExitX, transition: { duration: 0.2, ease: 'easeIn' } }}
            >
              <Box>
                <HStack px={4} pt={4} pb={2}>
                  <IconButton
                    aria-label="Back"
                    icon={<Icon as={FiArrowLeft} />}
                    variant="ghost"
                    onClick={handleMobileBackToList}
                    size="sm"
                  />
                </HStack>
                <ProductDetailView
                  line={mobileSelectedLine}
                  category={mobileActiveCategory}
                  onBackToCategory={handleMobileBackToList}
                />
              </Box>
            </MotionBox>
          )}
        </AnimatePresence>
      </Box>

      {/* ── Tablet layout (md, < lg) ── */}
      <Box display={{ base: 'none', md: 'block', lg: 'none' }} pt="36" pb="16">
        <Box maxW="container.2xl" mx="auto" px="15px">
          <ProductCategoryNav
            categories={hubCategories}
            activeId={activeCategoryId}
            onSelect={handleDesktopSelectCategory}
            variant="tabstrip"
          />
          <Box mt={6}>
            <RightPanel
              category={activeCategory}
              activeView={activeView}
              selectedLine={selectedLine}
              navigatingBack={navigatingBack}
              onSelectLine={handleDesktopSelectLine}
              onBackToCategory={handleDesktopBackToCategory}
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
              onSelect={handleDesktopSelectCategory}
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
                onSelectLine={handleDesktopSelectLine}
                onBackToCategory={handleDesktopBackToCategory}
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
