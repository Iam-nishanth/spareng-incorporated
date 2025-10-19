'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { FaLeaf } from 'react-icons/fa'
import { FaHelmetSafety } from 'react-icons/fa6'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiClock,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'
import { IoShield } from 'react-icons/io5'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ImagesSlider } from '#components/image-slider'
import { IndustriesCarousel } from '#components/industries-carousel'
import { LogoSlider } from '#components/logo-slider'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import Products from '#components/products'
import StickyScroll from '#components/sticky-scroll'
import StickyScrollSection from '#components/sticky-scroll-section'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

const Home: NextPage = () => {
  return (
    <>
      <title>Spareng Incorparated - MHE Spares & Material Handling Equipment Parts</title>
      <meta name="description" content="Leading supplier of Material Handling Equipment (MHE) spares including conveyor parts, pulleys, idlers, crushers, and screening equipment. Quality spare parts for mining, steel, cement, and power industries." />
      <meta name="keywords" content="MHE spares, material handling equipment parts, conveyor parts, idlers, pulleys, crusher spares, screen spares, industrial spare parts, spareng" />
      <link rel="canonical" href="https://spareng.com/" />
      
      {/* Product Schema */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Conveyor Parts & Idlers",
            "description": "High-quality conveyor idlers, rollers, and spare parts for material handling systems",
            "brand": {
              "@type": "Brand",
              "name": "Spareng"
            },
            "category": "Material Handling Equipment Parts",
            "offers": {
              "@type": "AggregateOffer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "INR"
            }
          })
        }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Crusher & Screen Spares",
            "description": "Durable crusher and screening equipment spare parts for mining and processing industries",
            "brand": {
              "@type": "Brand",
              "name": "Spareng"
            },
            "category": "Crushing & Screening Equipment Parts",
            "offers": {
              "@type": "AggregateOffer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "INR"
            }
          })
        }}
      />
      
      <Box>
      <HeroSection />
      <ProductsSection />
      <StickyScrollSection />
      {/* <LogoSlider /> */}
      <IndustriesCarousel />
      <FaqSection />
    </Box>
    </>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 24, md: 40, lg: 60 }} pb="40" px={{ base: "15px", md: "15px" }}>
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Material Handling Equipment
                <Br /> Spares & Components
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Premium quality MHE spare parts including conveyor components, 
                crusher spares, pulleys, idlers, and screening equipment for 
                mining, steel, cement, and power industries.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={3} alignItems={{ base: 'stretch', md: 'center' }} pt="4" pb="8">
                <ButtonLink colorScheme="primary" size="lg" href="/contact">
                  Get Quote
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="/products"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  Browse Products
                </ButtonLink>
              </Stack>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
            zIndex={0}
          >
            <Box overflow="hidden" height="100%" width="100%">
              {/* <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                /> */}

              <ImagesSlider
                images={[
                  // '/home/highspeed doors.jpg',
                  '/home/industrial-hall-1630742_1280.jpg',
                  '/home/DockLeveller.png',
                  '/home/Industrial Bay Doors.png', 
                  '/home/Roller Shutters.png',
                  ]}
                intervalMs={4000}
              />
            </Box>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        minChildWidth="240px"
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Premium Quality',
            icon: IoShield,
            description:
              'Precision-engineered spare parts built to withstand harsh industrial conditions',
            iconPosition: 'left',
            delay: 0.6,
            imageSrc: '/home/Industrial Bay Doors.png',
          },
          {
            title: 'Cost Effective',
            icon: FaLeaf,
            description:
              'Competitive pricing on genuine MHE spare parts with bulk order discounts',
            iconPosition: 'left',
            delay: 0.8,
            imageSrc: '/home/DockLeveller.png',
          },
          {
            title: 'Safety Compliant',
            icon: FaHelmetSafety,
            description:
              'All spare parts meet international safety standards and quality certifications',
            iconPosition: 'left',
            delay: 1,
            imageSrc: '/home/industrial-hall-1630742_1280.jpg',
          },
          {
            title: 'Fast Delivery',
            icon: FiClock,
            description:
              'Quick dispatch and nationwide delivery with technical support',
            iconPosition: 'left',
            delay: 1.1,
            imageSrc: '/home/Roller Shutters.png',
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const ProductsSection = () => {
  return (
    <Box overflow="hidden">
      <Products
        id="products"
        title="MHE Spare Parts Catalog"
        description={
          <Text color="muted" textAlign="center">
            Comprehensive range of material handling equipment spare parts and components
          </Text>
        }
        innerWidth="container.xl"
        columns={[1, 2, 3]}
        reveal={FallInPlace}
        products={[
          {
            title: 'Conveyor Parts',
            description:
              'Idlers, rollers, brackets, and belts for conveyor systems in mining and processing',
            imageSrc: '/Products/CONVEYOR_PARTS/IDLER_BEARING.jpeg',
            learnMoreHref: '/products',
            enquireHref: '/contact',
            delay: 0.2,
          },
          {
            title: 'Pulleys & Drums',
            description:
              'Head, tail, snub, and magnetic pulleys for material handling systems',
            imageSrc: '/Products/CONVEYOR_PARTS/TAIL_PULLEY.jpeg',
            learnMoreHref: '/products',
            enquireHref: '/contact',
            delay: 0.3,
          },
          {
            title: 'Crusher Spares',
            description:
              'High-wear parts and components for crushing equipment in mining operations',
            imageSrc: '/home/product-range/Conveyor Spares.jpg',
            learnMoreHref: '/products',
            enquireHref: '/contact',
            delay: 0.4,
          },
          {
            title: 'Screening Equipment',
            description:
              'Screen cloth, flip flow mats, and vibrating screen components for processing',
            imageSrc: '/Products/FLIP_FLOW_SCREEN/COMPRESSION_SPRINGS.jpeg',
            learnMoreHref: '/products',
            enquireHref: '/contact',
            delay: 0.5,
          },
          {
            title: 'Safety Systems',
            description:
              'Zero speed switches, belt sway switches, and pull cord switches for equipment safety',
            imageSrc: '/Products/BARGE_LOADER/LIMIT_SWITCH.jpeg',
            learnMoreHref: '/products',
            enquireHref: '/contact',
            delay: 0.6,
          },
          {
            title: 'Magnetic Separators',
            description:
              'High-intensity magnetic separators and drum magnets for material separation',
            imageSrc: '/Products/CONVEYOR_PARTS/OVER_BAND_MAGNETIC_SEPERATOR.jpeg',
            learnMoreHref: '/products',
            enquireHref: '/contact',
            delay: 0.7,
          },
        ]}
      />
    </Box>
  )
}

const WhyChooseSection = () => {
  const items = [
    {
      title: 'Manufacturing Excellence',
      description: 'ISO certified manufacturing facility with strict quality control',
      imageSrc: '/static/screenshots/landingspage.png',
    },
    {
      title: 'Technical Expertise',
      description: 'Expert engineers providing technical support and consultation',
      imageSrc: '/static/screenshots/list.png',
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored spare parts solutions for specific industrial requirements',
      imageSrc: '/static/screenshots/dashboard.png',
    },
    {
      title: 'Pan-India Service',
      description: 'Nationwide distribution network with rapid delivery capabilities',
      imageSrc: '/static/screenshots/billing.png',
    },
  ]

  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <Stack direction={{ base: 'column', lg: 'row' }} spacing={10}>
          <Box flex="1">
            <Heading as="h2" size="lg" mb={6}>
              Why Choose Spareng
            </Heading>
            <StickyScroll items={items} height="26rem" />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Core components">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Get started for free with <Em>30+ open source components</Em>.
            Including authentication screens with Clerk, Supabase and Magic.
            Fully functional forms with React Hook Form. Data tables with React
            Table.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
          We don&apos;t like to re-invent the wheel, neither should you. We
          selected the most productive and established tools in the scene and
          build Saas UI on top of it.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={['pink.200', 'purple.500']}
      >
        “Saas UI helped us set up a beautiful modern UI in no time. It saved us
        hundreds of hours in development time and allowed us to focus on
        business logic for our specific use-case from the start.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Start your next idea two steps ahead"
      >
        <Text color="muted" fontSize="lg">
          We took care of all your basic frontend needs, so you can start
          building functionality that makes your product unique.
        </Text>
        <Wrap mt="8">
          {[
            'authentication',
            'navigation',
            'crud',
            'settings',
            'multi-tenancy',
            'layouts',
            'billing',
            'a11y testing',
            'server-side rendering',
            'documentation',
            'onboarding',
            'storybooks',
            'theming',
            'upselling',
            'unit testing',
            'feature flags',
            'responsiveness',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Not your standard
          <Br /> dashboard template.
        </Heading>
      }
      description={
        <>
          Saas UI Pro includes everything you need to build modern frontends.
          <Br />
          Use it as a template for your next product or foundation for your
          design system.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: '#components.',
          icon: FiBox,
          description:
            'All premium components are available on a private NPM registery, no more copy pasting and always up-to-date.',
          variant: 'inline',
        },
        {
          title: 'Starterkits.',
          icon: FiLock,
          description:
            'Example apps in Next.JS, Electron. Including authentication, billing, example pages, everything you need to get started FAST.',
          variant: 'inline',
        },
        {
          title: 'Documentation.',
          icon: FiSearch,
          description:
            'Extensively documented, including storybooks, best practices, use-cases and examples.',
          variant: 'inline',
        },
        {
          title: 'Onboarding.',
          icon: FiUserPlus,
          description:
            'Add user onboarding flows, like tours, hints and inline documentation without breaking a sweat.',
          variant: 'inline',
        },
        {
          title: 'Feature flags.',
          icon: FiFlag,
          description:
            "Implement feature toggles for your billing plans with easy to use hooks. Connect Flagsmith, or other remote config services once you're ready.",
          variant: 'inline',
        },
        {
          title: 'Upselling.',
          icon: FiTrendingUp,
          description:
            '#components and hooks for upgrade flows designed to make upgrading inside your app frictionless.',
          variant: 'inline',
        },
        {
          title: 'Themes.',
          icon: FiToggleLeft,
          description:
            'Includes multiple themes with darkmode support, always have the perfect starting point for your next project.',
          variant: 'inline',
        },
        {
          title: 'Generators.',
          icon: FiTerminal,
          description:
            'Extend your design system while maintaininig code quality and consistency with built-in generators.',
          variant: 'inline',
        },
        {
          title: 'Monorepo.',
          icon: FiCode,
          description: (
            <>
              All code is available as packages in a high-performance{' '}
              <Link href="https://turborepo.com">Turborepo</Link>, you have full
              control to modify and adjust it to your workflow.
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
