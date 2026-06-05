import React from 'react';
import Link from 'next/link';
import Logo from '../UI/Logo';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/918872189471";

  return (
    <footer className="bg-[#0c0c0c] border-t border-zinc-800 text-zinc-400 text-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand details */}
          <div className="space-y-4">
            <Logo />
            <p className="text-zinc-550 leading-relaxed font-light text-xs">
              India's leading minimalist sports Insights exchange bookmaker directory. Experience clean analytics, live events, and direct customer support.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold tracking-tight text-xs uppercase text-orange-500">
              Sitemap
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">Insights</Link>
              </li>
              <li>
                <Link href="/laser247-app" className="hover:text-white transition-colors">Mobile App</Link>
              </li>
              <li>
                <Link href="/laser247-id" className="hover:text-white transition-colors">Betting ID</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div className="space-y-3">
            <h4 className="text-white font-bold tracking-tight text-xs uppercase text-orange-500">
              Key Platforms
            </h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li>Gold365</li>
              <li>Laser247</li>
              <li>IPL Betting</li>
              <li>Online Betting ID</li>
              <li>Laser247</li>
              <li>Laser247</li>
            </ul>
          </div>

          {/* Call to action */}
          <div className="space-y-3">
            <h4 className="text-white font-bold tracking-tight text-xs uppercase text-orange-500">
              WhatsApp Support
            </h4>
            <p className="text-zinc-500 text-xs font-light">
              Get in touch with an official representative to activate your ID in minutes.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-zinc-900 border border-zinc-700 hover:border-orange-500 hover:text-white text-zinc-300 font-extrabold px-4 py-2.5 rounded text-xs uppercase transition-colors"
            >
              Contact Agent <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-zinc-650">
          <p>
            &copy; {currentYear} Laser247. All rights reserved.
          </p>
          <p className="max-w-md text-center md:text-right">
            Disclaimer: Laser247 provides informational and sports insights. We encourage responsible gaming. 18+ only.
          </p>
        </div>

      </div>
    </footer>
  );
}
