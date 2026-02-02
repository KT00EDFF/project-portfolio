'use client'

import SectionReveal from './SectionReveal'

export default function About() {
  return (
    <SectionReveal>
      <section id="about" className="py-24 px-6 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
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
            <p className="text-accent-600 dark:text-accent-400 font-medium">
              I'm currently seeking Senior/Lead Product roles where I can build and scale AI products from 0→1, with expertise in platform infrastructure, developer experience, and responsible AI systems.
            </p>
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
