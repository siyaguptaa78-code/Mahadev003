import React from 'react';

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 group`}>
      <div className={`${className} rounded-lg bg-zinc-900 border border-orange-500/30 flex items-center justify-center shadow-md shadow-orange-500/5 group-hover:border-orange-500 transition-all duration-300`}>
        {/* Sleek Geometric Orange Trishul SVG */}
        <svg viewBox="0 0 100 100" className="w-5 h-5 text-orange-500 fill-none stroke-current" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          {/* Middle sharp spear */}
          <line x1="50" y1="20" x2="50" y2="80" />
          {/* Curved prongs */}
          <path d="M 30 35 C 30 65, 70 65, 70 35" />
          {/* Accent dot */}
          <circle cx="50" cy="50" r="4" fill="currentColor" />
        </svg>
      </div>
      <span className="text-white font-sans font-extrabold text-xl tracking-tight group-hover:text-orange-500 transition-colors uppercase">
        Laser<span className="text-orange-500 font-light">247</span>
      </span>
    </div>
  );
}
