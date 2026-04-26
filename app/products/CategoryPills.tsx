'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '#components/site/icons'

import styles from './products.module.css'

export type PillItem = {
  id: string
  number: string
  name: string
}

// y-offset that approximates the bottom edge of the sticky chrome
// (Navbar 124 + pills bar ~58 + buffer 18 ≈ 200)
const STICKY_OFFSET = 200

export function CategoryPills({ items }: { items: PillItem[] }) {
  const params = useSearchParams()
  const urlCategory = params?.get('category') ?? null

  const [activeId, setActiveId] = useState<string>(
    urlCategory && items.some((i) => i.id === urlCategory)
      ? urlCategory
      : items[0]?.id ?? '',
  )
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  // While CategoryScroller is animating to a new target, freeze the active
  // pill on that target so we don't flicker through intermediate sections.
  const lockedTargetRef = useRef<string | null>(null)

  // Sync with URL changes (pill click, footer link, homepage card, etc.).
  useEffect(() => {
    if (!urlCategory) return
    if (!items.some((i) => i.id === urlCategory)) return
    setActiveId(urlCategory)
    lockedTargetRef.current = urlCategory
    const t = window.setTimeout(() => {
      lockedTargetRef.current = null
    }, 1500)
    return () => window.clearTimeout(t)
  }, [urlCategory, items])

  // Update arrow availability based on current scroll state of the pill bar.
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el
      setCanScrollLeft(scrollLeft > 1)
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1)
    }
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    const t = window.setTimeout(update, 200)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      window.clearTimeout(t)
    }
  }, [items])

  // Scrollspy: the active section is the last one in DOM order whose top has
  // crossed below the sticky chrome. This is exactly the section whose
  // header is currently at the top of the visible content area.
  useEffect(() => {
    const elements = items
      .map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }))
      .filter((x): x is { id: string; el: HTMLElement } => x.el !== null)
    if (elements.length === 0) return

    const update = () => {
      if (lockedTargetRef.current) return
      let next = elements[0].id
      for (const { id, el } of elements) {
        const top = el.getBoundingClientRect().top
        if (top - 12 <= STICKY_OFFSET) {
          next = id
        }
      }
      setActiveId((prev) => (prev === next ? prev : next))
    }

    let frameId: number | null = null
    const onScroll = () => {
      if (frameId !== null) return
      frameId = requestAnimationFrame(() => {
        frameId = null
        update()
      })
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    // Re-run after layout settles (image streaming, font swap).
    const tSettle = window.setTimeout(update, 600)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.clearTimeout(tSettle)
      if (frameId !== null) cancelAnimationFrame(frameId)
    }
  }, [items])

  // Keep the active pill in view inside the horizontally-scrolling pill bar.
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    const active = container.querySelector<HTMLElement>(
      `[data-pill-id="${activeId}"]`,
    )
    if (!active) return
    const cRect = container.getBoundingClientRect()
    const aRect = active.getBoundingClientRect()
    const offsetWithinContainer =
      aRect.left - cRect.left + container.scrollLeft
    const target = offsetWithinContainer - (cRect.width - aRect.width) / 2
    container.scrollTo({ left: target, behavior: 'smooth' })
  }, [activeId])

  const scrollByDirection = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth * 0.7
    el.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <div className={styles.pillsBar}>
      <button
        type="button"
        className={`${styles.pillArrow} ${styles.pillArrowLeft}`}
        onClick={() => scrollByDirection('left')}
        aria-label="Scroll categories left"
        disabled={!canScrollLeft}
      >
        <ChevronLeftIcon />
      </button>

      <div className={styles.pillsScroll} ref={scrollRef}>
        <div className={styles.pillsInner}>
          {items.map((c) => (
            <Link
              key={c.id}
              href={`/products?category=${c.id}`}
              data-pill-id={c.id}
              scroll={false}
              prefetch={false}
              className={`${styles.pill} ${activeId === c.id ? styles.pillActive : ''}`}
            >
              <span className={styles.pillNum}>{c.number}</span>
              {c.name}
            </Link>
          ))}
        </div>
      </div>

      <button
        type="button"
        className={`${styles.pillArrow} ${styles.pillArrowRight}`}
        onClick={() => scrollByDirection('right')}
        aria-label="Scroll categories right"
        disabled={!canScrollRight}
      >
        <ChevronRightIcon />
      </button>
    </div>
  )
}
