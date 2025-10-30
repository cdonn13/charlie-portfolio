import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume - Charlie Donnelly',
  description: 'Professional experience, skills, and education of Charlie Donnelly.',
}

const experiences = [
  {
    title: 'Senior Product Designer',
    company: 'TechFlow Solutions',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: [
      'Led design efforts for flagship mobile banking app serving 500,000+ users',
      'Established and maintained comprehensive design system across 12 product teams',
      'Improved app store rating from 3.2 to 4.7 stars through user-centered redesign',
      'Mentored team of 4 junior designers and conducted design reviews',
      'Collaborated with engineering and product teams using Agile methodology',
    ],
  },
  {
    title: 'Product Designer',
    company: 'Digital Ventures',
    location: 'Remote',
    period: '2021 - 2022',
    description: [
      'Designed and shipped social features for messaging platform with 10M+ users',
      'Conducted user research and usability testing to validate design decisions',
      'Increased daily active usage by 300% through new engagement features',
      'Created interactive prototypes for stakeholder presentations',
      'Worked closely with data team to establish key metrics and success criteria',
    ],
  },
  {
    title: 'UX/UI Designer',
    company: 'Creative Studios Inc.',
    location: 'New York, NY',
    period: '2020 - 2021',
    description: [
      'Designed websites and mobile apps for diverse client portfolio',
      'Developed design systems and component libraries for client projects',
      'Facilitated design workshops and stakeholder interviews',
      'Created wireframes, mockups, and interactive prototypes',
      'Managed 8+ concurrent client projects from concept to delivery',
    ],
  },
]

const education = [
  {
    degree: 'Bachelor of Science in Design',
    school: 'Stanford University',
    location: 'Stanford, CA',
    period: '2016 - 2020',
    honors: 'Magna Cum Laude',
    description: 'Focus on Human-Computer Interaction and Visual Design',
  },
]

const skills = {
  'Design Tools': ['Figma', 'Sketch', 'Adobe Creative Suite', 'Principle', 'ProtoPie', 'After Effects'],
  'Development': ['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  'Research & Testing': ['User Interviews', 'Usability Testing', 'A/B Testing', 'Analytics', 'Maze', 'UserTesting.com'],
  'Other': ['Design Systems', 'Agile/Scrum', 'Accessibility (WCAG)', 'Project Management', 'Workshop Facilitation'],
}

const certifications = [
  {
    name: 'Certified Accessibility Professional',
    issuer: 'IAAP',
    year: '2023',
  },
  {
    name: 'Google UX Design Professional Certificate',
    issuer: 'Google',
    year: '2021',
  },
]

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-heading text-5xl font-bold text-gray-900 mb-4">
            Resume
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            4+ years of experience in product design and development
          </p>
          <a
            href="mailto:hello@charliedonnelly.com"
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
            Get in Touch
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        {/* Experience */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-gray-900">
            Experience
          </h2>
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-gray-200">
                <div className="absolute w-4 h-4 bg-gray-900 rounded-full -left-[9px] top-0"></div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-gray-600 mb-3">
                    <span className="font-medium">{exp.company}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>
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
                <p className="text-gray-700">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-gray-900">
            Skills
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

        {/* Certifications */}
        <div>
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-gray-900">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200"
              >
                <h3 className="font-semibold text-gray-900 mb-1">{cert.name}</h3>
                <p className="text-gray-600 text-sm">
                  {cert.issuer} • {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
