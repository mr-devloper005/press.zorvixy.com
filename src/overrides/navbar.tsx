'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, X, Radio } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const NAVBAR_OVERRIDE_ENABLED = true

export function NavbarOverride() {
  const [open, setOpen] = useState(false)
  const primaryTask = SITE_CONFIG.tasks.find((t) => t.key === 'mediaDistribution') || SITE_CONFIG.tasks[0]

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Press Releases', href: primaryTask?.route || '/directory-press' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[#F2C8DC] bg-[rgba(255,248,245,0.95)] text-[#2A0A1F] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#79155B,#C23373)] text-sm font-black uppercase text-white shadow-[0_6px_20px_rgba(121,21,91,0.3)] transition group-hover:shadow-[0_8px_24px_rgba(194,51,115,0.4)]">
              PZ
            </div>
            <div>
              <p className="text-base font-bold uppercase tracking-[0.12em] text-[#79155B]">press.zorvixy.com</p>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#C23373]">media release network</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  index === 0
                    ? 'rounded-full px-4 py-2 text-sm font-semibold text-[#79155B] transition hover:bg-[#FFF0F7]'
                    : index === 1
                    ? 'rounded-full border border-[#F2C8DC] bg-[#FFF0F7] px-4 py-2 text-sm font-semibold text-[#79155B] transition hover:bg-[#FFE8F2] hover:-translate-y-0.5'
                    : 'rounded-full px-4 py-2 text-sm font-medium text-[#5A2040] transition hover:bg-[#FFF0F7]'
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/search"
              className="rounded-full border border-[#F2C8DC] p-2.5 text-[#79155B] transition hover:bg-[#FFF0F7]"
            >
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(120deg,#79155B,#C23373)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(194,51,115,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(194,51,115,0.4)]"
            >
              <Radio className="h-3.5 w-3.5" />
              Submit Release
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#F2C8DC] text-[#79155B] transition hover:bg-[#FFF0F7] lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="space-y-1 border-t border-[#F2C8DC] py-4 lg:hidden">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2.5 text-sm font-medium text-[#5A2040] transition hover:bg-[#FFF0F7]"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 px-1 pt-3">
              <Link
                href="/search"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full border border-[#F2C8DC] px-3 py-2 text-sm text-[#79155B]"
              >
                <Search className="h-4 w-4" />
                Search
              </Link>
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(120deg,#79155B,#C23373)] px-4 py-2 text-sm font-semibold text-white"
              >
                <Radio className="h-3.5 w-3.5" />
                Submit Release
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Brand gradient bar */}
      <div className="h-[3px] bg-[linear-gradient(90deg,#79155B,#C23373,#F6635C,#FFBA86)]" />
    </header>
  )
}
