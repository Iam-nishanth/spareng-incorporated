import styles from './Footer.module.css'
import { MailIcon, PhoneIcon, PinIcon } from './icons'

const productLinks = [
  { href: '/products#processing-equipment', label: 'Processing Equipment' },
  { href: '/products#conveyor-idlers', label: 'Conveyor Idlers' },
  { href: '/products#conveyor-pulleys', label: 'Conveyor Pulleys' },
  { href: '/products#crushing-equipment', label: 'Crushing Equipment' },
  { href: '/products#feeding-equipment', label: 'Feeding Equipment' },
  { href: '/products#screening-equipment', label: 'Screening Equipment' },
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
              <a href="mailto:info@sparenginc.com">info@sparenginc.com</a>
            </span>
            <span>
              <PhoneIcon />
              <a href="tel:+914012345678">+91 40 1234 5678</a>
            </span>
          </div>
        </div>

        <div className={styles.linksGroup}>
          <div className={styles.col}>
            <h4>Products</h4>
            {productLinks.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>

          <div className={styles.col}>
            <h4>Company</h4>
            {companyLinks.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
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
