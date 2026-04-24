import type { Metadata } from 'next'

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
  cover?: boolean
}

const categories: Category[] = [
  {
    num: '01 — Processing Equipment',
    name: 'Processing Equipment',
    tag: 'Belt Conveyors, Drag Chain Conveyors, Screw Conveyors, and Rotary Air Valves for continuous bulk transport.',
    image: '/Products/belt-conveyor.jpg',
    cover: true,
  },
  {
    num: '02 — Conveyor Idlers',
    name: 'Conveyor Idlers',
    tag: 'Impact, Return, and Self-Alignment Idlers engineered for long-distance and high-impact belt systems.',
    image: '/Products/impact-idler.jpg',
  },
  {
    num: '03 — Conveyor Pulleys',
    name: 'Conveyor Pulleys',
    tag: 'Head, Tail, and Magnetic Pulleys with diamond lagging and heavy-duty bearings for industrial drives.',
    image: '/Products/head-pulley.jpg',
  },
  {
    num: '04 — Crushing Equipment',
    name: 'Crushing Equipment',
    tag: 'Impact Mills, Hammer Mills, and Single Roll Crushers for primary, secondary, and tertiary size reduction.',
    image: '/Products/impact-mill-new.png',
  },
  {
    num: '05 — Feeding Equipment',
    name: 'Feeding Equipment',
    tag: 'Vibrating Feeders, Bucket Elevators, and Wet Scrapers for precise, controlled material flow.',
    image: '/Products/vibrating-feeder.jpg',
  },
  {
    num: '06 — Screening Equipment',
    name: 'Screening Equipment',
    tag: 'Circular Motion Screens and Flip Flow Screens for accurate classification, even on wet, sticky feeds.',
    image: '/Products/circular-motion-screen.png',
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

const PinIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21s-7-7.58-7-12a7 7 0 0 1 14 0c0 4.42-7 12-7 12z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
)
const MailIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export default function TitanPage() {
  return (
    <>
      {/* Manrope font */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
      />
      <div className={styles.root}>
        {/* ---------- NAV ---------- */}
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <img src="/Sparent_INC.png" alt="Spareng" />
          </div>
          <div className={styles.links}>
            <a href="#products">Products</a>
            <a href="#industries">Industries</a>
            <a href="#why">About</a>
            <a href="#contact">Contact</a>
          </div>
          <button className={styles.navCta} type="button">
            Get a Quote
          </button>
        </nav>

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
              <button className={styles.btnPrimary} type="button">
                Get a Quote {ArrowIcon}
              </button>
              <button className={styles.btnOutline} type="button">
                Browse Catalog
              </button>
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
              <div className={styles.card} key={c.name}>
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
              </div>
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
            <button className={styles.ctaBtn} type="button">
              Request a Quote Today {ArrowIcon}
            </button>
            <div className={styles.ctaContact}>
              or email us at info@sparenginc.com
            </div>
          </div>
        </div>

        {/* ---------- FOOTER ---------- */}
        <footer className={styles.footer}>
          <div className={styles.footerGrid}>
            <div>
              <img
                src="/Spareng_INC-dark.png"
                alt="Spareng Incorporated"
                className={styles.footerLogo}
              />
              <p className={styles.footerBrandDesc}>
                Premium Material Handling Equipment spare parts supplier.
                Serving mining, steel, cement, coal handling, and power
                industries from Hyderabad, India.
              </p>
              <div className={styles.footerBrandContact}>
                <span>
                  {PinIcon}
                  Plot No. E8/C8-2A, IDA, UPPAL, Hyderabad 500039, Telangana,
                  India
                </span>
                <span>
                  {MailIcon}
                  info@sparenginc.com
                </span>
              </div>
            </div>
            <div className={styles.footerCol}>
              <h4>Products</h4>
              <a href="#">Processing Equipment</a>
              <a href="#">Conveyor Idlers</a>
              <a href="#">Conveyor Pulleys</a>
              <a href="#">Crushing Equipment</a>
              <a href="#">Feeding Equipment</a>
              <a href="#">Screening Equipment</a>
            </div>
            <div className={styles.footerCol}>
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Industries</a>
              <a href="#">Contact</a>
              <a href="#">Get Quote</a>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <div className={styles.footerCopy}>
              © 2025 Spareng Incorporated. All rights reserved.
            </div>
            <div className={styles.footerTag}>Design · Titan</div>
          </div>
        </footer>
      </div>
    </>
  )
}
