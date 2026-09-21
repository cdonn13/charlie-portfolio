export interface Project {
  slug: string
  title: string
  context: 'Consulting Project' | 'Studio Project' | 'Independent Work'
  description: string
  year: string
  tags: string[]
  heroImage: string
  overview: string
  overviewTitle?: string
  problem: string
  problemTitle?: string
  solution: string
  solutionTitle?: string
  results?: string[]
  resultsDescription?: string
  resultsTitle?: string
  images: ProjectImage[]
  overviewImages?: ProjectImage[]
  problemImages?: ProjectImage[]
  solutionImages?: ProjectImage[]
  resultsImages?: ProjectImage[]
  videos?: ProjectVideo[]
  caseStudyPdf?: string
  caseStudyLabel?: string
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
