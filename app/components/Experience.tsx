'use client'

import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'

const experiences = [
  {
    role: 'VP, Product Management (Group Product Manager)',
    company: 'JPMorgan Chase',
    location: 'Chicago, IL',
    period: 'Oct 2021 - Present',
    highlights: [
      'Lead enterprise platform infrastructure powering corporate client onboarding and product lifecycle management, managing team of 8 (5 direct + 3 indirect) across API platform, product data management, and integration orchestration',
      'Developing GenAI-powered rules optimization system with human-in-the-loop architecture—low-confidence recommendations route to expert review, high-confidence changes auto-apply',
      'Reduced onboarding rejections by 80% (25% to <5%) by designing eligibility rule framework, eliminating 3,000-4,000 rejected applications annually and preventing compliance violations',
      'Scaled self-service product data platform from 0 to hundreds of users across 5-10 business units, enabling 1,200+ annual product definition changes delivering $3-6M annual cost avoidance',
      'Reduced onboarding time by 65% (20+ days to <7 days) for corporate treasury clients, enabling 15,000-20,000 annual onboarding requests worth multi-million dollar lifetime value',
      'Achieved zero critical audit findings over 3 consecutive years by establishing risk-based change framework with automated approvals',
    ],
  },
  {
    role: 'Director, Tax Planning & Transformation',
    company: 'Lumen Technologies',
    location: 'Colorado',
    period: 'Nov 2019 - Oct 2021',
    highlights: [
      'Founded automation platform team from ground up—hired and managed team of 2-3 people with charter: "If we can define the workflow, we can automate it through an online app"',
      'Shipped 15-30 self-service Alteryx applications enabling tax analysts to independently execute sales and use tax compliance workflows without engineering dependencies',
      'Eliminated 2-5 FTEs ($200K-$750K annual savings) by automating hundreds of hours of weekly manual work',
      'Built cloud-based analytics and automation platform with parameterized workflows and unattended execution—designed self-service tooling and training programs',
    ],
  },
  {
    role: 'Senior Manager / Senior Tax Manager',
    company: 'Lumen Technologies',
    location: 'Colorado',
    period: '2015 - 2019',
    highlights: [
      'Learned analytics tooling and identified automation opportunities at scale while leading tax audits, appeals, and planning initiatives',
      'Drove early process automation and data transformation projects that demonstrated ROI, leading to promotion to Director and mandate to build dedicated automation platform team',
    ],
  },
]

export default function Experience() {
  return (
    <SectionReveal>
      <section id="experience" className="py-24 px-6 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-950 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-200/20 to-transparent dark:from-purple-900/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="bg-gradient-to-r from-accent-600 via-purple-600 to-pink-600 dark:from-accent-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Building products that users love, backed by data
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative pl-8 pb-8 border-l-2 border-gradient-to-b from-accent-500 via-purple-500 to-pink-500 last:pb-0 group"
              >
                {/* Timeline dot with gradient */}
                <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-gradient-to-r from-accent-500 to-purple-500 border-4 border-white dark:border-gray-950 group-hover:scale-125 transition-transform shadow-lg shadow-accent-500/30"></div>

                {/* Card with glassmorphism */}
                <div className="relative bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-800/50 hover:border-accent-400 dark:hover:border-accent-500 transition-all hover:shadow-xl hover:shadow-accent-500/10 dark:hover:shadow-accent-500/20">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-accent-600 group-hover:to-purple-600 dark:group-hover:from-accent-400 dark:group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                        {exp.role}
                      </h3>
                      <p className="text-accent-600 dark:text-accent-400 font-medium text-base">
                        {exp.company}
                        {exp.location && (
                          <span className="text-gray-500 dark:text-gray-500 font-normal"> — {exp.location}</span>
                        )}
                      </p>
                    </div>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-850 text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-gray-700/50 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li
                        key={highlight}
                        className="text-gray-700 dark:text-gray-300 flex items-start gap-3 group/item"
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
                        <span className="flex-1 leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
