'use client'

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Tag,
  useColorModeValue,
  VStack,
  HStack,
  Badge,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { FiCheck } from 'react-icons/fi'
import Image from 'next/image'
import { ButtonLink } from '#components/button-link/button-link'

interface IndustriesCardProps {
  title: string
  description: string
  imageSrc: string
  category: string
  benefits: string[]
  solutions: string[]
  learnMoreHref?: string
  contactHref?: string
}

export default function IndustriesCard({
  title,
  description,
  imageSrc,
  category,
  benefits,
  solutions,
  learnMoreHref = '/products',
  contactHref = '/contact',
}: IndustriesCardProps) {
  const cardBg = useColorModeValue('white', 'gray.900')
  const cardShadow = useColorModeValue('lg', 'dark-lg')
  const borderColor = useColorModeValue('gray.100', 'gray.700')
  const tagColor = useColorModeValue('primary.600', 'primary.300')
  const headingColor = useColorModeValue('gray.700', 'white')
  const descriptionColor = useColorModeValue('gray.500', 'gray.400')
  const sectionHeadingColor = useColorModeValue('gray.700', 'gray.200')
  const listItemColor = useColorModeValue('gray.600', 'gray.300')
  const solutionColor = useColorModeValue('gray.700', 'gray.200')

  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={cardBg}
        boxShadow={cardShadow}
        rounded={'md'}
        p={6}
        borderWidth="1px"
        borderColor={borderColor}
        overflow={'hidden'}>
        <Box h={'210px'} bg={useColorModeValue('gray.100', 'gray.700')} mt={-6} mx={-6} mb={6} pos={'relative'}>
          <Image
            src={imageSrc}
            fill
            alt={title}
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Stack spacing={4}>
          <Tag
            color={tagColor}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1}
            ml={-2}
            alignSelf="flex-start">
            {category}
          </Tag>
          <Heading
            color={headingColor}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {title}
          </Heading>
          <Text color={descriptionColor}>
            {description}
          </Text>

          <VStack align="stretch" spacing={3}>
            <Box>
              <Text fontWeight={800} fontSize="md" mb={2} color={sectionHeadingColor}>
                Key Benefits:
              </Text>
              <List spacing={1}>
                {benefits.slice(0, 3).map((benefit, index) => (
                  <ListItem key={index} fontSize="md" color={listItemColor}>
                    <ListIcon as={FiCheck} color="green.500" />
                    {benefit}
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box>
              <Text fontWeight={600} fontSize="md" mb={2} color={sectionHeadingColor}>
                Our Solutions:
              </Text>
              <HStack spacing={2} flexWrap="wrap">
                {solutions.slice(0, 2).map((solution, index) => (
                  <Badge
                    key={index}
                    fontSize="md"
                    px={0}
                    py={0}
                    bg="transparent"
                    color={solutionColor}
                    textTransform="uppercase"
                    fontWeight={800}
                    display="flex"
                    alignItems="center"
                    gap={2}
                  >
                    <Text>-</Text> {solution}
                  </Badge>
                ))}
              </HStack>
            </Box>
          </VStack>

          <HStack spacing={3} pt={4}>
            <ButtonLink size="sm" href={learnMoreHref} variant="outline">
              Learn More
            </ButtonLink>
            <ButtonLink size="sm" href={contactHref} colorScheme="primary">
              Get Quote
            </ButtonLink>
          </HStack>
        </Stack>
      </Box>
    </Center>
  )
}
