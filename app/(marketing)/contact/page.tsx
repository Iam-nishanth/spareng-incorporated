'use client'

import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Icon,
  useColorModeValue,
  Stack,
  useToast,
} from '@chakra-ui/react'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FallInPlace } from '#components/motion/fall-in-place'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { useState } from 'react'
import { NextPage } from 'next'

const ContactPage: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const toast = useToast()

  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const sidebarBg = useColorModeValue('gray.50', 'gray.900')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Show success toast
    toast({
      title: 'Message sent successfully!',
      description: 'Thank you for contacting us. We\'ll get back to you soon.',
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top-right',
    })

    // Clear the form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

    // TODO: Integrate with API later
    console.log('Form submitted:', formData)
  }

  return (
    <>
      <title>Contact Us - Request Quote for MHE Spares & Material Handling Equipment | Spareng</title>
      <meta name="description" content="Get in touch with Spareng for MHE spare parts, conveyor components, crusher spares, and material handling equipment solutions. Request a quote, technical support, or product information. Located in Hyderabad, serving all of India." />
      <meta name="keywords" content="contact spareng, request quote MHE spares, conveyor parts price, material handling equipment hyderabad, MHE spare parts supplier india" />
      <link rel="canonical" href="https://spareng.com/contact/" />
      
      {/* Local Business Schema */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Spareng",
            "description": "Material Handling Equipment (MHE) spare parts supplier",
            "url": "https://spareng.com",
            "telephone": "",
            "email": "info@spareng.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Plot No. E8/C8 - 2A, (24-60/10/11), IDA, UPPAL",
              "addressLocality": "Hyderabad",
              "addressRegion": "Telangana",
              "postalCode": "500039",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "17.4065",
              "longitude": "78.5672"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "18:00"
            },
          })
        }}
      />
      
      <Box position="relative" overflow="hidden" minH="100vh" bg={useColorModeValue('gray.50', 'gray.900')}>
      <BackgroundGradient height="100%" zIndex="-1" />
      
      <Container maxW="container.xl" pt={{ base: 32, lg: 40 }} pb="20">
        <FallInPlace delay={0.15} >
          <VStack spacing="8" align="stretch">
            {/* Header Section */}
            <Box textAlign="center">
              <Text 
                fontSize="sm" 
                fontWeight="semibold" 
                color="primary.500" 
                textTransform="uppercase" 
                letterSpacing="wider"
                mb={["2", "4", "4", "4"]}
              >
                Get in Touch
              </Text>
              <Heading 
                fontSize={{ base: '4xl', md: '4xl', lg: '6xl' }}
                mb={["2", "4", "4", "4"]}
                bgGradient="linear(to-r, primary.400, primary.600)"
                bgClip="text"
              >
                Contact Us
              </Heading>
              <Text color="muted" fontSize={{ base: 'lg', md: 'xl' }} maxW="2xl" mx="auto">
                Have questions about our products or ready to get in touch? Send us a message and we'll respond as soon as possible.
              </Text>
            </Box>

            {/* Main Content Grid */}
            <Grid templateColumns={{ base: '1fr', lg: '1fr 2fr' }} gap="12">
              {/* Contact Information Sidebar */}
              <GridItem>
                <FallInPlace delay={0.2}>
                  <Box
                    bg={sidebarBg}
                    borderRadius="xl"
                    borderWidth="1px"
                    borderColor={borderColor}
                    p="8"
                    h="fit-content"
                  >
                    <VStack spacing="8" align="stretch">
                      <Box>
                        <Heading fontSize={{ base: 'lg', md: 'xl' }} mb="4">
                          Let's Start a Conversation
                        </Heading>
                        <Text color="muted" mb="6">
                          All of your Industrial and logistics needs are met with our products.
                        </Text>
                      </Box>

                      <VStack spacing="6" align="stretch">
                        {/* Email */}
                        <HStack spacing="4">
                          <Box
                            bg="primary.500"
                            p="3"
                            borderRadius="lg"
                            color="white"
                          >
                            <Icon as={FiMail} boxSize="5" />
                          </Box>
                          <Box>
                            <Text fontWeight="semibold" mb="1">Email</Text>
                            <Text color="muted" fontSize="sm">
                              info@spareng.com
                            </Text>
                          </Box>
                        </HStack>

                        {/* Phone */}
                        {/* <HStack spacing="4">
                          <Box
                            bg="primary.500"
                            p="3"
                            borderRadius="lg"
                            color="white"
                          >
                            <Icon as={FiPhone} boxSize="5" />
                          </Box>
                          <Box>
                            <Text fontWeight="semibold" mb="1">Phone</Text>
                            <Text color="muted" fontSize="sm">
                              +91 88855 64040
                            </Text>
                          </Box>
                        </HStack> */}

                        {/* Address */}
                        <HStack spacing="4">
                          <Box
                            bg="primary.500"
                            p="3"
                            borderRadius="lg"
                            color="white"
                          >
                            <Icon as={FiMapPin} boxSize="5" />
                          </Box>
                          <Box>
                            <Text fontWeight="semibold" mb="1">Address</Text>
                            <Text color="muted" fontSize="sm">
                              Plot No. E8/C8 - 2A, (24-60/10/11), IDA, UPPAL, Hyderabad, Telangana 500039, India
                            </Text>
                          </Box>
                        </HStack>
                      </VStack>
                    </VStack>
                  </Box>
                </FallInPlace>
              </GridItem>

              {/* Contact Form */}
              <GridItem>
                <FallInPlace delay={0.4}>
                  <Box
                    bg={cardBg}
                    borderRadius="xl"
                    borderWidth="1px"
                    borderColor={borderColor}
                    p="8"
                    shadow="lg"
                  >
                    <form onSubmit={handleSubmit}>
                      <VStack spacing="6" align="stretch">
                        {/* Name and Email Row */}
                        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap="6">
                          <FormControl isRequired>
                            <FormLabel fontWeight="semibold">Name</FormLabel>
                            <Input
                              name="name"
                              placeholder="Your name"
                              value={formData.name}
                              onChange={handleInputChange}
                              size="lg"
                              borderRadius="lg"
                              _focus={{
                                borderColor: 'primary.500',
                                boxShadow: '0 0 0 1px var(--chakra-colors-primary-500)'
                              }}
                            />
                          </FormControl>

                          <FormControl isRequired>
                            <FormLabel fontWeight="semibold">Email</FormLabel>
                            <Input
                              name="email"
                              type="email"
                              placeholder="your@email.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              size="lg"
                              borderRadius="lg"
                              _focus={{
                                borderColor: 'primary.500',
                                boxShadow: '0 0 0 1px var(--chakra-colors-primary-500)'
                              }}
                            />
                          </FormControl>
                        </Grid>

                        {/* Subject */}
                        <FormControl isRequired>
                          <FormLabel fontWeight="semibold">Subject</FormLabel>
                          <Input
                            name="subject"
                            placeholder="What's this about?"
                            value={formData.subject}
                            onChange={handleInputChange}
                            size="lg"
                            borderRadius="lg"
                            _focus={{
                              borderColor: 'primary.500',
                              boxShadow: '0 0 0 1px var(--chakra-colors-primary-500)'
                            }}
                          />
                        </FormControl>

                        {/* Message */}
                        <FormControl isRequired>
                          <FormLabel fontWeight="semibold">Message</FormLabel>
                          <Textarea
                            name="message"
                            placeholder="Tell us more about your project or question..."
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={6}
                            borderRadius="lg"
                            _focus={{
                              borderColor: 'primary.500',
                              boxShadow: '0 0 0 1px var(--chakra-colors-primary-500)'
                            }}
                          />
                        </FormControl>

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          colorScheme="primary"
                          size="lg"
                          borderRadius="lg"
                          w="full"
                          _hover={{
                            transform: 'translateY(-2px)',
                            shadow: 'xl'
                          }}
                          transition="all 0.2s"
                        >
                          Send Message
                        </Button>
                      </VStack>
                    </form>
                  </Box>
                </FallInPlace>
              </GridItem>
            </Grid>
          </VStack>
        </FallInPlace>
      </Container>
    </Box>
    </>
  )
}

export default ContactPage
