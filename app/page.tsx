import type { Metadata } from 'next'
import Link from 'next/link'

import { Footer } from '#components/site/Footer'
import { Navbar } from '#components/site/Navbar'

import { HeroImageFader } from './HeroImageFader'
import styles from './titan.module.css'

export const metadata: Metadata = {
  title: 'Spareng — Precision Equipment & Spares for Material Handling Systems',
  description:
    'Premium Material Handling Equipment spare parts — conveyor components, crusher spares, pulleys, idlers, and screening equipment for Mining, Steel, Cement, Power, and Coal Handling industries.',
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
    num: '01 — Processing Equipment',
    name: 'Processing Equipment',
    tag: 'Belt Conveyors, Drag Chain Conveyors, Screw Conveyors, and Rotary Air Valves for continuous bulk transport.',
    image: '/product-images/belt-converyors.png',
    slug: 'processing-equipment',
    cover: true,
  },
  {
    num: '02 — Conveyor Idlers',
    name: 'Conveyor Idlers',
    tag: 'Impact, Return, and Self-Alignment Idlers engineered for long-distance and high-impact belt systems.',
    image: '/product-images/impact-idler.jpg',
    slug: 'conveyor-idlers',
  },
  {
    num: '03 — Conveyor Pulleys',
    name: 'Conveyor Pulleys',
    tag: 'Head, Tail, and Magnetic Pulleys with diamond lagging and heavy-duty bearings for industrial drives.',
    image: '/product-images/head-pulley.png',
    slug: 'conveyor-pulleys',
  },
  {
    num: '04 — Crushing Equipment',
    name: 'Crushing Equipment',
    tag: 'Impact Mills, Hammer Mills, and Single Roll Crushers for primary, secondary, and tertiary size reduction.',
    image: '/product-images/impact-mill.png',
    slug: 'crushing-equipment',
  },
  {
    num: '05 — Feeding Equipment',
    name: 'Feeding Equipment',
    tag: 'Vibrating Feeders, Bucket Elevators, and Wet Scrapers for precise, controlled material flow.',
    image: '/product-images/vibrating-feeder.jpg',
    slug: 'feeding-equipment',
  },
  {
    num: '06 — Screening Equipment',
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
  icon: React.ReactNode
}

const MiningIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 3 21 10" />
    <path d="m10 7 7 7" />
    <path d="M3 21v-6l11-11 6 6L9 21H3z" />
  </svg>
)
const SteelIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 20h20" />
    <path d="M4 20V9l5 3V9l5 3V9l5 3v8" />
    <path d="M9 20v-5" />
    <path d="M14 20v-5" />
    <path d="M4 9V5l3-2 2 2v4" />
  </svg>
)
const CementIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21V10l9-7 9 7v11" />
    <path d="M3 21h18" />
    <circle cx="12" cy="13" r="2.5" />
    <path d="M12 13v8" />
    <path d="M9.8 14.5 7 21" />
    <path d="M14.2 14.5 17 21" />
  </svg>
)
const PowerIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
  </svg>
)
const CoalIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 20h16" />
    <path d="M4 20c0-5 3-9 8-9s8 4 8 9" />
    <circle cx="9" cy="14" r="1.5" />
    <circle cx="14" cy="15" r="1.5" />
    <path d="M12 11V5" />
    <path d="M10 7l2-2 2 2" />
  </svg>
)

const industries: Industry[] = [
  { name: 'Mining', sub: 'Ore & mineral handling', icon: MiningIcon },
  { name: 'Steel Plants', sub: 'Raw material handling', icon: SteelIcon },
  { name: 'Cement', sub: 'Clinker & raw mill', icon: CementIcon },
  { name: 'Power Gen.', sub: 'Coal yard & ash handling', icon: PowerIcon },
  { name: 'Coal Handling', sub: 'Crushing & screening', icon: CoalIcon },
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
      <Navbar />

      {/* ---------- HERO ---------- */}
      <section className={styles.hero}>
          <div className={styles.heroLeft}>
            <div className={styles.eyebrowBadge}>
              MHE Spare Parts Specialist
            </div>
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
              Spareng Incorporated specialises in Bulk Material Handling
              Systems, delivering precision-engineered equipment across Mining,
              Steel, Cement, Power, Sugar, and Port operations.
            </p>
            <div className={styles.heroBtns}>
              <Link href="/contact" className={styles.btnPrimary}>
                Get a Quote {ArrowIcon}
              </Link>
              <Link href="/products" className={styles.btnOutline}>
                Browse Catalog
              </Link>
            </div>
            <div className={styles.heroStats}>
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
            </div>
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
              <a
                href={`/products#${c.slug}`}
                className={styles.card}
                key={c.name}
              >
                <div className={styles.cardAccent} />
                <div
                  className={`${styles.cardImg} ${c.cover ? styles.cardImgCover : ''}`}
                >
                  <img src={c.image} alt={c.name} />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardNum}>{c.num}</div>
                  <h3 className={styles.cardName}>{c.name}</h3>
                  <p className={styles.cardTag}>{c.tag}</p>
                  <span className={styles.cardLink}>
                    View Products {ArrowIcon}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ---------- FEATURES ---------- */}
        <section className={`${styles.sec} ${styles.secAlt}`} id="why">
          <div className={styles.eyebrow}>Why Spareng</div>
          <h2 className={styles.secTitle}>Our Commitment to Quality</h2>
          <p className={styles.secDesc}>
            Every part in our catalog is precision-engineered to perform under
            the harshest industrial conditions.
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
          <p className={styles.secDesc} style={{ marginBottom: 40 }}>
            From Mine to Port, our parts keep critical industries running
            without interruption.
          </p>
          <div className={styles.indGrid}>
            {industries.map((i) => (
              <div className={styles.indItem} key={i.name}>
                <div className={styles.indIcon}>{i.icon}</div>
                <div className={styles.indName}>{i.name}</div>
                <div className={styles.indSub}>{i.sub}</div>
              </div>
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
