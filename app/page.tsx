import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              number={index + 1}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
