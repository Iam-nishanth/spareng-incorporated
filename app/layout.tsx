import { ColorModeScript } from '@chakra-ui/react'
import type { Metadata, Viewport } from 'next'

import { OverlayScrollbar } from '#components/site/OverlayScrollbar'

import './globals.css'
import { Provider } from './provider'

const SITE_URL = 'https://www.sparenginc.com'

const SITE_DESCRIPTION =
  'Spareng Incorporated supplies precision-engineered Material Handling Equipment and spare parts — conveyor systems, idlers, pulleys, crushers, feeders, and screening equipment for mining, steel, cement, power, sugar, and port operations across India.'

const OG_IMAGE = {
  url: '/spareng-og.png',
  width: 1536,
  height: 1024,
  alt: 'Spareng Incorporated — Precision MHE Spares and Material Handling Equipment',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Spareng Incorporated | Precision MHE Spares & Material Handling Equipment',
    template: '%s | Spareng Incorporated',
  },
  description: SITE_DESCRIPTION,
  applicationName: 'Spareng Incorporated',
  authors: [{ name: 'Spareng Incorporated', url: SITE_URL }],
  creator: 'Spareng Incorporated',
  publisher: 'Spareng Incorporated',
  category: 'Industrial Equipment',
  keywords: [
    'MHE spares',
    'material handling equipment',
    'material handling equipment parts',
    'conveyor systems',
    'belt conveyor',
    'bucket elevator',
    'drag chain conveyor',
    'screw conveyor',
    'conveyor idlers',
    'impact idler',
    'return idler',
    'self-alignment idler',
    'conveyor pulleys',
    'head pulley',
    'tail pulley',
    'magnetic pulley',
    'crusher spares',
    'impact mill',
    'hammer mill',
    'single roll crusher',
    'vibrating feeder',
    'rotary air valve',
    'wet scraper',
    'screening equipment',
    'circular motion screen',
    'flip flow screen',
    'industrial spare parts',
    'mining equipment',
    'cement plant equipment',
    'coal handling equipment',
    'port handling equipment',
    'Spareng',
    'Spareng Incorporated',
    'Hyderabad',
    'Telangana',
    'India',
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Spareng Incorporated',
    title:
      'Spareng Incorporated | Precision MHE Spares & Material Handling Equipment',
    description: SITE_DESCRIPTION,
    url: '/',
    locale: 'en_IN',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Spareng Incorporated | Precision MHE Spares & Material Handling Equipment',
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'geo.region': 'IN-TG',
    'geo.placename': 'Hyderabad',
    'geo.position': '17.4065;78.5691',
    ICBM: '17.4065, 78.5691',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0d1a2a' },
  ],
}

// Light is always the default. The toggle persists user choice in
// localStorage. We never auto-switch from prefers-color-scheme.
const themeInitScript = `
(function () {
  try {
    var t = localStorage.getItem('theme');
    if (t === 'dark') {
      document.documentElement.dataset.theme = 'dark';
      document.documentElement.style.colorScheme = 'dark';
    }
    // Keep Chakra's color-mode locked to light so it never fights us.
    localStorage.setItem('chakra-ui-color-mode', 'light');
  } catch (e) {}
})();
`

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Spareng Incorporated',
  legalName: 'Spareng Incorporated',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/Sparent_INC.png`,
    contentUrl: `${SITE_URL}/Sparent_INC.png`,
  },
  description: SITE_DESCRIPTION,
  foundingLocation: 'Hyderabad, Telangana, India',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot No. E8/C8-2A (24-60/10/II), IDA Uppal',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500039',
    addressCountry: 'IN',
  },
  email: 'ppl@sparenginc.com',
  telephone: ['+91-90001-74999', '+91-99598-93699'],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'ppl@sparenginc.com',
      telephone: '+91-90001-74999',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'ppl@sparenginc.com',
      telephone: '+91-99598-93699',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
  ],
  knowsAbout: [
    'Material Handling Equipment',
    'Bulk Material Handling',
    'Conveyor Systems',
    'Conveyor Idlers',
    'Conveyor Pulleys',
    'Crushing Equipment',
    'Feeding Equipment',
    'Screening Equipment',
  ],
}

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Spareng Incorporated',
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-IN',
}

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" style={{ colorScheme: 'light' }}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </head>
      <body className="chakra-ui-light">
        <ColorModeScript initialColorMode="light" />
        <Provider>{props.children}</Provider>
        <OverlayScrollbar />
      </body>
    </html>
  )
}
