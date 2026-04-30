'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import styles from './OverlayScrollbar.module.css'

const HIDE_DELAY_MS = 900
const EDGE_REVEAL_PX = 20
const MIN_THUMB_HEIGHT = 36

export function OverlayScrollbar() {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const thumbRef = useRef<HTMLDivElement | null>(null)
  const hideTimerRef = useRef<number | null>(null)
  const draggingRef = useRef(false)
  const dragOffsetRef = useRef(0)
  const [active, setActive] = useState(false)
  const [dragging, setDragging] = useState(false)

  const update = useCallback(() => {
    const track = trackRef.current
    const thumb = thumbRef.current
    if (!track || !thumb) return
    const docH = document.documentElement.scrollHeight
    const winH = window.innerHeight
    if (docH <= winH + 1) {
      track.style.visibility = 'hidden'
      return
    }
    track.style.visibility = 'visible'
    const ratio = winH / docH
    const thumbH = Math.max(Math.floor(winH * ratio), MIN_THUMB_HEIGHT)
    thumb.style.height = `${thumbH}px`
    const maxScroll = docH - winH
    const scrollTop = window.scrollY || window.pageYOffset
    const maxThumbTop = winH - thumbH
    const top = maxScroll <= 0 ? 0 : (scrollTop / maxScroll) * maxThumbTop
    thumb.style.transform = `translateY(${top}px)`
  }, [])

  const reveal = useCallback(() => {
    setActive(true)
    if (hideTimerRef.current != null) {
      window.clearTimeout(hideTimerRef.current)
    }
    hideTimerRef.current = window.setTimeout(() => {
      hideTimerRef.current = null
      if (!draggingRef.current) setActive(false)
    }, HIDE_DELAY_MS)
  }, [])

  useEffect(() => {
    update()

    const onScroll = () => {
      update()
      reveal()
    }
    const onResize = () => update()
    const onMouseMove = (e: MouseEvent) => {
      if (window.innerWidth - e.clientX <= EDGE_REVEAL_PX) {
        reveal()
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouseMove)

    const ro = new ResizeObserver(() => update())
    ro.observe(document.documentElement)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      ro.disconnect()
      if (hideTimerRef.current != null) {
        window.clearTimeout(hideTimerRef.current)
      }
    }
  }, [update, reveal])

  // Click on the track (but not the thumb) — smooth scroll so the thumb
  // centers on the click point.
  const onTrackMouseDown = (e: React.MouseEvent) => {
    if (e.target === thumbRef.current) return
    const track = trackRef.current
    const thumb = thumbRef.current
    if (!track || !thumb) return
    const rect = track.getBoundingClientRect()
    const clickY = e.clientY - rect.top
    const thumbH = thumb.offsetHeight
    const winH = window.innerHeight
    const docH = document.documentElement.scrollHeight
    const maxScroll = docH - winH
    if (maxScroll <= 0) return
    const targetThumbTop = Math.max(
      0,
      Math.min(clickY - thumbH / 2, winH - thumbH),
    )
    const ratio = (winH - thumbH) === 0 ? 0 : targetThumbTop / (winH - thumbH)
    window.scrollTo({ top: ratio * maxScroll, behavior: 'smooth' })
  }

  // Drag the thumb.
  const onThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const thumb = thumbRef.current
    if (!thumb) return
    const rect = thumb.getBoundingClientRect()
    dragOffsetRef.current = e.clientY - rect.top
    draggingRef.current = true
    if (hideTimerRef.current != null) {
      window.clearTimeout(hideTimerRef.current)
      hideTimerRef.current = null
    }
    setDragging(true)
    setActive(true)
    document.body.style.userSelect = 'none'

    const onMove = (ev: MouseEvent) => {
      const track = trackRef.current
      const t = thumbRef.current
      if (!track || !t) return
      const trackRect = track.getBoundingClientRect()
      const thumbH = t.offsetHeight
      const winH = window.innerHeight
      const docH = document.documentElement.scrollHeight
      const maxScroll = docH - winH
      if (maxScroll <= 0 || winH - thumbH <= 0) return
      const newTop = ev.clientY - trackRect.top - dragOffsetRef.current
      const clamped = Math.max(0, Math.min(newTop, winH - thumbH))
      const ratio = clamped / (winH - thumbH)
      window.scrollTo({ top: ratio * maxScroll })
    }

    const onUp = () => {
      draggingRef.current = false
      setDragging(false)
      document.body.style.userSelect = ''
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      reveal()
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  return (
    <div
      ref={trackRef}
      className={`${styles.track} ${active || dragging ? styles.active : ''} ${
        dragging ? styles.dragging : ''
      }`}
      onMouseDown={onTrackMouseDown}
      aria-hidden="true"
    >
      <div
        ref={thumbRef}
        className={styles.thumb}
        onMouseDown={onThumbMouseDown}
      />
    </div>
  )
}
