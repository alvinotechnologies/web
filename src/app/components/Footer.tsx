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
<<<<<<< HEAD
    href: "https://www.linkedin.com/company/inova-tech-solutions/?viewAsMember=true",
=======
    href: "#",
>>>>>>> d30fc797484088e7431e9bbf8caca2e0324df77d
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    hover: "hover:bg-blue-600",
  },
  {
<<<<<<< HEAD
    label: "Instagram",
    href: "https://www.instagram.com/inova_tech_solution?mdxt=MWFxMWJ5bm45aG5kcg==",
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
    hover: "hover:bg-pink-600",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/918925246499",
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
    hover: "hover:bg-green-600",
=======
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
>>>>>>> d30fc797484088e7431e9bbf8caca2e0324df77d
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
<<<<<<< HEAD
        {/* ── Top grid ── */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 pb-12 border-b border-gray-100">
=======

        {/* ── Top grid ── */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 pb-12 border-b border-gray-100">

>>>>>>> d30fc797484088e7431e9bbf8caca2e0324df77d
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
<<<<<<< HEAD
=======

>>>>>>> d30fc797484088e7431e9bbf8caca2e0324df77d
            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
<<<<<<< HEAD
                  target="_blank"
                  rel="noopener noreferrer"
=======
>>>>>>> d30fc797484088e7431e9bbf8caca2e0324df77d
                  aria-label={s.label}
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-all duration-200 hover:text-white hover:-translate-y-0.5 ${s.hover}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
<<<<<<< HEAD
            {/* Contact */}
            <div className="mt-8 space-y-2">
              <a href="mailto:information.inova@gmail.com"
=======

            {/* Contact */}
            <div className="mt-8 space-y-2">
              <a href="mailto:hello@inova.io"
>>>>>>> d30fc797484088e7431e9bbf8caca2e0324df77d
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors">
                <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
<<<<<<< HEAD
                information.inova@gmail.com
              </a>
              <a href="tel:+918925246499"
=======
                hello@inova.io
              </a>
              <a href="tel:+442079460000"
>>>>>>> d30fc797484088e7431e9bbf8caca2e0324df77d
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors">
                <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.1 6.1l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
<<<<<<< HEAD
                +91 8925246499
=======
                +44 20 7946 0000
>>>>>>> d30fc797484088e7431e9bbf8caca2e0324df77d
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
<<<<<<< HEAD
=======

>>>>>>> d30fc797484088e7431e9bbf8caca2e0324df77d
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
