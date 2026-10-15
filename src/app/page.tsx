import Image from "next/image";
import Link from "next/link";
import FooterYear from "./components/FooterYear";

/* ─── service cards ──────────────────────────────────── */
const services = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/>
      </svg>
    ),
    accent: "#6366f1",
    accentBg: "#eef2ff",
    title: "Websites",
    desc: "Fast, responsive, and SEO-optimised websites built for impact.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    accent: "#8b5cf6",
    accentBg: "#f5f3ff",
    title: "Web Applications",
    desc: "Scalable SaaS and enterprise web apps with modern architecture.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
      </svg>
    ),
    accent: "#10b981",
    accentBg: "#ecfdf5",
    title: "Mobile Apps",
    desc: "Cross-platform iOS & Android apps that users love.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    accent: "#f59e0b",
    accentBg: "#fffbeb",
    title: "Digital Marketing",
    desc: "Data-driven campaigns that grow your brand and convert leads.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
    accent: "#0ea5e9",
    accentBg: "#f0f9ff",
    title: "Cloud Solutions",
    desc: "Secure, scalable cloud infrastructure and DevOps pipelines.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/><circle cx="18" cy="6" r="3"/>
      </svg>
    ),
    accent: "#f43f5e",
    accentBg: "#fff1f2",
    title: "AI Integration",
    desc: "Embed intelligent automation and AI into your products.",
  },
];

/* ─── stats ──────────────────────────────────────────── */
const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "80+",  label: "Happy Clients" },
  { value: "12+",  label: "Years Experience" },
  { value: "99.9%",label: "Uptime SLA" },
];

