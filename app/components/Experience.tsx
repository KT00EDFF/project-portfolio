'use client'

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
      <section id="experience" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            Building products that users love, backed by data
          </p>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={exp.company}
                className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-800 last:pb-0"
              >
                <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-accent-500 border-4 border-white dark:border-gray-950"></div>

                <div className="bg-white dark:bg-gray-950 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-accent-500 dark:hover:border-accent-500 transition-all hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-accent-600 dark:text-accent-400 font-medium">
                        {exp.company}
                        {exp.location && ` — ${exp.location}`}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-500 mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-gray-700 dark:text-gray-300 flex items-start gap-3"
                      >
                        <svg
                          className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
