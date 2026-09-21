import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/data/projects'
import ImageGallery from '@/components/ImageGallery'
import PdfModal from '@/components/PdfModal'
import type { Metadata } from 'next'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Charlie Donnelly`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gray-900">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 py-16 w-full">
            <div className="max-w-3xl">
              <span className="inline-block text-white/80 text-sm mb-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                {project.context}
              </span>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-white/90">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                  Year
                </h3>
                <p className="text-gray-100">{project.year}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                  Role
                </h3>
                <p className="text-gray-100">{project.role}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-sm text-gray-900 bg-gray-100 px-2 py-1 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm text-gray-900 bg-gray-100 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Case study PDF (only when the project has one) */}
              {project.caseStudyPdf && (
                <PdfModal src={project.caseStudyPdf} label={project.caseStudyLabel} />
              )}
            </div>
          </aside>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-4">
                {project.overviewTitle || 'Context'}
              </h2>
              <div className="space-y-4 mb-6">
                {project.overview.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              {project.overviewImages && project.overviewImages.length > 0 && (
                <ImageGallery images={project.overviewImages} />
              )}
            </div>

            {/* Problem */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-4">
                {project.problemTitle || 'The Problem'}
              </h2>
              <div className="space-y-4 mb-6">
                {project.problem.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              {project.problemImages && project.problemImages.length > 0 && (
                <ImageGallery images={project.problemImages} />
              )}
            </div>

            {/* Solution */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-4">
                {project.solutionTitle || 'The Solution'}
              </h2>
              <div className="space-y-4 mb-6">
                {project.solution.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              {project.solutionImages && project.solutionImages.length > 0 && (
                <ImageGallery images={project.solutionImages} />
              )}
            </div>

            {/* Project Images */}
            {project.images.length > 0 && (
              <div className="space-y-8">
                {project.images.map((image, index) => (
                  <figure key={index} className="space-y-3">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {image.caption && (
                      <figcaption className="text-sm text-gray-600 text-center italic">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            )}

            {/* Results */}
            {project.results && project.results.length > 0 && (
              <div>
                <h2 className="font-heading text-3xl font-bold text-white mb-6">
                  {project.resultsTitle || 'Results & Impact'}
                </h2>
                {project.resultsDescription && (
                  <div className="space-y-4 mb-6">
                    {project.resultsDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-lg text-gray-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {project.results.map((result, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 border border-gray-200 rounded-lg p-6"
                    >
                      <p className="text-gray-800">{result}</p>
                    </div>
                  ))}
                </div>
                {project.resultsImages && project.resultsImages.length > 0 && (
                  <ImageGallery images={project.resultsImages} />
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {previousProject && (
              <Link
                href={`/projects/${previousProject.slug}`}
                className="group block p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-900 transition-all"
              >
                <span className="text-sm text-gray-400 mb-2 block">Previous Project</span>
                <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-gray-300">
                  {previousProject.title}
                </h3>
              </Link>
            )}

            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group block p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-900 transition-all md:text-right"
              >
                <span className="text-sm text-gray-400 mb-2 block">Next Project</span>
                <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-gray-300">
                  {nextProject.title}
                </h3>
              </Link>
            )}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center text-gray-100 font-medium hover:text-gray-300"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
