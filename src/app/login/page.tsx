import Link from 'next/link'
import { BarChart3, Radio, ArrowRight } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { LOGIN_PAGE_OVERRIDE_ENABLED, LoginPageOverride } from '@/overrides/login-page'

export default function LoginPage() {
  if (LOGIN_PAGE_OVERRIDE_ENABLED) {
    return <LoginPageOverride />
  }

  return (
    <div className="min-h-screen bg-[#FFF8F5] text-[#2A0A1F]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">

          {/* ── Left panel — brand gradient ── */}
          <div
            style={{ background: 'linear-gradient(140deg, #79155B 0%, #C23373 60%, #F6635C 100%)' }}
            className="relative overflow-hidden rounded-[2rem] p-8 text-white shadow-[0_24px_56px_rgba(121,21,91,0.28)]"
          >
            {/* Decorative blobs */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/8 blur-[60px]" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-[#FFBA86]/15 blur-[50px]" />

            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                <Radio className="h-6 w-6" />
              </div>
              <h1 className="mt-6 text-3xl font-black leading-tight tracking-[-0.03em]">
                Sign in to your media distribution workspace
              </h1>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Access your release dashboard, campaign analytics, and publishing tools in one place.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  'Manage release drafts and publish instantly',
                  'Track campaign reach and engagement',
                  'Keep all announcements organized by category',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3.5 text-sm">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FFBA86]/30 text-[#FFBA86]">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right panel — form ── */}
          <div className="rounded-[2rem] border border-[#F2C8DC] bg-white p-8 shadow-[0_20px_48px_rgba(121,21,91,0.09)]">
            {/* Header */}
            <div className="mb-7">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-[#C23373]">Welcome back</span>
              <h2 className="mt-2 text-2xl font-black text-[#2A0A1F]">Sign in to your account</h2>
              <p className="mt-1 text-sm text-[#8B4A6B]">Enter your credentials to continue.</p>
            </div>

            <form className="grid gap-4">
              <div>
                <label className="mb-1.5 block text-xs font-bold text-[#5A2040]">Email address</label>
                <input
                  className="h-12 w-full rounded-xl border border-[#F2C8DC] bg-[#FFF8F5] px-4 text-sm text-[#2A0A1F] placeholder:text-[#C4A0B4] outline-none transition focus:border-[#C23373] focus:ring-2 focus:ring-[#C23373]/15"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold text-[#5A2040]">Password</label>
                <input
                  className="h-12 w-full rounded-xl border border-[#F2C8DC] bg-[#FFF8F5] px-4 text-sm text-[#2A0A1F] placeholder:text-[#C4A0B4] outline-none transition focus:border-[#C23373] focus:ring-2 focus:ring-[#C23373]/15"
                  placeholder="••••••••"
                  type="password"
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[linear-gradient(120deg,#79155B,#C23373)] px-6 text-sm font-bold text-white shadow-[0_10px_28px_rgba(121,21,91,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(194,51,115,0.4)]"
              >
                Sign in
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-5 flex items-center justify-between text-sm text-[#8B4A6B]">
              <Link href="/forgot-password" className="hover:text-[#C23373] transition hover:underline">
                Forgot password?
              </Link>
              <Link href="/register" className="font-bold text-[#79155B] hover:text-[#C23373] transition">
                Create account →
              </Link>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#F2C8DC] bg-[#FFF8F5] px-4 py-3.5">
              <BarChart3 className="mt-0.5 h-4 w-4 shrink-0 text-[#F6635C]" />
              <p className="text-xs leading-5 text-[#5A2040]">
                Secure sign-in for your press media analytics dashboard.
              </p>
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </div>
  )
}
