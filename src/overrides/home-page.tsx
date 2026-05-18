import Link from 'next/link'
import {
  ArrowRight, Radio, BarChart3, ShieldCheck,
  Globe2, Zap, CheckCircle2, TrendingUp, Users, Clock,
  Newspaper, Send, Star,
} from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { ContentImage } from '@/components/shared/content-image'
import type { SitePost } from '@/lib/site-connector'

export const HOME_PAGE_OVERRIDE_ENABLED = true

/* ── helpers ── */
function excerpt(text?: string | null, len = 130) {
  const v = (text || '').trim()
  if (!v) return 'Read the full release for the complete update.'
  return v.length > len ? v.slice(0, len - 3).trimEnd() + '…' : v
}

function postImage(post?: SitePost | null) {
  const media = Array.isArray(post?.media) ? post?.media : []
  const url = media.find((m) => typeof m?.url === 'string')?.url
  if (url) return url
  const c = post?.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const imgs = Array.isArray(c.images) ? c.images : []
  const img = imgs.find((i) => typeof i === 'string')
  if (typeof img === 'string') return img
  if (typeof c.logo === 'string') return c.logo
  return 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=80'
}

function postHref(post: SitePost, task: TaskKey = 'mediaDistribution') {
  const route = SITE_CONFIG.tasks.find((t) => t.key === task)?.route || '/directory-press'
  return `${route}/${post.slug}`
}

function postCategory(post: SitePost) {
  const c = post?.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  return typeof c.category === 'string' && c.category ? c.category : 'News'
}

/* ── static data ── */
const stats = [
  { icon: Radio,       label: 'Channels',    value: '120+' },
  { icon: Globe2,      label: 'Countries',   value: '50+' },
  { icon: Newspaper,   label: 'Releases',    value: '10K+' },
  { icon: TrendingUp,  label: 'Avg. Reach',  value: '2M+' },
]

const features = [
  { icon: Zap,         title: 'Instant Publishing',      body: 'Go from draft to live in minutes with our streamlined editorial workflow.' },
  { icon: TrendingUp,  title: 'Performance Analytics',   body: 'Track views, shares, and media pickups with real-time dashboards.' },
  { icon: Globe2,      title: 'Wide Distribution',       body: 'Reach journalists and media outlets across 120+ channels worldwide.' },
  { icon: Users,       title: 'Team Collaboration',      body: 'Built for PR agencies, in-house comms teams, and solo founders.' },
  { icon: ShieldCheck, title: 'Editorial Trust',         body: 'Every release is formatted for credibility, readability, and SEO.' },
  { icon: Clock,       title: '24/7 Newsroom',           body: 'Your releases stay discoverable and indexed around the clock.' },
]

const testimonials = [
  {
    quote: 'Press Zorvixy helped us announce our product launch with a clean release page and measurable pickup in under 24 hours.',
    name: 'Sarah Mitchell',
    role: 'Head of Communications, Vantage Tech',
    initials: 'SM',
    color: '#79155B',
  },
  {
    quote: 'The platform feels like a real SaaS product, not a basic blog template. Our team can publish and iterate quickly.',
    name: 'James Okafor',
    role: 'PR Manager, Meridian Group',
    initials: 'JO',
    color: '#C23373',
  },
  {
    quote: 'We run multiple client campaigns and the release workflow, search visibility, and analytics are exactly what we needed.',
    name: 'Laura Chen',
    role: 'Agency Director, Clearline Media',
    initials: 'LC',
    color: '#F6635C',
  },
]

const faqItems = [
  { q: 'How quickly can a release go live?',    a: 'Most releases can be published within minutes after final review and formatting.' },
  { q: 'Do plans include analytics?',           a: 'Yes. Every paid plan includes dashboard-level visibility for reach, clicks, and campaign activity.' },
  { q: 'Can we target categories and beats?',   a: 'You can assign categories and organize distribution by topic to improve discovery.' },
  { q: 'Is this suitable for agencies?',        a: 'Yes. The platform supports recurring campaigns, multi-client releases, and scalable newsroom management.' },
  { q: 'What formats are supported?',           a: 'Standard press releases, product launches, funding announcements, event notices, and executive profiles.' },
]

