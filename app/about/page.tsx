'use client';

import React from 'react';
import Link from 'next/link';
import Reveal from '../../components/UI/Reveal';
import { Award, Shield, CheckCircle } from 'lucide-react';

const stats = [
  { value: "1.2M+", label: "Verified Users", desc: "Across India" },
  { value: "60M+", label: "Completed Transactions", desc: "Safe & Secure" },
  { value: "2018", label: "Founded Year", desc: "8 Years of Trust" }
];

export default function AboutPage() {
  const whatsappUrl = "https://wa.me/918872189471";

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-space-grotesk font-extrabold text-white uppercase mb-4">
              About <span className="text-orange-500">Laser247</span>
            </h1>
            <p className="text-zinc-500 text-sm max-w-xl mx-auto font-light">
              India's most trusted online betting exchange insight and prediction gateway.
            </p>
            <div className="w-12 h-1 bg-orange-500 mx-auto mt-4"></div>
          </div>
        </Reveal>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <Reveal xOffset={-40}>
            <div className="space-y-6">
              <h2 className="text-2xl font-space-grotesk font-bold text-white uppercase">Our Story</h2>
              <p className="text-zinc-350 leading-relaxed font-light text-sm">
                Laser247 was founded with a clear mission: to create India's most secure, transparent, and rewarding online betting experience. Since 2018, we have grown to serve over 1.2 million verified users across India.
              </p>
              <p className="text-zinc-500 leading-relaxed font-light text-sm">
                We believe that sports predictions and analytical games should be fun, accessible, and run with absolute fairness. That's why we partner only with the most credible sportsbook engines and ensure every transaction is protected.
              </p>
            </div>
          </Reveal>

          <Reveal xOffset={40}>
            <div className="minimal-card rounded p-8 border border-zinc-800 space-y-6">
              <h2 className="text-2xl font-space-grotesk font-bold text-white uppercase">Our Mission</h2>
              <p className="text-zinc-350 leading-relaxed font-light text-sm">
                We believe in empowering Indian sports fans with the tools, insights, and platform they need to engage with their favorite sports in a safe and responsible manner.
              </p>
              <div className="flex gap-4 pt-2">
                <div className="text-center flex-grow p-4 bg-zinc-950 rounded border border-zinc-900">
                  <div className="text-orange-500 font-extrabold text-lg">100%</div>
                  <div className="text-zinc-400 text-xs mt-1">Fair Play</div>
                </div>
                <div className="text-center flex-grow p-4 bg-zinc-950 rounded border border-zinc-900">
                  <div className="text-orange-500 font-extrabold text-lg">256-bit</div>
                  <div className="text-zinc-400 text-xs mt-1">SSL Safety</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <Reveal key={idx} yOffset={30} delay={idx * 0.1}>
              <div className="minimal-card rounded p-6 text-center border border-zinc-900 hover:border-zinc-850 transition-colors">
                <div className="text-3xl font-extrabold text-orange-500 font-space-grotesk">{stat.value}</div>
                <h4 className="text-white font-semibold text-xs uppercase tracking-wider mt-2">{stat.label}</h4>
                <p className="text-zinc-500 text-xs font-light mt-1">{stat.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Call to action */}
        <Reveal>
          <div className="minimal-card rounded p-8 md:p-12 text-center border border-zinc-800 bg-[#0d0d0d]">
            <h3 className="text-2xl font-space-grotesk font-extrabold text-white uppercase mb-4">
              Get Your Verified Laser247 ID
            </h3>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto font-light mb-8">
              Start your journey today on India's most secure sports Insights platform with instant payouts.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded transition-colors"
            >
              Get Your ID via WhatsApp
            </a>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
