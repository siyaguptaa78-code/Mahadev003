import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Laser247 | Official Site - Safe Register & Login",
  description: "Register a secure Laser247 ID today. Get access to 24/7 withdrawals, 60K+ events monthly, and professional sports analytics.",
  keywords: "Laser247, Laser247 ID, Laser247 Login, Laser247 Register, Buy Laser247 ID",
  authors: [{ name: "Laser247" }],
  creator: "Laser247",
  robots: "index, follow",
  openGraph: {
    title: "Laser247 - Modern Online Betting Platform",
    description: "Register a secure Laser247 ID today. Get access to 24/7 withdrawals, 60K+ events monthly, and professional sports analytics.",
    url: "https://mahadeevbook.com",
    siteName: "Laser247",
    locale: "en_IN",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
      style={{ colorScheme: 'dark' }}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-orange-500/20 selection:text-orange-400">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
