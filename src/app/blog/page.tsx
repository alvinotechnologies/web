import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "./data";

export const metadata: Metadata = {
  title: "Blog — Inova",
  description: "Engineering insights, product lessons, and technology deep-dives from the Inova team.",
};

const tagColors: Record<string, string> = {
  Engineering: "bg-blue-50 text-blue-600",
  Product:     "bg-purple-50 text-purple-600",
  AI:          "bg-rose-50 text-rose-600",
  Mobile:      "bg-green-50 text-green-600",
  Cloud:       "bg-sky-50 text-sky-600",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gray-950 py-20 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase mb-4">Insights</p>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            From the
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Inova Blog</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-lg">
            Engineering deep-dives, product lessons, and technology thinking from our team of 60 practitioners.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group mb-14 grid gap-8 rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 lg:grid-cols-2 block"
          >
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${tagColors[featured.tag] ?? "bg-gray-100 text-gray-600"}`}>
                  {featured.tag}
                </span>
                <span className="text-xs text-gray-400">Featured</span>
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-200 sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white text-xs font-bold shrink-0">
                  {featured.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{featured.author}</p>
                  <p className="text-xs text-gray-400">{featured.authorRole}</p>
                </div>
                <span className="ml-auto text-xs text-gray-400">{featured.date} · {featured.read}</span>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 min-h-[200px]">
              <span className="text-7xl opacity-30">📝</span>
            </div>
          </Link>

          {/* Rest of posts */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map(p => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <span className={`inline-block self-start rounded-full px-3 py-1 text-xs font-semibold mb-4 ${tagColors[p.tag] ?? "bg-gray-100 text-gray-600"}`}>
                  {p.tag}
                </span>
                <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors duration-200 flex-1">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-3">{p.excerpt}</p>
                <div className="mt-5 flex items-center gap-3 pt-5 border-t border-gray-100">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white text-[10px] font-bold shrink-0">
                    {p.author.charAt(0)}
                  </div>
                  <p className="text-xs text-gray-600 font-medium">{p.author}</p>
                  <span className="ml-auto text-xs text-gray-400">{p.read}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gray-950 py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white">Stay in the Loop</h2>
          <p className="mt-4 text-gray-400">Get new posts from the Inova team delivered to your inbox — no spam, ever.</p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" required placeholder="your@email.com"
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all" />
            <button type="submit"
              className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
              Subscribe →
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
