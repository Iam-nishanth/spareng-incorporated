'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'

/**
 * Drives scroll-to-section on the products page based on `?category=<id>`.
 * Uses a robust retry strategy to defeat layout shifts as images stream in:
 *  - immediate scroll
 *  - ResizeObserver re-scrolls on every layout change
 *  - timed retries up to 3.5s
 *  - final retry on window.load
 *  - bails out the moment the user scrolls/keys, so we never fight them
 *
 * On first visit (URL already has the param at mount): instant snap.
 * On subsequent param changes (pill clicks): smooth animate.
 */
export function CategoryScroller() {
  const params = useSearchParams()
  const category = params?.get('category') ?? null
  const isFirstScrollRef = useRef(true)

  useEffect(() => {
    if (!category) {
      isFirstScrollRef.current = false
      return
    }

    let cancelled = false
    let userInterrupted = false
    const isFirst = isFirstScrollRef.current
    isFirstScrollRef.current = false

    const scrollNow = () => {
      if (cancelled || userInterrupted) return
      const el = document.getElementById(category)
      if (!el) return
      el.scrollIntoView({
        block: 'start',
        behavior: isFirst ? 'auto' : 'smooth',
      })
    }

    // Bail out at the first sign of user-initiated scroll input.
    const stop = () => {
      userInterrupted = true
    }
    const userEvents = ['wheel', 'touchstart', 'mousedown'] as const
    userEvents.forEach((ev) =>
      window.addEventListener(ev, stop, { passive: true, once: true }),
    )
    const onKey = (e: KeyboardEvent) => {
      if (
        ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'End', 'Home', ' '].includes(
          e.key,
        )
      ) {
        stop()
      }
    }
    window.addEventListener('keydown', onKey, { once: true })

    // 1. Immediate scroll
    scrollNow()

    // 2. Re-scroll on every layout shift while images stream in
    const ro = new ResizeObserver(() => scrollNow())
    ro.observe(document.documentElement)

    // 3. Belt-and-suspenders timed retries
    const timeouts = [50, 200, 500, 1000, 2000, 3500].map((d) =>
      window.setTimeout(scrollNow, d),
    )

    // 4. Final retry once everything is loaded
    const onLoad = () => scrollNow()
    if (document.readyState !== 'complete') {
      window.addEventListener('load', onLoad, { once: true })
    }

    // 5. Stop observing 4s after mount so we don't fight indefinite shifts
    const stopRO = window.setTimeout(() => ro.disconnect(), 4000)

    return () => {
      cancelled = true
      ro.disconnect()
      timeouts.forEach((t) => window.clearTimeout(t))
      window.clearTimeout(stopRO)
      userEvents.forEach((ev) => window.removeEventListener(ev, stop))
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('load', onLoad)
    }
  }, [category])

  return null
}
