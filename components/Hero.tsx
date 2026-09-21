'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const words = ['designer', 'developer', 'product leader']

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentWord) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && typedText === '') {
        // Move to next word
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      } else {
        // Type or delete character
        setTypedText(
          isDeleting
            ? currentWord.substring(0, typedText.length - 1)
            : currentWord.substring(0, typedText.length + 1)
        )
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typedText, currentWordIndex, isDeleting])

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeInUp delay-200">
            Hi, I&apos;m Charlie.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-fadeInUp delay-400">
            A passionate{' '}
            <span className="text-gray-900 font-semibold">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>{' '}
            with 5+ years shipping some really cool products. Below are a combination of recent product case studies and project retrospectives.
          </p>
          <div className="flex flex-wrap gap-4 animate-fadeInUp delay-400">
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
