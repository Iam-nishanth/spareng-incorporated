'use client'

import { useEffect } from 'react'

/**
 * Hash anchor scrolling for static-export Next.js pages.
 *
 * On a fresh navigation (plain `<a href="/products/#section">`) the browser
 * does its default hash scroll. But that fires before late-loading images
 * cause layout shifts, so the section can drift downward and we end up
 * landing one section too high.
 *
 * This component re-scrolls every time the document's overall height changes
 * (ResizeObserver fires on each image-load layout shift), then disengages
 * once everything is settled — or as soon as the user scrolls manually so
 * we never fight them.
 */
export function HashScroller() {
  useEffect(() => {
    if (!window.location.hash || window.location.hash.length < 2) {
      // Still wire hashchange for in-page anchor clicks.
      const onHashChange = () => smoothScrollToHash()
      window.addEventListener('hashchange', onHashChange)
      return () => window.removeEventListener('hashchange', onHashChange)
    }

    let stopped = false

    const jumpToHash = () => {
      if (stopped) return
      const hash = window.location.hash
      if (!hash || hash.length < 2) return
      const id = decodeURIComponent(hash.slice(1))
      const el = document.getElementById(id)
      if (!el) return
      el.scrollIntoView({ behavior: 'auto', block: 'start' })
    }

    // Bail out when the user starts scrolling on their own — never fight them.
    const stop = () => {
      stopped = true
    }
    const userScrollEvents = ['wheel', 'touchstart', 'mousedown'] as const
    const onUserKey = (e: KeyboardEvent) => {
      if (
        ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'End', 'Home', ' '].includes(
          e.key,
        )
      ) {
        stop()
      }
    }
    userScrollEvents.forEach((ev) =>
      window.addEventListener(ev, stop, { passive: true, once: true }),
    )
    window.addEventListener('keydown', onUserKey)

    // Initial scroll right after mount.
    jumpToHash()

    // Re-scroll on every layout shift (image load, font swap, etc.) — this
    // is what catches the off-by-one when later sections grow taller.
    const ro = new ResizeObserver(() => jumpToHash())
    ro.observe(document.documentElement)

    // Belt-and-suspenders timed retries.
    const timeouts = [50, 200, 500, 1000, 2000, 3500].map((d) =>
      window.setTimeout(jumpToHash, d),
    )

    // Final retry once everything (images, fonts, stylesheets) is loaded.
    const onLoad = () => jumpToHash()
    if (document.readyState !== 'complete') {
      window.addEventListener('load', onLoad, { once: true })
    }

    // Stop the resize observer 4 seconds after mount so we don't keep
    // fighting late shifts forever (e.g. rotating hero fader that loops).
    const stopRO = window.setTimeout(() => ro.disconnect(), 4000)

    // Smooth scroll for in-page hash changes after mount.
    const onHashChange = () => smoothScrollToHash()
    window.addEventListener('hashchange', onHashChange)

    return () => {
      stopped = true
      ro.disconnect()
      timeouts.forEach((t) => window.clearTimeout(t))
      window.clearTimeout(stopRO)
      userScrollEvents.forEach((ev) =>
        window.removeEventListener(ev, stop),
      )
      window.removeEventListener('keydown', onUserKey)
      window.removeEventListener('load', onLoad)
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  return null
}

function smoothScrollToHash() {
  const hash = window.location.hash
  if (!hash || hash.length < 2) return
  const id = decodeURIComponent(hash.slice(1))
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
