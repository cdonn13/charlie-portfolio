import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm Charlie Donnelly
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            A passionate <span className="text-gray-900 font-semibold">Designer & Developer</span> with 4+ years of experience
            crafting beautiful, functional digital experiences across web and mobile platforms.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="/about"
              className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
