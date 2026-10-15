import Image from "next/image";
import Link from "next/link";
import FooterYear from "./components/FooterYear";

/* ─── service cards data ─────────────────────────────── */
const services = [
  {
    icon: (
      <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/>
      </svg>
    ),
    bg: "bg-blue-50",
    title: "Websites",
    desc: "Fast, responsive, and SEO-optimised websites built for impact.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    bg: "bg-purple-50",
    title: "Web Applications",
    desc: "Scalable SaaS and enterprise web apps with modern architecture.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
      </svg>
    ),
    bg: "bg-green-50",
    title: "Mobile Apps",
    desc: "Cross-platform iOS & Android apps that users love.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    bg: "bg-orange-50",
    title: "Digital Marketing",
    desc: "Data-driven campaigns that grow your brand and convert leads.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-sky-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
    bg: "bg-sky-50",
    title: "Cloud Solutions",
    desc: "Secure, scalable cloud infrastructure and DevOps pipelines.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-rose-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/><circle cx="18" cy="6" r="3"/>
      </svg>
    ),
    bg: "bg-rose-50",
    title: "AI Integration",
    desc: "Embed intelligent automation and AI into your products.",
  },
];

/* ─── stats ─────────────────────────────────────────── */
const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "80+", label: "Happy Clients" },
  { value: "12+", label: "Years Experience" },
  { value: "99.9%", label: "Uptime SLA" },
];

