import Image from "next/image";
import Link from "next/link";
import FooterYear from "./components/FooterYear";

/* ─── service cards data ─────────────────────────────── */
const services = [
  {
    icon: "🌐",
    title: "Websites",
    desc: "Fast, responsive, and SEO-optimised websites built for impact.",
  },
  {
    icon: "💻",
    title: "Web Applications",
    desc: "Scalable SaaS and enterprise web apps with modern architecture.",
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    desc: "Cross-platform iOS & Android apps that users love.",
  },
  {
    icon: "📣",
    title: "Digital Marketing",
    desc: "Data-driven campaigns that grow your brand and convert leads.",
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    desc: "Secure, scalable cloud infrastructure and DevOps pipelines.",
  },
  {
    icon: "🤖",
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
    icon: "🚀",
    title: "Rapid Delivery",
    desc: "Agile sprints and CI/CD pipelines get your product to market faster.",
  },
  {
    icon: "🔒",
    title: "Security First",
    desc: "Every solution is built with industry-standard security practices.",
  },
  {
    icon: "📈",
    title: "Growth Focused",
    desc: "We design for scale — your tech grows as your business grows.",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    desc: "A real team behind every project, available when you need us.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        id="home"
        className="relative overflow-hidden bg-white"
        style={{
          background:
            "linear-gradient(135deg, #f0f4ff 0%, #faf5ff 50%, #ffffff 100%)",
        }}
      >
        {/* decorative blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, #6366f1 0%, #a855f7 50%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          }}
        />

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
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition-opacity"
              >
                Start Your Project →
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center gap-3 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-blue-600 text-lg">
                  ▶
                </span>
                Watch Our Story
                <span className="text-xs text-gray-400">2 min</span>
              </Link>
            </div>
          </div>

          {/* RIGHT: floating service cards */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* dashboard mockup placeholder */}
            <div className="relative z-10 w-[420px] rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-white/40" />
                <span className="h-3 w-3 rounded-full bg-white/40" />
                <span className="h-3 w-3 rounded-full bg-white/40" />
                <span className="ml-3 text-white text-xs font-medium">
                  inova.io — Dashboard
                </span>
              </div>
              <div className="p-5">
                <p className="text-lg font-bold text-gray-900">
                  Build. Innovate. Grow.
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  All your digital products in one place.
                </p>
                <div className="grid grid-cols-4 gap-3 text-center mb-5">
                  {[
                    { v: "32", l: "Projects" },
                    { v: "18", l: "Apps" },
                    { v: "80+", l: "Clients" },
                    { v: "99.9%", l: "Uptime" },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="rounded-xl bg-blue-50 py-3 px-2"
                    >
                      <p className="text-base font-bold text-blue-700">
                        {s.v}
                      </p>
                      <p className="text-[10px] text-gray-500">{s.l}</p>
                    </div>
                  ))}
                </div>
                {/* mini bar chart */}
                <div className="rounded-xl bg-gray-50 p-3">
                  <p className="text-xs font-semibold text-gray-700 mb-2">
                    Growth Analytics
                  </p>
                  <div className="flex items-end gap-1.5 h-16">
                    {[40, 55, 35, 65, 50, 80, 70, 90].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-blue-600 to-purple-500 opacity-80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-xs font-semibold text-green-600">
                    +29% Revenue
                  </p>
                </div>
              </div>
            </div>

            {/* floating service badges */}
            {[
              { label: "Websites", icon: "🌐", pos: "-top-4 -right-6" },
              { label: "Web Apps", icon: "💻", pos: "top-20 -right-10" },
              { label: "Mobile Apps", icon: "📱", pos: "top-44 -right-6" },
              { label: "Marketing", icon: "📣", pos: "bottom-28 -right-10" },
              { label: "Cloud", icon: "☁️", pos: "bottom-4 -right-6" },
            ].map((b) => (
              <div
                key={b.label}
                className={`absolute ${b.pos} flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-lg border border-gray-100 z-20`}
              >
                <span className="text-lg">{b.icon}</span>
                <span className="text-xs font-semibold text-gray-700">
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────────── */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl font-extrabold text-white">{s.value}</p>
                <p className="mt-1 text-sm font-medium text-blue-100">
                  {s.label}
                </p>
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
                className="group rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
              >
                <span className="text-4xl">{s.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY INOVA ─────────────────────────────────────── */}
      <section
        id="solutions"
        className="py-24"
        style={{
          background:
            "linear-gradient(135deg, #f0f4ff 0%, #faf5ff 100%)",
        }}
      >
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
                className="rounded-2xl bg-white p-8 shadow-sm text-center"
              >
                <span className="text-4xl">{r.icon}</span>
                <h3 className="mt-4 text-base font-bold text-gray-900">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {r.desc}
                </p>
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
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition-opacity"
            >
              Work With Us →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT / CTA ─────────────────────────────────── */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-r from-blue-600 to-purple-600"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Build Something Great?
          </h2>
          <p className="mt-4 text-blue-100 text-lg">
            Tell us about your project and let&apos;s make it happen.
          </p>
          <form className="mt-10 grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-xl bg-white/20 px-5 py-3.5 text-white placeholder-blue-200 outline-none focus:bg-white/30 transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="rounded-xl bg-white/20 px-5 py-3.5 text-white placeholder-blue-200 outline-none focus:bg-white/30 transition"
            />
            <input
              type="text"
              placeholder="Company (optional)"
              className="rounded-xl bg-white/20 px-5 py-3.5 text-white placeholder-blue-200 outline-none focus:bg-white/30 transition"
            />
            <input
              type="text"
              placeholder="Service Needed"
              className="rounded-xl bg-white/20 px-5 py-3.5 text-white placeholder-blue-200 outline-none focus:bg-white/30 transition"
            />
            <textarea
              placeholder="Tell us about your project…"
              rows={4}
              className="sm:col-span-2 rounded-xl bg-white/20 px-5 py-3.5 text-white placeholder-blue-200 outline-none focus:bg-white/30 transition resize-none"
            />
            <button
              type="submit"
              className="sm:col-span-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-blue-700 shadow-xl hover:bg-blue-50 transition-colors"
            >
              Send Message →
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
