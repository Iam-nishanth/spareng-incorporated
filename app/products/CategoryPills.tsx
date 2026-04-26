'use client'

import { useEffect, useRef, useState } from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '#components/site/icons'

import styles from './products.module.css'

export type PillItem = {
  id: string
  number: string
  name: string
}

export function CategoryPills({ items }: { items: PillItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? '')
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Update arrow visibility based on current scroll state.
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
    // Re-check after layout settles (fonts, late style application)
    const t = window.setTimeout(update, 200)

    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      window.clearTimeout(t)
    }
  }, [items])

  // Scrollspy: highlight the section currently in view.
  useEffect(() => {
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el))
    if (els.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )
        if (intersecting[0]) {
          setActiveId(intersecting[0].target.id)
        }
      },
      {
        rootMargin: '-180px 0px -55% 0px',
        threshold: 0,
      },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
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
            <a
              key={c.id}
              href={`#${c.id}`}
              data-pill-id={c.id}
              className={`${styles.pill} ${activeId === c.id ? styles.pillActive : ''}`}
            >
              <span className={styles.pillNum}>{c.number}</span>
              {c.name}
            </a>
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
