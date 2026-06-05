'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Reveal from '../components/UI/Reveal';
import { 
  Shield, 
  TrendingUp, 
  Headphones, 
  Zap, 
  Check, 
  Star, 
  Lock, 
  Award, 
  ArrowRight,
  MessageSquare,
  HelpCircle,
  Plus,
  Minus
} from 'lucide-react';

const stats = [
  { value: '1.2M+', label: 'Active Users', desc: 'Since 2018' },
  { value: '60K+', label: 'Events / Month', desc: 'Live sports' },
  { value: '24/7', label: 'Support Speed', desc: 'Instant response' }
];

const games = [
  { title: "Cricket Betting", desc: "Live IPL, International matches, T20 leagues with competitive odds and real-time markets.", icon: "🏏" },
  { title: "Football Leagues", desc: "Bet on Premier League, Champions League, La Liga, and Indian Super League events.", icon: "⚽" },
  { title: "Live Casino", desc: "Enjoy live dealer streams of Teen Patti, Andar Bahar, Roulette, and Poker from home.", icon: "🃏" },
  { title: "Tennis Matches", desc: "Place real-time bets on Grand Slams, ATP tour, and WTA tour tournaments.", icon: "🎾" },
  { title: "Virtual Sports", desc: "Fast-paced digital cricket, football and racing simulations available 24 hours a day.", icon: "🎮" }
];

const features = [
  { title: "Secure Payments", desc: "UPI, GPay, Paytm, PhonePe, and local bank transfers with 256-bit encryption.", icon: Shield },
  { title: "Fast Payouts", desc: "Direct bank transfer withdrawals processed in 5-10 minutes flat.", icon: Zap },
  { title: "Data Insights", desc: "Free prediction models, player stats, and historical head-to-head analysis.", icon: TrendingUp },
  { title: "24/7 WhatsApp help", desc: "Dedicated personal relationship managers to assist you instantly.", icon: Headphones }
];

const reviews = [
  { name: "Rahul S.", location: "Mumbai", comment: "Withdrawal credited within 5 minutes! Best platform I've used.", rating: 5 },
  { name: "Priya K.", location: "Delhi", comment: "Got my ID the same day. Super smooth process and amazing support team!", rating: 5 },
  { name: "Vikram M.", location: "Bangalore", comment: "IPL betting experience was incredible. Real-time updates and fast payouts.", rating: 5 },
  { name: "Ankit T.", location: "Pune", comment: "100% genuine platform. I trust Laser247 for all my betting.", rating: 5 },
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
    q: "What is Laser247 Online Betting ID?",
    a: "The Laser247 Online Betting ID is a verified account that lets you access betting services such as cricket, casino, poker, and more. With this ID, users can deposit funds, place bets, and enjoy a secure gaming experience."
  },
  {
    q: "How does Laser247 work?",
    a: "Laser247 acts as a trusted aggregator. Once you request an ID via WhatsApp, our support agents set up your credentials. You add funds via UPI or bank transfer, receive your betting chips, and log in to the official exchange site. Your winnings can be requested via WhatsApp and are transferred directly to your bank account."
  },
  {
    q: "How do I register for a new Online Betting ID?",
    a: "Simply click on any 'Get ID' button to open a chat with our verified agent on WhatsApp. Send a request, provide basic details (name, contact), choose your deposit amount, and your ID will be generated in less than 5 minutes."
  },
  {
    q: "What games can I play with my Laser247 ID?",
    a: "You can bet on all major sports including Cricket (IPL, World Cup, Test matches), Football (Premier League, UEFA), Tennis, and E-sports. You also get access to classic Indian card games like Teen Patti, Andar Bahar, and live casinos."
  },
  {
    q: "How do I deposit money into my Laser247 account?",
    a: "Depositing is quick and secure. Our agents will provide verified UPI IDs, GPay details, or bank accounts. Once you make the payment and send a screenshot, your betting chips will be instantly credited to your ID."
  },
  {
    q: "How do I withdraw my winnings?",
    a: "Withdrawals are available 24/7. Text your WhatsApp agent with your ID username and the amount you want to withdraw. Provide your UPI ID or bank account details, and the funds will be transferred to you in 5 to 10 minutes."
  },
  {
    q: "Is Laser247 legal in India?",
    a: "Laser247 operates in a legal grey area. Online betting is governed by state-specific laws in India. While there is no federal law banning online betting platforms hosted outside India, some states have their own restrictions. We advise users to check local regulations."
  },
  {
    q: "Is Laser247 safe and trusted?",
    a: "Yes. With over 1.2 million active users and millions of completed transactions since 2018, Laser247 is widely regarded as India's most stable and secure online betting bookmaker."
  }
];