/* ─── why choose us ─────────────────────────────────── */
const reasons = [
  {
    icon: (
      <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    bg: "bg-blue-50",
    title: "Rapid Delivery",
    desc: "Agile sprints and CI/CD pipelines get your product to market faster.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    bg: "bg-purple-50",
    title: "Security First",
    desc: "Every solution is built with industry-standard security practices.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    bg: "bg-green-50",
    title: "Growth Focused",
    desc: "We design for scale — your tech grows as your business grows.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    bg: "bg-orange-50",
    title: "Dedicated Support",
    desc: "A real team behind every project, available when you need us.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section id="home" className="relative overflow-hidden bg-white">
        {/* subtle light tint — no heavy colour */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-white" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          {/* LEFT: copy */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-blue-600 uppercase">
              Build • Innovate • Transform
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              We Build Digital
              <br />
              Products That Create{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Real Impact.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
              From websites to powerful web &amp; mobile applications, digital
              marketing to cloud solutions — we build technology that helps
              businesses grow, automate and scale.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 hover:from-blue-700 hover:to-purple-700"
              >
                Start Your Project
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="#about"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-blue-600 text-lg ring-1 ring-gray-200 transition-all duration-200 group-hover:ring-blue-300 group-hover:shadow-lg">
                  ▶
                </span>
                Watch Our Story
                <span className="text-xs text-gray-400">2 min</span>
              </Link>
            </div>
          </div>

          {/* RIGHT: logo bg + dashboard card + service badges */}
          <div className="relative hidden lg:flex items-center justify-center min-h-[520px]">

            {/* ── Inova logo as large watermark bg ── */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <Image
                src="/logo.png"
                alt=""
                width={480}
                height={480}
                className="object-contain opacity-[0.07]"
                aria-hidden
              />
            </div>

            {/* ── Dashboard card (centre) ── */}
            <div className="relative z-10 w-[380px] rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                <span className="ml-3 text-white text-xs font-medium">
                  inova.io — Dashboard
                </span>
              </div>
              <div className="p-5">
                <p className="text-base font-bold text-gray-900">Build. Innovate. Grow.</p>
                <p className="text-xs text-gray-500 mb-4">All your digital products in one place.</p>
                <div className="grid grid-cols-4 gap-2 text-center mb-4">
                  {[
                    { v: "32", l: "Projects" },
                    { v: "18", l: "Apps" },
                    { v: "80+", l: "Clients" },
                    { v: "99.9%", l: "Uptime" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-xl bg-blue-50 py-2.5 px-1">
                      <p className="text-sm font-bold text-blue-700">{s.v}</p>
                      <p className="text-[10px] text-gray-500">{s.l}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-gray-50 p-3">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Growth Analytics</p>
                  <div className="flex items-end gap-1 h-14">
                    {[40, 55, 35, 65, 50, 80, 70, 90].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-blue-600 to-purple-500 opacity-80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-xs font-semibold text-green-600">+29% Revenue</p>
                </div>
              </div>
            </div>

            {/* ── Floating service badges with SVG icons ── */}

            {/* Websites */}
            <div className="absolute -top-3 right-4 z-20 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 shadow-xl border border-gray-100 transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5 cursor-default">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 transition-transform duration-200 hover:scale-110">
                <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/>
                </svg>
              </span>
              <span className="text-xs font-semibold text-gray-800">Websites</span>
            </div>

            {/* Web Applications */}
            <div className="absolute top-[90px] -right-14 z-20 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 shadow-xl border border-gray-100 transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5 cursor-default">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-50 transition-transform duration-200 hover:scale-110">
                <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                </svg>
              </span>
              <span className="text-xs font-semibold text-gray-800">Web Applications</span>
            </div>

            {/* Mobile Apps */}
            <div className="absolute top-[210px] -right-10 z-20 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 shadow-xl border border-gray-100 transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5 cursor-default">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 transition-transform duration-200 hover:scale-110">
                <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
                </svg>
              </span>
              <span className="text-xs font-semibold text-gray-800">Mobile Apps</span>
            </div>

            {/* Digital Marketing */}
            <div className="absolute bottom-[110px] -right-14 z-20 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 shadow-xl border border-gray-100 transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5 cursor-default">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 transition-transform duration-200 hover:scale-110">
                <svg className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </span>
              <span className="text-xs font-semibold text-gray-800">Digital Marketing</span>
            </div>

            {/* Cloud Solutions */}
            <div className="absolute bottom-0 right-4 z-20 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 shadow-xl border border-gray-100 transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5 cursor-default">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 transition-transform duration-200 hover:scale-110">
                <svg className="h-5 w-5 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                </svg>
              </span>
              <span className="text-xs font-semibold text-gray-800">Cloud Solutions</span>
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────────── */}
      <section className="bg-white border-y border-gray-100 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="group text-center cursor-default transition-transform duration-200 hover:-translate-y-1">
                <p className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-medium text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section id="services" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] text-blue-600 uppercase mb-2">
              What We Do
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              End-to-End Digital Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              From concept to deployment — we cover every layer of your digital
              product journey.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm cursor-default
                           transition-all duration-300
                           hover:shadow-xl hover:-translate-y-1 hover:border-blue-100"
              >
                <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${s.bg} transition-transform duration-300 group-hover:scale-110`}>
                  {s.icon}
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900 transition-colors duration-200 group-hover:text-blue-600">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{s.desc}</p>
                <span className="mt-4 inline-block text-xs font-semibold text-blue-600 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1">
                  Learn more →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY INOVA ─────────────────────────────────────── */}
      <section id="solutions" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] text-blue-600 uppercase mb-2">
              Why Choose Us
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Built for Modern Businesses
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              We combine technical depth with business understanding to deliver
              solutions that truly move the needle.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="group rounded-2xl bg-white p-8 shadow-sm text-center cursor-default
                           transition-all duration-300
                           hover:shadow-xl hover:-translate-y-1"
              >
                <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${r.bg} transition-transform duration-300 group-hover:scale-110`}>
                  {r.icon}
                </span>
                <h3 className="mt-4 text-base font-bold text-gray-900 transition-colors duration-200 group-hover:text-blue-600">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────── */}
      <section id="about" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-16 lg:grid-cols-2 items-center">
          {/* image side */}
          <div className="relative flex justify-center">
            <div className="h-80 w-80 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl">
              <Image
                src="/logo.png"
                alt="Inova"
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
            {/* accent dot */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-400 opacity-30" />
          </div>
          {/* copy side */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-blue-600 uppercase mb-2">
              About Inova
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl leading-tight">
              Your Technology Partner,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                From Day One.
              </span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Inova is a full-service digital innovation studio. We partner with
              startups, SMEs, and enterprises to design, build, and grow digital
              products that matter. Our multidisciplinary team of engineers,
              designers, and strategists brings your vision to life — on time
              and on budget.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              With over a decade of experience across diverse industries, we
              don&apos;t just write code — we solve real business problems with
              technology.
            </p>
            <Link
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 hover:from-blue-700 hover:to-purple-700"
            >
              Work With Us
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT / CTA ─────────────────────────────────── */}
      <section id="contact" className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.25em] text-blue-600 uppercase mb-2">
              Get In Touch
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Ready to Build Something Great?
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              Tell us about your project and let&apos;s make it happen.
            </p>
          </div>

          <form className="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-sm grid gap-4 sm:grid-cols-2">
            {[
              { placeholder: "Your Name",         type: "text"  },
              { placeholder: "Email Address",      type: "email" },
              { placeholder: "Company (optional)", type: "text"  },
              { placeholder: "Service Needed",     type: "text"  },
            ].map((f) => (
              <input
                key={f.placeholder}
                type={f.type}
                placeholder={f.placeholder}
                className="rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm text-gray-900 placeholder-gray-400
                           outline-none transition-all duration-200
                           hover:border-blue-300 hover:shadow-sm
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            ))}
            <textarea
              placeholder="Tell us about your project…"
              rows={4}
              className="sm:col-span-2 rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm text-gray-900 placeholder-gray-400
                         outline-none resize-none transition-all duration-200
                         hover:border-blue-300 hover:shadow-sm
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
            <button
              type="submit"
              className="sm:col-span-2 group rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-sm font-bold text-white shadow-lg
                         transition-all duration-200
                         hover:shadow-xl hover:-translate-y-0.5 hover:from-blue-700 hover:to-purple-700
                         active:translate-y-0 active:shadow-md"
            >
              Send Message
              <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer className="bg-gray-950 py-10 text-center text-sm text-gray-500">
        <p>© <FooterYear /> Inova. All rights reserved.</p>
        <p className="mt-1">
          Build · Innovate · Transform
        </p>
      </footer>
    </>
  );
}
