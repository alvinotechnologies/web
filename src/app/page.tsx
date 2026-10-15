import Image from "next/image";
import Link from "next/link";
import { posts } from "./blog/data";

/* ── data ──────────────────────────────────────────────── */
const stats = [
  { value: "200+",  label: "Projects Delivered" },
  { value: "120+",  label: "Happy Clients"       },
  { value: "12+",   label: "Years Experience"    },
  { value: "99.9%", label: "Uptime SLA"          },
];

const services = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/>
      </svg>
    ),
    bg: "bg-blue-50", tc: "text-blue-600",
    title: "Web Development",
    desc: "Pixel-perfect, lightning-fast websites engineered for conversion, Core Web Vitals, and long-term SEO growth.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    bg: "bg-purple-50", tc: "text-purple-600",
    title: "Web Applications & SaaS",
    desc: "Scalable, multi-tenant SaaS platforms and internal tools built on modern cloud-native stacks — MVP to enterprise scale.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
      </svg>
    ),
    bg: "bg-green-50", tc: "text-green-600",
    title: "Mobile App Development",
    desc: "Native-quality iOS & Android apps from a single React Native codebase — offline-first, fast, and delightful.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
    bg: "bg-sky-50", tc: "text-sky-500",
    title: "Cloud & DevOps",
    desc: "AWS, GCP, and Azure managed by certified architects — CI/CD, Kubernetes, zero-downtime deployments, 24/7 monitoring.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    bg: "bg-orange-50", tc: "text-orange-500",
    title: "Digital Marketing & SEO",
    desc: "Technical SEO, paid media, and content strategies built on data — not guesswork. We grow traffic that compounds.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/><circle cx="18" cy="6" r="3"/>
      </svg>
    ),
    bg: "bg-rose-50", tc: "text-rose-500",
    title: "AI & Automation",
    desc: "LLM integration, RAG pipelines, and intelligent automation that reduces manual effort and unlocks new product capabilities.",
  },
];

const whyPoints = [
  {
    title: "We Think Like Founders",
    desc: "Most agencies optimise for hours billed. We optimise for your outcome. Before any work begins, we align on the metrics that actually matter to your business.",
  },
  {
    title: "One Team, Zero Gaps",
    desc: "Strategy, design, engineering, and DevOps — all under one roof. When your product needs to evolve, we don't pass the baton. We own the whole race.",
  },
  {
    title: "Speed With Substance",
    desc: "We move fast without cutting corners. Automated testing, code review, and CI/CD are non-negotiable defaults — not optional add-ons at the end of a sprint.",
  },
  {
    title: "Partners, Not Vendors",
    desc: "We've built long relationships because we care about what happens after launch. Seventy percent of our revenue comes from clients who've been with us for over two years.",
  },
];

const process = [
  { n: "01", title: "Discovery",      desc: "We map your goals, users, and constraints before writing a single line of code." },
  { n: "02", title: "Architecture",   desc: "Technical leads design the stack and delivery plan tailored to your scale." },
  { n: "03", title: "Build & Iterate",desc: "Weekly sprints, continuous deployment — you see real progress every step." },
  { n: "04", title: "Launch",         desc: "We handle go-live, monitoring, and the inevitable post-launch adjustments." },
  { n: "05", title: "Grow",           desc: "Ongoing retainer or clean handoff — we're built for the long relationship." },
];

