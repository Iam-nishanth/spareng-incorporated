import type { Metadata } from 'next'
import Link from 'next/link'

import { Footer } from '#components/site/Footer'
import { Navbar } from '#components/site/Navbar'

import { HeroImageFader } from './HeroImageFader'
import styles from './titan.module.css'

const HOME_DESCRIPTION =
  'Spareng Incorporated supplies precision-engineered Material Handling Equipment and spare parts — conveyors, idlers, pulleys, crushers, feeders, and screens for mining, steel, cement, power, sugar, and port operations across India.'

export const metadata: Metadata = {
  title:
    'Precision Equipment & Spares for Material Handling Systems | Spareng Incorporated',
  description: HOME_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Spareng Incorporated | Precision MHE Spares',
    description: HOME_DESCRIPTION,
    url: '/',
    type: 'website',
  },
  twitter: {
    title: 'Spareng Incorporated | Precision MHE Spares',
    description: HOME_DESCRIPTION,
  },
}

const SITE_URL = 'https://www.sparenginc.com'

const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  name: 'Spareng Incorporated',
  url: SITE_URL,
  image: `${SITE_URL}/Sparent_INC.png`,
  logo: `${SITE_URL}/Sparent_INC.png`,
  email: 'info@sparenginc.com',
  description: HOME_DESCRIPTION,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot No. E8/C8-2A (24-60/10/II), IDA Uppal',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500039',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 17.4065,
    longitude: 78.5691,
  },
  areaServed: [
    { '@type': 'Country', name: 'India' },
    'Mining',
    'Steel Plants',
    'Cement',
    'Power Generation',
    'Sugar',
    'Ports',
  ],
}

type Category = {
  num: string
  name: string
  tag: string
  image: string
  slug: string
  cover?: boolean
}

const categories: Category[] = [
  {
    num: '01 / Conveying Systems',
    name: 'Conveying Systems',
    tag: 'Belt Conveyors, Bucket Elevators, Drag Chain Conveyors, and Screw Conveyors for continuous bulk transport.',
    image: '/home/converyors-home.jpeg',
    slug: 'processing-equipment',
    cover: true,
  },
  {
    num: '02 / Conveyor Idlers',
    name: 'Conveyor Idlers',
    tag: 'Impact, Return, and Self-Alignment Idlers engineered for long-distance and high-impact belt systems.',
    image: '/product-images/impact-idler.jpg',
    slug: 'conveyor-idlers',
  },
  {
    num: '03 / Conveyor Pulleys',
    name: 'Conveyor Pulleys',
    tag: 'Head, Tail, and Magnetic Pulleys with diamond lagging and heavy-duty bearings for industrial drives.',
    image: '/product-images/head-pulley.png',
    slug: 'conveyor-pulleys',
  },
  {
    num: '04 / Crushing Equipment',
    name: 'Crushing Equipment',
    tag: 'Impact Mills, Hammer Mills, and Single Roll Crushers for primary, secondary, and tertiary size reduction.',
    image: '/product-images/impact-mill.png',
    slug: 'crushing-equipment',
  },
  {
    num: '05 / Feeding Equipment',
    name: 'Feeding Equipment',
    tag: 'Vibrating Feeders, Rotary Air Valves, and Wet Scrapers for precise, controlled material flow.',
    image: '/product-images/vibrating-feeder.jpg',
    slug: 'feeding-equipment',
  },
  {
    num: '06 / Screening Equipment',
    name: 'Screening Equipment',
    tag: 'Circular Motion Screens and Flip Flow Screens for accurate classification, even on wet, sticky feeds.',
    image: '/product-images/circular-motion-screen.png',
    slug: 'screening-equipment',
  },
]

type Feature = {
  num: string
  title: string
  desc: string
  icon: React.ReactNode
}

const ShieldIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)
const PriceTagIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <circle cx="7" cy="7" r="1.5" />
  </svg>
)
const CertIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="9" r="6" />
    <path d="M12 3v12" />
    <path d="m8.5 13.5-2 7L12 18l5.5 2.5-2-7" />
  </svg>
)
const TruckIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 18V6H3v12h11z" />
    <path d="M14 9h4l3 3v6h-7" />
    <circle cx="7" cy="20" r="2" />
    <circle cx="17" cy="20" r="2" />
  </svg>
)

const features: Feature[] = [
  {
    num: '01',
    title: 'Premium Quality',
    desc: 'Precision-engineered parts built for harsh industrial conditions and continuous duty cycles.',
    icon: ShieldIcon,
  },
  {
    num: '02',
    title: 'Cost Effective',
    desc: 'Competitive pricing on genuine MHE spares with volume discounts for bulk orders.',
    icon: PriceTagIcon,
  },
  {
    num: '03',
    title: 'Safety Compliant',
    desc: 'All parts meet international safety standards and industry quality certifications.',
    icon: CertIcon,
  },
  {
    num: '04',
    title: 'Fast Delivery',
    desc: 'Quick dispatch, nationwide delivery, and dedicated post-sale technical support.',
    icon: TruckIcon,
  },
]

type Industry = {
  name: string
  sub: string
  image: string
}

