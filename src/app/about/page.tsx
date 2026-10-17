import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Inova Tech",
  description: "Learn about Inova Tech's mission, vision, values, and the team behind our successful digital products.",
};

const values = [
  { icon: "🎯", title: "Clarity Over Complexity",   desc: "We favour simple, well-understood solutions over clever ones. Maintainability is a feature." },
  { icon: "🚀", title: "Bias for Action",            desc: "Ideas are worthless without execution. We move decisively and learn from real feedback." },
  { icon: "🔒", title: "Trust Through Transparency", desc: "No hidden blockers or spin. We share the truth — including the uncomfortable parts." },
  { icon: "♾️", title: "Continuous Improvement",     desc: "Every project ends with a retrospective. Every system has an owner who cares about its quality." },
  { icon: "🌍", title: "Impact at Scale",            desc: "We measure success by how much value we create for our clients' customers — not just deliverables." },
  { icon: "🤝", title: "People First",               desc: "Great products are built by happy, respected teams. We invest in culture, not just code." },
];

const whyChoose = [
  {
    icon: "🏆",
    title: "Proven Track Record",
    desc: "200+ products delivered across fintech, healthcare, logistics, e-commerce, and enterprise SaaS. We've seen what works — and what doesn't.",
  },
  {
    icon: "⚡",
    title: "Speed Without Compromise",
    desc: "Agile two-week sprints, CI/CD pipelines on day one, and automated testing baked into every project. Fast delivery that doesn't cut corners.",
  },
  {
    icon: "🔍",
    title: "Full Transparency",
    desc: "Live project boards, weekly video demos, and direct Slack access to your engineers. You always know exactly where your project stands.",
  },
  {
    icon: "🌐",
    title: "End-to-End Capability",
    desc: "Strategy, UX design, frontend, backend, mobile, cloud, AI, and marketing — all under one roof. No gaps, no hand-offs, no finger-pointing.",
  },
  {
    icon: "🔒",
    title: "Security by Default",
    desc: "OWASP top-10 compliance, encryption at rest and in transit, and regular penetration testing built into every engagement from day one.",
  },
  {
    icon: "🤝",
    title: "Long-Term Relationships",
    desc: "Over 70% of our revenue comes from returning clients. We measure our success by how much your business grows after we launch.",
  },
];

const milestones = [
  { year: "2012", event: "Inova Tech founded as a two-person web agency in London." },
  { year: "2015", event: "Launched our first SaaS product for the healthcare sector. 0 to 5,000 users in 6 months." },
  { year: "2017", event: "Expanded into mobile development. Delivered 20 apps across fintech, retail, and logistics." },
  { year: "2019", event: "Opened our cloud practice. First enterprise transformation engagement with a FTSE 250 company." },
  { year: "2021", event: "Crossed 100 active clients. Team grew to 45 engineers, designers, and strategists." },
  { year: "2023", event: "Launched our AI integration practice. First LLM-powered product shipped in production." },
  { year: "2024", event: "Named one of the fastest-growing tech studios by Clutch. 200+ projects delivered." },
  { year: "2026", event: "Today — serving clients on 5 continents with a passionate team of builders." },
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
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-4">About Inova Tech</p>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
              We Build the
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Digital Future.
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              Inova Tech is a full-service digital innovation studio. We help companies —
              from seed-stage startups to global enterprises — design, build, and scale
              technology that creates real, measurable impact.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative h-72 w-72 rounded-3xl flex items-center justify-center shadow-xl overflow-hidden"
              style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}}>
              <div aria-hidden className="absolute inset-0 opacity-10"
                style={{backgroundImage:"radial-gradient(circle at 30% 30%, white 1px, transparent 1px)",backgroundSize:"28px 28px"}} />
              <Image src="/logo.png" alt="Inova Tech" width={180} height={180} className="object-contain relative z-10" />
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
              with massive engineering budgets. Inova Tech exists to give ambitious businesses — regardless
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
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              These aren&apos;t marketing words — they&apos;re the principles we apply every day in every engagement.
            </p>
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

      {/* ── Why Choose Us ── */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-3">Why Inova Tech</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What Makes Us Different</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              We&apos;ve refined our approach across hundreds of projects. Here&apos;s what clients
              consistently tell us sets us apart.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map(w => (
              <div key={w.title}
                className="group rounded-2xl bg-white border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <span className="text-4xl">{w.icon}</span>
                <h3 className="mt-4 text-base font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>

          {/* Client industries strip */}
          <div className="mt-16 rounded-2xl bg-white border border-gray-100 p-8 shadow-sm">
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase text-center mb-6">
              Industries We Serve
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "FinTech","HealthTech","E-Commerce","Logistics","SaaS",
                "EdTech","Real Estate","Retail","AI / ML","Enterprise",
                "Media","Non-Profit",
              ].map(ind => (
                <span key={ind}
                  className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200 cursor-default">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-3">Our Journey</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Years of Building</h2>
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
              style={{background:"linear-gradient(135deg,#4f7df9,#a855f7)"}}>
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
