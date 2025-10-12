'use client'

import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  Text,
  VStack,
  Collapse,
  useDisclosure,
  useColorModeValue,
  Image,
  Card,
  CardBody,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { FiSearch, FiPlus, FiMinus, FiEyeOff, FiFilter, FiChevronDown } from 'react-icons/fi'

import React, { useMemo, useState } from 'react'

import {
  Product,
  allProducts,
  getAllCategories,
  getAllSubcategories,
  getProductsByCategory,
} from '#data/products'
import { ProductCard } from '#components/product-card'

const productCategories = getAllCategories()
const allSubcategories = getAllSubcategories()


// Expandable Filter Section Component
const FilterSection: React.FC<{
  title: string
  children: React.ReactNode
  defaultIsOpen?: boolean
}> = ({ title, children, defaultIsOpen = false }) => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen })
  
  return (
    <Box>
      <Button
        variant="ghost"
        justifyContent="space-between"
        fontWeight="600"
        w="full"
        p="0"
        h="auto"
        py="2.5"
        fontSize="sm"
        color="gray.700"
        onClick={onToggle}
        rightIcon={<Icon as={isOpen ? FiMinus : FiPlus} boxSize="3.5" color="gray.500" />}
        _hover={{
          bg: "gray.50"
        }}
        borderRadius="md"
      >
        {title}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box pt="3" pb="1">
          {children}
        </Box>
      </Collapse>
    </Box>
  )
}

// Filter Content Component (reusable for sidebar and modal)
const FilterContent: React.FC<{
  searchTerm: string
  setSearchTerm: (term: string) => void
  selectedCategories: string[]
  setSelectedCategories: (categories: string[]) => void
  selectedSubcategories: string[]
  setSelectedSubcategories: (subcategories: string[]) => void
  showSearch?: boolean
  isModal?: boolean
}> = ({
  searchTerm,
  setSearchTerm,
  selectedCategories,
  setSelectedCategories,
  selectedSubcategories,
  setSelectedSubcategories,
  showSearch = true,
  isModal = false
}) => {
  const sidebarBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <VStack spacing="4" align="stretch">
      {/* Search - only show if requested */}
      {showSearch && (
        <Box>
          <InputGroup size="md">
            <InputLeftElement>
              <Icon as={FiSearch} color="gray.400" boxSize="4" />
            </InputLeftElement>
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fontSize="sm"
              borderRadius="md"
              _focus={{
                borderColor: "blue.400",
                boxShadow: "0 0 0 1px var(--chakra-colors-blue-400)"
              }}
            />
          </InputGroup>
        </Box>
      )}

      {/* Product Categories - Always Open */}
      <Box py={{ base: 0, md: 4 }}>
        <Heading size="sm" mb="3" color="black" fontWeight="600">
          Product Categories
        </Heading>
        <CheckboxGroup
          value={selectedCategories}
          onChange={(values) => setSelectedCategories(values as string[])}
        >
          <VStack align="start" spacing="2.5">
            {productCategories.map((category) => (
              <Checkbox 
                key={category} 
                value={category} 
                size="md"
                colorScheme="blue"
                spacing="3"
              >
                <HStack justify="space-between" w="full" minW="0">
                  <Text 
                    fontSize="sm" 
                    fontWeight="500"
                    color="gray.700"
                    noOfLines={2}
                    lineHeight="1.3"
                  >
                    {category}
                  </Text>
                  <Text 
                    fontSize="xs" 
                    color="gray.500"
                    fontWeight="500"
                    flexShrink="0"
                    ml="2"
                  >
                    ({getProductsByCategory(category).length})
                  </Text>
                </HStack>
              </Checkbox>
            ))}
          </VStack>
        </CheckboxGroup>
      </Box>

      <Divider />

      {/* Subcategories */}
      <FilterSection title="Subcategories">
        <CheckboxGroup
          value={selectedSubcategories}
          onChange={(values) => setSelectedSubcategories(values as string[])}
        >
          <VStack align="start" spacing="2.5" maxH={isModal ? "300px" : "280px"} overflowY="auto">
            {allSubcategories.map((subcategory) => (
              <Checkbox 
                key={subcategory} 
                value={subcategory} 
                size="md"
                colorScheme="blue"
                spacing="3"
              >
                <HStack justify="space-between" w="full" minW="0">
                  <Text 
                    fontSize="sm" 
                    fontWeight="500"
                    color="gray.700"
                    noOfLines={2}
                    lineHeight="1.3"
                  >
                    {subcategory}
                  </Text>
                  <Text 
                    fontSize="xs" 
                    color="gray.500"
                    fontWeight="500"
                    flexShrink="0"
                    ml="2"
                  >
                    ({allProducts.filter(p => p.subcategory === subcategory).length})
                  </Text>
                </HStack>
              </Checkbox>
            ))}
          </VStack>
        </CheckboxGroup>
      </FilterSection>
    </VStack>
  )
}

