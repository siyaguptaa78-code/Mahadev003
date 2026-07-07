'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Reveal from '../components/UI/Reveal';
import { 
  Shield, TrendingUp, Headphones, Zap, Check, Star, Lock, Award, ArrowRight,
  MessageSquare, HelpCircle, Plus, Minus, Trophy, Activity
} from 'lucide-react';

const stats = [
  { value: '1.2M+', label: 'Active Users', desc: 'Trusted since 2018' },
  { value: '60K+', label: 'Events / Month', desc: 'Live sports & games' },
  { value: '24/7', label: 'Support Speed', desc: 'Average response < 1m' }
];

const games = [
  { title: "Cricket Betting", desc: "Live IPL, international matches, T20 leagues", icon: "🏏" },
  { title: "Football Leagues", desc: "Premier league, Champions league, ISL, La Liga", icon: "⚽" },
  { title: "Live Casino", desc: "Teen Patti, Andar Bahar, Roulette, Poker live stream", icon: "🃏" },
  { title: "Tennis Matches", desc: "Grand slam, ATP, WTA, tennis betting", icon: "🎾" },
  { title: "Virtual Sports", desc: "Digital Cricket, Football, and races available 24/7", icon: "🎮" }
];

const features = [
  { title: "Secure Payments", desc: "UPI, GPay, Paytm, PhonePe & local bank transfer (256-bit encryption)", icon: Shield },
  { title: "Fast Payouts", desc: "Direct Bank transfer withdrawals within 5-10 mins", icon: Zap },
  { title: "Data Insights", desc: "Free prediction, player stats, and head-to-head analysis", icon: TrendingUp },
  { title: "24/7 WhatsApp support", desc: "Personal relationship managers to assist you", icon: Headphones }
];

const reviews = [
  { name: "Rahul S.", location: "Mumbai", comment: "Withdrawal credited within 5 minutes! Best platform I've used.", rating: 5 },
  { name: "Priya K.", location: "Delhi", comment: "Got my ID the same day. Super smooth process and amazing support team!", rating: 5 },
  { name: "Vikram M.", location: "Bangalore", comment: "IPL betting experience was incredible. Real-time updates and fast payouts.", rating: 5 },
  { name: "Ankit T.", location: "Pune", comment: "100% genuine platform. I trust Mahadev Book for all my betting.", rating: 5 },
  { name: "Suresh P.", location: "Hyderabad", comment: "Best customer service! They resolved my issue in minutes via WhatsApp.", rating: 5 },
  { name: "Riya N.", location: "Chennai", comment: "Mujhe bahut accha experience mila. Payout fast aur secure hai.", rating: 5 }
];

const trustPoints = [
  { title: "Expertise", desc: "Built by sports & gaming veterans with 15+ years of proven innovation.", icon: Award },
  { title: "Experience", desc: "Trusted by 1.2M+ users since 2018 with over 60M successful transactions.", icon: Check },
  { title: "Authority", desc: "Recognized as India's leading betting platform by top industry awards.", icon: Shield },
  { title: "Trust", desc: "SSL encrypted, PCI-DSS compliant, and fair play certified by iTech Labs.", icon: Lock }
];

const faqs = [
  {
    q: "What is Mahadev Book Online Betting ID?",
    a: "The Mahadev Book Online Betting ID is a verified account that lets you access betting services such as cricket, casino, poker, and more. With this ID, users can deposit funds, place bets, and enjoy a secure gaming experience."
  },
  {
    q: "How does Mahadev Book work?",
    a: "Mahadev Book acts as a trusted aggregator. Once you request an ID via WhatsApp, our support agents set up your credentials. You add funds via UPI or bank transfer, receive your betting chips, and log in to the official exchange site. Your winnings can be requested via WhatsApp and are transferred directly to your bank account."
  },
  {
    q: "How do I register for a new Online Betting ID?",
    a: "Simply click on any 'Get ID' button to open a chat with our verified agent on WhatsApp. Send a request, provide basic details (name, contact), choose your deposit amount, and your ID will be generated in less than 5 minutes."
  },
  {
    q: "What games can I play with my Mahadev Book ID?",
    a: "You can bet on all major sports including Cricket (IPL, World Cup, Test matches), Football (Premier League, UEFA), Tennis, and E-sports. You also get access to classic Indian card games like Teen Patti, Andar Bahar, and live casinos."
  },
  {
    q: "How do I deposit money into my Mahadev Book account?",
    a: "Depositing is quick and secure. Our agents will provide verified UPI IDs, GPay details, or bank accounts. Once you make the payment and send a screenshot, your betting chips will be instantly credited to your ID."
  },
  {
    q: "How do I withdraw my winnings?",
    a: "Withdrawals are available 24/7. Text your WhatsApp agent with your ID username and the amount you want to withdraw. Provide your UPI ID or bank account details, and the funds will be transferred to you in 5 to 10 minutes."
  },
  {
    q: "Is Mahadev Book legal in India?",
    a: "Mahadev Book operates in a legal grey area. Online betting is governed by state-specific laws in India. While there is no federal law banning online betting platforms hosted outside India, some states have their own restrictions. We advise users to check local regulations."
  },
  {
    q: "Is Mahadev Book safe and trusted?",
    a: "Yes. With over 1.2 million active users and millions of completed transactions since 2018, Mahadev Book is widely regarded as India's most stable and secure online betting bookmaker."
  }
];

