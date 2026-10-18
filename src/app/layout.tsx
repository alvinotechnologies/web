import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Alvino Technologies — Build. Innovate. Transform.",
  description:
    "Alvino Technologies is a full-service digital innovation studio delivering world-class websites, web apps, mobile apps, cloud solutions, and AI integrations that help businesses grow.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Suspense fallback={<div className="h-16 sm:h-20 w-full bg-white" />}>
          <Navbar />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
