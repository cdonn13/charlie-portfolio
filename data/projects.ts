import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    slug: 'modern-banking-app',
    title: 'Modern Banking App Redesign',
    context: 'Studio Project',
    description: 'A complete redesign of a mobile banking experience focused on simplicity and accessibility',
    year: '2024',
    tags: ['UI/UX Design', 'Mobile', 'FinTech'],
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop',
    overview: 'Led the redesign of a mobile banking application serving over 500,000 users. The project focused on improving user experience, modernizing the visual design, and increasing accessibility for all users.',
    problem: 'The existing banking app had outdated UI patterns, poor accessibility scores, and user research showed confusion around core features like transfers and bill pay.',
    solution: 'Conducted extensive user research and usability testing to identify pain points. Created a modern design system with improved information architecture, clearer navigation, and WCAG 2.1 AA compliant components.',
    results: [
      '40% reduction in task completion time for common banking tasks',
      '95% improvement in accessibility score',
      '4.7 star rating increase in app store reviews',
      'Featured as App Store Editor\'s Choice'
    ],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop',
        alt: 'Banking app home screen',
        caption: 'Redesigned home screen with clear hierarchy and quick actions'
      },
      {
        src: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&h=800&fit=crop',
        alt: 'Transaction history view',
        caption: 'Improved transaction history with better categorization'
      }
    ],
    role: 'Lead Product Designer',
    tools: ['Figma', 'Principle', 'UserTesting', 'Maze']
  },
  {
    slug: 'fitness-tracking-platform',
    title: 'AI-Powered Fitness Platform',
    context: 'Independent Project',
    description: 'A web platform that uses machine learning to create personalized workout plans and track progress',
    year: '2024',
    tags: ['Web Development', 'AI/ML', 'Health & Fitness'],
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop',
    overview: 'Built a full-stack fitness tracking platform that leverages machine learning to generate personalized workout recommendations based on user goals, fitness level, and available equipment.',
    problem: 'Most fitness apps use generic workout plans that don\'t adapt to individual needs, equipment availability, or progress over time.',
    solution: 'Developed a machine learning model trained on workout data and physiotherapy principles to generate adaptive workout plans. Built with Next.js, TypeScript, and TensorFlow.js for real-time recommendations.',
    results: [
      '5,000+ active users in first 3 months',
      '85% user retention rate',
      'Featured on Product Hunt (Top 5 Product of the Day)',
      'Average 4.8/5 user satisfaction rating'
    ],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=800&fit=crop',
        alt: 'Workout dashboard',
        caption: 'Dashboard showing personalized workout recommendations'
      },
      {
        src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=800&fit=crop',
        alt: 'Progress tracking',
        caption: 'Visual progress tracking and analytics'
      }
    ],
    role: 'Full-Stack Developer & Designer',
    tools: ['Next.js', 'TypeScript', 'TensorFlow.js', 'PostgreSQL', 'Tailwind CSS']
  },
  {
    slug: 'ecommerce-dashboard',
    title: 'E-Commerce Analytics Dashboard',
    context: 'Client Work',
    description: 'A comprehensive analytics dashboard for e-commerce businesses to track sales, inventory, and customer metrics',
    year: '2023',
    tags: ['Data Visualization', 'SaaS', 'Web Development'],
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    overview: 'Designed and developed an analytics dashboard for a growing e-commerce SaaS platform, providing real-time insights into sales, inventory, and customer behavior.',
    problem: 'E-commerce business owners were struggling to make data-driven decisions due to fragmented analytics across multiple platforms and tools.',
    solution: 'Created a unified dashboard that aggregates data from multiple sources, presenting it through intuitive visualizations and actionable insights. Built with React, D3.js, and Node.js.',
    results: [
      '200+ businesses using the platform',
      'Average 30% increase in decision-making speed',
      '99.9% uptime over 12 months',
      'Named "Best Analytics Tool" by E-Commerce Weekly'
    ],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
        alt: 'Analytics overview',
        caption: 'Main dashboard with key metrics and trends'
      },
      {
        src: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&h=800&fit=crop',
        alt: 'Sales reports',
        caption: 'Detailed sales analysis with custom date ranges'
      }
    ],
    role: 'Frontend Lead & UX Designer',
    tools: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Material-UI']
  },
  {
    slug: 'mental-health-mobile-app',
    title: 'Mental Health & Wellness App',
    context: 'Independent Project',
    description: 'A mobile application focused on daily mental health check-ins and evidence-based wellness practices',
    year: '2023',
    tags: ['Mobile App', 'Health & Wellness', 'UI/UX'],
    heroImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=800&fit=crop',
    overview: 'Designed and prototyped a mental health app that helps users track their emotional state, practice mindfulness, and access evidence-based wellness resources.',
    problem: 'Mental health apps often feel clinical or overwhelming. Users wanted a warm, approachable tool that felt like a supportive friend rather than a medical device.',
    solution: 'Created a design language focused on warmth and approachability, with gentle colors, friendly illustrations, and conversational copy. Partnered with licensed therapists to ensure evidence-based practices.',
    results: [
      'Winner of UX Design Awards 2023',
      'Featured in Apple\'s "Apps We Love" collection',
      '50,000+ downloads in first month',
      '4.9/5 star rating with 10,000+ reviews'
    ],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop',
        alt: 'Daily check-in screen',
        caption: 'Gentle daily check-in with emotion tracking'
      },
      {
        src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&h=800&fit=crop',
        alt: 'Meditation timer',
        caption: 'Calming meditation and mindfulness exercises'
      }
    ],
    role: 'Product Designer & Researcher',
    tools: ['Figma', 'Principle', 'After Effects', 'UserTesting']
  },
  {
    slug: 'design-system',
    title: 'Enterprise Design System',
    context: 'Studio Project',
    description: 'A comprehensive design system serving multiple products across a large financial services company',
    year: '2023',
    tags: ['Design Systems', 'Component Library', 'Documentation'],
    heroImage: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop',
    overview: 'Led the creation of a unified design system for a financial services company with 12 different products and 50+ designers and developers.',
    problem: 'Inconsistent UI patterns across products led to poor user experience, slow development times, and high maintenance costs. No single source of truth for design decisions.',
    solution: 'Built a comprehensive design system with 100+ components, detailed documentation, and implementation guidelines for both design and development teams. Included accessibility guidelines and governance processes.',
    results: [
      '70% reduction in design-to-development handoff time',
      '50% decrease in UI bugs',
      'Adopted across all 12 product teams',
      'Won Internal Innovation Award'
    ],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
        alt: 'Component library',
        caption: 'Comprehensive component library with variants'
      },
      {
        src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=800&fit=crop',
        alt: 'Design tokens',
        caption: 'Design tokens system for consistent styling'
      }
    ],
    role: 'Design Systems Lead',
    tools: ['Figma', 'Storybook', 'React', 'TypeScript', 'Notion']
  },
  {
    slug: 'social-networking-feature',
    title: 'Social Networking Feature Suite',
    context: 'Studio Project',
    description: 'A suite of new social features for a popular messaging platform with 10M+ users',
    year: '2022',
    tags: ['Social Media', 'Mobile', 'Feature Design'],
    heroImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop',
    overview: 'Designed and shipped a comprehensive suite of social features including stories, reactions, and group activities for a messaging platform.',
    problem: 'Users wanted more engaging ways to interact beyond traditional messaging. Competitors were offering richer social experiences.',
    solution: 'Conducted competitive analysis and user research to design features that felt native to the platform while adding new engagement mechanisms. Iterated through multiple rounds of prototyping and testing.',
    results: [
      '300% increase in daily active usage',
      '45% improvement in user retention',
      '25% increase in message volume',
      'Featured in TechCrunch and The Verge'
    ],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&h=800&fit=crop',
        alt: 'Stories feature',
        caption: 'Stories feature with custom stickers and filters'
      },
      {
        src: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1200&h=800&fit=crop',
        alt: 'Group activities',
        caption: 'Shared group activities and games'
      }
    ],
    role: 'Senior Product Designer',
    tools: ['Figma', 'ProtoPie', 'Amplitude', 'Mixpanel']
  }
]
