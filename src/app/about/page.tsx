import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Inova",
  description: "Learn about Inova's mission, vision, values, and the team behind 200+ successful digital products.",
};

const values = [
  { icon: "🎯", title: "Clarity Over Complexity",   desc: "We favour simple, well-understood solutions over clever ones. Maintainability is a feature." },
  { icon: "🚀", title: "Bias for Action",            desc: "Ideas are worthless without execution. We move decisively and learn from real feedback." },
  { icon: "🔒", title: "Trust Through Transparency", desc: "No hidden blockers or spin. We share the truth — including the uncomfortable parts." },
  { icon: "♾",  title: "Continuous Improvement",     desc: "Every project ends with a retrospective. Every system has an owner who cares about its quality." },
  { icon: "🌍", title: "Impact at Scale",            desc: "We measure success by how much value we create for our clients' customers — not just deliverables." },
  { icon: "🤝", title: "People First",               desc: "Great products are built by happy, respected teams. We invest in culture, not just code." },
];

const team = [
  { name: "Aryan Mehta",  role: "Founder & CEO",          bio: "15 years in enterprise software. Previously engineering lead at a Series B fintech. Obsessed with product-market fit." },
  { name: "Priya Nair",   role: "CTO",                    bio: "Former Google engineer. Specialises in distributed systems and high-availability architecture." },
  { name: "Daniel Owusu", role: "Head of Product",        bio: "Shipped 30+ B2B SaaS products. Converts complex user research into elegant product decisions." },
  { name: "Leila Karimi", role: "Head of Design",         bio: "Ex-Figma design advocate. Leads a team of UX/UI designers who believe accessibility is non-negotiable." },
  { name: "Marcus Tan",   role: "Head of Cloud & DevOps", bio: "AWS certified solutions architect. Has migrated 50+ legacy systems to cloud-native infrastructure." },
  { name: "Sofia Rossi",  role: "Head of AI",             bio: "PhD in Machine Learning. Leads Inova's AI practice, specialising in NLP and retrieval-augmented systems." },
];

