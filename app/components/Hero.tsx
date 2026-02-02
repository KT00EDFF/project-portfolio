'use client'

import SectionReveal from './SectionReveal'
import HeroName from './HeroName'

export default function Hero() {
  return (
    <SectionReveal>
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm font-medium mb-6">
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
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-accent-600 hover:bg-accent-700 dark:bg-accent-500 dark:hover:bg-accent-600 text-white font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent-500/30"
            >
              View Projects
              <svg
                className="ml-2 w-5 h-5"
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
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-gray-300 dark:border-gray-700 hover:border-accent-500 dark:hover:border-accent-500 text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 font-medium transition-all hover:scale-105 active:scale-95"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years Shipping Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">$4-8M</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Annual Impact</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">8-10</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Engineering Teams</div>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