/* ─── why choose us ──────────────────────────────────── */
const reasons = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    accent: "#6366f1",
    accentBg: "#eef2ff",
    title: "Rapid Delivery",
    desc: "Agile sprints and CI/CD pipelines get your product to market faster.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    accent: "#8b5cf6",
    accentBg: "#f5f3ff",
    title: "Security First",
    desc: "Every solution is built with industry-standard security practices.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    accent: "#10b981",
    accentBg: "#ecfdf5",
    title: "Growth Focused",
    desc: "We design for scale — your tech grows as your business grows.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    accent: "#f59e0b",
    accentBg: "#fffbeb",
    title: "Dedicated Support",
    desc: "A real team behind every project, available when you need us.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section id="home" className="relative overflow-hidden bg-gray-50">
        {/* subtle noise texture overlay */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#f1f5f9_0%,_transparent_70%)]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">

          {/* LEFT: copy */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase">
              Build • Innovate • Transform
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              We Build Digital
              <br />
              Products That Create{" "}
              <span className="text-gray-900 underline decoration-wavy decoration-gray-300">
                Real Impact.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-500">
              From websites to powerful web &amp; mobile applications, digital
              marketing to cloud solutions — we build technology that helps
              businesses grow, automate and scale.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-gray-700 hover:shadow-xl hover:-translate-y-0.5"
              >
                Start Your Project
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="#about"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-gray-600 transition-colors duration-200 hover:text-gray-900"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-gray-700 text-base ring-1 ring-gray-200 transition-all duration-200 group-hover:ring-gray-400 group-hover:shadow-lg">
                  ▶
                </span>
                Watch Our Story
                <span className="text-xs text-gray-400">2 min</span>
              </Link>
            </div>
          </div>

          {/* RIGHT: logo watermark + dashboard card + service badges */}
          <div className="relative hidden lg:flex items-center justify-center min-h-[520px]">

            {/* Inova logo watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <Image
                src="/logo.png"
                alt=""
                width={480}
                height={480}
                className="object-contain opacity-[0.06]"
                aria-hidden
              />
            </div>

            {/* Dashboard card */}
            <div className="relative z-10 w-[380px] rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-900 px-5 py-3 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-3 text-gray-400 text-xs font-medium">inova.io — Dashboard</span>
              </div>
              <div className="p-5">
                <p className="text-base font-bold text-gray-900">Build. Innovate. Grow.</p>
                <p className="text-xs text-gray-400 mb-4">All your digital products in one place.</p>
                <div className="grid grid-cols-4 gap-2 text-center mb-4">
                  {[
                    { v: "32",    l: "Projects" },
                    { v: "18",    l: "Apps" },
                    { v: "80+",   l: "Clients" },
                    { v: "99.9%", l: "Uptime" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-xl bg-gray-50 py-2.5 px-1 border border-gray-100">
                      <p className="text-sm font-bold text-gray-900">{s.v}</p>
                      <p className="text-[10px] text-gray-400">{s.l}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-gray-50 p-3 border border-gray-100">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Growth Analytics</p>
                  <div className="flex items-end gap-1 h-14">
                    {[40, 55, 35, 65, 50, 80, 70, 90].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-gray-800 opacity-80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-xs font-semibold text-emerald-600">+29% Revenue</p>
                </div>
              </div>
            </div>

            {/* Floating service badges */}
            {[
              {
                label: "Websites", pos: "-top-3 right-4",
                color: "#6366f1", bg: "#eef2ff",
                icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>,
              },
              {
                label: "Web Applications", pos: "top-[90px] -right-14",
                color: "#8b5cf6", bg: "#f5f3ff",
                icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
              },
              {
                label: "Mobile Apps", pos: "top-[210px] -right-10",
                color: "#10b981", bg: "#ecfdf5",
                icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>,
              },
              {
                label: "Digital Marketing", pos: "bottom-[110px] -right-14",
                color: "#f59e0b", bg: "#fffbeb",
                icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
              },
              {
                label: "Cloud Solutions", pos: "bottom-0 right-4",
                color: "#0ea5e9", bg: "#f0f9ff",
                icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
              },
            ].map((b) => (
              <div
                key={b.label}
                className={`absolute ${b.pos} z-20 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 shadow-lg border border-gray-100 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 cursor-default`}
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-200 hover:scale-110"
                  style={{ background: b.bg, color: b.color }}
                >
                  {b.icon}
                </span>
                <span className="text-xs font-semibold text-gray-800">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────────── */}
      <section className="bg-gray-900 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="group text-center cursor-default transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="text-4xl font-extrabold text-white transition-colors duration-200 group-hover:text-gray-300">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-medium text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section id="services" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase mb-2">
              What We Do
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              End-to-End Digital Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              From concept to deployment — we cover every layer of your digital product journey.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm cursor-default
                           transition-all duration-300
                           hover:shadow-2xl hover:-translate-y-1 hover:border-transparent"
                style={{"--accent": s.accent} as React.CSSProperties}
              >
                {/* hover left border highlight */}
                <span
                  className="absolute left-0 top-6 bottom-6 w-1 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: s.accent }}
                />
                <span
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: s.accentBg, color: s.accent }}
                >
                  {s.icon}
                </span>
                <h3
                  className="mt-4 text-lg font-bold text-gray-900 transition-colors duration-200"
                  style={{}}
                >
                  <span className="group-hover:text-[var(--accent)]">{s.title}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{s.desc}</p>
                <span
                  className="mt-4 inline-block text-xs font-semibold opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1"
                  style={{ color: s.accent }}
                >
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
            <p className="text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase mb-2">
              Why Choose Us
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Built for Modern Businesses
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              We combine technical depth with business understanding to deliver solutions that truly move the needle.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="group rounded-2xl bg-white p-8 shadow-sm text-center cursor-default
                           transition-all duration-300
                           hover:shadow-xl hover:-translate-y-1"
              >
                <span
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rounded-xl"
                  style={{ background: r.accentBg, color: r.accent }}
                >
                  {r.icon}
                </span>
                <h3 className="mt-4 text-base font-bold text-gray-900 transition-colors duration-200 group-hover:text-gray-700">
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
          <div className="relative flex justify-center">
            <div className="h-80 w-80 rounded-3xl bg-gray-900 flex items-center justify-center shadow-2xl ring-1 ring-gray-800">
              <Image
                src="/logo.png"
                alt="Inova"
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-gray-200 opacity-60" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase mb-2">
              About Inova
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl leading-tight">
              Your Technology Partner,{" "}
              <span className="underline decoration-wavy decoration-gray-300">
                From Day One.
              </span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Inova is a full-service digital innovation studio. We partner with startups, SMEs, and
              enterprises to design, build, and grow digital products that matter. Our multidisciplinary
              team of engineers, designers, and strategists brings your vision to life — on time and on budget.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              With over a decade of experience across diverse industries, we don&apos;t just write code —
              we solve real business problems with technology.
            </p>
            <Link
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-gray-700 hover:shadow-xl hover:-translate-y-0.5"
            >
              Work With Us
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT / CTA ─────────────────────────────────── */}
      <section id="contact" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase mb-2">
              Get In Touch
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Ready to Build Something Great?
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              Tell us about your project and let&apos;s make it happen.
            </p>
          </div>

          <form className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 grid gap-4 sm:grid-cols-2">
            {[
              { placeholder: "Your Name",         type: "text",  span: "" },
              { placeholder: "Email Address",      type: "email", span: "" },
              { placeholder: "Company (optional)", type: "text",  span: "" },
              { placeholder: "Service Needed",     type: "text",  span: "" },
            ].map((f) => (
              <input
                key={f.placeholder}
                type={f.type}
                placeholder={f.placeholder}
                className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-sm text-gray-900 placeholder-gray-400
                           outline-none transition-all duration-200
                           hover:border-gray-300 hover:bg-white
                           focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
              />
            ))}
            <textarea
              placeholder="Tell us about your project…"
              rows={4}
              className="sm:col-span-2 rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-sm text-gray-900 placeholder-gray-400
                         outline-none resize-none transition-all duration-200
                         hover:border-gray-300 hover:bg-white
                         focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
            />
            <button
              type="submit"
              className="sm:col-span-2 group rounded-full bg-gray-900 px-8 py-4 text-sm font-bold text-white shadow-lg
                         transition-all duration-200
                         hover:bg-gray-700 hover:shadow-xl hover:-translate-y-0.5
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
        <p className="mt-1 text-gray-600">Build · Innovate · Transform</p>
      </footer>
    </>
  );
}
