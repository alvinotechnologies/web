import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — Alvino Technologies",
  description: "Get in touch with Alvino Technologies. Tell us about your business and your requirements and we will get back to you promptly.",
};

const faqs = [
  {
    q: "How does the process start?",
    a: "It starts with a conversation. We discuss your business, your challenges, and what you want to achieve. There is no obligation at this stage — just an honest discussion about whether and how we can help.",
  },
  {
    q: "Do you work with small businesses that have limited budgets?",
    a: "Yes. We work with small and medium-sized businesses and aim to recommend solutions that are practical and proportionate to your budget and needs. We will tell you honestly if a proposed solution is not the right fit.",
  },
  {
    q: "How do you charge for projects?",
    a: "We agree on scope and cost before starting any work. Depending on the project, this may be a fixed price for a defined deliverable or a time-based arrangement for longer engagements. We will explain the options clearly.",
  },
  {
    q: "How long does it take to deliver a project?",
    a: "This depends on the complexity and scope of the solution. A straightforward business website might take two to four weeks. A custom software project might take longer. We agree on timelines before starting.",
  },
  {
    q: "Do you provide support after the project is delivered?",
    a: "Yes. We offer ongoing support and maintenance for solutions we have built. The scope and terms of support are discussed and agreed as part of each engagement.",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-20">

      {/* ── Hero ── */}
      <section className="bg-white border-b border-gray-100 py-20 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(0,68,187,0.06) 0%, transparent 60%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-4">Get In Touch</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            {"Let's Discuss Your Business"}
            <span className="block bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              and How We Can Help.
            </span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-gray-500 text-lg">
            Tell us about your business and your requirements. We respond to every enquiry and will
            get back to you promptly.
          </p>
        </div>
      </section>

      {/* ── Form + info ── */}
      <section className="bg-gray-50 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-16 lg:grid-cols-5">

          {/* EmailJS-powered contact form */}
          <ContactForm />

          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900 mb-5">Contact Information</h2>
              <div className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm space-y-4">
                <div>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-sm text-gray-600">Bangalore, India</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:alvinotechnologies@gmail.com" className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    alvinotechnologies@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Phone / WhatsApp</p>
                  <a href="tel:+918925246499" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">+91 8925246499</a>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Response Time</p>
              <div className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm">
                <p className="text-sm text-gray-700 leading-relaxed">
                  We respond to all enquiries within <strong>one business day</strong>. For urgent matters,
                  please call or message us on WhatsApp.
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">What to Expect</p>
              <div className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm space-y-3">
                {[
                  "We read every message and respond personally.",
                  "There is no obligation or pressure after your enquiry.",
                  "We will ask questions to understand your needs before making any recommendation.",
                  "We provide honest advice, even if that means suggesting an alternative approach.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Connect With Us</p>
              <div className="flex gap-3">
                {[
                  { label: "LinkedIn",  href: "https://www.linkedin.com/company/144016158/admin/edit/?editPageActiveTab=info" },
                  { label: "Instagram", href: "https://www.instagram.com/alvino_technologies?obrf=MWFxMWJ5bm45aG5kcg==" },
                  { label: "WhatsApp",  href: "https://wa.me/918925246499" },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="rounded-full border border-gray-200 px-4 py-1.5 text-xs font-semibold text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-all">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-3">FAQ</p>
            <h2 className="text-3xl font-extrabold text-gray-900">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(f => (
              <div key={f.q}
                className="rounded-2xl bg-gray-50 border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-blue-100 hover:bg-white transition-all duration-200">
                <p className="text-sm font-bold text-gray-900 mb-2">{f.q}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">Have a different question?</p>
            <a href="mailto:alvinotechnologies@gmail.com"
              className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
              Email us directly →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
