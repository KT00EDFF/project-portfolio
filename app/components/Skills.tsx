'use client'

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

export default function Skills() {
  return (
    <SectionReveal>
      <section id="skills" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <div
                key={category.title}
                className="bg-white dark:bg-gray-950 rounded-xl p-8 border border-gray-200 dark:border-gray-800 hover:border-accent-500 dark:hover:border-accent-500 transition-all hover:shadow-lg"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-accent-500 rounded-full"></span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-accent-50 hover:text-accent-600 dark:hover:bg-accent-900/20 dark:hover:text-accent-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
