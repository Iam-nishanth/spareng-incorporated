import {
  Box,
  BoxProps,
  Container,
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Link, LinkProps } from '@saas-ui/react'

import siteConfig from '#data/config'

export interface FooterProps extends BoxProps {
  columns?: number
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { columns = 3, ...rest } = props
  const footer = siteConfig.footer
  const totalColumns = 1 + (footer.sections?.length ?? 0)
  const mdColumns = Math.min(2, totalColumns)
  return (
    <Box
      bg="white"
      borderTopWidth="1px"
      borderColor="gray.100"
      _dark={{ bg: 'gray.900', borderColor: 'gray.700' }}
      {...rest}
    >
      <Container
        maxW="container.2xl"
        px={{ base: 6, md: 8 }}
        py={{ base: 10, md: 12 }}
      >
        <Stack spacing={{ base: 6, md: 8 }}>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            justify={{ base: 'flex-start', lg: 'space-between' }}
            align="flex-start"
            gap={{ base: 8, lg: 12 }}
          >
            <Stack spacing="6" maxW="lg" flex="1">
              <Stack spacing="4">
                <Flex>
                  <Box as={siteConfig.logo} />
                </Flex>
                <Text fontSize="lg" color="muted">
                  {siteConfig.seo.description}
                </Text>
              </Stack>
              {footer.address ? (
                <FooterSection title={footer.address.title}>
                  <Stack spacing="1">
                    {footer.address.lines?.map((line, index) => (
                      <Text
                        key={`${line}-${index}`}
                        fontSize="md"
                        color="muted"
                      >
                        {line}
                      </Text>
                    ))}
                  </Stack>
                </FooterSection>
              ) : null}
            </Stack>
            {footer.sections && footer.sections.length > 0 ? (
              <SimpleGrid
                columns={{
                  base: 1,
                  sm: Math.min(2, footer.sections.length),
                  lg: footer.sections.length,
                }}
                spacing={{ base: 6, md: 8 }}
                flexShrink={0}
                minW={{ lg: '260px' }}
              >
                {footer.sections.map((section) => (
                  <FooterNavSection
                    key={section.title}
                    title={section.title}
                    links={section.links}
                    style={{ marginTop: '2rem' }}
                  />
                ))}
              </SimpleGrid>
            ) : null}
          </Flex>
          <Divider borderColor="gray.100" _dark={{ borderColor: 'gray.700' }} />
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align={{ base: 'flex-start', md: 'center' }}
            gap={{ base: 3, md: 4 }}
            py={{ base: 2, md: 0 }}
          >
            <Copyright>{footer.copyright}</Copyright>
            {/* Footer policy links intentionally hidden for now */}
          </Flex>
        </Stack>
      </Container>
    </Box>
  )
}

export interface CopyrightProps {
  title?: React.ReactNode
  children: React.ReactNode
}

export const Copyright: React.FC<CopyrightProps> = ({
  title,
  children,
}: CopyrightProps) => {
  let content
  if (title && !children) {
    content = `&copy; ${new Date().getFullYear()} - ${title}`
  }
  return (
    <Text color="muted" fontSize="md">
      {content || children}
    </Text>
  )
}

export interface FooterSectionProps {
  title: React.ReactNode
  children?: React.ReactNode
  style?: React.CSSProperties
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  children,
  style,
}) => (
  <Stack spacing="3" style={style}>
    <Text fontSize="md" fontWeight="semibold" color="muted">
      {title}
    </Text>
    {children}
  </Stack>
)

interface FooterNavSectionProps {
  title: React.ReactNode
  links?: Array<{ label: React.ReactNode; href: string }>
  style?: React.CSSProperties
}

const FooterNavSection: React.FC<FooterNavSectionProps> = ({
  title,
  links = [],
  style,
}) => (
  <FooterSection title={title} style={style}>
    <Stack spacing="2">
      {links.map(({ href, label }) => (
        <FooterNavLink key={href} href={href} _hover={{ color: 'primary.500', _dark: { color: 'white' } }}>
          {label}
        </FooterNavLink>
      ))}
    </Stack>
  </FooterSection>
)

const FooterNavLink: React.FC<LinkProps> = (props) => (
  <Link
    display="inline-flex"
    color="muted"
    fontSize="md"
    _hover={{ color: 'gray.900', _dark: { color: 'white' } }}
    transitionProperty="color"
    transitionDuration="0.2s"
    {...props}
  />
)

export const FooterLink: React.FC<LinkProps> = (props) => {
  const { children, ...rest } = props
  return (
    <Link
      color="muted"
      fontSize="md"
      textDecoration="none"
      transitionProperty="color"
      transitionDuration="0.2s"
      _dark={{ color: 'gray.400' }}
      _hover={{
        color: 'gray.900',
        _dark: { color: 'white' },
      }}
      {...rest}
    >
      {children}
    </Link>
  )
}
