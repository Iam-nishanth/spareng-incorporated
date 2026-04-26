'use client'

import { useEffect, useState } from 'react'

import { MoonIcon, SunIcon } from './icons'

type Theme = 'light' | 'dark'

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const current =
      (document.documentElement.dataset.theme as Theme) || 'light'
    setTheme(current)
    setMounted(true)
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.dataset.theme = next
    document.documentElement.style.colorScheme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* ignore — private mode etc. */
    }
  }

  // Render a placeholder before mount to keep layout stable; the icon
  // matches the html data-theme that was set by the head script.
  return (
    <button
      type="button"
      className={className}
      onClick={toggle}
      aria-label={
        theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
      }
      aria-pressed={theme === 'dark'}
      suppressHydrationWarning
    >
      {mounted ? (
        theme === 'light' ? (
          <MoonIcon />
        ) : (
          <SunIcon />
        )
      ) : (
        <MoonIcon />
      )}
    </button>
  )
}
