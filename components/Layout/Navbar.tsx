'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../UI/Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Betting App', path: '/laser247-app' },
  { name: 'Book ID', path: '/laser247-id' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/918872189471";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled 
        ? 'bg-[#0a0a0a] border-b border-zinc-800 py-3 shadow-md' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-sm font-semibold tracking-tight transition-colors duration-200 ${
                    isActive ? 'text-orange-500' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-300 font-bold hover:text-orange-500 transition-colors"
            >
              Sign In
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs uppercase tracking-tight rounded-md transition-colors flex items-center gap-1"
            >
              Get ID <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white transition-colors p-1"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0d0d0d] border-b border-zinc-800 py-4 px-4 sm:px-6">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded text-sm font-semibold transition-colors ${
                    isActive 
                      ? 'bg-orange-500/10 text-orange-500 border-l-2 border-orange-500' 
                      : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="flex flex-col gap-2 pt-2 border-t border-zinc-800">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2 border border-zinc-700 hover:border-orange-500 text-zinc-350 font-bold text-sm rounded transition-colors"
              >
                Sign In
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm rounded transition-colors"
              >
                Get Verified ID
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
