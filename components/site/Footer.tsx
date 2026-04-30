import Link from 'next/link'

import styles from './Footer.module.css'
import { MailIcon, PhoneIcon, PinIcon } from './icons'

const productLinks = [
  { href: '/products?category=processing-equipment', label: 'Conveying Systems' },
  { href: '/products?category=conveyor-idlers', label: 'Conveyor Idlers' },
  { href: '/products?category=conveyor-pulleys', label: 'Conveyor Pulleys' },
  { href: '/products?category=crushing-equipment', label: 'Crushing Equipment' },
  { href: '/products?category=feeding-equipment', label: 'Feeding Equipment' },
  { href: '/products?category=screening-equipment', label: 'Screening Equipment' },
]

const companyLinks = [
  { href: '/#why', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <img src="/Spareng_INC-dark.png" alt="Spareng Incorporated" />
          <p className={styles.brandDesc}>
            Premium Material Handling Equipment spare parts supplier. Serving
            mining, steel, cement, coal handling, and power industries from
            Hyderabad, India.
          </p>
          <div className={styles.brandContact}>
            <span>
              <PinIcon />
              Plot No. E8/C8-2A, IDA, UPPAL, Hyderabad 500039, Telangana, India
            </span>
            <span>
              <MailIcon />
              <a href="mailto:ppl@sparenginc.com">ppl@sparenginc.com</a>
            </span>
            <span>
              <PhoneIcon />
              <span
                style={{
                  display: 'inline-flex',
                  flexDirection: 'column',
                  lineHeight: 1.6,
                }}
              >
                <a href="tel:+919000174999">+91 90001 74999</a>
                <a href="tel:+919959893699">+91 99598 93699</a>
              </span>
            </span>
          </div>
        </div>

        <div className={styles.linksGroup}>
          <div className={styles.col}>
            <h4>Products</h4>
            {productLinks.map((l) => (
              <Link key={l.label} href={l.href} scroll={false}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className={styles.col}>
            <h4>Company</h4>
            {companyLinks.map((l) =>
              l.href.startsWith('/#') ? (
                <a key={l.label} href={l.href}>
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} href={l.href}>
                  {l.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.copy}>
          © {new Date().getFullYear()} Spareng Incorporated. All rights
          reserved.
        </div>
        <div className={styles.tag}></div>
      </div>
    </footer>
  )
}
