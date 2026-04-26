import { ColorModeScript } from '@chakra-ui/react'

import './globals.css'
import { Provider } from './provider'

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

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" style={{ colorScheme: 'light' }}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* Favicons */}
        {/* <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/manifest.json" />
        <link rel="shortcut icon" href="/static/favicons/favicon.ico" /> */}
        
        {/* Basic SEO */}
        <title>Spareng - MHE Spares, Material Handling Equipment Parts & Industrial Components</title>
        <meta name="description" content="Leading supplier of Material Handling Equipment (MHE) spare parts including conveyor components, crusher spares, pulleys, idlers, and screening equipment. Quality parts for mining, steel, cement, and power industries across India." />
        <meta name="keywords" content="MHE spares, material handling equipment parts, conveyor parts, idlers, pulleys, crusher spares, screen spares, industrial spare parts, mining equipment parts, Spareng, conveyor idlers, material handling components" />
        <meta name="author" content="Spareng" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://spareng.com/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spareng.com/" />
        <meta property="og:site_name" content="Spareng" />
        <meta property="og:title" content="Spareng - MHE Spares & Material Handling Equipment Parts" />
        <meta property="og:description" content="Leading supplier of Material Handling Equipment (MHE) spare parts including conveyor components, crusher spares, and screening equipment for industrial applications." />
        <meta property="og:image" content="https://spareng.com/static/meta/Spareng-Twitter-Card.png" />
        <meta property="og:image:alt" content="Spareng - MHE Spares and Material Handling Equipment Parts" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://spareng.com/" />
        <meta name="twitter:title" content="Spareng - MHE Spares & Material Handling Equipment Parts" />
        <meta name="twitter:description" content="Leading supplier of Material Handling Equipment (MHE) spare parts including conveyor components, crusher spares, and screening equipment." />
        <meta name="twitter:image" content="https://spareng.com/static/meta/Spareng-Twitter-Card.png" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        
        {/* Schema.org JSON-LD */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Spareng",
              "url": "https://spareng.com",
              "logo": "https://spareng.com/static/favicons/favicon.ico",
              "description": "Leading supplier of Material Handling Equipment (MHE) spare parts including conveyor components, crusher spares, and screening equipment",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Sales",
                "availableLanguage": ["en", "hi"]
              },
              "sameAs": []
            })
          }}
        />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Spareng",
              "url": "https://spareng.com",
              "description": "MHE Spares and Material Handling Equipment Parts",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://spareng.com/products/?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="chakra-ui-light">
        <ColorModeScript initialColorMode="light" />
        <Provider>{props.children}</Provider>
      </body>
    </html>
  )
}