const ProductsPage: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('best-seller')
  const [filtersVisible, setFiltersVisible] = useState(true)
  
  // Mobile filter modal
  const { isOpen: isFilterModalOpen, onOpen: onFilterModalOpen, onClose: onFilterModalClose } = useDisclosure()
  
  // Responsive breakpoints
  const isMobile = useBreakpointValue({ base: true, md: false })
  const isTablet = useBreakpointValue({ base: false, md: true, lg: false })

  const sidebarBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const bgColor = useColorModeValue('gray.50', 'gray.900')

  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.applications.some(app => 
          app.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        product.features.some(feature => 
          feature.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        product.tags.some(tag => 
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )

      const matchesCategory =
        selectedCategories.length === 0 ||
        (Array.isArray(product.category) 
          ? product.category.some(cat => selectedCategories.includes(cat))
          : selectedCategories.includes(product.category))

      const matchesSubcategory =
        selectedSubcategories.length === 0 ||
        (product.subcategory && selectedSubcategories.includes(product.subcategory))

      return matchesSearch && matchesCategory && matchesSubcategory
    })

    // Remove duplicates based on exact title match
    const uniqueProducts = filtered.reduce((acc, current) => {
      const existingIndex = acc.findIndex(product => 
        product.title.toLowerCase() === current.title.toLowerCase()
      )
      
      if (existingIndex === -1) {
        // No duplicate found, add the product
        acc.push(current)
      } else {
        // Duplicate found, keep the first occurrence (or you could keep the latest)
        // For now, we'll keep the first occurrence
      }
      
      return acc
    }, [] as typeof filtered)

    // Sort products
    switch (sortBy) {
      case 'name-az':
        uniqueProducts.sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'name-za':
        uniqueProducts.sort((a, b) => b.title.localeCompare(a.title))
        break
      case 'best-seller':
      default:
        // Keep original order for best-seller
        break
    }

    return uniqueProducts
  }, [searchTerm, selectedCategories, selectedSubcategories, sortBy])

  const handleClearFilters = () => {
    setSearchTerm('')
    setSelectedCategories([])
    setSelectedSubcategories([])
    setSortBy('best-seller')
  }

  return (
    <>
      <title>MHE Spare Parts - Conveyor Components, Crusher Parts & More | Spareng</title>
      <meta
        name="description"
        content="Browse our complete range of MHE spare parts including conveyor components, crusher parts, screening equipment, and material handling systems. Quality spare parts for all your material handling equipment."
      />
      <meta name="keywords" content="MHE spare parts, conveyor components, crusher parts, screening equipment, material handling, idlers, pulleys, belts, impact bars, hammers" />
      
      <Box bg={bgColor} minH="100vh" pt="20">
        <Container maxW="container.2xl" py="6">
          {/* Mobile/Tablet Header */}
          {(isMobile || isTablet) && (
            <VStack spacing="4" mb="6">
              {/* Mobile Top Bar */}
              <Flex justify="space-between" align="center" w="full">
                <Text fontWeight="600" color="gray.700" fontSize="lg">
                  {filteredProducts.length} results
                </Text>
                <HStack spacing="2">
                  <IconButton
                    aria-label="Filter products"
                    icon={<Icon as={FiFilter} />}
                    variant="outline"
                    size="md"
                    onClick={onFilterModalOpen}
                  />
                  <Select
                    size="md"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    w="auto"
                    minW="140px"
                    icon={<Icon as={FiChevronDown} />}
                  >
                    <option value="best-seller">Featured</option>
                    <option value="name-az">Name A-Z</option>
                    <option value="name-za">Name Z-A</option>
                  </Select>
                </HStack>
              </Flex>

              {/* Mobile Search Bar */}
              <InputGroup size="lg" w="full">
                <InputLeftElement>
                  <Icon as={FiSearch} color="gray.400" boxSize="5" />
                </InputLeftElement>
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  fontSize="md"
                  borderRadius="lg"
                  _focus={{
                    borderColor: "blue.400",
                    boxShadow: "0 0 0 1px var(--chakra-colors-blue-400)"
                  }}
                />
              </InputGroup>
            </VStack>
          )}

          <Grid
            templateColumns={
              (isMobile || isTablet) 
                ? '1fr' 
                : filtersVisible 
                  ? '300px 1fr' 
                  : '1fr'
            }
            gap="6"
            alignItems="start"
            minH="calc(100vh - 170px)"
          >
            {/* Desktop Sidebar */}
            {!isMobile && !isTablet && filtersVisible && (
              <GridItem as="aside">
                <Box
                  bg={sidebarBg}
                  borderRadius="lg"
                  borderWidth="1px"
                  borderColor={borderColor}
                  position="sticky"
                  top="24"
                  maxH="calc(100vh - 120px)"
                  w="300px"
                  overflow="hidden"
                  display="flex"
                  flexDirection="column"
                >
                  {/* Sticky Search Bar */}
                  <Box
                    p="4"
                    pb="3"
                    bg={sidebarBg}
                    borderBottom="1px"
                    borderColor={borderColor}
                    position="sticky"
                    top="0"
                    zIndex="1"
                  >
                    <InputGroup size="md">
                      <InputLeftElement>
                        <Icon as={FiSearch} color="gray.400" boxSize="4" />
                      </InputLeftElement>
                      <Input
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        fontSize="sm"
                        borderRadius="md"
                        _focus={{
                          borderColor: "blue.400",
                          boxShadow: "0 0 0 1px var(--chakra-colors-blue-400)"
                        }}
                      />
                    </InputGroup>
                  </Box>

                  {/* Scrollable Filter Content */}
                  <Box
                    flex="1"
                    overflowY="auto"
                    px="4"
                    pb="4"
                    sx={{
                      scrollbarWidth: 'thin',
                      scrollbarColor: 'var(--chakra-colors-gray-300) transparent',
                      '::-webkit-scrollbar': {
                        width: '6px',
                      },
                      '::-webkit-scrollbar-track': {
                        background: 'transparent',
                      },
                      '::-webkit-scrollbar-thumb': {
                        background: 'var(--chakra-colors-gray-300)',
                        borderRadius: '3px',
                      },
                      '::-webkit-scrollbar-thumb:hover': {
                        background: 'var(--chakra-colors-gray-400)',
                      },
                    }}
                  >
                    <FilterContent
                      searchTerm=""
                      setSearchTerm={() => {}}
                      selectedCategories={selectedCategories}
                      setSelectedCategories={setSelectedCategories}
                      selectedSubcategories={selectedSubcategories}
                      setSelectedSubcategories={setSelectedSubcategories}
                      showSearch={false}
                      isModal={false}
                    />
                  </Box>
                </Box>
              </GridItem>
            )}

            {/* Main Content */}
            <GridItem overflow="hidden">
              {/* Desktop Top Bar */}
              {!isMobile && !isTablet && (
                <Flex justify="space-between" align="center" mb="6">
                  <HStack spacing="4">
                    <Button
                      leftIcon={<Icon as={FiEyeOff} />}
                      variant="outline"
                      size="sm"
                      onClick={() => setFiltersVisible(!filtersVisible)}
                    >
                      {filtersVisible ? 'Hide filters' : 'Show filters'}
                    </Button>
                    <Text fontWeight="600" color="gray.700" _dark={{ color: 'gray.300' }}>
                      {filteredProducts.length} results
                    </Text>
                  </HStack>

                  <HStack spacing="4">
                    <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                      Sort by
                    </Text>
                    <Select
                      size="sm"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      w="140px"
                      variant="outline"
                    >
                      <option value="best-seller">Featured</option>
                      <option value="name-az">Name: A to Z</option>
                      <option value="name-za">Name: Z to A</option>
                    </Select>
                  </HStack>
                </Flex>
              )}

              {/* Scrollable Products Container */}
              <Box
                maxH="calc(100vh - 200px)"
                overflowY="auto"
                pr="1"
                sx={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  '::-webkit-scrollbar': {
                    display: 'none',
                  },
                }}
              >
                <SimpleGrid
                  columns={{ 
                    base: 1, 
                    sm: 2, 
                    md: 3, 
                    lg: 3,
                    xl: 3,
                    '2xl': 3
                  }}
                  spacing="4"
                  mx="auto"
                  pt="1"
                >
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </SimpleGrid>

                {/* No Results */}
                {filteredProducts.length === 0 && (
                  <Box textAlign="center" py="12">
                    <Text fontSize="lg" color="gray.600" _dark={{ color: 'gray.400' }} mb="4">
                      No products found matching your filters.
                    </Text>
                    <Button colorScheme="primary" onClick={handleClearFilters}>
                      Clear Filters
                    </Button>
                  </Box>
                )}
              </Box>
            </GridItem>
          </Grid>
        </Container>

        {/* Mobile/Tablet Filter Modal */}
        <Modal isOpen={isFilterModalOpen} onClose={onFilterModalClose} size="full">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <HStack justify="space-between" w="full">
                <Text>Filter Products</Text>
                <ModalCloseButton position="static" />
              </HStack>
            </ModalHeader>
            <ModalBody pb="6">
              <FilterContent
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedSubcategories={selectedSubcategories}
                setSelectedSubcategories={setSelectedSubcategories}
                showSearch={true}
                isModal={true}
              />
              
              {/* Modal Actions */}
              <HStack spacing="4" mt="6" pt="4" borderTop="1px" borderColor="gray.200">
                <Button variant="outline" onClick={handleClearFilters} flex="1">
                  Clear All
                </Button>
                <Button colorScheme="blue" onClick={onFilterModalClose} flex="1">
                  Apply Filters ({filteredProducts.length})
                </Button>
              </HStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  )
}

export default ProductsPage