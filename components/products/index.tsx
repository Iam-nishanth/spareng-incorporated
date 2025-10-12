import React from 'react'
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  ResponsiveValue,
  SystemProps,
} from '@chakra-ui/react'

import { Section, SectionTitle, SectionTitleProps } from 'components/section'

const Revealer = ({ children }: any) => children

export interface ProductCardProps {
  title?: React.ReactNode
  description?: React.ReactNode
  imageSrc?: string
  imageAlt?: string
  learnMoreHref?: string
  enquireHref?: string
  delay?: number
}

export interface ProductsProps
  extends Omit<SectionTitleProps, 'title' | 'variant'> {
  title?: React.ReactNode
  description?: React.ReactNode
  products: Array<ProductCardProps>
  columns?: ResponsiveValue<number>
  spacing?: string | number
  innerWidth?: SystemProps['maxW']
  reveal?: React.FC<any>
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const {
    title,
    description,
    imageSrc,
    imageAlt = typeof title === 'string' ? String(title) : 'Product image',
    learnMoreHref = '#',
    enquireHref = '#',
  } = props

  return (
    <Card variant="outline" maxW="full" overflow="hidden">
      {imageSrc ? (
        <Image src={imageSrc} alt={imageAlt} objectFit="cover" w="full" h="250px" _hover={{ transform: 'scale(1.1)' }} transition="transform 0.3s ease" />
      ) : (
        <Box bg="gray.100" _dark={{ bg: 'gray.700' }} w="full" h="250px" display="flex" alignItems="center" justifyContent="center">
          <Text color="muted">{title}</Text>
        </Box>
      )}
      <CardBody gap="2">
        <Heading size="md">{title}</Heading>
        <Text color="muted">{description}</Text>
      </CardBody>
      <CardFooter gap="2" display="flex" justifyContent="center">
        <Button as="a" href={learnMoreHref} variant="outline" size={["sm", "md"]}>Learn More</Button>
        <Button as="a" href={enquireHref} colorScheme="primary" size={["sm", "md"]}>Enquire</Button>
      </CardFooter>
    </Card>
  )
}

const Products: React.FC<ProductsProps> = (props) => {
  const {
    title,
    description,
    products,
    columns = [1, 2, 3],
    spacing = 8,
    reveal: Wrap = Revealer,
    ...rest
  } = props

  return (
    <Section {...rest}>
      <Stack spacing={[4, null, 8]} textAlign="center">
        {(title || description) && (
          <Wrap>
            <SectionTitle title={title} description={description} style={{ textAlign: 'center' }} />
          </Wrap>
        )}
        <SimpleGrid columns={columns} spacing={spacing}>
          {products.map((product, i) => (
            <Wrap key={i} delay={product.delay}>
              <ProductCard {...product} />
            </Wrap>
          ))}
        </SimpleGrid>
      </Stack>
    </Section>
  )
}

export default Products