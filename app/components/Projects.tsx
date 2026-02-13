'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'

const projects = [
  {
    title: 'AI-Powered Sports Wagering Analytics Platform',
    description: 'Built prediction engine with confidence scoring and API integrations; implemented threshold-based recommendations that explicitly state "no prediction" when model confidence is low, prioritizing user trust over engagement.',
    stack: ['AI/ML', 'Confidence Scoring', 'API Integrations', 'Responsible AI'],
    outcomes: [
      'Threshold-based recommendations with transparency',
      'Explicitly states "no prediction" for low confidence',
      'Prioritizes user trust over engagement metrics',
    ],
    github: null,
    live: 'Live',
  },
  {
    title: 'Seed Inventory Management System',
    description: 'Designed RAG architecture using Firecrawl webscraping and OCR capabilities with human-in-the-loop validation modal for AI-suggested field mappings, balancing automation speed with data integrity.',
    stack: ['RAG Architecture', 'Firecrawl', 'OCR', 'Human-in-the-loop', 'Web Scraping'],
    outcomes: [
      'RAG architecture with web scraping and OCR',
      'Human-in-the-loop validation for AI suggestions',
      'Balanced automation speed with data integrity',
    ],
    github: null,
    live: 'Live',
  },
  {
    title: 'Professional Portfolio Website',
    description: 'GenAI-powered portfolio showcasing shipped products and technical projects.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GenAI'],
    outcomes: [
      'GenAI-powered portfolio design',
      'Showcases shipped products',
      'Highlights technical project experience',
    ],
    github: null,
    live: 'Live',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePosition({ x, y })
  }

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group relative"
      style={{
        transform: isHovering
          ? `perspective(1000px) rotateX(${(mousePosition.y - 200) / 50}deg) rotateY(${(mousePosition.x - 200) / 50}deg) scale3d(1.02, 1.02, 1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: 'transform 0.2s ease-out',
      }}
    >
      {/* Gradient border effect */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-accent-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
      <div className="absolute -inset-[1px] bg-gradient-to-r from-accent-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient bg-[length:200%_auto]"></div>

      {/* Spotlight effect */}
      {isHovering && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.1), transparent 40%)`,
          }}
        />
      )}

      {/* Card content */}
      <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl p-8 border border-gray-200/50 dark:border-gray-800/50 hover:shadow-2xl hover:shadow-accent-500/10 dark:hover:shadow-accent-500/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-accent-600 group-hover:via-purple-600 group-hover:to-pink-600 dark:group-hover:from-accent-400 dark:group-hover:via-purple-400 dark:group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-850 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200/50 dark:border-gray-700/50 hover:border-accent-400 dark:hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-200 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">
                    Key Outcomes
                  </div>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, idx) => (
                      <li
                        key={outcome}
                        className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-3 group/item"
                      >
                        <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-gradient-to-r from-accent-500 to-purple-500 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="flex-1">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-all hover:scale-105"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-accent-500/10 to-purple-500/10 dark:from-accent-500/20 dark:to-purple-500/20 text-accent-600 dark:text-accent-400 rounded-lg border border-accent-200 dark:border-accent-800/50">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                      </span>
                      {project.live}
                    </div>
                  )}
                </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <SectionReveal>
      <section id="projects" className="py-24 px-6 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-950 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-200/20 to-transparent dark:from-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-accent-200/20 to-transparent dark:from-accent-900/10 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured <span className="bg-gradient-to-r from-accent-600 via-purple-600 to-pink-600 dark:from-accent-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A selection of AI-powered products and tools I've built
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