const tickerItems = [
  "🎯 USER_4481 WON ₹32,000 ON IPL LIVE!",
  "⚡ USER_1209 WITHDREW ₹90,000 IN 3 MINS!",
  "🏆 USER_3345 WON ₹1,50,000 ON TEEN PATTI!",
  "🔥 USER_5891 WON ₹77,000 ON TENNIS MATCH!",
  "🎯 USER_4481 WON ₹32,000 ON IPL LIVE!",
  "⚡ USER_1209 WITHDREW ₹90,000 IN 3 MINS!",
  "🏆 USER_3345 WON ₹1,50,000 ON TEEN PATTI!",
  "🔥 USER_5891 WON ₹77,000 ON TENNIS MATCH!"
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappUrl = "https://wa.me/918872189471";

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="relative min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#0a0a0a] pt-12 overflow-hidden border-b border-zinc-900">
        {/* Sliding Tech Grid Background */}
        <div className="absolute inset-0 orange-grid z-0"></div>

        {/* Ambient floating glow shape */}
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none z-0 animate-float-glow"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full relative z-10">
          
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 border border-orange-500/30 bg-orange-500/5 rounded px-3 py-1 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              <span className="text-orange-500 text-[10px] uppercase font-bold tracking-wider">India's #1 Trusted Hub</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-none font-space-grotesk">
              Laser247 – <span className="text-orange-500 orange-text-glow">India's Most Trusted</span> Betting platform
            </h1>
            
            <p className="text-zinc-400 text-base leading-relaxed font-light">
              Welcome to <strong className="text-white font-medium">Laser247</strong>, the online betting game-changer of all time. Betting isn't just about chance; it's about timing, strategy, and choosing the right platform. In India, the Laser247 is your trusted gateway to a safe, authorized, and rewarding betting experience.
            </p>
            
            <p className="text-zinc-550 text-sm leading-relaxed font-light">
              Our platform ensures every user enjoys an outstanding experience with over <strong className="text-orange-500">60,000 live events</strong> per month, fast payouts, and fully encrypted transactions. Whether you're new or experienced, your verified ID gives you access to advanced tools and smart betting features.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-sm uppercase px-8 py-4 rounded transition-colors tracking-wider shadow transform hover:-translate-y-0.5 duration-200"
              >
                Get Your ID Now
              </a>
              <Link
                href="/laser247-id"
                className="inline-flex items-center justify-center border border-zinc-850 hover:border-orange-600 text-zinc-350 hover:text-white font-semibold text-sm px-8 py-4 rounded transition-colors"
              >
                Learn More
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-2 text-[10px] uppercase font-bold tracking-wider">
              <span className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-zinc-400">
                <Shield className="w-3 h-3 text-orange-500" /> Secure
              </span>
              <span className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-zinc-400">
                <TrendingUp className="w-3 h-3 text-orange-500" /> Insights
              </span>
              <span className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-zinc-400">
                <Headphones className="w-3 h-3 text-orange-500" /> 24/7 Live
              </span>
            </div>
          </div>
          
          <div className="relative flex flex-col items-center gap-6">
            <div className="relative w-full max-w-md">
              <div className="minimal-card rounded border border-zinc-800 p-8 flex flex-col items-center justify-center text-center gap-6 hover:border-orange-500/30 transition-all duration-300">
                
                {/* Minimal Logo Badge */}
                <div className="w-16 h-16 rounded border border-orange-500/40 bg-zinc-950 flex items-center justify-center text-orange-500 shadow shadow-orange-500/10">
                  <span className="font-extrabold text-2xl tracking-tighter">L</span>
                </div>
                
                <div>
                  <h2 className="text-white font-extrabold text-xl font-space-grotesk tracking-wide uppercase">Laser247</h2>
                  <p className="text-orange-500 text-xs font-semibold uppercase tracking-wider mt-1">Official ID Aggregator</p>
                </div>

                <p className="text-zinc-550 text-xs font-light">
                  Join 1.2M+ players on the most trusted fantasy sports insight and betting dashboard.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-6 py-3 rounded text-sm flex items-center gap-2 transition-colors w-full justify-center"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-md">
              {stats.map((stat, idx) => (
                <div key={idx} className="minimal-card rounded p-4 text-center border border-zinc-900 hover:border-orange-500/20 transition-colors">
                  <div className="text-orange-500 font-extrabold text-base font-space-grotesk">{stat.value}</div>
                  <div className="text-zinc-400 text-[10px] uppercase font-bold tracking-wider mt-1">{stat.label}</div>
                  <div className="text-zinc-650 text-[9px] mt-0.5">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* Live Winners Ticker */}
      <div className="bg-zinc-950 border-y border-zinc-900 py-3 relative overflow-hidden z-10">
        <div className="flex gap-10 items-center whitespace-nowrap animate-ticker font-mono">
          {tickerItems.map((item, idx) => (
            <span key={idx} className="text-[10px] font-bold text-zinc-400 flex items-center gap-2 tracking-wider">
              <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* 2. What is Laser247 Section */}
      <section className="py-20 bg-[#0c0c0c] border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold font-space-grotesk text-white uppercase mb-4">
                What is <span className="text-orange-500">Laser247?</span>
              </h2>
              <div className="w-12 h-1 bg-orange-500 mx-auto"></div>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Reveal xOffset={-40}>
              <div className="space-y-6">
                <p className="text-zinc-350 text-base leading-relaxed font-light">
                  <strong>Laser247</strong> is one of India's most popular and trusted online betting platforms. It is known for its secure system, smooth user experience, and wide variety of games.
                </p>
                <p className="text-zinc-455 leading-relaxed font-light text-sm">
                  In short, Laser247 is a complete betting platform — combining entertainment, security, and convenience for both casual players and professional bettors.
                </p>
                <div className="border-l-2 border-orange-500 bg-zinc-900/50 p-6 rounded-r">
                  <h4 className="text-white font-bold text-base uppercase font-space-grotesk">🏆 India's Most Trusted platform</h4>
                  <p className="text-zinc-455 text-sm mt-2 font-light">Trusted by 1.2M+ users since 2018 with over 60M successful transactions.</p>
                </div>
              </div>
            </Reveal>

            <Reveal xOffset={40}>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="minimal-card rounded p-5 hover:border-zinc-700 transition-colors">
                      <div className="w-8 h-8 bg-zinc-950 text-orange-500 border border-zinc-800 flex items-center justify-center mb-4">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <h4 className="text-white font-semibold text-sm uppercase tracking-tight">{feature.title}</h4>
                      <p className="text-zinc-550 text-xs font-light mt-1.5 leading-relaxed">{feature.desc}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Games Showcase Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold font-space-grotesk text-white uppercase mb-4">
                Games You Can <span className="text-orange-500">Play</span>
              </h2>
              <p className="text-zinc-455 text-sm font-light">
                Use your single verified ID to play all sports and classic live dealer casino games.
              </p>
              <div className="w-12 h-1 bg-orange-500 mx-auto mt-4"></div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, idx) => (
              <Reveal key={idx} yOffset={40} delay={idx * 0.1}>
                <div className="minimal-card minimal-card-hover rounded p-6 flex flex-col h-full">
                  <div className="text-2xl mb-4">{game.icon}</div>
                  <h3 className="text-white font-bold text-base font-space-grotesk uppercase mb-2">{game.title}</h3>
                  <p className="text-zinc-450 text-xs font-light leading-relaxed mb-4 flex-grow">{game.desc}</p>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 text-xs font-bold flex items-center gap-1.5 uppercase mt-auto">
                    Play Now <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Betting ID Smart Guide */}
      <section className="py-20 bg-[#0c0c0c] border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <Reveal xOffset={-50}>
              <div className="space-y-6">
                <h2 className="text-3xl font-extrabold font-space-grotesk text-white uppercase leading-tight">
                  Get to Know Your <span className="text-orange-500">Betting ID</span>
                </h2>
                <div className="w-12 h-1 bg-orange-500"></div>
                <p className="text-zinc-405 font-light text-sm leading-relaxed">
                  Your <strong>Laser247 ID</strong> is a personal access key to India's trusted online betting ecosystem. With it, you can securely place bets on sports, casino games, and virtual matches within a single platform. Think of it as your secure digital passport.
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <span className="w-5 h-5 bg-orange-500/10 text-orange-500 border border-orange-500/30 flex items-center justify-center font-bold text-xs mt-0.5">1</span>
                    <div>
                      <h4 className="text-white font-bold text-sm uppercase">Secure Account Access</h4>
                      <p className="text-zinc-500 text-xs font-light mt-0.5">Log in safely across all your devices using encrypted credentials.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="w-5 h-5 bg-orange-500/10 text-orange-500 border border-orange-500/30 flex items-center justify-center font-bold text-xs mt-0.5">2</span>
                    <div>
                      <h4 className="text-white font-bold text-sm uppercase">Explore Betting Markets</h4>
                      <p className="text-zinc-500 text-xs font-light mt-0.5">Access multiple markets including cricket, football and virtual games.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal xOffset={50}>
              <div className="minimal-card rounded p-8 border border-zinc-850 space-y-6">
                <h3 className="text-white font-bold text-base uppercase font-space-grotesk flex items-center gap-2">
                  <span>⚖️</span> Responsible Betting
                </h3>
                <p className="text-zinc-450 text-xs font-light leading-relaxed">
                  Your Laser247 ID unlocks exciting opportunities — but it's equally important to bet responsibly:
                </p>
                <ul className="space-y-3 text-xs text-zinc-350">
                  <li className="flex items-center gap-2.5 font-light">
                    <Check className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" /> Set daily or weekly betting limits in your account
                  </li>
                  <li className="flex items-center gap-2.5 font-light">
                    <Check className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" /> Avoid chasing losses and play within your means
                  </li>
                  <li className="flex items-center gap-2.5 font-light">
                    <Check className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" /> Take breaks to maintain a healthy balance
                  </li>
                </ul>
                <div className="border-t border-zinc-900 pt-6">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full text-center block py-3 bg-zinc-950 border border-zinc-850 hover:border-orange-500 hover:text-white text-zinc-400 font-bold rounded text-xs uppercase transition-colors">
                    Consult Manager
                  </a>
                </div>
              </div>
            </Reveal>
            
          </div>
        </div>
      </section>

      {/* 5. User Testimonials Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold font-space-grotesk text-white uppercase mb-4">
                User Feedback – <span className="text-orange-500">100% Payouts</span>
              </h2>
              <p className="text-zinc-455 text-sm font-light">
                Real feedback from verified Laser247 users who enjoy our trusted and fast betting services.
              </p>
              <div className="w-12 h-1 bg-orange-500 mx-auto mt-4"></div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <Reveal key={idx} yOffset={40} delay={idx * 0.05}>
                <div className="minimal-card rounded p-6 flex flex-col justify-between h-full border border-zinc-900 hover:border-zinc-800 transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center font-bold text-sm">
                          {rev.name[0]}
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-xs uppercase tracking-wider">{rev.name}</h4>
                          <p className="text-zinc-650 text-[10px]">{rev.location}</p>
                        </div>
                      </div>
                      <div className="flex text-orange-500">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-zinc-400 text-xs italic leading-relaxed">
                      "{rev.comment}"
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-zinc-955 flex items-center gap-2 text-[10px] text-green-500 uppercase tracking-wider font-semibold">
                    <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></span>
                    Verified WhatsApp User
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Brand Authority and SSL Trust Badges */}
      <section className="py-16 bg-[#0c0c0c] border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Reveal key={index} yOffset={30} delay={index * 0.1}>
                  <div className="text-center space-y-3">
                    <div className="w-10 h-10 rounded bg-zinc-950 border border-zinc-850 flex items-center justify-center text-orange-500 mx-auto">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-white font-bold font-space-grotesk text-sm uppercase">{point.title}</h4>
                    <p className="text-zinc-550 text-[11px] font-light max-w-[180px] mx-auto leading-relaxed">{point.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Interactive FAQs Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold font-space-grotesk text-white uppercase mb-4">
                Questions &amp; <span className="text-orange-500">Answers</span>
              </h2>
              <p className="text-zinc-455 text-sm font-light">
                Find answers to the most common queries about registering and betting with Laser247.
              </p>
              <div className="w-12 h-1 bg-orange-500 mx-auto mt-4"></div>
            </div>
          </Reveal>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <Reveal key={index} yOffset={25} delay={index * 0.05}>
                  <div className="minimal-card rounded border border-zinc-900 overflow-hidden transition-colors">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4.5 flex items-center justify-between text-left text-white hover:text-orange-500 transition-colors"
                    >
                      <span className="font-bold text-sm font-space-grotesk uppercase flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        {faq.q}
                      </span>
                      {isOpen ? <Minus className="w-4.5 h-4.5 text-orange-500" /> : <Plus className="w-4.5 h-4.5 text-orange-500" />}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-zinc-455 text-xs font-light leading-relaxed border-t border-zinc-955 bg-zinc-950/20">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-orange-600 hover:bg-orange-750 rounded-full shadow-lg flex items-center justify-center text-white transition-transform duration-200 hover:scale-105"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
        </a>
      </div>

    </div>
  );
}
