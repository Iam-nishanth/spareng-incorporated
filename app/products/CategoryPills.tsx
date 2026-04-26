'use client'

import { useEffect, useRef, useState } from 'react'

import styles from './products.module.css'

export type PillItem = {
  id: string
  number: string
  name: string
}

export function CategoryPills({ items }: { items: PillItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? '')
  const containerRef = useRef<HTMLDivElement>(null)

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
    const container = containerRef.current
    if (!container) return
    const active = container.querySelector<HTMLElement>(
      `[data-pill-id="${activeId}"]`,
    )
    if (!active) return
    const cRect = container.getBoundingClientRect()
    const aRect = active.getBoundingClientRect()
    const offsetWithinContainer =
      aRect.left - cRect.left + container.scrollLeft
    const target =
      offsetWithinContainer - (cRect.width - aRect.width) / 2
    container.scrollTo({ left: target, behavior: 'smooth' })
  }, [activeId])

  return (
    <div className={styles.pills} ref={containerRef}>
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
  )
}
