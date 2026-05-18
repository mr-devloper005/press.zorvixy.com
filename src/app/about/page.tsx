import Link from 'next/link'
import { Globe2, LineChart, Newspaper, Users, CheckCircle2, ArrowRight } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const values = [
  {
    icon: Newspaper,
    title: 'Editorial Quality',
    body: 'Every release page is optimized for clear reading, structured information, and media trust.',
  },
  {
    icon: Globe2,
    title: 'Distribution Reach',
    body: 'Campaigns are built to improve discovery across category feeds and search surfaces.',
  },
  {
    icon: LineChart,
    title: 'Measurable Growth',
    body: 'Analytics and reporting help teams understand where visibility improves over time.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    body: 'Designed for founders, in-house comms teams, and agencies running multiple releases.',
  },
]

const milestones = [
  { year: '2023', text: 'Platform launched as a focused media release workspace.' },
  { year: '2024', text: 'Expanded into campaign analytics and category-led distribution.' },
  { year: '2025', text: 'Introduced SaaS-style planning, add-ons, and performance dashboards.' },
  { year: '2026', text: 'Scaled into a full newsroom distribution product for modern teams.' },
]

const differentiators = [
  'Newsroom-style reading layouts for every release',
  'Distribution-aware structure with campaign focus',
  'Fast mobile-friendly browsing for media audiences',
  'UX designed to feel like a product, not a clone template',
  'Real-time analytics and performance tracking',
  'Multi-client support for agencies',
]

export default function AboutPage() {
  return (
    <div className="press-shell min-h-screen text-[#2A0A1F]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Hero */}
        <section className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#F2C8DC] bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#79155B]">
            About Us
          </span>
          <h1 className="mt-5 text-5xl font-black tracking-[-0.03em] text-[#2A0A1F] sm:text-6xl">
            Built for{' '}
            <span className="press-gradient-text">media press release</span>{' '}
            teams
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#5A2040]">
            Press Zorvixy is a media-focused SaaS platform that helps organizations publish better releases, improve reach, and keep newsroom archives discoverable.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/directory-press"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(120deg,#79155B,#C23373)] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_22px_rgba(194,51,115,0.3)] transition hover:-translate-y-0.5"
            >
              Explore Latest Releases
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-[#F2C8DC] bg-white px-6 py-3 text-sm font-bold text-[#79155B] transition hover:bg-[#FFF0F7]"
            >
              Contact Our Team
            </Link>
          </div>
        </section>

        {/* Values */}
        <section className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <article key={v.title} className="press-panel rounded-[1.4rem] p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#79155B,#C23373)] text-white shadow-[0_4px_14px_rgba(121,21,91,0.25)]">
                <v.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-[#2A0A1F]">{v.title}</h2>
              <p className="mt-2 text-sm leading-7 text-[#5A2040]">{v.body}</p>
            </article>
          ))}
        </section>

        {/* Mission + Differentiators */}
        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.8rem] border border-[#F2C8DC] bg-white p-8 shadow-[0_14px_40px_rgba(121,21,91,0.08)]">
            <span className="editorial-label">Our Mission</span>
            <h2 className="mt-4 text-2xl font-black text-[#2A0A1F]">
              Making every announcement count
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#5A2040]">
              We believe media announcements should look credible, perform well in search, and remain easy to discover long after publication.
            </p>
            <p className="mt-3 text-sm leading-7 text-[#5A2040]">
              Instead of generic templates, we deliver an interface tuned for release workflows: publication, distribution, analysis, and iteration.
            </p>
          </div>

          <div className="rounded-[1.8rem] bg-[linear-gradient(135deg,#79155B,#C23373)] p-8 text-white">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFBA86]">
              What makes us different
            </span>
            <h2 className="mt-4 text-2xl font-black">Our edge</h2>
            <ul className="mt-5 space-y-2.5">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FFBA86]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-8 rounded-[1.8rem] border border-[#F2C8DC] bg-white p-8 shadow-[0_14px_40px_rgba(121,21,91,0.08)]">
          <span className="editorial-label">Growth Timeline</span>
          <h2 className="mt-4 text-2xl font-black text-[#2A0A1F]">Our journey</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className="relative rounded-2xl border border-[#F2C8DC] bg-[#FFF8F5] p-5"
              >
                <div className="absolute -top-3 left-5 rounded-full bg-[linear-gradient(120deg,#79155B,#C23373)] px-3 py-1 text-xs font-black text-white shadow-[0_4px_12px_rgba(121,21,91,0.25)]">
                  {m.year}
                </div>
                <p className="mt-3 text-sm leading-6 text-[#5A2040]">{m.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-8 rounded-[2rem] bg-[linear-gradient(135deg,#79155B,#C23373,#F6635C)] p-10 text-center text-white">
          <h2 className="text-3xl font-black">Ready to publish your next release?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/85">
            Join thousands of PR teams and founders who trust Press Zorvixy for their media distribution.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#79155B] shadow-[0_6px_18px_rgba(0,0,0,0.15)] transition hover:-translate-y-0.5"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Talk to Sales
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
