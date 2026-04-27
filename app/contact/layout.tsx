import type { Metadata } from 'next'

const SITE_URL = 'https://www.sparenginc.com'

const CONTACT_DESCRIPTION =
  'Contact Spareng Incorporated in Hyderabad for MHE spares, equipment quotes, custom fabrication, and technical support. Engineer-led replies, quote within 48 hours.'

export const metadata: Metadata = {
  title: 'Contact',
  description: CONTACT_DESCRIPTION,
  alternates: { canonical: '/contact/' },
  openGraph: {
    title: 'Contact | Spareng Incorporated',
    description: CONTACT_DESCRIPTION,
    url: '/contact/',
    type: 'website',
  },
  twitter: {
    title: 'Contact | Spareng Incorporated',
    description: CONTACT_DESCRIPTION,
  },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${SITE_URL}/`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Contact',
      item: `${SITE_URL}/contact/`,
    },
  ],
}

const contactPageLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Spareng Incorporated',
  url: `${SITE_URL}/contact/`,
  description: CONTACT_DESCRIPTION,
  mainEntity: {
    '@id': `${SITE_URL}/#organization`,
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageLd) }}
      />
      {children}
    </>
  )
}
