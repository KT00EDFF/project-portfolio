'use client'

import SectionReveal from './SectionReveal'
import HeroName from './HeroName'

export default function Hero() {
  return (
    <SectionReveal>
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden bg-white dark:bg-gray-950"
      >
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-purple-50 to-pink-50 dark:from-accent-950/40 dark:via-purple-950/40 dark:to-pink-950/40 opacity-60 dark:opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-50 via-transparent to-cyan-50 dark:from-blue-950/30 dark:via-transparent dark:to-cyan-950/30 opacity-40"></div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-accent-400 to-purple-400 dark:from-accent-600 dark:to-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-gradient-to-l from-purple-400 to-pink-400 dark:from-purple-600 dark:to-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-gradient-to-t from-cyan-400 to-blue-400 dark:from-cyan-600 dark:to-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50/80 dark:bg-green-900/30 backdrop-blur-sm border border-green-200/50 dark:border-green-700/30 text-green-600 dark:text-green-400 text-sm font-medium mb-6 shadow-lg shadow-green-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for Senior/Lead AI PM Roles
          </div>

          <div className="mb-8">
            <HeroName />
          </div>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-balance">
            AI product leader and platform builder with 5+ years shipping products at scale. Building enterprise platform infrastructure and GenAI-powered decisioning systems with human-in-the-loop design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-accent-600 via-purple-600 to-accent-600 hover:from-accent-700 hover:via-purple-700 hover:to-accent-700 dark:from-accent-500 dark:via-purple-500 dark:to-accent-500 dark:hover:from-accent-600 dark:hover:via-purple-600 dark:hover:to-accent-600 text-white font-medium transition-all hover:scale-105 active:scale-95 shadow-xl shadow-accent-500/30 dark:shadow-accent-500/20 hover:shadow-2xl hover:shadow-accent-500/40 dark:hover:shadow-accent-500/30"
            >
              View Projects
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-gray-300/50 dark:border-gray-700/50 hover:border-accent-500 dark:hover:border-accent-400 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 font-medium transition-all hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-accent-500/10"
            >
              Get in Touch
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-accent-600 to-purple-600 dark:from-accent-400 dark:to-purple-400 bg-clip-text text-transparent">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years Shipping Products</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">$4-8M</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Annual Impact</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-accent-600 dark:from-pink-400 dark:to-accent-400 bg-clip-text text-transparent">8-10</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Engineering Teams</div>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
