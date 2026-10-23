"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

/* ─────────────────────────────────────────────────────────
   Replace these three values with your EmailJS credentials
   from https://dashboard.emailjs.com
   ───────────────────────────────────────────────────────── */
const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? "YOUR_PUBLIC_KEY";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const formRef             = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError]   = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    setError("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err: unknown) {
      console.error("EmailJS error:", err);
      setError("Something went wrong. Please try emailing us directly at alvinotechnologies@gmail.com");
      setStatus("error");
    }
  }

  return (
    <div className="lg:col-span-3 bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Send us a message</h2>
      <p className="text-sm text-gray-500 mb-8">We will get back to you within one business day.</p>

      {status === "success" ? (
        <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-3xl">✅</span>
          <h3 className="text-xl font-extrabold text-gray-900">Message Sent!</h3>
          <p className="text-gray-500 max-w-sm">
            Thank you for getting in touch. We have received your message and will respond within one business day.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 rounded-full border border-gray-200 px-6 py-2.5 text-sm font-semibold text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-all"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="from_name" className="text-xs font-bold text-gray-500 uppercase tracking-wide">Your Name *</label>
            <input
              id="from_name" name="from_name" type="text" required
              placeholder="Your full name"
              className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="reply_to" className="text-xs font-bold text-gray-500 uppercase tracking-wide">Email Address *</label>
            <input
              id="reply_to" name="reply_to" type="email" required
              placeholder="your@email.com"
              className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white"
            />
          </div>

          {/* Business */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="business_name" className="text-xs font-bold text-gray-500 uppercase tracking-wide">Business Name</label>
            <input
              id="business_name" name="business_name" type="text"
              placeholder="Your business name"
              className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-xs font-bold text-gray-500 uppercase tracking-wide">Phone Number</label>
            <input
              id="phone" name="phone" type="tel"
              placeholder="Your contact number"
              className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white"
            />
          </div>

          {/* Service */}
          <div className="sm:col-span-2 flex flex-col gap-1.5">
            <label htmlFor="service" className="text-xs font-bold text-gray-500 uppercase tracking-wide">What Are You Looking For?</label>
            <select
              id="service" name="service"
              className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white"
            >
              <option value="">Select an option…</option>
              <option>A Business Website</option>
              <option>Business Software or Automation</option>
              <option>An Online Store or Catalogue</option>
              <option>Digital Presence and Visibility</option>
              <option>Technology Consulting</option>
              <option>Custom Application Development</option>
              <option>Not sure — I need advice</option>
            </select>
          </div>

          {/* Message */}
          <div className="sm:col-span-2 flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-wide">Tell Us About Your Business and Requirements *</label>
            <textarea
              id="message" name="message" required rows={5}
              placeholder="Describe your business, the challenges you face, and what you would like to achieve. The more context you share, the better we can respond."
              className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none resize-none transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white"
            />
          </div>

          {/* Error */}
          {status === "error" && (
            <div className="sm:col-span-2 rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Submit */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="group w-full rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              style={{ background: "linear-gradient(135deg,#0044bb,#0099ff)" }}
            >
              {status === "sending" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                  </svg>
                  Sending…
                </span>
              ) : (
                <>
                  Send Message
                  <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