const industries: Industry[] = [
  {
    name: 'Mining',
    sub: 'Ore & Mineral Handling',
    image: '/images/industries/mining-systems.jpg',
  },
  {
    name: 'Steel Plants',
    sub: 'Raw Material Handling',
    image: '/images/industries/steel-industry.jpg',
  },
  {
    name: 'Cement',
    sub: 'Clinker & Raw Mill',
    image: '/images/industries/cement.jpg',
  },
  {
    name: 'Power Generation',
    sub: 'Coal Yard & Ash Handling',
    image: '/images/industries/power-generation.jpg',
  },
  {
    name: 'Sugar',
    sub: 'Crystal Sizing & Bagasse',
    image: '/images/industries/sugar-process.png',
  },
  {
    name: 'Ports',
    sub: 'High Capacity Conveyor Spares for Ports',
    image: '/images/industries/port-handling.jpg',
  },
]

const ArrowIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

export default function TitanPage() {
  return (
    <div className={styles.root}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <Navbar />

      {/* ---------- HERO ---------- */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.eyebrowBadge}>MHE Spare Parts Specialist</div>
          <h1 className={styles.heroTitle}>
            Precision Equipment
            <br />
            and Spares for
            <br />
            <strong>Material Handling</strong>
            <br />
            Systems
          </h1>
          <p className={styles.heroDesc}>
            Spareng Incorporated specialises in Bulk Material Handling Systems,
            delivering precision-engineered equipment across Mining, Steel,
            Cement, Power, Sugar, and Port operations.
          </p>
          <div className={styles.heroBtns}>
            <Link href="/contact" className={styles.btnPrimary}>
              Get a Quote {ArrowIcon}
            </Link>
            <Link href="/products" className={styles.btnOutline}>
              Browse Catalog
            </Link>
          </div>
          {/*<div className={styles.heroStats}>
            <div className={styles.hstat}>
              <div className={styles.hstatNum}>200+</div>
              <div className={styles.hstatLabel}>Products</div>
            </div>
            <div className={styles.hstat}>
              <div className={styles.hstatNum}>6</div>
              <div className={styles.hstatLabel}>Categories</div>
            </div>
            <div className={styles.hstat}>
              <div className={styles.hstatNum}>5+</div>
              <div className={styles.hstatLabel}>Industries</div>
            </div>
          </div>*/}
        </div>
        <div className={styles.heroRight}>
          <HeroImageFader />
          <div className={styles.heroRightOverlay} />
        </div>
      </section>

      <div className={styles.accentStrip} />

      {/* ---------- PRODUCTS ---------- */}
      <section className={styles.sec} id="products">
        <div className={styles.eyebrow}>Product Catalog</div>
        <h2 className={styles.secTitle}>Our Product Categories</h2>
        <p className={styles.secDesc}>
          Discover our complete range of high-performance material handling
          systems and precision-engineered spare parts built for continuous
          industrial duty.
        </p>
        <div className={styles.prodGrid}>
          {categories.map((c) => (
            <Link
              href={`/products?category=${c.slug}`}
              className={styles.card}
              key={c.name}
              scroll={false}
            >
              <div className={styles.cardAccent} />
              <div
                className={`${styles.cardImg} ${c.cover ? styles.cardImgCover : ''}`}
              >
                <img src={c.image} alt={c.name} />
              </div>
              <div className={styles.cardBody}>
                {/*{/*<div className={styles.cardNum}>{c.num}</div>*/}
                <h3 className={styles.cardName}>{c.name}</h3>
                <p className={styles.cardTag}>{c.tag}</p>
                <span className={styles.cardLink}>
                  View Products {ArrowIcon}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- FEATURES ---------- */}
      <section className={`${styles.sec} ${styles.secAlt}`} id="why">
        <div className={styles.eyebrow}>Why Spareng</div>
        <h2 className={styles.secTitle}>Our Commitment to Quality</h2>
        <p className={styles.secDesc}>
          Every part in our catalog is precision-engineered to perform under the
          harshest industrial conditions.
        </p>
        <div className={styles.featGrid}>
          {features.map((f) => (
            <div className={styles.feat} key={f.num}>
              <div className={styles.featNum}>{f.num}</div>
              <div className={styles.featIcon}>{f.icon}</div>
              <h3 className={styles.featTitle}>{f.title}</h3>
              <p className={styles.featDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- INDUSTRIES ---------- */}
      <section className={styles.sec} id="industries">
        <div className={styles.eyebrow}>Sectors</div>
        <h2 className={styles.secTitle}>Industries We Serve</h2>
        <p className={styles.secDesc} style={{ marginBottom: 48 }}>
          From mine to port, our equipment and spares keep critical industries
          running without interruption. Engineered for the heat, dust, and duty
          cycles each sector demands.
        </p>
        <div className={styles.indGrid}>
          {industries.map((i) => (
            <article className={styles.indCard} key={i.name}>
              <img src={i.image} alt={i.name} className={styles.indImg} />
              <span className={styles.indOverlay} />
              <div className={styles.indContent}>
                <p className={styles.indSub}>{i.sub}</p>
                <h3 className={styles.indName}>{i.name}</h3>
                <span className={styles.indBar} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- CTA BAND ---------- */}
      <div className={styles.ctaBand} id="contact">
        <div>
          <h2>
            Ready to Source
            <br />
            Quality MHE Spares?
          </h2>
        </div>
        <div>
          <p>
            Get a competitive quote from our engineering team. Genuine parts,
            fast turnaround, and nationwide delivery from Hyderabad.
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            Request a Quote Today {ArrowIcon}
          </Link>
          <div className={styles.ctaContact}>
            or email us at info@sparenginc.com
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
