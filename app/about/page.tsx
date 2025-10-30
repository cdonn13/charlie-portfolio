import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Charlie Donnelly',
  description: 'Learn about my journey as a designer and developer, my values, and what drives my work.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            My Story
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How I became passionate about creating meaningful digital experiences
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {/* Profile Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1200&h=800&fit=crop"
              alt="Charlie Donnelly"
              fill
              className="object-cover"
            />
          </div>

          {/* Story Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              The Beginning
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              My journey into design and development began unexpectedly during my college years.
              I was studying business when I took an elective course in graphic design—and everything
              changed. I discovered that I could combine creativity with problem-solving to create
              experiences that genuinely helped people.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              What started as a curiosity quickly became a passion. I spent countless nights learning
              design principles, experimenting with code, and understanding how technology could serve
              human needs. I realized that the most impactful work happens at the intersection of
              beautiful design and thoughtful engineering.
            </p>

            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4 mt-12">
              My Approach
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              I believe that great design isn't about following trends—it's about understanding people.
              Every project I undertake starts with deep research into user needs, behaviors, and pain
              points. I'm not satisfied with surface-level solutions; I want to understand the "why"
              behind every decision.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Over the past 4+ years, I've had the privilege of working on projects ranging from
              mobile banking apps serving hundreds of thousands of users to intimate mental health
              platforms that provide support during people's most vulnerable moments. Each project
              has taught me something invaluable about empathy, technical excellence, and the
              responsibility we carry as designers and developers.
            </p>

            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4 mt-12">
              What Drives Me
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              I'm motivated by the idea that good design can make someone's day a little bit easier,
              a little bit brighter. Whether it's reducing friction in a banking transaction or creating
              a calming space for someone struggling with anxiety, I'm driven by impact.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Beyond pixels and code, I'm passionate about mentorship and knowledge sharing. I believe
              our industry grows stronger when we lift each other up. I regularly speak at design
              meetups, contribute to open-source projects, and mentor aspiring designers and developers.
            </p>

            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4 mt-12">
              Beyond Work
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When I'm not designing or coding, you'll find me exploring new hiking trails,
              experimenting with film photography, or diving deep into the latest design and
              technology trends. I'm an avid reader, particularly interested in psychology,
              behavioral economics, and human-computer interaction.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              I also believe in giving back to the community. I volunteer with local nonprofits
              helping them improve their digital presence and make their services more accessible
              to the people they serve.
            </p>

            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4 mt-12">
              Let's Connect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              I'm always excited to connect with fellow designers, developers, and anyone passionate
              about creating meaningful digital experiences. Whether you want to collaborate on a
              project, discuss design philosophy, or just say hello, I'd love to hear from you.
            </p>
          </div>

          {/* Skills & Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Core Values
              </h3>
              <ul className="space-y-3">
                {[
                  'User-centered thinking',
                  'Continuous learning',
                  'Attention to detail',
                  'Collaborative spirit',
                  'Accessibility & inclusion',
                  'Ethical technology',
                ].map((value) => (
                  <li key={value} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-gray-900 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Expertise
              </h3>
              <ul className="space-y-3">
                {[
                  'UI/UX Design',
                  'Product Strategy',
                  'Design Systems',
                  'Frontend Development',
                  'User Research',
                  'Prototyping & Testing',
                ].map((skill) => (
                  <li key={skill} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-gray-900 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
