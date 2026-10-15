import Image from "next/image";
import Link from "next/link";
import FooterYear from "./FooterYear";

const links = {
  Company: [
    { label: "About Us", href: "/about"   },
    { label: "Blog",     href: "/blog"    },
    { label: "Contact",  href: "/contact" },
  ],
  Services: [
    { label: "Web Development",   href: "/services" },
    { label: "Mobile Apps",       href: "/services" },
    { label: "Cloud & DevOps",    href: "/services" },
    { label: "Digital Marketing", href: "/services" },
    { label: "AI & Automation",   href: "/services" },
  ],
  Solutions: [
    { label: "Startup Launchpad",    href: "/solutions" },
    { label: "Scale & Optimise",     href: "/solutions" },
    { label: "Enterprise Transform", href: "/solutions" },
    { label: "AI-Powered Products",  href: "/solutions" },
  ],
};

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    hover: "hover:bg-blue-600",
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    hover: "hover:bg-gray-600",
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
    hover: "hover:bg-indigo-600",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* ── Top grid ── */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 pb-12 border-b border-gray-100">

          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/bg.png"
                alt="Inova"
                width={150}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              Inova is a full-service digital innovation studio. We design, build,
              and scale technology that turns ambitious ideas into products people love.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-all duration-200 hover:text-white hover:-translate-y-0.5 ${s.hover}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-8 space-y-2">
              <a href="mailto:hello@inova.io"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors">
                <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                hello@inova.io
              </a>
              <a href="tel:+442079460000"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors">
                <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.1 6.1l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +44 20 7946 0000
              </a>
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-gray-900">
                {group}
              </h3>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-500 hover:text-indigo-600 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-xs text-gray-400">
            © <FooterYear /> Inova Technologies Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <span className="h-1 w-1 rounded-full bg-indigo-500 inline-block" />
            <span className="mx-1">Innovate</span>
            <span className="h-1 w-1 rounded-full bg-indigo-500 inline-block" />
            <span className="mx-1">Build</span>
            <span className="h-1 w-1 rounded-full bg-indigo-500 inline-block" />
            <span className="mx-1">Transform</span>
          </div>
          <div className="flex gap-4 text-xs text-gray-400">
            <Link href="/contact" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-indigo-600 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
