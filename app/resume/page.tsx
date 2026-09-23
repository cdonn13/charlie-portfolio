import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume - Charlie Donnelly',
  description: 'Professional experience, skills, and education of Charlie Donnelly.',
}

const summary =
  'Product Lead and Client Manager with a technical background, spanning software development, design, and product management. Experienced across startups and venture capital, building products end-to-end while managing the stakeholder and partner relationships. A multidimensional product leader equally comfortable in the code, in the design, and in front of the customer.'

type Role = {
  title: string
  period: string
}

type Experience = {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  roles?: Role[]
}

const experiences: Experience[] = [
  {
    title: 'Head of Product',
    company: 'Runwayz',
    location: 'Chicago, IL',
    period: 'Jun 2025 - Present',
    description: [
      'Owned the product strategy and roadmap, authoring end-to-end journey maps for major features that positioned the product for a projected 40% increase in inbound customers.',
      'Established a design partner program, engaging directly with customers to integrate the product and serve as their primary point of contact, improving onboarding for early adopters.',
      'Built and delivered tailored product demos for stakeholders and design partners, gathering partner feedback to continuously shape the roadmap.',
      'Constructed a ground-up design system and an automated Figma-to-GitHub pipeline with AI-driven workflows (Claude, MCPs), accelerating design-to-engineering handoff 3x.',
    ],
  },
  {
    title: 'Product Lead & Client Manager',
    company: 'Donnelly Design',
    location: 'Chicago, IL',
    period: 'Mar 2024 - Present',
    description: [
      'Worked as a product developer and product lead for a portfolio of clients, designing and developing custom solutions and integrations (APIs, HubSpot, Stripe, AWS, Google Analytics, Notion, Figma) to extend and enhance their products.',
      'Partnered hands-on with development teams to assemble efficient product pipelines, turning discovery and research into shipped solutions and cutting product time-to-market 30%.',
      'Served as primary point of contact and trusted advisor for high-churn-risk clients, achieving a 100% retention rate and converting at-risk relationships into upsells and expansions.',
    ],
  },
  {
    title: 'Product Development Lead',
    company: 'Platform Venture Studio',
    location: 'Chicago, IL',
    period: 'Jan 2022 - Feb 2024',
    roles: [
      { title: 'Product Development Lead', period: 'Mar 2023 - Feb 2024' },
      { title: 'Product Developer', period: 'Jan 2022 - Mar 2023' },
    ],
    description: [
      'Worked directly with founders to cultivate the right product roadmap and execute on their product vision, prioritizing ruthlessly under tight constraints and simultaneous product launches.',
      'Built and designed MVPs as a hands-on developer for a diverse portfolio of high-growth startups, shipping scalable products under tight 8-week timelines that contributed to a collective $5 million in annual recurring revenue.',
      'Designed and implemented custom integrations (Stripe, Google Analytics, HotJar, HubSpot, AWS) and other software to build scalable, production-ready products in heavily regulated spaces (HIPAA, legal compliance).',
    ],
  },
]

const education = [
  {
    degree: 'Master of Business Administration',
    school: 'Johns Hopkins Carey Business School',
    location: 'Baltimore, MD',
    period: 'May 2027',
    honors: '',
    description: '',
  },
  {
    degree: 'Master of Design Leadership',
    school: 'Maryland Institute College of Art (MICA)',
    location: 'Baltimore, MD',
    period: 'May 2027',
    honors: '',
    description: '',
  },
  {
    degree: 'Bachelor of Arts, Industrial & Product Design',
    school: 'University of Notre Dame',
    location: 'Notre Dame, IN',
    period: 'May 2021',
    honors: '',
    description: '',
  },
]

const leadership = [
  {
    role: 'Mentor & Speaker | Race to Revenue',
    organization: 'University of Notre Dame',
    location: 'Notre Dame, IN',
    period: 'Jun 2025 - Present',
    description: [
      "Mentored student-led startups and interns; provided training workshops for Notre Dame's summer accelerator.",
    ],
  },
  {
    role: 'Advisor | Trivialinked',
    organization: 'University of Notre Dame',
    location: 'Notre Dame, IN',
    period: 'Jul 2026 - Present',
    description: [
      'Provided product, design, and strategic guidance to a high-growth, student-led startup.',
    ],
  },
]

const skills = {
  'Product': ['Product Strategy & Roadmap', 'Stakeholder & Partner Management', 'Solutions Consulting', 'Implementation & Onboarding', 'Custom Integrations & APIs', 'AI Workflows (Claude & MCPs)', 'Team Leadership & Mentoring', 'Prioritization'],
  'Design': ['Design Systems', 'UI/UX Design', 'Prototyping', 'User Research', 'Journey Mapping', 'Design-to-Code', 'Design Thinking', 'WCAG Accessibility', 'Inclusive Design'],
  'Tools': ['Figma', 'Claude', 'Cursor', 'GitHub', 'Stripe', 'AWS', 'Google Analytics', 'Segment', 'HotJar', 'HubSpot', 'Notion', 'Jira'],
  'Interests': ['Game Design', 'Startups', 'Travel', 'Movies & VFX', 'Sketching', 'Skiing', 'Swimming'],
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-heading text-5xl font-bold text-gray-900 mb-4">
            Resume
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl leading-relaxed">
            {summary}
          </p>
          <a
            href="mailto:cedonnelly13@gmail.com"
            className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            cedonnelly13@gmail.com
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        {/* Experience */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-gray-900">
            Professional Experience
          </h2>
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-gray-200">
                <div className="absolute w-4 h-4 bg-gray-900 rounded-full -left-[9px] top-0"></div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-1">
                    {exp.roles ? exp.company : exp.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-gray-600 mb-3">
                    {!exp.roles && (
                      <>
                        <span className="font-medium">{exp.company}</span>
                        <span>•</span>
                      </>
                    )}
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>
                  {exp.roles && (
                    <ul className="mb-4 space-y-1">
                      {exp.roles.map((role) => (
                        <li key={role.title} className="flex flex-wrap gap-2 text-gray-700">
                          <span className="font-medium text-gray-900">{role.title}</span>
                          <span className="text-gray-600">{role.period}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <svg
                          className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-gray-900">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">
                  {edu.degree}
                  {edu.honors && (
                    <span className="ml-2 text-base font-normal text-gray-600">
                      ({edu.honors})
                    </span>
                  )}
                </h3>
                <div className="flex flex-wrap gap-2 text-gray-600 mb-2">
                  <span className="font-medium">{edu.school}</span>
                  <span>•</span>
                  <span>{edu.location}</span>
                  <span>•</span>
                  <span>{edu.period}</span>
                </div>
                {edu.description && (
                  <p className="text-gray-700">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Service */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-gray-900">
            Leadership &amp; Service
          </h2>
          <div className="space-y-10">
            {leadership.map((item, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-gray-200">
                <div className="absolute w-4 h-4 bg-gray-900 rounded-full -left-[9px] top-0"></div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-1">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-gray-600 mb-3">
                    <span className="font-medium">{item.organization}</span>
                    <span>•</span>
                    <span>{item.location}</span>
                    <span>•</span>
                    <span>{item.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {item.description.map((line, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <svg
                          className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-gray-900">
            Skills & Interests
          </h2>
          <div className="space-y-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="font-semibold text-gray-900 mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium"
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
    </div>
  )
}