const testimonials = [
  {
    quote: "Inova took our chaotic MVP and turned it into a platform that's serving 40,000 active users. They're not an agency — they're a genuine engineering partner.",
    name: "Sarah K.", role: "CTO, HealthTech startup", init: "S",
  },
  {
    quote: "The migration from our legacy monolith to microservices was massive. Inova ran it with zero downtime and handed us back a codebase our team actually loves working in.",
    name: "James O.", role: "VP Engineering, FinTech Scale-up", init: "J",
  },
  {
    quote: "Our GPT-4o integration went from idea to production in six weeks. The RAG pipeline they built queries accuracy is at 94% — better than our internal analysts expected.",
    name: "Leila M.", role: "Head of Product, Enterprise SaaS", init: "L",
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

const badgeServices = [
  { label: "Websites",   bg: "bg-blue-50",   tc: "text-blue-600",   icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg> },
  { label: "Web Apps",   bg: "bg-purple-50", tc: "text-purple-600", icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg> },
  { label: "Mobile Apps",bg: "bg-green-50",  tc: "text-green-600",  icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg> },
  { label: "Marketing",  bg: "bg-orange-50", tc: "text-orange-500", icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
  { label: "Cloud",      bg: "bg-sky-50",    tc: "text-sky-500",    icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg> },
];

/* ── component ─────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ════════════════════════════════════════════════════
          HERO  —  white bg, navbar merges into it
      ════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white min-h-screen flex items-center">

        {/* subtle radial wash — very light, no solid blue */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 w-[70%] h-full"
            style={{background:"radial-gradient(ellipse at 80% 40%, rgba(99,102,241,0.07) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)"}} />
          <div className="absolute bottom-0 left-0 w-[40%] h-[50%]"
            style={{background:"radial-gradient(ellipse at 20% 80%, rgba(59,130,246,0.05) 0%, transparent 60%)"}} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

          {/* ── LEFT copy ── */}
          <div className="flex flex-col">
            <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-5">
              Build &nbsp;•&nbsp; Innovate &nbsp;•&nbsp; Transform
            </p>

            <h1 className="text-5xl font-extrabold leading-[1.1] text-gray-900 sm:text-6xl lg:text-[4.2rem]">
              We Build Digital
              <br />
              Products That Create
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Real Impact.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-500">
              From websites to powerful web &amp; mobile applications, digital
              marketing to cloud solutions — we build technology that helps
              businesses grow, automate and scale.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              {/* filled gradient CTA */}
              <Link href="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}}>
                Start Your Project
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>

              {/* play-button secondary */}
              <Link href="/about"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-gray-200 text-indigo-600 transition-all duration-200 group-hover:ring-indigo-400 group-hover:shadow-lg text-base">
                  ▶
                </span>
                <span>
                  Watch Our Story
                  <span className="block text-xs text-gray-400 font-normal">2 min</span>
                </span>
              </Link>
            </div>
          </div>

          {/* ── RIGHT visual ── */}
          <div className="relative hidden lg:flex items-center justify-center min-h-[540px]">

            {/* Large logo watermark — decorative, centre of right column */}
            <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <Image
                src="/logo.png"
                alt=""
                width={420}
                height={420}
                className="object-contain"
                style={{opacity:0.08, filter:"blur(0px)"}}
              />
            </div>

            {/* Dashboard card — sits in front */}
            <div className="relative z-10 w-[360px] rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden">
              {/* titlebar */}
              <div className="px-4 py-2.5 flex items-center gap-1.5 bg-gray-50 border-b border-gray-100">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-3 text-gray-400 text-[11px] font-medium">inova.app — Dashboard</span>
              </div>
              <div className="p-5">
                <p className="text-sm font-bold text-gray-900">Build. Innovate. Grow.</p>
                <p className="text-[11px] text-gray-400 mb-4">All your digital products in one place.</p>
                {/* kpi row */}
                <div className="grid grid-cols-4 gap-2 mb-4 text-center">
                  {[{v:"32",l:"Projects"},{v:"18",l:"Apps"},{v:"80+",l:"Clients"},{v:"99.9%",l:"Uptime"}].map(k=>(
                    <div key={k.l} className="rounded-xl bg-indigo-50 py-2.5 px-1">
                      <p className="text-xs font-extrabold text-indigo-700">{k.v}</p>
                      <p className="text-[9px] text-gray-400 mt-0.5">{k.l}</p>
                    </div>
                  ))}
                </div>
                {/* bar chart */}
                <div className="rounded-xl bg-gray-50 p-3">
                  <p className="text-[11px] font-semibold text-gray-600 mb-2">Growth Analytics</p>
                  <div className="flex items-end gap-1 h-12">
                    {[35,52,38,68,52,82,70,90].map((h,i)=>(
                      <div key={i} className="flex-1 rounded-sm"
                        style={{height:`${h}%`,background:"linear-gradient(to top,#6366f1,#a855f7)"}} />
                    ))}
                  </div>
                  <p className="mt-1.5 text-[11px] font-bold text-emerald-600">+29% Revenue</p>
                </div>
              </div>
            </div>

            {/* service badges — stacked right */}
            <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-center gap-3 pr-2">
              {badgeServices.map(b=>(
                <div key={b.label}
                  className="flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 shadow-lg border border-gray-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl cursor-default w-[170px]">
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${b.bg} ${b.tc} transition-transform duration-200 hover:scale-110`}>
                    {b.icon}
                  </span>
                  <span className="text-xs font-semibold text-gray-800">{b.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5 text-gray-300">
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <span className="h-5 w-px bg-gradient-to-b from-gray-300 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          STATS BAND  —  light gray, gradient text numbers
      ════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 border-y border-gray-100 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {stats.map(s => (
              <div key={s.label} className="group text-center cursor-default transition-transform duration-200 hover:-translate-y-1">
                <p className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-medium text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SERVICES PREVIEW
      ════════════════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-3">What We Build</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              End-to-End Technology Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              Inova covers every phase of the product lifecycle — from design sprints and architecture
              decisions to launch, scaling, and ongoing optimisation.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(s => (
              <Link key={s.title} href="/services"
                className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                {/* hover accent strip */}
                <span className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${s.bg} ${s.tc} transition-transform duration-300 group-hover:scale-110`}>
                  {s.icon}
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900 transition-colors duration-200 group-hover:text-indigo-600">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{s.desc}</p>
                <span className="mt-4 inline-block text-xs font-semibold text-indigo-600 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-md">
              View All Services
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          WHY INOVA  —  light bg, logo visual on right
      ════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-16 lg:grid-cols-2 items-center">
          {/* copy */}
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-3">Why Inova</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl leading-tight">
              We Don&apos;t Just Build.
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                We Grow With You.
              </span>
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Inova was founded on a simple belief: businesses deserve a technology partner
              that measures success the same way they do. Not by lines of code shipped or hours
              logged — but by real, compounding business value delivered.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Over 12 years and 200+ projects across fintech, healthcare, logistics, and e-commerce,
              we&apos;ve refined a model that combines senior engineering talent, honest communication,
              and a genuine stake in your success.
            </p>
            <ul className="mt-8 space-y-5">
              {whyPoints.map(item => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white text-xs font-bold"
                    style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}}>✓</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/solutions"
              className="group mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}}>
              Explore Solutions
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* visual — logo on gradient card */}
          <div className="relative flex justify-center">
            <div className="relative h-80 w-80 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden"
              style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}}>
              {/* bg pattern */}
              <div aria-hidden className="absolute inset-0 opacity-10"
                style={{backgroundImage:"radial-gradient(circle at 30% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 70%, white 1px, transparent 1px)",backgroundSize:"32px 32px"}} />
              <Image src="/logo.png" alt="Inova" width={200} height={200} className="object-contain relative z-10" />
            </div>
            {/* floating accent squares */}
            <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-2xl opacity-20"
              style={{background:"linear-gradient(135deg,#a855f7,#6366f1)"}} />
            <div className="absolute -top-5 -left-5 h-16 w-16 rounded-xl opacity-15"
              style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          HOW WE WORK — process steps
      ════════════════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-3">Our Process</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How We Deliver</h2>
            <p className="mt-4 max-w-xl mx-auto text-gray-500">
              A transparent, repeatable delivery process refined across 200+ engagements.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p,i) => (
              <div key={p.n} className="group relative rounded-2xl bg-gray-50 border border-gray-100 p-7 shadow-sm text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white overflow-hidden">
                {/* connector line */}
                {i < process.length - 1 && (
                  <div aria-hidden className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-gray-200 z-10" />
                )}
                <span className="inline-block text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {p.n}
                </span>
                <h3 className="mt-3 text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-3">Testimonials</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What Our Clients Say</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(t => (
              <div key={t.name}
                className="group rounded-2xl bg-white border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* quote mark */}
                <span className="text-4xl font-serif leading-none bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">&ldquo;</span>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">{t.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full text-white text-sm font-bold shrink-0"
                    style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}}>
                    {t.init}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          BLOG PREVIEW
      ════════════════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-2">Insights</p>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">From the Inova Blog</h2>
              <p className="mt-2 text-gray-500 max-w-xl">
                Engineering deep-dives, product lessons, and AI insights from our team of practitioners.
              </p>
            </div>
            <Link href="/blog"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
              All posts →
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-4 ${tagColors[p.tag] ?? "bg-gray-100 text-gray-600"}`}>
                  {p.tag}
                </span>
                <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-indigo-600 transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-3">{p.excerpt}</p>
                <p className="mt-4 text-xs text-gray-400">{p.date} · {p.read}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center sm:hidden">
            <Link href="/blog" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">All posts →</Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CTA BAND  —  dark, with gradient text
      ════════════════════════════════════════════════════ */}
      <section className="bg-gray-950 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Build Something
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              That Matters?
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Tell us about your idea — we'll respond within one business day.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
              style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}}>
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
