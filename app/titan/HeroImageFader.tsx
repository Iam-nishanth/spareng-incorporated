'use client'

import { useEffect, useState } from 'react'

import styles from './titan.module.css'

const images = [
  '/images/machines/heavy-duty-conveyor-belt.jpg',
  '/images/machines/Screening-Washing-Plant-Titanium-Vibrating-Screen-for-River-Sand.avif',
  '/home/bevcon-beltconveyor.webp',
  '/home/conveyor-image.jpg',
]

const INTERVAL_MS = 5000

export function HeroImageFader() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % images.length)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <div className={styles.heroFader}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden={i !== active}
          className={`${styles.heroFaderImg} ${i === active ? styles.heroFaderImgActive : ''}`}
        />
      ))}
    </div>
  )
}
