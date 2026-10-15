import Image from "next/image";
import Link from "next/link";
import { posts } from "./blog/data";

const stats = [
  { value: "200+",  label: "Projects Delivered" },
  { value: "120+",  label: "Happy Clients"       },
  { value: "12+",   label: "Years Experience"    },
  { value: "99.9%", label: "Uptime SLA"          },
];

const services = [
  {
    icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>,
    bg: "bg-blue-50", tc: "text-blue-600",
    title: "Web Development",
    desc: "Pixel-perfect, lightning-fast websites engineered for conversion, Core Web Vitals performance, and long-term SEO growth.",
  },
  {
    icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
    bg: "bg-purple-50", tc: "text-purple-600",
    title: "Web Applications & SaaS",
    desc: "Scalable, multi-tenant SaaS platforms and internal tools built with modern cloud-native stacks — from MVP to enterprise scale.",
  },
  {
    icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>,
    bg: "bg-green-50", tc: "text-green-600",
    title: "Mobile App Development",
    desc: "Native-quality iOS and Android apps from a single React Native codebase — offline-first, fast, and delightful to use.",
  },
  {
    icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
    bg: "bg-sky-50", tc: "text-sky-600",
    title: "Cloud & DevOps",
    desc: "AWS, GCP, and Azure infrastructure managed by certified architects — CI/CD, Kubernetes, zero-downtime deployments, and 24/7 monitoring.",
  },
  {
    icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    bg: "bg-orange-50", tc: "text-orange-500",
    title: "Digital Marketing & SEO",
    desc: "Technical SEO, paid media, and content strategies built on data — not guesswork. We grow organic traffic that compounds.",
  },
  {
    icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/><circle cx="18" cy="6" r="3"/></svg>,
    bg: "bg-rose-50", tc: "text-rose-500",
    title: "AI & Automation",
    desc: "LLM integration, RAG pipelines, and intelligent workflow automation that measurably reduces manual effort and unlocks new product capabilities.",
  },
];

const whyPoints = [
  {
    title: "Outcome-Driven Engineering",
    desc: "KPIs are agreed before a single line of code is written. We build toward measurable business results, not just deliverables.",
  },
  {
    title: "Full-Stack Ownership",
    desc: "One team owns design, development, infrastructure, and support. No hand-off gaps, no finger-pointing — complete accountability.",
  },
  {
    title: "Transparent Collaboration",
    desc: "Live project boards, weekly demos, and direct Slack access to your assigned engineers. You're never in the dark.",
  },
  {
    title: "Built to Scale from Day One",
    desc: "Every architectural decision accounts for your next 10x growth. We've seen what happens when you don't plan for scale — and we won't let it happen to you.",
  },
];

const latestPosts = posts.slice(0, 3);

const tagColors: Record<string, string> = {
  Engineering: "bg-blue-50 text-blue-600",
  Product:     "bg-purple-50 text-purple-600",
  AI:          "bg-rose-50 text-rose-600",
  Mobile:      "bg-green-50 text-green-600",
  Cloud:       "bg-sky-50 text-sky-600",
};

