export interface Project {
  slug: string
  title: string
  context: 'Independent Project' | 'Studio Project' | 'Client Work'
  description: string
  year: string
  tags: string[]
  heroImage: string
  overview: string
  problem: string
  solution: string
  results?: string[]
  images: ProjectImage[]
  videos?: ProjectVideo[]
  role: string
  tools: string[]
}

export interface ProjectImage {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

export interface ProjectVideo {
  src: string
  poster?: string
  caption?: string
}
