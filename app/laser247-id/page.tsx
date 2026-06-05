'use client';

import React from 'react';
import Reveal from '../../components/UI/Reveal';
import { ShieldAlert, Key, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  { num: "1", title: "WhatsApp Request", desc: "Initiate contact with a verified book representative on WhatsApp." },
  { num: "2", title: "Registration Details", desc: "Submit basic verification credentials like name and active contact number." },
  { num: "3", title: "Wallet Funding", desc: "Select and deposit funds using safe local UPI apps or bank transfers." },
  { num: "4", title: "ID Generated", desc: "Get unique login URL and password. Instantly log in and begin play." }
];

export default function BookIdPage() {
  const whatsappUrl = "https://wa.me/918872189471";

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 border border-orange-500/30 bg-orange-500/5 rounded px-3 py-1 mb-4 text-orange-500">
              <Key className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Verified ID Hub</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-space-grotesk font-extrabold text-white uppercase mb-4">
              Laser247 <span className="text-orange-500">Book ID</span>
            </h1>
            <p className="text-zinc-500 text-sm max-w-xl mx-auto font-light">
              Your personal, encrypted digital passport to secure sports insights, betting odds, and fast payouts.
            </p>
            <div className="w-12 h-1 bg-orange-500 mx-auto mt-4"></div>
          </div>
        </Reveal>

        {/* Introduction */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <Reveal xOffset={-45}>
            <div className="space-y-6">
              <h2 className="text-2xl font-space-grotesk font-bold text-white uppercase leading-snug">
                Unlock Safe Online Gaming with Your Verified Betting ID
              </h2>
              <p className="text-zinc-350 leading-relaxed font-light text-sm">
                Your <strong>Laser247 ID</strong> is a personal access key to India's trusted online betting ecosystem. With it, you can securely place bets on sports, casino games, and virtual matches within a single platform.
              </p>
              <p className="text-zinc-500 leading-relaxed font-light text-sm">
                Think of it as your secure digital passport, offering seamless and protected transactions in a feature-rich betting environment. Get started today with a verified agent.
              </p>
              <div className="pt-2">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow"
                >
                  Get Your ID via WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal xOffset={45}>
            <div className="minimal-card rounded p-8 border border-zinc-805 space-y-6 bg-[#0d0d0d]">
              <h3 className="text-white font-space-grotesk font-bold text-base uppercase border-b border-zinc-900 pb-3">Why Verify Your ID?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase">Anti-Fraud Protection</h4>
                    <p className="text-zinc-550 text-xs mt-0.5 font-light">Keeps third-party intruders away from hijacking your points and cashout details.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase">Account Auditing</h4>
                    <p className="text-zinc-550 text-xs mt-0.5 font-light">Easily track deposit receipts, bet stakes, and historical balance statements.</p>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Step by Step Generation Guide */}
        <div className="mb-20">
          <Reveal>
            <h3 className="text-2xl font-space-grotesk font-bold text-white text-center uppercase mb-10">4 Steps to Generate Your ID</h3>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <Reveal key={idx} yOffset={30} delay={idx * 0.1}>
                <div className="minimal-card rounded p-6 border border-zinc-850 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="w-7 h-7 rounded bg-orange-500/10 border border-orange-500/30 text-orange-500 flex items-center justify-center font-bold text-xs">
                      {step.num}
                    </span>
                    <h4 className="text-white font-bold text-sm uppercase tracking-tight">{step.title}</h4>
                    <p className="text-zinc-500 text-xs font-light leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="pt-4 mt-auto">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-orange-500 font-bold hover:text-orange-400 inline-flex items-center gap-1.5 uppercase tracking-tight">
                      Start Step {step.num} <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Responsible gambling notice */}
        <Reveal>
          <div className="bg-[#1a0f0f] border border-red-500/20 rounded p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-10 h-10 rounded bg-red-500/10 border border-red-500/30 text-red-500 flex items-center justify-center flex-shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-white font-bold text-base uppercase font-space-grotesk">Important Safety Guidelines</h4>
              <p className="text-zinc-500 text-xs font-light leading-relaxed">
                Always set daily or weekly deposit limits. Betting should be fun and recreational. Never chase losses, and if you require support or self-exclusion, contact our relationship managers immediately. Access is restricted to users aged 18 and older.
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
