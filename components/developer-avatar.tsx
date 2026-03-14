"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function DeveloperAvatar() {
  return (
    <div className="relative w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72">
      <svg
        viewBox="0 0 280 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Gradients */}
          <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#0a0a1a" />
          </radialGradient>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4956a" />
            <stop offset="100%" stopColor="#b8764a" />
          </linearGradient>
          <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4c1d95" />
            <stop offset="100%" stopColor="#2e1065" />
          </linearGradient>
          <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
          <linearGradient id="violetGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1008" />
            <stop offset="100%" stopColor="#0d0804" />
          </linearGradient>
          <filter id="glow-v">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="glow-c">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <clipPath id="avatarClip">
            <circle cx="140" cy="140" r="138" />
          </clipPath>
        </defs>

        {/* Background circle */}
        <circle cx="140" cy="140" r="138" fill="url(#bgGrad)" />
        <circle cx="140" cy="140" r="138" fill="none" stroke="url(#violetGlow)" strokeWidth="1" opacity="0.4" />

        {/* Background grid lines */}
        {[100,120,140,160,180].map(y => (
          <line key={`h${y}`} x1="10" y1={y} x2="270" y2={y} stroke="#8b5cf6" strokeWidth="0.3" opacity="0.15" />
        ))}
        {[80,110,140,170,200].map(x => (
          <line key={`v${x}`} x1={x} y1="10" x2={x} y2="270" stroke="#8b5cf6" strokeWidth="0.3" opacity="0.15" />
        ))}

        {/* Body / Torso — shirt */}
        <ellipse cx="140" cy="240" rx="72" ry="55" fill="url(#shirtGrad)" />
        {/* Shirt collar */}
        <path d="M118 195 L140 210 L162 195 L155 185 L140 198 L125 185 Z" fill="#3b0764" />
        {/* Shirt detail lines */}
        <line x1="140" y1="210" x2="140" y2="260" stroke="#6d28d9" strokeWidth="1" opacity="0.5" />

        {/* Neck */}
        <rect x="128" y="175" width="24" height="22" rx="8" fill="url(#skinGrad)" />

        {/* Head */}
        <ellipse cx="140" cy="152" rx="38" ry="42" fill="url(#skinGrad)" />

        {/* Hair — top */}
        <ellipse cx="140" cy="114" rx="38" ry="14" fill="url(#hairGrad)" />
        <path d="M102 118 Q106 108 140 108 Q174 108 178 118 L176 122 Q162 114 140 114 Q118 114 104 122 Z" fill="url(#hairGrad)" />
        {/* Hair side */}
        <path d="M102 118 Q98 130 100 145 Q104 148 106 140 Q104 128 108 122 Z" fill="url(#hairGrad)" />
        <path d="M178 118 Q182 130 180 145 Q176 148 174 140 Q176 128 172 122 Z" fill="url(#hairGrad)" />

        {/* Ears */}
        <ellipse cx="102" cy="152" rx="7" ry="9" fill="#c4845a" />
        <ellipse cx="178" cy="152" rx="7" ry="9" fill="#c4845a" />

        {/* Eyes */}
        {/* Eye whites */}
        <ellipse cx="126" cy="150" rx="10" ry="8" fill="white" />
        <ellipse cx="154" cy="150" rx="10" ry="8" fill="white" />
        {/* Irises — violet tinted */}
        <circle cx="127" cy="151" r="6" fill="#4c1d95" />
        <circle cx="155" cy="151" r="6" fill="#4c1d95" />
        {/* Pupils */}
        <circle cx="127" cy="151" r="3.5" fill="#0a0010" />
        <circle cx="155" cy="151" r="3.5" fill="#0a0010" />
        {/* Eye shine */}
        <circle cx="129" cy="149" r="1.5" fill="white" opacity="0.9" />
        <circle cx="157" cy="149" r="1.5" fill="white" opacity="0.9" />
        {/* Eyebrows */}
        <path d="M115 139 Q126 134 137 138" stroke="#1a1008" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M143 138 Q154 134 165 139" stroke="#1a1008" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Glasses */}
        <rect x="113" y="143" width="26" height="18" rx="5" fill="none" stroke="#94a3b8" strokeWidth="1.5" opacity="0.7" />
        <rect x="141" y="143" width="26" height="18" rx="5" fill="none" stroke="#94a3b8" strokeWidth="1.5" opacity="0.7" />
        <line x1="139" y1="151" x2="141" y2="151" stroke="#94a3b8" strokeWidth="1.5" opacity="0.7" />
        <line x1="107" y1="149" x2="113" y2="149" stroke="#94a3b8" strokeWidth="1.5" opacity="0.6" />
        <line x1="167" y1="149" x2="173" y2="149" stroke="#94a3b8" strokeWidth="1.5" opacity="0.6" />

        {/* Nose */}
        <path d="M137 158 Q140 165 143 158" stroke="#b8764a" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />

        {/* Mouth — slight smile */}
        <path d="M130 170 Q140 177 150 170" stroke="#8b5040" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Arms */}
        {/* Left arm */}
        <path d="M68 230 Q60 210 72 198 Q80 192 90 196 L95 210 Q85 214 82 222 Z" fill="url(#shirtGrad)" />
        {/* Right arm */}
        <path d="M212 230 Q220 210 208 198 Q200 192 190 196 L185 210 Q195 214 198 222 Z" fill="url(#shirtGrad)" />

        {/* Hands */}
        <ellipse cx="72" cy="233" rx="11" ry="9" fill="url(#skinGrad)" />
        <ellipse cx="208" cy="233" rx="11" ry="9" fill="url(#skinGrad)" />

        {/* Laptop base */}
        <rect x="78" y="232" width="124" height="8" rx="3" fill="#334155" />
        {/* Laptop screen frame */}
        <rect x="84" y="192" width="112" height="42" rx="4" fill="url(#laptopGrad)" />
        {/* Screen */}
        <rect x="88" y="195" width="104" height="36" rx="2" fill="url(#screenGrad)" />

        {/* Code on screen */}
        {/* Line 1 — violet keyword */}
        <rect x="92" y="199" width="18" height="3" rx="1" fill="#8b5cf6" filter="url(#glow-v)" />
        <rect x="112" y="199" width="28" height="3" rx="1" fill="#94a3b8" opacity="0.6" />
        <rect x="142" y="199" width="14" height="3" rx="1" fill="#22d3ee" filter="url(#glow-c)" />
        {/* Line 2 */}
        <rect x="96" y="205" width="12" height="3" rx="1" fill="#3b82f6" opacity="0.9" />
        <rect x="110" y="205" width="22" height="3" rx="1" fill="#94a3b8" opacity="0.5" />
        <rect x="134" y="205" width="8" height="3" rx="1" fill="#4ade80" opacity="0.8" />
        {/* Line 3 */}
        <rect x="96" y="211" width="30" height="3" rx="1" fill="#94a3b8" opacity="0.4" />
        <rect x="128" y="211" width="16" height="3" rx="1" fill="#8b5cf6" filter="url(#glow-v)" />
        {/* Line 4 */}
        <rect x="96" y="217" width="20" height="3" rx="1" fill="#22d3ee" filter="url(#glow-c)" />
        <rect x="118" y="217" width="24" height="3" rx="1" fill="#94a3b8" opacity="0.4" />
        {/* Line 5 */}
        <rect x="92" y="223" width="14" height="3" rx="1" fill="#8b5cf6" filter="url(#glow-v)" />
        <rect x="108" y="223" width="10" height="3" rx="1" fill="#4ade80" opacity="0.8" />

        {/* Cursor blink rect */}
        <rect x="120" y="223" width="2" height="4" rx="0.5" fill="#e2e8f0" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0;0.9" dur="1.1s" repeatCount="indefinite" />
        </rect>

        {/* Floating code snippets around avatar */}
        {/* Top left — const */}
        <g filter="url(#glow-v)" opacity="0.75">
          <rect x="14" y="58" width="36" height="5" rx="1.5" fill="#8b5cf6" />
          <rect x="52" y="58" width="20" height="5" rx="1.5" fill="#94a3b8" opacity="0.5" />
        </g>
        {/* Top right — fn() */}
        <g filter="url(#glow-c)" opacity="0.7">
          <rect x="198" y="48" width="24" height="5" rx="1.5" fill="#22d3ee" />
          <rect x="224" y="48" width="14" height="5" rx="1.5" fill="#94a3b8" opacity="0.5" />
        </g>
        {/* Left — arrow */}
        <g filter="url(#glow-v)" opacity="0.65">
          <rect x="8" y="148" width="16" height="5" rx="1.5" fill="#3b82f6" />
          <rect x="26" y="148" width="22" height="5" rx="1.5" fill="#94a3b8" opacity="0.5" />
        </g>
        {/* Right — {} */}
        <g filter="url(#glow-c)" opacity="0.65">
          <rect x="236" y="138" width="10" height="5" rx="1.5" fill="#22d3ee" />
          <rect x="248" y="138" width="18" height="5" rx="1.5" fill="#94a3b8" opacity="0.5" />
        </g>
        {/* Bottom left */}
        <g filter="url(#glow-v)" opacity="0.6">
          <rect x="18" y="218" width="28" height="5" rx="1.5" fill="#8b5cf6" />
          <rect x="48" y="218" width="16" height="5" rx="1.5" fill="#94a3b8" opacity="0.5" />
        </g>

        {/* Floating dots / particles */}
        {[
          {cx:30, cy:90, r:2.5, color:"#8b5cf6", dur:"3s"},
          {cx:250, cy:80, r:2, color:"#22d3ee", dur:"4s"},
          {cx:20, cy:180, r:1.8, color:"#3b82f6", dur:"3.5s"},
          {cx:260, cy:175, r:2.2, color:"#8b5cf6", dur:"2.8s"},
          {cx:55, cy:40, r:1.5, color:"#22d3ee", dur:"4.2s"},
          {cx:230, cy:220, r:1.8, color:"#4ade80", dur:"3.8s"},
        ].map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={d.color} opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur={d.dur} repeatCount="indefinite" begin={`${i*0.6}s`} />
            <animate attributeName="cy" values={`${d.cy};${d.cy-6};${d.cy}`} dur={d.dur} repeatCount="indefinite" begin={`${i*0.6}s`} />
          </circle>
        ))}

        {/* Clip to circle */}
        <circle cx="140" cy="140" r="138" fill="none" />
      </svg>
    </div>
  )
}