const tickerItems = [
  "🏆 USER_9921 WON ₹45,000 on CSK vs MI",
  "🔥 USER_8832 WON ₹1,20,000 on Teen Patti",
  "⚡ USER_4411 WITHDREW ₹75,000 in 4 mins",
  "🎯 USER_5782 WON ₹88,000 on IND vs AUS",
  "🏆 USER_3294 WON ₹35,000 on Roulette",
  "🔥 USER_1120 WON ₹2,50,000 on IPL Outright"
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappUrl = "https://wa.me/916026703858";

  return (
    <div className="relative min-h-screen bg-zinc-950 font-sans text-zinc-300">
      
      {/* 1. Hero Section - Split Layout Flat Design */}
      <section className="bg-[#111111] pt-24 pb-16 lg:py-32 border-b-8 border-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block bg-emerald-500 text-black px-4 py-1 font-bold tracking-widest uppercase text-sm">
              India's #1 Trusted Platform
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-none tracking-tight">
              Mahadev Book <br/>
              <span className="text-emerald-500">Official ID</span>
            </h1>
            
            <p className="text-xl font-medium text-zinc-400 border-l-4 border-emerald-500 pl-4">
              Welcome to Mahadev Book, the online betting game-changer of all time. Betting requires timing, strategy, and a reliable place to bet.
            </p>

            <div className="flex gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 text-black font-black px-8 py-4 uppercase tracking-widest hover:bg-emerald-400 transition-colors">
                Get Your ID Now
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-800">
               {stats.map((stat, idx) => (
                 <div key={idx} className="flex-1 min-w-[120px]">
                   <div className="text-emerald-500 font-black text-3xl">{stat.value}</div>
                   <div className="text-white text-sm font-bold uppercase">{stat.label}</div>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
             <div className="bg-[#1a1a1a] p-8 border-t-4 border-l-4 border-emerald-500 relative w-full max-w-lg shadow-[20px_20px_0px_0px_rgba(16,185,129,0.2)]">
                <div className="w-64 h-24 flex items-center justify-center mb-6">
                  <img src="https://mahadevbook.game/wp-content/uploads/2025/04/mahadev-online-books-e1765948728912-1024x369.webp" alt="Mahadev Book" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">Join 1.2M+ Players</h3>
                <p className="mb-6">Experience 60,000+ live events monthly with instant withdrawals.</p>
                <a href={whatsappUrl} className="block w-full bg-[#25D366] text-white text-center font-bold py-4 hover:bg-[#20ba59] transition-colors">
                  CHAT ON WHATSAPP
                </a>
             </div>
          </div>
          
        </div>
      </section>

      {/* Ticker Section */}
      <div className="bg-emerald-500 text-black py-2 overflow-hidden">
        <div className="flex gap-8 whitespace-nowrap animate-ticker font-bold uppercase tracking-wider text-sm">
          {tickerItems.map((item, idx) => <span key={idx}>{item}</span>)}
          {tickerItems.map((item, idx) => <span key={`dup-${idx}`}>{item}</span>)}
        </div>
      </div>

      {/* 2. What is Mahadev Book */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight border-b-2 border-emerald-500 inline-block pb-2">
                What is <br/><span className="text-emerald-500">Mahadev Book?</span>
              </h2>
              <p className="text-lg text-zinc-400 font-medium">
                We connect players to premier sportsbooks with fair play and safety.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-[#111] p-6 border-l-4 border-zinc-800 hover:border-emerald-500 transition-colors">
                    <Icon className="w-8 h-8 text-emerald-500 mb-4" />
                    <h4 className="text-white font-bold text-xl mb-2">{feature.title}</h4>
                    <p className="text-zinc-400">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Games Grid */}
      <section className="py-24 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white uppercase tracking-tight">Available Games</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {games.map((game, idx) => (
              <div key={idx} className="flex gap-6 bg-zinc-950 p-6 items-center border border-zinc-800 hover:border-emerald-500">
                <div className="text-5xl">{game.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                  <p className="text-zinc-400 text-sm mb-3">{game.desc}</p>
                  <a href={whatsappUrl} className="text-emerald-500 font-bold uppercase text-xs tracking-wider">Play Now &rarr;</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Betting Guide & Trust Badges */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-black text-white mb-8 uppercase tracking-tight">How To Start</h2>
              <div className="space-y-6">
                {['Secure Account Access', 'Explore Betting Markets', 'Track and Manage Bets'].map((step, i) => (
                  <div key={i} className="flex items-center gap-6 p-4 bg-[#111] border-l-4 border-emerald-500">
                    <div className="text-3xl font-black text-zinc-800">0{i+1}</div>
                    <div className="text-lg font-bold text-white">{step}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {trustPoints.map((point, i) => {
                const Icon = point.icon;
                return (
                  <div key={i} className="bg-[#111] p-6 text-center">
                    <Icon className="w-8 h-8 text-emerald-500 mx-auto mb-4" />
                    <div className="font-bold text-white mb-2">{point.title}</div>
                    <div className="text-xs text-zinc-400">{point.desc}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Reviews */}
      <section className="py-24 bg-emerald-500 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black mb-12 uppercase tracking-tight text-center">Player Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((rev, idx) => (
              <div key={idx} className="bg-white p-6 shadow-xl relative mt-4">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-black text-emerald-500 flex items-center justify-center font-black text-xl">
                  "
                </div>
                <div className="flex text-black mb-4">
                  {[...Array(rev.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="font-medium text-lg mb-6">"{rev.comment}"</p>
                <div className="font-black">{rev.name}</div>
                <div className="text-sm font-bold opacity-50 uppercase">{rev.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-white mb-12 uppercase tracking-tight text-center">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#111] border border-zinc-800">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 font-bold text-white flex justify-between items-center hover:bg-zinc-900 transition-colors"
                >
                  {faq.q}
                  {openFaq === index ? <Minus className="text-emerald-500" /> : <Plus className="text-emerald-500" />}
                </button>
                {openFaq === index && <div className="p-6 pt-0 text-zinc-400">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Fixed Button */}
      <a href={whatsappUrl} className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] z-50">
        <MessageSquare className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
}
