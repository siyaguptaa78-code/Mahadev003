'use client';

import React, { useState } from 'react';
import Reveal from '../../components/UI/Reveal';
import { Send, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const whatsappUrl = "https://wa.me/918872189471";
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Message sent successfully! Our WhatsApp team will get in touch.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-space-grotesk font-extrabold text-white uppercase mb-4">
              Contact <span className="text-orange-500">Laser247</span>
            </h1>
            <p className="text-zinc-500 text-sm max-w-xl mx-auto font-light">
              Our support team is available 24/7. Reach us via WhatsApp or Telegram for the fastest response.
            </p>
            <div className="w-12 h-1 bg-orange-500 mx-auto mt-4"></div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Support options details */}
          <Reveal xOffset={-45}>
            <div className="space-y-8">
              <div className="minimal-card rounded p-6 border border-zinc-800 space-y-4">
                <h3 className="text-white font-space-grotesk font-bold text-base uppercase">Instant Support Channels</h3>
                
                <div className="space-y-4 pt-2">
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-zinc-900/40 border border-zinc-850 rounded hover:border-orange-500/20 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded bg-[#25D366]/10 text-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xs uppercase tracking-wider">WhatsApp Chat</h4>
                      <p className="text-zinc-550 text-[11px] mt-0.5 font-light">Fastest response – average response time under 1 minute.</p>
                    </div>
                  </a>

                  <a 
                    href="https://t.me/laser247"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-zinc-900/40 border border-zinc-850 rounded hover:border-orange-500/20 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded bg-[#0088cc]/10 text-[#0088cc] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Send className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xs uppercase tracking-wider">Telegram Channel</h4>
                      <p className="text-zinc-550 text-[11px] mt-0.5 font-light">Join our community channel for daily sports news and prediction updates.</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Security info box */}
              <div className="p-6 bg-zinc-950 rounded border border-zinc-900 space-y-2">
                <h4 className="text-orange-500 font-bold text-xs uppercase tracking-wider">⚠️ Phishing Warning</h4>
                <p className="text-zinc-550 text-[11px] font-light leading-relaxed">
                  We will never ask you to send funds without confirming your registration details. Only communicate through the official WhatsApp number displayed on this domain.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal xOffset={45}>
            <div className="minimal-card rounded p-8 border border-zinc-800">
              <h3 className="text-white font-space-grotesk font-bold text-base uppercase mb-6">Drop Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-zinc-400 text-xs uppercase tracking-wider font-semibold mb-2" htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-900/50 border border-zinc-850 rounded px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 text-xs font-light"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 text-xs uppercase tracking-wider font-semibold mb-2" htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-900/50 border border-zinc-850 rounded px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 text-xs font-light"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 text-xs uppercase tracking-wider font-semibold mb-2" htmlFor="message">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-900/50 border border-zinc-850 rounded px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 text-xs font-light"
                    placeholder="Write your query here..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-extrabold rounded text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" /> Send Message
                </button>

                {status && (
                  <p className="text-green-500 text-xs font-semibold text-center mt-4 uppercase tracking-wider">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </Reveal>

        </div>

      </div>
    </div>
  );
}
