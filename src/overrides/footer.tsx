import Link from 'next/link'
import { Radio, Mail, Globe } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { fetchTaskPosts } from '@/lib/task-data'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'

export const FOOTER_OVERRIDE_ENABLED = true


const getCategoryLabel = (value: string) => {
  const normalized = normalizeCategory(value)
  return CATEGORY_OPTIONS.find((item) => item.slug === normalized)?.name || value
}


export async function FooterOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 200, { allowMockFallback: false })
  const categories = Array.from(
    new Map(
      posts
        .map((post) => {
          const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
          const raw = typeof content.category === 'string' ? content.category.trim() : ''
          if (!raw) return null
          const slug = normalizeCategory(raw)
          return { slug, name: getCategoryLabel(raw) }
        })
        .filter((item): item is { slug: string; name: string } => Boolean(item))
        .map((item) => [item.slug, item])
    ).values()
  ).slice(0, 8)

  const year = new Date().getFullYear()
  const primaryTask = SITE_CONFIG.tasks.find((t) => t.key === 'mediaDistribution') || SITE_CONFIG.tasks[0]

  return (
    <footer className="border-t border-[#F2C8DC] bg-[linear-gradient(180deg,#FFF8F5_0%,#FFF0F7_100%)]">
      {/* Top gradient accent */}
      <div className="h-[3px] bg-[linear-gradient(90deg,#79155B,#C23373,#F6635C,#FFBA86)]" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* Brand column */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 group">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#79155B,#C23373)] text-sm font-black text-white shadow-[0_6px_18px_rgba(121,21,91,0.28)]">
                PZ
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#79155B]">press.zorvixy.com</p>
                <p className="text-xs text-[#C23373]">Media press release platform</p>
              </div>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-[#5A2040]">
              Publish editorial-quality press releases, amplify media reach, and keep your newsroom discoverable — all from one modern platform.
            </p>

            {primaryTask && (
              <Link
                href={primaryTask.route}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(120deg,#79155B,#C23373)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(194,51,115,0.28)] transition hover:-translate-y-0.5"
              >
                <Radio className="h-3.5 w-3.5" />
                Latest Releases
              </Link>
            )}
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#79155B]">Platform</h3>
            <div className="mt-4 space-y-3 text-sm">
              <Link href="/directory-press" className="block text-[#5A2040] hover:text-[#C23373] transition">Press Releases</Link>
              <Link href="/register" className="block text-[#5A2040] hover:text-[#C23373] transition">Submit a Release</Link>
              <Link href="/search" className="block text-[#5A2040] hover:text-[#C23373] transition">Search</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#79155B]">Company</h3>
            <div className="mt-4 space-y-3 text-sm">
              <Link href="/about" className="block text-[#5A2040] hover:text-[#C23373] transition">About Us</Link>
              <Link href="/contact" className="block text-[#5A2040] hover:text-[#C23373] transition">Contact</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#79155B]">Legal & Support</h3>
            <div className="mt-4 space-y-3 text-sm">
              <Link href="/privacy" className="block text-[#5A2040] hover:text-[#C23373] transition">Privacy Policy</Link>
              <Link href="/terms" className="block text-[#5A2040] hover:text-[#C23373] transition">Terms of Service</Link>
              <Link href="/cookies" className="block text-[#5A2040] hover:text-[#C23373] transition">Cookie Policy</Link>
              <Link href="/help" className="block text-[#5A2040] hover:text-[#C23373] transition">Help Center</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-[#F2C8DC] pt-6 text-xs text-[#8B4A6B] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {SITE_CONFIG.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#F6635C]" />
            Built for modern media publishing and press release distribution.
          </p>
        </div>
      </div>
    </footer>
  )
}
