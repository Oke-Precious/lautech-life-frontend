import React, { useState } from 'react';
import {
  GraduationCap,
  Building,
  Wallet,
  Users,
  Compass,
  Car,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Layers,
  Code2,
  Info,
  Lock,
  Smartphone,
  ChevronRight,
} from 'lucide-react';

export function App() {
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);

  const futureFeatures = [
    {
      title: 'Explore Ogbomoso',
      desc: 'Wander through a compact, stylized campus environment inspired by LAUTECH landmarks, the Adenike student hub, Under-G paths, and vibrant town junctions.',
      badge: 'Planned (Phase 2)',
      icon: '🗺️',
      color: 'emerald',
    },
    {
      title: 'Experience Student Life',
      desc: 'Attend 100L General Studies lectures at the 1200 Lecture Hall, complete clearance at the Senate building, and earn validated academic credits.',
      badge: 'Planned (Phase 2)',
      icon: '🎓',
      color: 'gold',
    },
    {
      title: 'Meet and Interact with Players',
      desc: 'Encounter fellow students in bounded 8-player spatial rooms with real-time text chat, friendly greetings, mutual contact requests, and activity invites.',
      badge: 'Planned (Phase 2)',
      icon: '💬',
      color: 'emerald',
    },
    {
      title: 'Find Accommodation',
      desc: 'Inspect and rent a student room at Adenike Campus Villa with borehole water, solar lighting, and secure gates without debt traps or punitive evictions.',
      badge: 'Planned (Phase 2)',
      icon: '🏢',
      color: 'gold',
    },
    {
      title: 'Build Your Virtual Lifestyle',
      desc: 'Manage your integer virtual naira wallet (₦5,000 starter grant), purchase authentic student meals at Mama Shade’s kiosk, and run campus delivery errands.',
      badge: 'Planned (Phase 2)',
      icon: '🍲',
      color: 'emerald',
    },
    {
      title: 'Drive & Explore in Future Versions',
      desc: 'Acquire campus transportation and navigate extended Ogbomoso routes in future post-V0.1 milestone expansions.',
      badge: 'Post-V0.1 Roadmap',
      icon: '🚗',
      color: 'slate',
    },
  ];

  return (
    <div className="min-h-screen bg-[#07130c] text-slate-100 flex flex-col font-sans selection:bg-emerald-600 selection:text-white">
      {/* 1. Development Status Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-[#0a2315] to-emerald-950 border-b border-emerald-800/40 px-4 py-2 text-center text-xs text-emerald-200 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
        <span className="font-semibold text-amber-300 uppercase tracking-wider text-[11px]">
          Development Status:
        </span>
        <span>
          Phase 1A Initial Setup in progress • 3D gameplay is currently disabled and planned for Phase 2.
        </span>
      </div>

      {/* 2. Responsive Navigation / Header */}
      <header className="sticky top-0 z-40 bg-[#07130c]/90 backdrop-blur-md border-b border-emerald-900/40 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-700 to-amber-600 flex items-center justify-center text-xl shadow-lg shadow-emerald-900/40 border border-amber-500/30">
              🎓
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg text-white tracking-wider">
                  LAUTECH LIFE
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                  v0.2 Spec
                </span>
              </div>
              <p className="text-[11px] text-amber-400/90 font-medium">
                Your Campus. Your Story. Your Life.
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-300">
            <a href="#about" className="hover:text-amber-400 transition">About</a>
            <a href="#features" className="hover:text-amber-400 transition">Future Features</a>
            <a href="#architecture" className="hover:text-amber-400 transition">Tech Architecture</a>
            <a href="#roadmap" className="hover:text-amber-400 transition">Roadmap</a>
            <a href="#disclaimer" className="hover:text-amber-400 transition">Disclaimer</a>
          </nav>

          {/* Game Entry Control (Disabled / Coming Soon) */}
          <div className="flex items-center gap-2">
            <button
              disabled
              title="3D gameplay will launch in Phase 2"
              className="px-4 py-2 rounded-xl bg-slate-900 text-slate-400 border border-slate-800 text-xs font-bold cursor-not-allowed flex items-center gap-1.5 shadow-inner opacity-80"
            >
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>Launch 3D Game (Coming Soon)</span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. Hero Section */}
      <section className="relative overflow-hidden pt-12 sm:pt-20 pb-16 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/50 text-xs text-amber-300 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold">Independent 3D Student Simulation • Phase 1A Foundation</span>
          </div>

          <h1 className="text-3xl sm:text-5xl sm:leading-[1.15] font-black text-white tracking-tight">
            Your Campus. Your Story.{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-amber-300 to-emerald-200 bg-clip-text text-transparent">
              Your Life.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Experience student life around <strong>LAUTECH</strong> and <strong>Ogbomoso</strong> in a lightweight, browser-based 3D world. Balance your academic lectures, find hostel accommodation at Adenike, manage your student wallet, and connect with peers — designed specifically for ordinary Android phones and modern desktop browsers.
          </p>

          {/* Player Fantasy Callout */}
          <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 text-xs sm:text-sm text-emerald-100 italic max-w-2xl mx-auto shadow-lg">
            “I have just arrived as a newly admitted student. I can settle in, work toward my education, manage my money, and find my community.”
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#features"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-600 hover:to-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-900/40 transition flex items-center gap-2 cursor-pointer border border-emerald-500/30"
            >
              <span>Explore Planned Features</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </a>

            <a
              href="#architecture"
              className="px-5 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-sm border border-emerald-900/50 transition cursor-pointer"
            >
              View Phase 1A Specs
            </a>
          </div>

          {/* Quick Pillars Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 text-xs text-left">
            <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-900/50">
              <span className="text-amber-400/90 block text-[10px] uppercase font-bold tracking-wider">Dev Budget</span>
              <span className="font-extrabold text-white text-sm">₦0 Strict Constraint</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-900/50">
              <span className="text-amber-400/90 block text-[10px] uppercase font-bold tracking-wider">Mobile Target</span>
              <span className="font-extrabold text-emerald-300 text-sm">3GB RAM Android</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-900/50">
              <span className="text-amber-400/90 block text-[10px] uppercase font-bold tracking-wider">Initial Download</span>
              <span className="font-extrabold text-white text-sm">≤8 MB Limit</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-900/50">
              <span className="text-amber-400/90 block text-[10px] uppercase font-bold tracking-wider">Tech Stack</span>
              <span className="font-extrabold text-amber-300 text-sm">React + Three.js</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Brief Game Introduction Section */}
      <section id="about" className="py-16 px-4 sm:px-8 bg-[#091b11] border-y border-emerald-900/50">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
              Project Vision & Concept
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              An Authentic Simulation of Ogbomoso Campus Life
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              LAUTECH Life is built to run directly inside mobile and desktop web browsers without app store downloads. It focuses on accessible gameplay that captures the true rhythm of Nigerian university life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#0a2315]/80 border border-emerald-800/40 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-900/60 text-emerald-300 flex items-center justify-center text-2xl border border-emerald-700/50">
                📚
              </div>
              <h3 className="font-bold text-base text-white">Academic Routine</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Attend lectures at the iconic 1200 Lecture Hall, matriculate through the Senate clearance desk, and earn daily attendance credits under course advisors.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0a2315]/80 border border-emerald-800/40 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-900/40 text-amber-300 flex items-center justify-center text-2xl border border-amber-600/40">
                💰
              </div>
              <h3 className="font-bold text-base text-white">Student Economy & Hustle</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Start with a ₦5,000 virtual naira grant. Run campus delivery errands for Dayo (₦500 reward) and purchase piping hot jollof rice at Mama Shade’s kiosk.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0a2315]/80 border border-emerald-800/40 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-900/60 text-emerald-300 flex items-center justify-center text-2xl border border-emerald-700/50">
                🏘️
              </div>
              <h3 className="font-bold text-base text-white">Adenike Accommodation</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Lease an off-campus hostel room for ₦2,000 per 7-game-day term with running borehole water and solar reading lighting. Safe recovery avoids punitive debt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Short Future-Features Preview */}
      <section id="features" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto w-full space-y-10">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
            Coming in Later Phases
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Future Features Preview
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            All gameplay modules below are planned and currently under development for Phase 2 and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {futureFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#08180e] border border-emerald-900/60 space-y-4 hover:border-emerald-600/50 transition flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{feat.icon}</span>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${
                    feat.color === 'emerald'
                      ? 'bg-emerald-950 text-emerald-300 border-emerald-700/60'
                      : feat.color === 'gold'
                      ? 'bg-amber-950 text-amber-300 border-amber-700/60'
                      : 'bg-slate-900 text-slate-400 border-slate-700'
                  }`}>
                    {feat.badge}
                  </span>
                </div>
                <h3 className="font-bold text-base text-white">{feat.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{feat.desc}</p>
              </div>

              <div className="pt-2 text-[11px] font-medium text-amber-400/80 flex items-center gap-1">
                <span>Status: In specification & setup</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Technical Architecture & Networking Preparation (Section 6 & 7) */}
      <section id="architecture" className="py-16 px-4 sm:px-8 bg-[#091b11] border-y border-emerald-900/50">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
              System Architecture (Section 15 & 16)
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Prepared for Real Full-Stack Scaling
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Clear separation between this frontend repository and the future Express & Supabase backend.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend Scope Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0a2315] border border-emerald-800/40 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-emerald-400 font-bold">
                  lautech-life-frontend (This Repository)
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                  Phase 1A Active
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">Browser Presentation Layer</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Built with React 18, Vite, JavaScript, and Tailwind CSS. Prepares the architecture for Three.js and React Three Fiber rendering, touch virtual joysticks, client-side interpolation, and accessible UI.
              </p>
              <div className="bg-[#05110a] p-3.5 rounded-2xl border border-emerald-950 font-mono text-xs space-y-1 text-slate-300">
                <div className="text-emerald-500/80 font-bold"># Frontend .env.example (All values are public)</div>
                <div className="text-amber-300">VITE_API_BASE_URL=http://localhost:4000</div>
                <div className="text-amber-300">VITE_SOCKET_URL=http://localhost:4000</div>
                <div className="text-slate-400">VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co</div>
                <div className="text-slate-400">VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY</div>
              </div>
            </div>

            {/* Backend Scope Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0a2315] border border-emerald-800/40 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-amber-400 font-bold">
                  lautech-life-backend (Maintained Separately)
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold">
                  Separate Repo
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">Authoritative Server & Database Authority</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Node.js, Express, Socket.IO, Supabase PostgreSQL, and Supabase Auth. Express maintains exclusive authority over balances, rewards, rentals, and room presence. No backend code is generated in this repository.
              </p>
              <div className="bg-[#05110a] p-3.5 rounded-2xl border border-emerald-950 font-mono text-xs space-y-1 text-slate-300">
                <div className="text-amber-500/80 font-bold"># Planned Network Flow (Section 7)</div>
                <div>• Frontend ──► Supabase Auth (Sign-in flows)</div>
                <div>• Frontend ──► Express REST API (:4000) ──► PostgreSQL</div>
                <div>• Frontend ◄─► Socket.IO (:4000) (Multiplayer rooms)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Mobile Performance Gate (Section 18) */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto w-full space-y-8">
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
            Section 18 Constraints
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Mobile-First Optimization
          </h2>
          <p className="text-xs text-slate-300">
            Validated against entry-level Android hardware so every student can participate.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-5 rounded-3xl bg-[#091b11] border border-emerald-900/60">
            <div className="text-3xl font-black text-emerald-400">≤8 MB</div>
            <div className="text-xs font-bold text-white mt-1">Initial Download</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Compressed bundle limit</div>
          </div>
          <div className="p-5 rounded-3xl bg-[#091b11] border border-emerald-900/60">
            <div className="text-3xl font-black text-amber-400">≤100k</div>
            <div className="text-xs font-bold text-white mt-1">Triangles</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Low-poly 3D world budget</div>
          </div>
          <div className="p-5 rounded-3xl bg-[#091b11] border border-emerald-900/60">
            <div className="text-3xl font-black text-emerald-400">≤100</div>
            <div className="text-xs font-bold text-white mt-1">Draw Calls</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Max at busiest campus view</div>
          </div>
          <div className="p-5 rounded-3xl bg-[#091b11] border border-emerald-900/60">
            <div className="text-3xl font-black text-amber-400">≥30 FPS</div>
            <div className="text-xs font-bold text-white mt-1">Target Framerate</div>
            <div className="text-[11px] text-slate-400 mt-0.5">On 3GB RAM Android phone</div>
          </div>
        </div>
      </section>

      {/* 8. Independent Project Legal Disclaimer & Zero-Cost Notice (Section 20 & 21) */}
      <section id="disclaimer" className="py-12 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#091b11] border border-emerald-900/60 space-y-3 text-xs text-slate-300 leading-relaxed">
          <div className="font-bold text-amber-300 text-sm flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Independent Project & Legal Disclaimer (Section 20 & 21)</span>
          </div>
          <p>
            <strong>LAUTECH Life</strong> is an independent fictional student simulation project inspired by student life around Ladoke Akintola University of Technology (LAUTECH) and Ogbomoso, Oyo State, Nigeria.
          </p>
          <p>
            This software is <strong>not</strong> an official university portal, course registration system, admission authority, or examination service. It does not use the official LAUTECH crest, administration seals, or copyrighted imagery without permission. All virtual naira (₦) currency has <strong>zero real-world monetary value</strong>, and development strictly adheres to a <strong>₦0 budget</strong> using only free and open-source software.
          </p>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="mt-auto border-t border-emerald-950 bg-[#040e08] px-4 sm:px-8 py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © 2026 LAUTECH LIFE • Phase 1A Frontend Foundation • Master Spec Version 0.2
          </div>
          <div className="flex items-center gap-4 text-emerald-400 font-mono text-[11px]">
            <span>React + Vite + JS</span>
            <span>•</span>
            <span>₦0 Development Cost</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