/* ── component ── */
export async function HomePageOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 18, { fresh: true })
  const featured  = posts[0]
  const heroCards = posts.slice(1, 4)
  const topGrid   = posts.slice(1, 7)
  const moreGrid  = posts.slice(7, 13)

  return (
    <div className="min-h-screen bg-[#FFF8F5] text-[#2A0A1F]">
      <NavbarShell />
      <main>

        {/* ══════════════════════════════════════
            HERO — full-bleed split with mesh bg
        ══════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-[#FFF8F5]">
          {/* Decorative mesh */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -left-40 -top-40 h-[700px] w-[700px] rounded-full bg-[#79155B]/10 blur-[140px]" />
            <div className="absolute -right-20 top-0 h-[500px] w-[500px] rounded-full bg-[#FFBA86]/20 blur-[100px]" />
            <div className="absolute bottom-0 left-1/3 h-[400px] w-[600px] rounded-full bg-[#C23373]/8 blur-[120px]" />
            {/* Grid lines */}
            <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#79155B" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-24">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">

              {/* ── Left copy ── */}
              <div>
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-[#F2C8DC] bg-white px-4 py-2 shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-[#F6635C] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#79155B]">Live Media Release Network</span>
                </div>

                {/* Headline */}
                <h1 className="mt-7 text-[3.4rem] font-black leading-[1.02] tracking-[-0.04em] sm:text-[4.2rem]">
                  The world's{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 press-gradient-text">press release</span>
                    <span className="absolute -bottom-1 left-0 right-0 h-3 rounded-full bg-[#FFBA86]/30 -z-0" />
                  </span>
                  {' '}platform
                </h1>

                <p className="mt-6 max-w-lg text-lg leading-8 text-[#5A2040]/80">
                  Publish editorial-quality releases, reach journalists across 120+ channels, and track every campaign — all from one powerful newsroom.
                </p>

                {/* CTAs */}
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    href="/directory-press"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-[linear-gradient(120deg,#79155B,#C23373)] px-8 py-4 text-sm font-bold text-white shadow-[0_12px_32px_rgba(121,21,91,0.35)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(194,51,115,0.45)]"
                  >
                    Browse Releases
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/register"
                    className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#79155B]/20 bg-white px-8 py-4 text-sm font-bold text-[#79155B] transition hover:border-[#79155B]/40 hover:bg-[#FFF0F7]"
                  >
                    <Send className="h-4 w-4 text-[#F6635C]" />
                    Submit a Release
                  </Link>
                </div>

                {/* Trust pills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {['Live in minutes', 'Editorial-grade formatting', 'SEO optimised'].map((item) => (
                    <span key={item} className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#F2C8DC] px-3 py-1.5 text-xs font-semibold text-[#5A2040] shadow-sm">
                      <CheckCircle2 className="h-3 w-3 text-[#F6635C]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── Right visual ── */}
              <div className="relative">
                {/* Main image card */}
                <div className="relative overflow-hidden rounded-[2.2rem] shadow-[0_32px_80px_rgba(121,21,91,0.2)]">
                  <div className="relative aspect-[4/3]">
                    <ContentImage
                      src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=80"
                      alt="Media newsroom"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A0A1F]/80 via-[#2A0A1F]/20 to-transparent" />
                  </div>
                  {/* Overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F6635C] px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      Newsroom Live
                    </span>
                    <p className="mt-3 text-xl font-black leading-tight text-white">
                      Launch smarter with editorial-grade publishing and real-time analytics.
                    </p>
                  </div>
                </div>

                {/* Floating stat card — top right */}
                <div className="absolute -right-4 -top-4 rounded-2xl border border-[#F2C8DC] bg-white p-4 shadow-[0_12px_32px_rgba(121,21,91,0.14)]">
                  <p className="text-2xl font-black text-[#79155B]">120+</p>
                  <p className="text-xs font-semibold text-[#8B4A6B]">Media Channels</p>
                </div>

                {/* Floating mini release cards */}
                <div className="absolute -bottom-6 -left-4 w-64 space-y-2">
                  {heroCards.slice(0, 2).map((post) => (
                    <Link
                      key={post.id}
                      href={postHref(post)}
                      className="flex items-start gap-3 rounded-2xl border border-[#F2C8DC] bg-white p-3 shadow-[0_8px_24px_rgba(121,21,91,0.1)] transition hover:-translate-y-0.5"
                    >
                      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl">
                        <ContentImage src={postImage(post)} alt="" fill className="object-cover" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#F6635C]">{postCategory(post)}</span>
                        <p className="line-clamp-1 text-xs font-semibold text-[#2A0A1F]">{post.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Stats bar ── */}
            <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="group relative overflow-hidden rounded-2xl border border-[#F2C8DC] bg-white p-6 text-center shadow-sm transition hover:shadow-[0_12px_32px_rgba(121,21,91,0.1)] hover:-translate-y-0.5">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,#79155B/3,transparent)] opacity-0 transition group-hover:opacity-100" />
                  <s.icon className="mx-auto h-5 w-5 text-[#C23373]" />
                  <p className="mt-3 text-3xl font-black text-[#79155B]">{s.value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-[#8B4A6B]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            BREAKING NEWS TICKER
        ══════════════════════════════════════ */}
        <div className="relative overflow-hidden bg-[linear-gradient(90deg,#79155B,#C23373,#F6635C)] py-3.5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-5">
              <span className="shrink-0 rounded-full bg-white/20 px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                Breaking
              </span>
              <p className="truncate text-sm font-semibold text-white/95">
                {featured?.title || 'Latest press releases and media announcements — updated in real time.'}
              </p>
              <Link href="/directory-press" className="ml-auto shrink-0 inline-flex items-center gap-1 text-xs font-bold text-[#FFBA86] transition hover:text-white">
                View all <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            FEATURED RELEASE — magazine hero
        ══════════════════════════════════════ */}
        {featured && (
          <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-6 w-1.5 rounded-full bg-[linear-gradient(180deg,#79155B,#C23373)]" />
                <span className="text-xs font-black uppercase tracking-[0.22em] text-[#79155B]">Featured Release</span>
              </div>
              <Link href="/directory-press" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C23373] transition hover:text-[#79155B]">
                All releases <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <Link href={postHref(featured)} className="group block overflow-hidden rounded-[2rem] shadow-[0_24px_64px_rgba(121,21,91,0.14)] transition hover:shadow-[0_32px_80px_rgba(121,21,91,0.2)]">
              <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                {/* Image */}
                <div className="relative min-h-[320px] overflow-hidden lg:min-h-[480px]">
                  <ContentImage
                    src={postImage(featured)}
                    alt={featured.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#FFF8F5] hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A0A1F]/60 to-transparent lg:hidden" />
                  {/* Category pill */}
                  <span className="absolute left-5 top-5 rounded-full bg-[#79155B] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-lg">
                    {postCategory(featured)}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center bg-white p-8 lg:p-12">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C23373]">
                    <Star className="h-3.5 w-3.5 fill-[#FFBA86] text-[#FFBA86]" />
                    Editor's Pick
                  </span>
                  <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.02em] text-[#2A0A1F] transition group-hover:text-[#79155B] lg:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#5A2040]">
                    {excerpt(featured.summary, 200)}
                  </p>
                  <div className="mt-8 inline-flex items-center gap-2 font-bold text-[#79155B]">
                    Read full release
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* ══════════════════════════════════════
            TOP RELEASES — 3-col editorial grid
        ══════════════════════════════════════ */}
        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-6 w-1.5 rounded-full bg-[linear-gradient(180deg,#C23373,#F6635C)]" />
            <span className="text-xs font-black uppercase tracking-[0.22em] text-[#79155B]">Latest Press Releases</span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topGrid.map((post, i) => (
              <Link
                key={post.id}
                href={postHref(post)}
                className={`group overflow-hidden rounded-[1.6rem] border border-[#F2C8DC] bg-white shadow-[0_8px_24px_rgba(121,21,91,0.07)] transition hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(121,21,91,0.14)] ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <ContentImage
                    src={postImage(post)}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A0A1F]/50 via-transparent to-transparent" />
                  {/* Category */}
                  <span className="absolute left-3 top-3 rounded-full bg-[#79155B]/90 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                    {postCategory(post)}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="line-clamp-2 text-base font-black leading-snug text-[#2A0A1F] transition group-hover:text-[#79155B]">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#5A2040]/80">
                    {excerpt(post.summary)}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C23373]">
                      Read more <ArrowRight className="h-3 w-3" />
                    </span>
                    <span className="text-[10px] font-semibold text-[#8B4A6B]">Press Release</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════
            FEATURES — alternating with big number
        ══════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#79155B,#C23373)] py-20 text-white">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#FFBA86]/10" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#FFBA86]">
                Why Press Zorvixy
              </span>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] sm:text-5xl">
                Everything your PR team needs
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/75">
                From startup announcements to enterprise campaigns — publication, distribution, and reporting in one place.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-white/10 bg-white/8 p-6 backdrop-blur-sm transition hover:bg-white/15 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-[#FFBA86] transition group-hover:bg-white/25">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-black">{f.title}</h3>
                      <p className="mt-1.5 text-sm leading-6 text-white/70">{f.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            MORE RELEASES — compact list + cards
        ══════════════════════════════════════ */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-6 w-1.5 rounded-full bg-[linear-gradient(180deg,#F6635C,#FFBA86)]" />
              <span className="text-xs font-black uppercase tracking-[0.22em] text-[#79155B]">More Releases</span>
            </div>
            <Link href="/directory-press" className="inline-flex items-center gap-1.5 rounded-full border border-[#F2C8DC] bg-white px-4 py-2 text-xs font-bold text-[#79155B] transition hover:bg-[#FFF0F7]">
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {moreGrid.map((post) => (
              <Link
                key={post.id}
                href={postHref(post)}
                className="group flex gap-4 rounded-2xl border border-[#F2C8DC] bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(121,21,91,0.1)]"
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                  <ContentImage
                    src={postImage(post)}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#F6635C]">{postCategory(post)}</span>
                  <h3 className="mt-1 line-clamp-2 text-sm font-bold leading-snug text-[#2A0A1F] transition group-hover:text-[#79155B]">
                    {post.title}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#C23373]">
                    Read <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════
            TESTIMONIALS — staggered cards
        ══════════════════════════════════════ */}
        <section className="bg-[linear-gradient(180deg,#FFF8F5,#FFF0F7)] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F2C8DC] bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#79155B] shadow-sm">
                <Star className="h-3.5 w-3.5 fill-[#FFBA86] text-[#FFBA86]" />
                Trusted by PR teams worldwide
              </span>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] text-[#2A0A1F]">
                What our customers say
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <article
                  key={t.name}
                  className={`relative overflow-hidden rounded-[1.6rem] p-7 shadow-[0_12px_36px_rgba(121,21,91,0.1)] transition hover:-translate-y-1 ${i === 1 ? 'bg-[linear-gradient(140deg,#79155B,#C23373)] text-white md:-translate-y-4' : 'border border-[#F2C8DC] bg-white'}`}
                >
                  {/* Quote mark */}
                  <div className={`text-6xl font-black leading-none ${i === 1 ? 'text-white/20' : 'text-[#F2C8DC]'}`}>"</div>
                  {/* Stars */}
                  <div className="mt-1 flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className={`h-3.5 w-3.5 fill-current ${i === 1 ? 'text-[#FFBA86]' : 'text-[#FFBA86]'}`} />
                    ))}
                  </div>
                  <p className={`mt-4 text-sm leading-7 ${i === 1 ? 'text-white/90' : 'text-[#5A2040]'}`}>
                    {t.quote}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-black text-white shadow-md"
                      style={{ background: i === 1 ? 'rgba(255,255,255,0.25)' : `linear-gradient(135deg, ${t.color}, #C23373)` }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className={`text-sm font-bold ${i === 1 ? 'text-white' : 'text-[#2A0A1F]'}`}>{t.name}</p>
                      <p className={`text-xs ${i === 1 ? 'text-[#FFBA86]' : 'text-[#8B4A6B]'}`}>{t.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            FAQ + CTA — side by side
        ══════════════════════════════════════ */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">

            {/* FAQ */}
            <div>
              <div className="flex items-center gap-3 mb-7">
                <div className="h-6 w-1.5 rounded-full bg-[linear-gradient(180deg,#79155B,#C23373)]" />
                <span className="text-xs font-black uppercase tracking-[0.22em] text-[#79155B]">FAQ</span>
              </div>
              <h2 className="text-3xl font-black tracking-[-0.02em] text-[#2A0A1F]">Frequently asked questions</h2>
              <div className="mt-7 space-y-3">
                {faqItems.map((item, i) => (
                  <details key={item.q} className="group rounded-2xl border border-[#F2C8DC] bg-white shadow-sm open:border-[#C23373]/30 open:shadow-[0_8px_24px_rgba(121,21,91,0.08)]">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4">
                      <span className="text-sm font-bold text-[#2A0A1F]">{item.q}</span>
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFF0F7] text-[#C23373] text-xs font-black transition group-open:bg-[#79155B] group-open:text-white">
                        {i + 1}
                      </span>
                    </summary>
                    <p className="border-t border-[#F2C8DC] px-5 py-4 text-sm leading-7 text-[#5A2040]">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className="sticky top-24">
              <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(140deg,#79155B,#C23373,#F6635C)] p-9 text-white shadow-[0_24px_64px_rgba(121,21,91,0.3)]">
                {/* Decorative */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/8" />
                <div className="pointer-events-none absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-[#FFBA86]/15" />

                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#FFBA86]">
                  Get started free
                </span>
                <h3 className="mt-5 text-3xl font-black leading-tight">
                  Ready to amplify your next announcement?
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/80">
                  Share your campaign goals and our team will help map your release strategy, targeting, and rollout timing.
                </p>

                {/* Mini stats */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { v: '120+', l: 'Channels' },
                    { v: '10K+', l: 'Releases' },
                    { v: '50+',  l: 'Countries' },
                    { v: '2M+',  l: 'Avg. Reach' },
                  ].map((s) => (
                    <div key={s.l} className="rounded-xl border border-white/15 bg-white/10 p-3 text-center">
                      <p className="text-xl font-black">{s.v}</p>
                      <p className="text-[10px] font-semibold text-white/70">{s.l}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3">
                  <Link
                    href="/register"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-black text-[#79155B] shadow-[0_6px_20px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5"
                  >
                    <Send className="h-4 w-4" />
                    Submit a Release
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Talk to Experts
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            BOTTOM BANNER
        ══════════════════════════════════════ */}
        <section
          style={{ background: 'linear-gradient(135deg, #79155B 0%, #C23373 55%, #F6635C 100%)' }}
          className="relative overflow-hidden"
        >
          {/* Soft glow blobs */}
          <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-white/5 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 h-[450px] w-[450px] rounded-full bg-white/5 blur-[100px]" />

          <div className="relative mx-auto max-w-5xl px-6 py-16 text-center sm:px-8 lg:px-12">

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2.5">
              <Newspaper className="h-4 w-4 text-[#FFBA86]" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-white">Start Today</span>
            </div>

            {/* Headline */}
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-black leading-[1.1] tracking-[-0.02em] text-white sm:text-4xl">
              Your story deserves
              <br />
              <span className="text-[#FFBA86]">to be heard</span>
            </h2>

            {/* Subtext */}
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/80">
              From startup announcements to enterprise campaigns — publication, distribution, and reporting in one place.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/directory-press"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#79155B] shadow-[0_10px_28px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,0,0,0.28)]"
              >
                Browse All Releases
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/15 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/25"
              >
                <Send className="h-4 w-4 text-[#FFBA86]" />
                Submit a Release
              </Link>
            </div>

            {/* Divider */}
            <div className="mx-auto mt-10 h-px w-32 bg-white/20" />

            {/* Trust stats row */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-10">
              {[
                { value: '120+', label: 'Media Channels' },
                { value: '50+',  label: 'Countries' },
                { value: '10K+', label: 'Releases Published' },
                { value: '2M+',  label: 'Avg. Reach' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-black text-white">{s.value}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">{s.label}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
