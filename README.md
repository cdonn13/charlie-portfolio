# Charlie Donnelly - Portfolio Website

A modern, professional portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Inspired by clean, minimalist design principles with a focus on showcasing projects and case studies.

## Features

- **Modern Tech Stack**: Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all device sizes
- **Project Showcase**: Numbered grid layout with detailed case study pages
- **Dynamic Routing**: Automatic page generation for all projects
- **SEO Optimized**: Metadata and semantic HTML for better search engine visibility
- **Typography**: Custom fonts (Varela Round for headings, Roboto for body)
- **Performance**: Optimized images with Next.js Image component

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navbar and footer
│   ├── page.tsx            # Home page with project grid
│   ├── about/              # About/Story page
│   ├── resume/             # Resume page
│   ├── projects/[slug]/    # Dynamic project case study pages
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer with links
│   ├── Hero.tsx            # Hero section
│   └── ProjectCard.tsx     # Project card component
├── data/
│   └── projects.ts         # Project data
├── types/
│   └── project.ts          # TypeScript interfaces
└── public/                 # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Adding New Projects

Edit `/data/projects.ts` and add a new project object following the existing structure:

```typescript
{
  slug: 'project-url-slug',
  title: 'Project Title',
  context: 'Independent Project', // or 'Studio Project', 'Client Work'
  description: 'Short description',
  year: '2024',
  tags: ['Tag1', 'Tag2'],
  heroImage: 'https://...',
  overview: 'Detailed overview...',
  problem: 'Problem statement...',
  solution: 'Solution description...',
  results: ['Result 1', 'Result 2'],
  images: [...],
  role: 'Your Role',
  tools: ['Tool1', 'Tool2']
}
```

### Updating Personal Information

- **About Page**: Edit `/app/about/page.tsx`
- **Resume**: Edit `/app/resume/page.tsx`
- **Hero Section**: Edit `/components/Hero.tsx`
- **Footer**: Edit `/components/Footer.tsx` (social links, contact info)

### Styling

The site uses Tailwind CSS. To customize colors, fonts, or other design tokens, edit:
- `/tailwind.config.ts` - Tailwind configuration
- `/app/globals.css` - Global styles and CSS variables

## Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Varela Round, Roboto)
- **Image Optimization**: Next.js Image component
- **Deployment Ready**: Vercel, Netlify, or any Node.js hosting

## License

© 2025 Charlie Donnelly. All rights reserved.
# charlie-portfolio
