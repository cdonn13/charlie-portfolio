import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
  number: number
}

const ProjectCard = ({ project, number }: ProjectCardProps) => {
  const formattedNumber = number.toString().padStart(2, '0')

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block"
    >
      <article className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-lg">
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <span className="font-heading text-4xl font-bold text-gray-300 group-hover:text-gray-900 transition-colors">
              {formattedNumber}
            </span>
            <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
              {project.context}
            </span>
          </div>

          <h3 className="font-heading text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center text-sm font-medium text-gray-900 group-hover:text-gray-700">
            <span>View Project</span>
            <svg
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default ProjectCard
