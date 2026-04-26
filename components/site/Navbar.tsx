'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { CloseIcon, MenuIcon } from './icons'
import styles from './Navbar.module.css'

type NavLink = { href: string; label: string }

const links: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
]

const isActive = (pathname: string, href: string) => {
  if (href.startsWith('/#')) return false
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

export function Navbar() {
  const pathname = usePathname() || '/'
  const [open, setOpen] = useState(false)

  // Close menu on route change.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo} aria-label="Spareng — Home">
          <img src="/Sparent_INC.png" alt="Spareng" />
        </Link>

        <div className={styles.links}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(pathname, l.href) ? styles.linkActive : ''}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link href="/contact" className={styles.navCta}>
          Get a Quote
        </Link>

        <button
          type="button"
          className={styles.menuBtn}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div
        className={`${styles.dropdown} ${open ? styles.dropdownOpen : ''}`}
        aria-hidden={!open}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`${styles.dropdownLink} ${
              isActive(pathname, l.href) ? styles.dropdownLinkActive : ''
            }`}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  )
}
