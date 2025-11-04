'use client'

import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { FiArrowRight } from 'react-icons/fi'

import { useState } from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { FallInPlace } from '#components/motion/fall-in-place'
import { ProductCarousel } from '#components/product-carousel'
import { ProductDetailsModal } from '#components/product-details-modal/product-details-modal'

export default function IndustriesPage() {
  const heroHeadingColor = useColorModeValue('gray.900', 'white')
  const heroDescriptionColor = useColorModeValue('gray.600', 'gray.300')
  const outlineButtonColorScheme = useColorModeValue('primary', 'gray')

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedMachine, setSelectedMachine] = useState(null)

  // Machine data for modals
  const machines = {
    'belt-conveyor': {
      id: 'belt-conveyor-systems',
      title: 'Belt Conveyor Systems',
      model: 'BCS-2024',
      sku: 'BCS-TROUG-001',
      brand: 'Spareng',
      category: 'Conveyor Systems',
      subcategory: 'Belt Conveyors',
      description:
        'Complete troughed belt conveyor systems with impact idlers, return idlers, and drive systems for efficient material transport in mining, steel, cement, and power industries.',
      features: [
        'Heavy-duty troughed belt design for bulk material handling',
        'Impact idlers with rubber rings for drop zone protection',
        'Self-aligning return idlers for belt tracking',
        'Variable speed drive systems with VFD control',
        'Modular design for easy installation and maintenance',
        'Weather-resistant construction for outdoor applications',
      ],
      applications: [
        'Mining and quarry operations',
        'Steel plant material handling',
        'Cement plant raw material transport',
        'Power plant coal handling',
        'Port and terminal operations',
        'Aggregate processing plants',
      ],
      tags: [
        'Conveyor',
        'Belt',
        'Material Handling',
        'Mining',
        'Steel',
        'Cement',
      ],
      image: '/images/machines/Curve_Conveyor.jpg',
    },
    screening: {
      id: 'screening-equipment',
      title: 'Screening Spares',
      model: 'SE-2024',
      sku: 'SE-CMS-001',
      brand: 'Spareng',
      category: 'Screening Systems',
      subcategory: 'Vibrating Screens',
      description:
        'Advanced screening equipment including circular motion screens, flip flow screens, and linear motion screens for precise material separation and grading.',
      features: [
        'Circular motion screens for efficient material separation',
        'Flip flow screens for difficult-to-screen materials',
        'Linear motion screens for fine material processing',
        'Heavy-duty vibratory motors with adjustable amplitude',
        'Modular screen deck design for easy maintenance',
        'Dust-tight construction with rubber seals',
      ],
      applications: [
        'Aggregate screening and grading',
        'Coal preparation plants',
        'Mineral processing facilities',
        'Recycling and waste management',
        'Food processing industries',
        'Chemical and pharmaceutical',
      ],
      tags: ['Screening', 'Vibrating', 'Separation', 'Grading', 'Processing'],
      image: '/images/machines/istockphoto-519664519-612x612.jpg',
    },
    crushing: {
      id: 'crushing-systems',
      title: 'Crushing Systems',
      model: 'CS-2024',
      sku: 'CS-IMPACT-001',
      brand: 'Spareng',
      category: 'Crushing Equipment',
      subcategory: 'Impact Crushers',
      description:
        'Robust crushing systems including impact mills, hammer mills, and ring granulators for efficient material size reduction and processing in various industries.',
      features: [
        'High-impact crushing for maximum efficiency',
        'Reversible hammer design for extended wear life',
        'Adjustable discharge gap for product control',
        'Heavy-duty rotor with replaceable hammers',
        'Easy access for maintenance and inspection',
        'Dust suppression system included',
      ],
      applications: [
        'Limestone and cement crushing',
        'Coal preparation and processing',
        'Aggregate production',
        'Mining operations',
        'Recycling applications',
        'Power plant fuel preparation',
      ],
      tags: ['Crushing', 'Impact', 'Hammer Mill', 'Processing', 'Mining'],
      image: '/images/machines/istockphoto-519664519-612x612.jpg',
    },
    // 'port-handling': {
    //   id: 'port-handling-equipment',
    //   title: 'Port Handling Equipment',
    //   model: 'PHE-2024',
    //   sku: 'PHE-BARGE-001',
    //   brand: 'Spareng',
    //   category: 'Port Equipment',
    //   subcategory: 'Bulk Handling',
    //   description: 'Specialized port handling equipment including barge loaders, bulk reception units, and mobile hoppers for efficient port and terminal operations.',
    //   features: [
    //     'High-capacity barge loading systems',
    //     'Mobile hopper units for flexible operations',
    //     'Bulk reception units with multiple discharge points',
    //     'Weather-resistant construction for marine environments',
    //     'Automated control systems for precise loading',
    //     'Dust suppression and environmental controls'
    //   ],
    //   applications: [
    //     'Port and terminal operations',
    //     'Bulk cargo handling',
    //     'Coal and mineral export',
    //     'Grain and food processing',
    //     'Chemical and fertilizer handling',
    //     'Marine logistics'
    //   ],
    //   tags: ['Port', 'Barge', 'Bulk Handling', 'Marine', 'Terminal'],
    //   image: '/images/machines/port-handling.jpg'
    // },
    // 'stacker-reclaimer': {
    //   id: 'stacker-reclaimer-systems',
    //   title: 'Stacker Reclaimer Systems',
    //   model: 'SRS-2024',
    //   sku: 'SRS-COMBINED-001',
    //   brand: 'Spareng',
    //   category: 'Stacking Equipment',
    //   subcategory: 'Stacker Reclaimer',
    //   description: 'Complete stacker and reclaimer systems for efficient bulk material storage and retrieval operations in stockyards and storage facilities.',
    //   features: [
    //     'Combined stacker and reclaimer functionality',
    //     'High-capacity stacking and reclaiming',
    //     'Automated boom positioning system',
    //     'Weather-resistant construction',
    //     'Remote monitoring and control',
    //     'Low maintenance design'
    //   ],
    //   applications: [
    //     'Coal stockyard operations',
    //     'Iron ore storage and reclaiming',
    //     'Cement plant raw material handling',
    //     'Power plant fuel management',
    //     'Mining stockpile management',
    //     'Bulk material storage facilities'
    //   ],
    //   tags: ['Stacker', 'Reclaimer', 'Stockyard', 'Storage', 'Bulk Material'],
    //   image: '/images/machines/stacker-reclaimer.jpg'
    // },
    // 'specialized-conveyor': {
    //   id: 'specialized-conveyors',
    //   title: 'Specialized Conveyors',
    //   model: 'SC-2024',
    //   sku: 'SC-STEEP-001',
    //   brand: 'Spareng',
    //   category: 'Specialized Conveyors',
    //   subcategory: 'Steep Angle',
    //   description:
    //     'Specialized conveyor systems including steep angle conveyors, pipe conveyors, and screw conveyors for challenging material handling applications.',
    //   features: [
    //     'Steep angle conveyors up to 45° incline',
    //     'Pipe conveyors for enclosed material transport',
    //     'Screw conveyors for fine material handling',
    //     'Corrugated sidewalls for steep angle applications',
    //     'Flexible design for various applications',
    //     'Low maintenance and high reliability',
    //   ],
    //   applications: [
    //     'Steep terrain material transport',
    //     'Underground mining operations',
    //     'Food and chemical processing',
    //     'Waste management systems',
    //     'Agricultural material handling',
    //     'Industrial bulk transport',
    //   ],
    //   tags: ['Steep Angle', 'Pipe Conveyor', 'Screw Conveyor', 'Specialized'],
    //   image: '/images/machines/Curve_Conveyor.jpg',
    // },
  }

  const handleLearnMore = (machineKey) => {
    setSelectedMachine(machines[machineKey])
    onOpen()
  }

  return (
    <>
      <title>
        Machines You Can Build - MHE Spare Parts & Components | Spareng
      </title>
      <meta
        name="description"
        content="Discover the machines you can build using our premium MHE spare parts and components. From belt conveyors to screening equipment, crushing systems, and port handling machinery - all built with our quality spare parts."
      />
      <meta
        name="keywords"
        content="bulk material handling machines, belt conveyor systems, screening equipment, crushing machinery, port handling equipment, industrial conveyors, material processing systems"
      />
      <link rel="canonical" href="https://spareng.com/use-cases/" />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'MHE Spare Parts & Components Supply',
            provider: {
              '@type': 'Organization',
              name: 'Spareng',
              url: 'https://spareng.com',
            },
            areaServed: {
              '@type': 'Country',
              name: 'India',
            },
            description:
              'Premium MHE spare parts and components supply for building bulk material handling systems across diverse industries including mining, steel, cement, power, chemical processing, and port operations',
          }),
        }}
      />

      <Box>
        {/* Hero Section */}
        <Box position="relative" overflow="hidden">
          <BackgroundGradient height="100%" zIndex="-1" />
          <Container
            maxW="container.xl"
            pt={{ base: 32, lg: 32 }}
            pb={['10', '20', '20', '20']}
          >
            <VStack spacing={8} textAlign="center">
              <FallInPlace>
                <Box textAlign="center">
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    color="primary.500"
                    textTransform="uppercase"
                    letterSpacing="wider"
                    mb={['2', '4', '4', '4']}
                  >
                    MHE Spare Parts & Components
                  </Text>
                  <Heading
                    fontSize={{ base: '4xl', md: '4xl', lg: '6xl' }}
                    mb={['2', '4', '4', '4']}
                    bgGradient="linear(to-r, primary.400, primary.600)"
                    bgClip="text"
                  >
                    Machines You Can Build
                  </Heading>
                  <Text
                    color="muted"
                    fontSize={{ base: 'lg', md: 'xl' }}
                    maxW="2xl"
                    mx="auto"
                  >
                    Complete bulk material handling systems you can build using
                    our premium MHE spare parts and components
                  </Text>
                </Box>
              </FallInPlace>
              <FallInPlace>
                <HStack spacing={4} pt={4}>
                  <ButtonLink href="/products" colorScheme="primary" size="lg">
                    Browse Spare Parts
                  </ButtonLink>
                  <ButtonLink
                    href="/contact"
                    variant="outline"
                    size="lg"
                    colorScheme={outlineButtonColorScheme}
                  >
                    Get Quote
                  </ButtonLink>
                </HStack>
              </FallInPlace>
            </VStack>
          </Container>
        </Box>

        <FallInPlace>
          {/* Machine Showcase Grid */}
          <Container maxW="container.xl" py={20}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {/* Belt Conveyor Systems */}
              <Box
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius="xl"
                p={6}
                shadow="lg"
                borderWidth="1px"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                _hover={{ shadow: 'xl', transform: 'translateY(-2px)' }}
                transition="all 0.3s"
              >
                <VStack align="start" spacing={4}>
                  <Image
                    src="/images/machines/istockphoto-519664519-612x612.jpg"
                    objectFit={'cover'}
                    alt={'Belt Conveyor Systems'}
                    width="full"
                    height={'200px'}
                  />
                  <Heading
                    fontSize="xl"
                    fontWeight="semibold"
                    color={useColorModeValue('gray.800', 'white')}
                  >
                    Belt Conveyor Systems
                  </Heading>
                  <Text color="muted" fontSize="sm" lineHeight="1.5">
                    Troughed belt conveyors with impact idlers, return idlers,
                    and drive systems for efficient material transport
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    <Box
                      px={2}
                      py={1}
                      bg="primary.50"
                      borderRadius="md"
                      fontSize="xs"
                    >
                      Troughed Conveyors
                    </Box>
                    <Box
                      px={2}
                      py={1}
                      bg="primary.50"
                      borderRadius="md"
                      fontSize="xs"
                    >
                      Impact Idlers
                    </Box>
                    <Box
                      px={2}
                      py={1}
                      bg="primary.50"
                      borderRadius="md"
                      fontSize="xs"
                    >
                      Drive Systems
                    </Box>
                  </HStack>
                  <HStack spacing={3} w="full" justify="space-between">
                    <ButtonLink
                      href="/contact"
                      size="md"
                      colorScheme="primary"
                      flex="1"
                    >
                      Contact
                    </ButtonLink>
                    <Button
                      size="md"
                      variant="outline"
                      flex="1"
                      onClick={() => handleLearnMore('belt-conveyor')}
                    >
                      Learn More
                    </Button>
                  </HStack>
                </VStack>
              </Box>

              {/* Screening Equipment */}
              <Box
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius="xl"
                p={6}
                shadow="lg"
                borderWidth="1px"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                _hover={{ shadow: 'xl', transform: 'translateY(-2px)' }}
                transition="all 0.3s"
              >
                <VStack align="start" spacing={4}>
                    <Image
                      src="/images/machines/Screening-Machines.jpg"
                      objectFit={'cover'}
                      alt={'Screening Equipment'}
                      width="full"
                      height={'200px'}
                    />
                  <Heading
                    fontSize="xl"
                    fontWeight="semibold"
                    color={useColorModeValue('gray.800', 'white')}
                  >
                    Screening Equipment
                  </Heading>
                  <Text color="muted" fontSize="sm" lineHeight="1.5">
                    Circular motion screens, flip flow screens, and linear
                    motion screens for material separation and grading
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    <Box
                      px={2}
                      py={1}
                      bg="primary.50"
                      borderRadius="md"
                      fontSize="xs"
                    >
                      CMS Screens
                    </Box>
                    <Box
                      px={2}
                      py={1}
                      bg="primary.50"
                      borderRadius="md"
                      fontSize="xs"
                    >
                      Flip Flow
                    </Box>
                    <Box
                      px={2}
                      py={1}
                      bg="primary.50"
                      borderRadius="md"
                      fontSize="xs"
                    >
                      Linear Motion
                    </Box>
                  </HStack>
                  <HStack w="full" justify="space-between" gap={4}>
                    <ButtonLink
                      href="/contact"
                      colorScheme="primary"
                      w="full"
                    >
                      Contact
                    </ButtonLink>
                    <Button
                      size="md"
                      variant="outline"
                      onClick={() => handleLearnMore('screening')}
                      w="full"
                    >
                      Learn More
                    </Button>
                  </HStack>
                </VStack>
              </Box>

              {/* Crushing Systems */}
              <Box
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius="xl"
                p={6}
                shadow="lg"
                borderWidth="1px"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                _hover={{ shadow: 'xl', transform: 'translateY(-2px)' }}
                transition="all 0.3s"
              >
                <VStack align="start" spacing={4}>

                    <Image
                      src="/images/machines/Crushing-Machines.jpeg"
                      alt={'Crushing Systems'}
                      width="full"
                      objectFit={'cover'}
                      height={'200px'}
                    />

                  <Heading
                    fontSize="xl"
                    fontWeight="semibold"
                    color={useColorModeValue('gray.800', 'white')}
                  >
                    Crushing Systems
                  </Heading>
                  <Text color="muted" fontSize="sm" lineHeight="1.5">
                    Impact mills, hammer mills, and ring granulators for
                    material size reduction and processing
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    <Box
                      px={2}
                      py={1}
                      bg="primary.50"
                      borderRadius="md"
                      fontSize="xs"
                    >
                      Impact Mills
                    </Box>
                    <Box
                      px={2}
                      py={1}
                      bg="primary.50"
                      borderRadius="md"
                      fontSize="xs"
                    >
                      Hammer Mills
                    </Box>
                    <Box
                      px={2}
                      py={1}
                      bg="primary.50"
                      borderRadius="md"
                      fontSize="xs"
                    >
                      Ring Granulators
                    </Box>
                  </HStack>
                  <HStack spacing={3} w="full" justify="space-between">
                    <ButtonLink
                      href="/contact"
                      size="md"
                      colorScheme="primary"
                      flex="1"
                    >
                      Contact
                    </ButtonLink>
                    <Button
                      size="md"
                      variant="outline"
                      flex="1"
                      onClick={() => handleLearnMore('crushing')}
                    >
                      Learn More
                    </Button>
                  </HStack>
                </VStack>
              </Box>

              {/* Port Handling Equipment */}
              {/* <Box
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius="xl"
                p={6}
                shadow="lg"
                borderWidth="1px"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                _hover={{ shadow: 'xl', transform: 'translateY(-2px)' }}
                transition="all 0.3s"
              >
                <VStack align="start" spacing={4}>
                  <Box w="full" h="200px" bg="gray.100" borderRadius="lg" mb={2} />
                  <Heading fontSize="xl" fontWeight="semibold" color={useColorModeValue('gray.800', 'white')}>Port Handling Equipment</Heading>
                  <Text color="muted" fontSize="sm" lineHeight="1.5">
                    Barge loaders, bulk reception units, and mobile hoppers for port and terminal operations
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    <Box px={2} py={1} bg="primary.50" borderRadius="md" fontSize="xs">Barge Loaders</Box>
                    <Box px={2} py={1} bg="primary.50" borderRadius="md" fontSize="xs">Bulk Reception</Box>
                    <Box px={2} py={1} bg="primary.50" borderRadius="md" fontSize="xs">Mobile Hoppers</Box>
                  </HStack>
                  <HStack spacing={3} w="full" justify="space-between">
                    <ButtonLink href="/contact" size="md" colorScheme="primary" flex="1">
                      Contact
                    </ButtonLink>
                    <Button 
                      size="md" 
                      variant="outline" 
                      flex="1"
                      onClick={() => handleLearnMore('port-handling')}
                    >
                      Learn More
                    </Button>
                  </HStack>
                </VStack>
              </Box> */}

              {/* Stacker Reclaimer Systems */}
              {/* <Box
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius="xl"
                p={6}
                shadow="lg"
                borderWidth="1px"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                _hover={{ shadow: 'xl', transform: 'translateY(-2px)' }}
                transition="all 0.3s"
              >
                <VStack align="start" spacing={4}>
                  <Box w="full" h="200px" bg="gray.100" borderRadius="lg" mb={2} />
                  <Heading fontSize="xl" fontWeight="semibold" color={useColorModeValue('gray.800', 'white')}>Stacker Reclaimer Systems</Heading>
                  <Text color="muted" fontSize="sm" lineHeight="1.5">
                    Complete stacker and reclaimer systems for bulk material storage and retrieval operations
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    <Box px={2} py={1} bg="primary.50" borderRadius="md" fontSize="xs">Stackers</Box>
                    <Box px={2} py={1} bg="primary.50" borderRadius="md" fontSize="xs">Reclaimers</Box>
                    <Box px={2} py={1} bg="primary.50" borderRadius="md" fontSize="xs">Combined Systems</Box>
                  </HStack>
                  <HStack spacing={3} w="full" justify="space-between">
                    <ButtonLink href="/contact" size="md" colorScheme="primary" flex="1">
                      Contact
                    </ButtonLink>
                    <Button 
                      size="md" 
                      variant="outline" 
                      flex="1"
                      onClick={() => handleLearnMore('stacker-reclaimer')}
                    >
                      Learn More
                    </Button>
                  </HStack>
                </VStack>
              </Box> */}

              {/* Specialized Conveyors */}
              {/* <Box
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius="xl"
                p={6}
                shadow="lg"
                borderWidth="1px"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                _hover={{ shadow: 'xl', transform: 'translateY(-2px)' }}
                transition="all 0.3s"
              >
                <VStack align="start" spacing={4}>

                    <ProductCarousel
                      images={[
                        '/images/machines/multiple_conveying.webp',
                        '/images/machines/istockphoto-519664519-612x612.jpg',
                        '/images/machines/Steep-Angle-Sidewall-Belt-Conveyor.webp',
                      ]}
                      alt={'Specialized Conveyors'}
                      imageFit={'cover'}
                      height={'200px'}
                    />

                  <Heading
                    fontSize="xl"
                    fontWeight="semibold"
                    color={useColorModeValue('gray.800', 'white')}
                  >
                    Specialized Conveyors
                  </Heading>
                  <Text color="muted" fontSize="sm" lineHeight="1.5">
                    Steep angle conveyors, pipe conveyors, and screw conveyors
                    for challenging material handling applications
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    <Box
                      px={2}
                      py={1}
                      bg="primary.50"
                      borderRadius="md"
                      fontSize="xs"
                    >
                      Steep Angle
                    </Box>
                    <Box
                      px={2}
                      py={1}
                      bg="primary.50"
                      borderRadius="md"
                      fontSize="xs"
                    >
                      Pipe Conveyors
                    </Box>
                    <Box
                      px={2}
                      py={1}
                      bg="primary.50"
                      borderRadius="md"
                      fontSize="xs"
                    >
                      Screw Conveyors
                    </Box>
                  </HStack>
                  <HStack spacing={3} w="full" justify="space-between">
                    <ButtonLink
                      href="/contact"
                      size="md"
                      colorScheme="primary"
                      flex="1"
                    >
                      Contact
                    </ButtonLink>
                    <Button
                      size="md"
                      variant="outline"
                      flex="1"
                      onClick={() => handleLearnMore('specialized-conveyor')}
                    >
                      Learn More
                    </Button>
                  </HStack>
                </VStack>
              </Box> */}
            </SimpleGrid>
          </Container>
        </FallInPlace>

        {/* CTA Section */}
        <Box bg={useColorModeValue('gray.50', 'gray.800')} py={20}>
          <Container maxW="container.xl" textAlign="center">
            <VStack spacing={6}>
              <FallInPlace>
                <Heading
                  fontSize={{ base: '3xl', md: '3xl', lg: '4xl' }}
                  color={useColorModeValue('gray.800', 'white')}
                >
                  Ready to Build Your Material Handling System?
                </Heading>
              </FallInPlace>
              <FallInPlace>
                <Text
                  color={useColorModeValue('gray.600', 'gray.300')}
                  maxW="2xl"
                  mx="auto"
                >
                  Get the premium MHE spare parts and components you need to
                  build your material handling systems. Our quality parts ensure
                  reliable performance and long-lasting equipment.
                </Text>
              </FallInPlace>
              <FallInPlace>
                <HStack spacing={4}>
                  <ButtonLink
                    href="/contact"
                    colorScheme="primary"
                    size={['md', 'lg']}
                  >
                    Get Spare Parts Quote
                    <FiArrowRight style={{ marginLeft: '8px' }} />
                  </ButtonLink>
                  <ButtonLink
                    href="/products"
                    variant="outline"
                    size={['md', 'lg']}
                  >
                    Browse Products
                  </ButtonLink>
                </HStack>
              </FallInPlace>
            </VStack>
          </Container>
        </Box>
      </Box>

      {/* Product Details Modal */}
      <ProductDetailsModal
        product={selectedMachine}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}
