import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'

import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Spareng',
    description:
      'Premium supplier of Material Handling Equipment (MHE) spare parts including conveyor components, crusher spares, pulleys, idlers, and screening equipment for mining, steel, cement, and power industries',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://spareng-incorporated.vecel.app',
      siteName: 'Spareng',
      images: [
        {
          url: 'https://spareng-incorporated.vecel.app/Sparent_INC.png',
          width: 200,
          height: 100,
          alt: 'Spareng Logo',
        },
      ],
    },
    twitter: {
      handle: '@spareng',
      site: '@spareng',
      cardType: 'summary_large_image',
    },
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'products',
        label: 'Products',
      },
      {
        id: 'contact',
        label: 'Contact',
        href: '/contact',
      },
      {
        id: 'quote',
        label: 'Get Quote',
        href: '/contact',
        variant: 'primary',
      },
    ],
  },
  footer: {
    address: {
      title: 'Address',
      lines: [
        'Plot No. E8/C8 - 2A, (24-60/10/11), IDA, UPPAL, Hyderabad, Telangana 500039, India',
      ],
    },
    contact: {
      title: 'Contact',
      items: [
        {
          label: 'Email',
          value: 'info@sparenginc.com',
          href: 'mailto:info@sparenginc.com',
        },
      ],
    },
    sections: [
      {
        title: 'Pages',
        links: [
          { label: 'Products', href: '/products' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    copyright: (
      <>
        Built by{' '}
        <Link
          _hover={{ color: 'primary.500', textDecoration: 'underline' }}
          href="mailto:nishanthalapati123@gmail.com"
        >
          Nishanth
        </Link>
      </>
    ),
    // links: [
    //   {
    //     href: '#privacy',
    //     label: 'Privacy Policy',
    //   },
    //   {
    //     href: '#terms',
    //     label: 'Terms of Service',
    //   },
    //   {
    //     href: '#cookies',
    //     label: 'Cookie Policy',
    //   },
    // ],
  },
}

export default siteConfig
