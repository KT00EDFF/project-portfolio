'use client'

import SectionReveal from './SectionReveal'

export default function About() {
  return (
    <SectionReveal>
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-950 dark:to-gray-900/50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-l from-accent-200/20 via-purple-200/10 to-transparent dark:from-accent-900/10 dark:via-purple-900/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            About <span className="bg-gradient-to-r from-accent-600 via-purple-600 to-pink-600 dark:from-accent-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>

          <div className="relative bg-white/60 dark:bg-gray-950/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-200/50 dark:border-gray-800/50 shadow-xl shadow-gray-900/5 dark:shadow-accent-500/5">
            {/* Decorative gradient border */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-accent-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>

            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              I'm an AI product leader and platform builder with 5+ years shipping products at scale. I lead enterprise platform infrastructure serving hundreds of users across 8-10 engineering teams, delivering $4-8M annual impact through self-service automation and GenAI-powered decisioning with human-in-the-loop systems.
            </p>
            <p>
              At JPMorgan Chase, I've reduced operational errors by 80% while maintaining zero critical audit findings over 3 years. I founded and grew an automation platform team from zero (shipped 15-30 products) to Group PM managing 8 people. My work spans API-first architecture, platform scalability, and responsible AI product design.
            </p>
            <p>
              I'm an active builder shipping AI-powered applications using GitHub Copilot, Claude Code, and Replit. My approach centers on practical implementation—building GenAI systems with confidence thresholds, human-in-the-loop validation, and clear transparency about model limitations to prioritize user trust over engagement metrics.
            </p>
            <div className="relative p-6 rounded-xl bg-gradient-to-r from-accent-50 via-purple-50 to-pink-50 dark:from-accent-950/30 dark:via-purple-950/30 dark:to-pink-950/30 border border-accent-200/50 dark:border-accent-800/50">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent-600 dark:text-accent-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <p className="text-accent-700 dark:text-accent-300 font-medium leading-relaxed">
                  I'm currently seeking Senior/Lead Product roles where I can build and scale AI products from 0→1, with expertise in platform infrastructure, developer experience, and responsible AI systems.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