const milestones = [
  { year: "2012", event: "Inova founded as a two-person web agency in London." },
  { year: "2015", event: "Launched our first SaaS product for the healthcare sector. 0 to 5,000 users in 6 months." },
  { year: "2017", event: "Expanded into mobile development. Delivered 20 apps across fintech, retail, and logistics." },
  { year: "2019", event: "Opened our cloud practice. First enterprise transformation engagement with a FTSE 250 company." },
  { year: "2021", event: "Crossed 100 active clients. Team grew to 45 engineers, designers, and strategists." },
  { year: "2023", event: "Launched our AI integration practice. First LLM-powered product shipped in production." },
  { year: "2024", event: "Named one of Europe's fastest-growing tech studios by Clutch. 200+ projects delivered." },
  { year: "2026", event: "Today — 60 team members across 4 time zones, serving clients on 5 continents." },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* ── Hero ── */}
      <section className="bg-white border-b border-gray-100 py-20 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{background:"radial-gradient(ellipse at 80% 50%, rgba(99,102,241,0.06) 0%, transparent 60%)"}} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-4">About Inova</p>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
              We Build the
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Digital Future.
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              Inova is a full-service digital innovation studio founded in 2012.
              Over 12 years we&apos;ve helped more than 120 companies — from seed-stage startups
              to global enterprises — design, build, and scale technology that creates real,
              measurable impact.
            </p>
          </div>

          {/* ── Dashboard mock ── */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Floating service pills on the right */}
              <div className="absolute -right-4 top-8 flex flex-col gap-3 z-10">
                {["Websites", "Web Apps", "Mobile Apps", "Marketing", "Cloud"].map((s) => (
                  <div key={s} className="rounded-xl bg-white/90 backdrop-blur px-5 py-2.5 text-sm font-semibold text-gray-800 shadow-lg border-2 border-blue-400 whitespace-nowrap">
                    {s}
                  </div>
                ))}
              </div>

              {/* Main dashboard card */}
              <div className="rounded-2xl bg-white shadow-2xl overflow-hidden w-[82%]">
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-50 border-b border-gray-100">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-gray-400 font-medium">inova.app — Dashboard</span>
                </div>

                {/* Dashboard body */}
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-gray-900">Build. Innovate. Grow.</h3>
                  <p className="text-xs text-gray-400 mb-5">All your digital products in one place.</p>

                  {/* Stats row */}
                  <div className="grid grid-cols-4 gap-2 mb-6">
                    {[
                      { value: "32",    label: "Projects" },
                      { value: "18",    label: "Apps"     },
                      { value: "80+",   label: "Clients"  },
                      { value: "99.9%", label: "Uptime"   },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl bg-indigo-50 p-3 text-center">
                        <p className="text-sm font-extrabold text-indigo-600">{s.value}</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Growth Analytics chart */}
                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-xs font-bold text-gray-700 mb-4">Growth Analytics</p>
                    <div className="flex items-end gap-1.5 h-16">
                      {[40, 55, 45, 65, 60, 75, 70, 80].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-purple-600 to-violet-400"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <p className="mt-3 text-xs font-bold text-green-500">+29% Revenue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white border border-gray-100 p-10 shadow-sm hover:shadow-xl transition-all duration-300">
            <span className="inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-bold text-indigo-600 uppercase tracking-widest mb-5">Our Mission</span>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">To democratise world-class technology.</h2>
            <p className="text-gray-600 leading-relaxed">
              We believe exceptional software shouldn&apos;t be the exclusive preserve of companies
              with massive engineering budgets. Inova exists to give ambitious businesses — regardless
              of size — access to the same calibre of product thinking, design craft, and engineering
              rigour as the world&apos;s best tech companies.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Every engagement is shaped by one question: <em>&ldquo;What would this look like if we built it at the highest possible standard?&rdquo;</em>
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-gray-100 p-10 shadow-sm hover:shadow-xl transition-all duration-300">
            <span className="inline-block rounded-full bg-purple-50 px-4 py-1.5 text-xs font-bold text-purple-600 uppercase tracking-widest mb-5">Our Vision</span>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">A world where great ideas find great technology.</h2>
            <p className="text-gray-600 leading-relaxed">
              Too many transformative ideas never reach users because the founders behind them
              couldn&apos;t find a trusted technology partner. We&apos;re building the studio that closes
              that gap — combining deep technical expertise with genuine curiosity about the
              problems our clients are trying to solve.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              By 2030, we aim to have directly contributed to products used by 50 million people worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-3">How We Work</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Core Values</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">These aren&apos;t marketing words — they&apos;re the principles we apply every day in every engagement.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(v => (
              <div key={v.title} className="group rounded-2xl bg-gray-50 border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white">
                <span className="text-3xl">{v.icon}</span>
                <h3 className="mt-4 text-base font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-3">The Team</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Meet the People Behind Inova</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">60 engineers, designers, and strategists united by a love of hard problems and great products.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map(t => (
              <div key={t.name} className="group rounded-2xl bg-white border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-extrabold text-white mb-4"
                  style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}}>
                  {t.name.charAt(0)}
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{t.name}</h3>
                <p className="text-xs font-semibold text-indigo-600 mb-3">{t.role}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-3">Our Journey</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">12 Years of Building</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px opacity-20"
              style={{background:"linear-gradient(to bottom,#6366f1,#a855f7)"}} />
            <div className="space-y-8">
              {milestones.map(m => (
                <div key={m.year} className="relative flex gap-6 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white text-xs font-bold z-10 shadow-lg"
                    style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}}>
                    {m.year.slice(2)}
                  </div>
                  <div className="rounded-2xl bg-gray-50 border border-gray-100 px-6 py-4 shadow-sm flex-1 transition-all duration-300 group-hover:shadow-lg group-hover:border-indigo-100 group-hover:bg-white">
                    <p className="text-xs font-bold text-indigo-600 mb-1">{m.year}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gray-50 border-t border-gray-100 py-20 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Want to build with us?</h2>
          <p className="mt-4 text-gray-500">We&apos;re always looking for ambitious clients and talented team members.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}}>
              Start a Project
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
            <Link href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-8 py-4 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-indigo-300 hover:text-indigo-600">
              Read Our Blog →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