export default function Home() {
  return (
    <>
      {/* ── HERO — transparent nav overlays ─────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
        {/* gradient mesh */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/20 blur-3xl" />
          <div className="absolute bottom-0 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-purple-600/20 to-blue-600/10 blur-3xl" />
        </div>

        {/* watermark logo */}
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
          <Image src="/logo.png" alt="" width={600} height={600} className="object-contain opacity-[0.04]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-6">
              Build · Innovate · Transform
            </span>
            <h1 className="text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
              We Engineer
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Digital Products
              </span>
              <br />
              That Scale.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
              Inova is a full-service technology studio. We design, build, and grow world-class
              websites, SaaS platforms, mobile apps, and AI-powered systems that help ambitious
              businesses grow faster and operate smarter.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-4 text-sm font-semibold text-white shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:from-blue-700 hover:to-purple-700">
                Start Your Project
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link href="/about"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:border-white/40">
                Our Story
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT dashboard mockup */}
          <div className="relative hidden lg:flex items-center justify-center min-h-[520px]">
            <div className="relative z-10 w-[400px] rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                <span className="ml-3 text-white/80 text-xs font-medium">inova.app — Live Dashboard</span>
              </div>
              <div className="p-6">
                <p className="text-base font-bold text-white">Build. Innovate. Grow.</p>
                <p className="text-xs text-gray-400 mb-5">Real-time overview of your digital ecosystem.</p>
                <div className="grid grid-cols-4 gap-2 text-center mb-5">
                  {[{v:"200+",l:"Projects"},{v:"120+",l:"Clients"},{v:"12+",l:"Years"},{v:"99.9%",l:"Uptime"}].map(s=>(
                    <div key={s.l} className="rounded-xl bg-white/5 border border-white/10 py-2.5 px-1">
                      <p className="text-sm font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{s.v}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{s.l}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <p className="text-xs font-semibold text-gray-300 mb-2">Client Revenue Growth</p>
                  <div className="flex items-end gap-1 h-16">
                    {[30,50,40,65,55,80,72,92].map((h,i)=>(
                      <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-blue-600 to-purple-500" style={{height:`${h}%`}} />
                    ))}
                  </div>
                  <p className="mt-2 text-xs font-semibold text-emerald-400">avg +34% YoY across portfolio</p>
                </div>
              </div>
            </div>

            {/* floating badges */}
            {[
              { label:"Websites",  pos:"-top-4 right-2",      bg:"bg-blue-50",   tc:"text-blue-600",   icon:<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg> },
              { label:"Web Apps",  pos:"top-20 -right-12",    bg:"bg-purple-50", tc:"text-purple-600", icon:<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg> },
              { label:"Mobile",    pos:"top-48 -right-8",     bg:"bg-green-50",  tc:"text-green-600",  icon:<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg> },
              { label:"Marketing", pos:"bottom-28 -right-12", bg:"bg-orange-50", tc:"text-orange-500", icon:<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
              { label:"Cloud",     pos:"bottom-2 right-2",    bg:"bg-sky-50",    tc:"text-sky-500",    icon:<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg> },
            ].map(b=>(
              <div key={b.label} className={`absolute ${b.pos} z-20 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-xl border border-gray-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl cursor-default`}>
                <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${b.bg} ${b.tc}`}>{b.icon}</span>
                <span className="text-xs font-semibold text-gray-800">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <span className="h-6 w-px bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────── */}
      <section className="border-y border-gray-100 bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {stats.map(s => (
              <div key={s.label} className="group text-center cursor-default transition-transform duration-200 hover:-translate-y-1">
                <p className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{s.value}</p>
                <p className="mt-1 text-sm font-medium text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ──────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] text-blue-600 uppercase mb-3">What We Build</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">End-to-End Technology Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              Inova covers every phase of the product lifecycle — from design sprints and architecture
              decisions to launch, scaling, and ongoing optimisation.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(s => (
              <Link key={s.title} href="/services"
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-100">
                <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${s.bg} ${s.tc} transition-transform duration-300 group-hover:scale-110`}>
                  {s.icon}
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900 transition-colors duration-200 group-hover:text-blue-600">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{s.desc}</p>
                <span className="mt-4 inline-block text-xs font-semibold text-blue-600 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-md">
              View All Services
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY INOVA ─────────────────────────────────────── */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-blue-600 uppercase mb-3">Why Inova</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl leading-tight">
              Technology That Moves
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Business Forward.
              </span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              We don't just ship features — we obsess over outcomes. Every engagement starts with
              understanding your business model, competitive landscape, and growth goals before a
              single line of code is written.
            </p>
            <ul className="mt-8 space-y-5">
              {whyPoints.map(item => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold">✓</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/solutions"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:from-blue-700 hover:to-purple-700">
              Explore Solutions
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <div className="relative flex justify-center">
            <div className="h-80 w-80 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl">
              <Image src="/logo.png" alt="Inova" width={180} height={180} className="object-contain" />
            </div>
            <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-400 opacity-20" />
            <div className="absolute -top-4 -left-4 h-20 w-20 rounded-xl bg-gradient-to-br from-blue-400 to-purple-400 opacity-15" />
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ──────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-blue-600 uppercase mb-2">Insights</p>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">From the Inova Blog</h2>
              <p className="mt-2 text-gray-500 max-w-xl">Engineering deep-dives, product lessons, and AI insights from our team of practitioners.</p>
            </div>
            <Link href="/blog" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
              All posts →
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-4 ${tagColors[p.tag] ?? "bg-gray-100 text-gray-600"}`}>{p.tag}</span>
                <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors duration-200">{p.title}</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-3">{p.excerpt}</p>
                <p className="mt-4 text-xs text-gray-400">{p.date} · {p.read}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center sm:hidden">
            <Link href="/blog" className="text-sm font-semibold text-blue-600 hover:text-blue-700">All posts →</Link>
          </div>
        </div>
      </section>

      {/* ── DARK CTA BAND ─────────────────────────────────── */}
      <section className="bg-gray-950 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Build Something
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              That Matters?
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Tell us about your idea. We'll get back within one business day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:from-blue-700 hover:to-purple-700">
              Start a Project
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
            <Link href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:border-white/40">
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
