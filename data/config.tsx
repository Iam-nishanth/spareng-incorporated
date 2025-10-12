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
    description: 'Premium supplier of Material Handling Equipment (MHE) spare parts including conveyor components, crusher spares, pulleys, idlers, and screening equipment for mining, steel, cement, and power industries',
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
        id: 'use-cases',
        label: 'Use Cases',
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
      lines: ['Plot No. E8/C8 - 2A, (24-60/10/11), IDA, UPPAL, Hyderabad, Telangana 500039, India'],
    },
    contact: {
      title: 'Contact',
      items: [
        {
          label: 'Email',
          value: 'info@spareng.com',
          href: 'mailto:info@spareng.com',
        },
      ],
    },
    sections: [
      {
        title: 'Pages',
        links: [
          { label: 'Products', href: '/products' },
          { label: 'Use Cases', href: '/use-cases' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    copyright: (
      <>
        Built by{' '}
        <Link _hover={{ color: 'primary.500', textDecoration: 'underline' }} href="mailto:nishanthalapati123@gmail.com">Nishanth</Link>
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
  }
}

export default siteConfig
