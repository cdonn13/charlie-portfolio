import Image from 'next/image'
import type { Metadata } from 'next'
import ImageCarousel from '@/components/ImageCarousel'
import BooksGrid from '@/components/Book3D'

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
            Artist, Designer, Developer, Dog Dad.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {/* Profile Image */}
          <div>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/charlie_main.png"
                alt="Charlie Donnelly"
                fill
                className="object-cover"
              />
            </div>
            {/* Optional caption - comment out or remove if not needed */}
            <p className="text-center text-gray-600 mt-4 text-sm md:text-base">
              Hoth, Ireland
            </p>
          </div>

          {/* Story Content - Timeline */}
          <div className="max-w-none mb-16">
            <h2 className="font-heading text-3xl font-bold text-gray-200 mb-12">
              The Story So Far
            </h2>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[31px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* 2020 */}
                <div className="relative flex gap-8">
                  <div className="flex-shrink-0 w-16 pt-1">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-4 border-gray-800 flex items-center justify-center shadow-lg">
                        <span className="text-sm font-bold text-gray-100">2020</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 pt-2 pb-8">
                    <p className="text-gray-300 leading-relaxed">
                      Started a company senior year connecting designers and CS students with gig work, and chased fundraising through Notre Dame&apos;s IDEA Center.
                      It didn&apos;t take off, but it lit the fuse: I learned I love building products from zero.
                    </p>
                  </div>
                </div>

                {/* 2022 */}
                <div className="relative flex gap-8">
                  <div className="flex-shrink-0 w-16 pt-1">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-4 border-gray-800 flex items-center justify-center shadow-lg">
                        <span className="text-sm font-bold text-gray-100">2022</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 pt-2 pb-8">
                    <p className="text-gray-300 leading-relaxed">
                      Joined Platform Venture Studio as a Product Development Lead. For 2.5 years I worked as a hands-on 0-1 developer, designing and shipping MVPs
                      and wiring up the integrations and development pipelines behind a portfolio of founder startups. This is where my technical foundation was built.
                    </p>
                  </div>
                </div>

                {/* 2024 */}
                <div className="relative flex gap-8">
                  <div className="flex-shrink-0 w-16 pt-1">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-4 border-gray-800 flex items-center justify-center shadow-lg">
                        <span className="text-sm font-bold text-gray-100">2024</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 pt-2 pb-8">
                    <p className="text-gray-300 leading-relaxed">
                      Went independent and founded Donnelly Design. I found the most rewarding part was the client side: technical project and relationship
                      management, understanding what each client actually needed and delivering it hands-on.
                    </p>
                  </div>
                </div>

                {/* 2025 */}
                <div className="relative flex gap-8">
                  <div className="flex-shrink-0 w-16 pt-1">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-4 border-gray-800 flex items-center justify-center shadow-lg">
                        <span className="text-sm font-bold text-gray-100">2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 pt-2 pb-8">
                    <p className="text-gray-300 leading-relaxed">
                      Focused the consultancy on a few core clients across design, development, and strategy. One of them, Runwayz, a career-development platform for the
                      skilled trades, became a full-time role. I&apos;m now their Head of Product, working with their customers and partners to implement, customize, and build
                      the platform around their needs. It&apos;s the combination of the two sides of my career: deep technical work and customer-facing partnership.
                    </p>
                  </div>
                </div>

                {/* 2026 */}
                <div className="relative flex gap-8">
                  <div className="flex-shrink-0 w-16 pt-1">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border-4 border-gray-700 flex items-center justify-center shadow-lg ring-4 ring-gray-700/50">
                        <span className="text-sm font-bold text-white">2026</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-gray-300 leading-relaxed">
                      Now, I&apos;m sharpening the business and strategy side of my work, pursuing an MBA at Johns Hopkins and a Master of Design Leadership at MICA
                      (both wrapping in 2027), while continuing to lead product at Runwayz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How did we get here section */}
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-3xl font-bold text-gray-200 mb-4 mt-12">
              Have a Personal Life? Who, Me?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
            While I am deeply committed to my work, I prioritize my interests, hobbies, and relationships outside of the office as well.
            As a social butterfly who struggles to sit still, I will often act quickly to satisfy an interest or new hobby.
            These interests often include traveling, learning a new skill, or spontaneously hopping on a plane to visit a friend, family member, or point of interest.
            You know what they say - work hard, play hard.
            </p>
          </div>

          {/* Image Carousel - Add/remove images in the array below */}
          <div className="mt-16">
            <ImageCarousel
              images={[
                { src: '/images/61331138_966475_351d82ffcc0bd56fbea178ebe82c47f5_full.JPG', caption: 'Ski Bum' },
                { src: '/images/IMG_3507 1.png', caption: 'Iceland!' },
                { src: '/images/IMG_9151 1.png', caption: 'This was a long day...' },
                { src: '/images/IMG_2773 2 1 (1).png', caption: 'My pride and joy - Ms Lulu' },
              ]}
              autoScrollDelay={2500}
            />
          </div>

          {/* 3D Books Reading List */}
          <BooksGrid
            books={[
              {
                title: "Theo of Golden",
                cover: "/images/theogolden.png"
              },
              {
                title: "Oathbringer",
                cover: "/images/oathbringer.png"
              },
              {
                title: "Crossroads",
                cover: "/images/crossroads.png"
              },
              {
                title: "The Challenger Sale",
                cover: "/images/challengersale.png"
              }
            ]}
          />
        </div>
      </section>
    </div>
  )
}
