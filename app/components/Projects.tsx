'use client'

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

export default function Projects() {
  return (
    <SectionReveal>
      <section id="projects" className="py-24 px-6 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            A selection of AI-powered products and tools I've built
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 hover:border-accent-500 dark:hover:border-accent-500 transition-all hover:shadow-xl group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-500 mb-2">
                    Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300 rounded border border-gray-300 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-500 mb-2">
                    Key Outcomes
                  </div>
                  <ul className="space-y-1.5">
                    {project.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                      >
                        <svg
                          className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-accent-600 dark:text-accent-400">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {project.live}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
