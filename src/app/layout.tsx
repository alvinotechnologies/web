import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inova Tech — Build. Innovate. Transform.",
  description:
    "Inova Tech is a full-service digital innovation studio delivering world-class websites, web apps, mobile apps, cloud solutions, and AI integrations that help businesses grow.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Navbar />
        {/* main content — no top padding on home (hero goes full bleed under transparent nav) */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
