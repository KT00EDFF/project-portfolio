'use client'

import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'

const skillCategories = [
  {
    title: 'AI/ML Product Management',
    skills: [
      'Human-in-the-loop systems',
      'LLM product design',
      'Responsible AI',
      'Confidence thresholds',
      'GenAI application development',
      'RAG architecture',
    ],
  },
  {
    title: 'Platform Infrastructure',
    skills: [
      'API-first architecture',
      'Developer experience',
      'Self-service tooling',
      'Integration orchestration',
      'Platform scalability',
      'System modernization',
    ],
  },
  {
    title: 'Technical Tools',
    skills: [
      'GitHub Copilot',
      'Claude Code',
      'Replit',
      'Alteryx',
      'Modern AI/ML platforms',
      'Firecrawl',
    ],
  },
  {
    title: 'Product Leadership',
    skills: [
      '0→1 strategy',
      'Multi-year roadmaps',
      'Team building',
      'Hiring & coaching',
      'Stakeholder management',
      'Agile product management',
    ],
  },
]

const gradients = [
  'from-accent-500 to-purple-500',
  'from-purple-500 to-pink-500',
  'from-pink-500 to-accent-500',
  'from-accent-500 via-purple-500 to-pink-500',
]

export default function Skills() {
  return (
    <SectionReveal>
      <section id="skills" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-accent-200/20 to-transparent dark:from-accent-900/10 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">
            Skills & <span className="bg-gradient-to-r from-accent-600 via-purple-600 to-pink-600 dark:from-accent-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative"
              >
                {/* Gradient border on hover */}
                <div className={`absolute -inset-[1px] bg-gradient-to-r ${gradients[idx]} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`}></div>

                <div className="relative bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 dark:border-gray-800/50 hover:shadow-xl hover:shadow-accent-500/5 dark:hover:shadow-accent-500/10 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <span className={`w-1.5 h-8 bg-gradient-to-b ${gradients[idx]} rounded-full group-hover:h-10 transition-all duration-300`}></span>
                    <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-accent-600 group-hover:to-purple-600 dark:group-hover:from-accent-400 dark:group-hover:to-purple-400 transition-all duration-300">
                      {category.title}
                    </span>
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 text-sm font-medium bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-850 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200/50 dark:border-gray-700/50 hover:border-accent-400 dark:hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400 hover:shadow-md hover:shadow-accent-500/10 transition-all duration-200 hover:scale-105 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
