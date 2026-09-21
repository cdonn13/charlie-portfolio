import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    slug: 'pre-application-talent-pipeline',
    title: 'Optimizing a Talent Acquisition Funnel',
    context: 'Consulting Project',
    description: 'Designing a pre-application pipeline that lets apprenticeship programs discover, evaluate, and warm early-career talent before the application window ever opens.',
    year: '2026',
    tags: ['Product Strategy', 'UX Research', 'UI/UX Design'],
    heroImage: '/images/Screenshot 2026-06-29 at 2.24.38 PM.png',
    overview: 'At Runwayz, our job is to connect emerging talent with the people who hire and train them. In the skilled trades, that hiring entity is a Joint Apprenticeship Training Committee (JATC), a training trust co-governed by a local union and its contractors. The JATC owns the whole recruiting process: when applications open, the aptitude test, the interview panel, and the ranked list that decides who gets indentured.\n\nWhen I dug into how that process actually works, I found the same problem showing up on both sides of our market. For the JATC, the funnel only fires once. Application windows open at odd times (some annual, some semi-annual, some rolling) and a program has almost no visibility into qualified talent until an application lands inside that narrow window. Everything before that is analog: career fairs, CTE partnerships, demo days, guidance-counselor literature, and a lot of word-of-mouth that nobody measures.\n\nFor the talent, missing the window by a few days is one of the most common ways a qualified person never becomes an apprentice. They can\'t see when to apply, they have no sense of how a panel will read them, and they have no way to show the exact things the panel is grading: reliability, work ethic, willingness to learn. They walk into a ten-minute interview as a stranger and get judged on a transcript and a test score.\n\nSo the real problem is a visibility-and-conversion gap that hurts both sides at once. Programs can\'t see or evaluate talent before the window, and talent can\'t see or prepare for the window before it closes. Everything valuable that could happen before an application - discovery, evaluation, warming, preparation - is getting lost. I originally assumed this was a top-of-funnel volume problem; talking with our key stakeholders informed me otherwise.',
    overviewTitle: 'Understanding the Trades Hiring Funnel',
    problem: 'I ran a discovery-stage research plan around one question: how do trade unions actually recruit early-career talent today, and where does the funnel break down? I combined a review of published JATC application processes with live interviews anchored on Runwayz\' key stakeholders. Four things came back that reshaped how I saw the unmet need.\n\nFirst, recruitment is owned by the JATC, and selection is mostly soft signal. The official rubric scores education, ability, work experience, reliability, interest, attitude, judgment, and cooperation. But when I asked stakeholders what they\'re really listening for, the list turned into behavioral signals that are really hard to make without any prior data on the candidate. How could we position ourselves to solve this problem?\n\nSecond, the highest-leverage moment is before the application. My research identified a large dead zone where qualified talent is on the market but completely invisible to the program, as well as when ranked candidates go cold between interview and indenture. Pair that dead zone with narrow windows where applicants are routinely lost to timing and admin friction, and the pattern is obvious: the biggest conversion losses happen in the months when there is no tool at all.\n\nThird, Work-Based Learning is the strongest evidence a candidate can bring. A 200-hour pre-apprenticeship completion is far better panel evidence than a transcript, because it\'s behavior accumulated over time instead of a snapshot. That told me the candidate profile should surface behavioral evidence over time, which is concrete evidence that a short interview just can\'t capture.\n\nFourth, the buyer is not the user. Density is at a record-low (10.7%), the trades face a demographic cliff, and training is funded by member dues and contractor contributions, so a bigger, better-converted top of funnel is a means of survival. But I also had to design around a buying reality: the budget sits with the local exec or the JATC trustees, the daily user is the Training Director or Business Agent, and the signatory contractors are the ones who benefit. Three different people across three or more legal entities, each with different needs.\n\nThus, the problem wasn\'t volume but the absence of any structured discovery-and-evaluation layer in the pre-application window.',
    problemTitle: 'Identifying the High-Leverage Moment',
    problemImages: [
      {
        src: '/images/2.1 - stakeholder.png',
        alt: 'Buyer, user, and beneficiary are three different people',
        caption: 'Buyer ≠ user ≠ beneficiary. The local exec or JATC trustees hold the budget, the Training Director or Business Agent is the daily user, and the signatory contractors benefit — three different people sitting across 3+ separate legal entities, each requiring a distinct value prop.'
      },
      {
        src: '/images/2.2 - rubric (1).png',
        alt: 'The selection rubric',
        caption: 'The selection rubric. The panel\'s official categories (reliability, attitude, judgment, cooperation…) map to what they\'re really listening for — work ethic, willingness to learn, reliability — which we translated into evidence-backed dimensions Runwayz can capture over time.'
      },
      {
        src: '/images/2.3 - leaky funnel.png',
        alt: 'Where the funnel leaks',
        caption: 'Where the funnel leaks: qualified talent lost to narrow, oddly-timed windows, and ranked candidates going cold in the ~2-year dead zone between interview and indenture. The biggest losses happen where no tool exists today.'
      }
    ],
    solution: 'I now understood my solution space: a place where a JATC can collect and evaluate talent before the window opens, and where talent can be discovered long before they apply. Below are my three key design decisions:\n\nThe first was to make the rubric the foundation. The panel decision is soft-signal with no prior data, so the most valuable thing Runwayz can hand a JATC is evidence against the traits they already grade. A panel that doesn\'t trust a number can click through and audit it, so everything Runwayz evaluates will be on display in plain English.\n\nThe second was to start the user journey with a consent moment. A talent pool that just exists feels untrustworthy to a program and exploitative to talent, so the pipeline starts at Step 0: the employer opts in and turns on a pre-application pool from the opportunity-edit panel. On the other side, candidates join the pool and declare intent.\n\nThe third was to close the loop. The current funnel is one-shot, so I replaced it with a triggered loop: employer-to-talent actions, talent-to-employer actions, and system triggers that all connect back to the other side. The result is a single employer talent pool surface where a Training Director can see matched talent per opportunity, evaluate them against a configurable rubric, send cohort outreach that gets people ready to apply on day one, and see who\'s actually interested — all before the window opens.',
    solutionTitle: 'Designing for the Problem',
    solutionImages: [
      {
        src: '/images/3.1.2.png',
        alt: 'Employer talent pool v0 original concept',
        caption: 'Employer talent pool v0 original concept. Talent matched to each opportunity before windows open - Figma'
      },
      {
        src: '/images/3.2.2.png',
        alt: 'The rubric-driven applicant card',
        caption: 'The rubric-driven applicant card: Reliability, Work Ethic, Judgment, and Cooperation scored with trend + confidence, each backed by auditable, verified evidence - Figma'
      },
      {
        src: '/images/3.3.2.png',
        alt: 'User Journey pt 1',
        caption: 'User Journey pt 1 - Figma'
      },
      {
        src: '/images/3.4.png',
        alt: 'User Journey pt 2',
        caption: 'User Journey pt 2 - Figma'
      }
    ],
    resultsTitle: 'Results & Impact',
    resultsDescription: 'The next step is to pressure-test the feature through a pilot with a couple of our JATC partners. I\'m aiming it squarely at the two assumptions the research broke: visibility and conversion.\n\nOn timing, qualified applicants are lost today because windows are narrow and outreach is analog. A pool of opted-in candidates who get notified the moment a window opens should convert far better than cold word-of-mouth, and I\'m targeting a 30–40% lift in qualified applications per window. On evaluation, a panel today walks in with a transcript, a test score, and effectively no behavioral signal. The rubric layer takes evidence coverage from 0% to the majority of ranked candidates, which should give panels 2–3× the actionable signal before the interview even starts.\n\nThe risk on both is adoption. If Training Directors don\'t trust the scores enough to lean on them, none of it matters, which stresses the importance of the audit trail. I started this convinced the job was more volume at the top. The research taught me the leverage was in building the discovery-and-evaluation layer that doesn\'t exist in the weeks before an application opens. I\'m excited to see how this feature evolves.',
    results: [
      'Challenging initial assumptions.',
      'Deep user research synthesis.',
      'Data-driven design decisions.',
      'Measurable success metrics.'
    ],
    images: [],
    overviewImages: [
      {
        src: '/images/1.1 - Funnel (1).png',
        alt: 'The current trades hiring funnel',
        caption: 'The trades hiring funnel today: outreach → narrow application window → aptitude test → 10-minute panel interview → ranked list (~2 yrs) → indenture. The conversation only begins once an application lands inside the window.'
      },
      {
        src: '/images/1.2 - final.png',
        alt: 'A two-sided visibility gap',
        caption: 'Two-sided visibility gap. The JATC can\'t see qualified talent before the window; the talent can\'t see the window before it closes. Both sides go dark in the months that matter most.'
      },
      {
        src: '/images/1.3 - stuggling pipeline (1).png',
        alt: 'A struggling trades talent pipeline',
        caption: 'The business stakes: construction union density at a record-low ~10.7% (2023), ~10k electricians exiting annually against ~7k entering, and a projected shortage of ~550k plumbers by 2027 — a thinning pipeline that directly starves training funding. (Sources: BLS, P&M Magazine.)'
      }
    ],
    resultsImages: [],
    caseStudyPdf: '/pdfs/pre-application-talent-pipeline.pdf',
    caseStudyLabel: 'View full case deck',
    role: 'Head of Product',
    tools: ['Figma', 'Claude', 'Research Synthesis']
  },
  {
    slug: 'ai-ui-pipeline',
    title: 'Building a Design Pipeline with AI',
    context: 'Consulting Project',
    description: 'Leveraging emerging technology to increase speed and quality of output during an MVP sprint.',
    year: '2026',
    tags: ['AI/ML', 'Product Strategy', 'UI/UX Design', 'Design Systems'],
    heroImage: '/images/Screenshot 2026-04-27 at 12.25.35 PM.png',
    overview: 'At Runwayz, product design and strong UX discovery have always been top priorities. However, with the advent of emerging AI software development tools, going from zero-to-one on a product has never been easier. When we decided to re-invest in our software product, I needed to answer the question: how can we promote development to move as fast as possible without design and discovery becoming a bottleneck?\n\nAs Head of Product, I was tasked with understanding how Runwayz could cultivate a pipeline for design that not only kept pace with development, but encouraged them to move even faster. The immediate risk was that leaning too heavily on AI could strip the pipeline of authenticity. Whatever we did, the Runwayz brand voice needed to live at the center of it.\n\nThat was my first challenge: figure out how to teach AI about Runwayz. I did this by creating a skill in Claude that encapsulates the Runwayz brand - from voice and tone to color and UI best practices. This was meant to be a living and breathing document that would evolve as our brand did; all I needed to do was bring Claude along for the ride.',
    overviewTitle: 'The Need',
    problem: 'Now that I had created context upon which to design, I needed the right toolkit to get the job done. I needed a workflow that emphasized speed and consistency while promoting intentional human touch-points.\n\nMy first draft was too simple: leveraging Claude within Visual Studio and communicating with Figma via their MCP. Getting the tools to communicate was effective at producing output, but there wasn\'t enough space for feedback and iteration. Some of the early UI was consistent, but generic. I needed something more nuanced.\n\nThat is when I discovered Google\'s Stitch MCP beta, an experimental wire-framing tool that plugged in seamlessly with my existing pipeline. While plugged into Stitch, I could do as much \'AI-slop\' discovery as I wanted, then transfer bits and pieces into our Figma design system and tweak as needed.\n\nBut I didn\'t stop there. Experimenting with Claude skills taught me that, with the right context, there would be less back and forth between man and machine. I layered in some additional design-related skills that I could leverage at different parts of the workflow - some for UI libraries, some for best practices and some for nuanced tweaks.',
    problemTitle: 'Building the Pipeline',
    solution: 'The results produced from my UI pipeline were promising and allowed me to focus on the more valuable human elements of the design process: discovery, research and detail. Being able to brainstorm quickly then replicate at scale was something Runwayz had not been able to do before.\n\nThe best part? Having all of our tooling (design system, pipeline, codebase) tethered to one unified design system and context library meant that we could treat everything as provisional and iterate with ease. At the time of writing, Claude has just released Claude Design into research preview, adding yet another unification tool to our development workflow. I am excited to see what additional value Claude Design can do for my design pipeline.',
    solutionTitle: 'A Flexible Model',
    resultsDescription: 'The results exceeded expectations on two fronts. The most obvious win was the acceleration - shipping faster in an environment that was already moving quickly. However the more surprising reward was how much I learned along the way. Getting hands-on time with cutting-edge AI design tools and methodologies, and watching them converge into something that genuinely worked, felt like a victory on its own.',
    results: [
      'Faster MVP iteration speed.',
      'AI-driven design pipeline built end-to-end.',
      'Unified brand context across Claude skills.',
      'Hands-on integration of Stitch + Figma MCP.'
    ],
    images: [],
    overviewImages: [      
      {
        src: '/images/brandskill_casestudy.png',
        alt: 'runwayz brand skill',
        caption: 'Runwayz Brand Skill - Claude'
      },
      {
        src: '/images/figma_casestudy.png',
        alt: 'Our Current Figma File',
        caption: 'Our Current Figma File & Overview'
      },
    ],
    problemImages: [      
      {
        src: '/images/vscode_casestudy.png',
        alt: 'vs code and skills',
        caption: 'Design Pipeline Codebase - Claude Code & Skills'
      },
      {
        src: '/images/stitch_casestduy.png',
        alt: 'google stitch',
        caption: 'Experimenting with Google Stitch MCP for Early Design'
      },
      {
        src: '/images/Screenshot 2026-04-27 at 12.25.35 PM.png',
        alt: 'AI-Empowered Figma Pipeline - New Screens & Variables',
        caption: 'AI-Empowered Figma Pipeline - New Screens & Variables'
      },
      {
        src: '/images/Branding + UI Pipeline Exploration.png',
        alt: 'AI-Empowered Design Pipeine overview',
        caption: 'Design Pipeline Overview - FigJam Diagram'
      }
    ],
    solutionImages: [      
      {
        src: '/images/figmamake_casestudy.png',
        alt: 'figma make prototype',
        caption: 'Creating Hi-Fi Prototypes with Figma AI'
      },
      {
        src: '/images/claudedesign_casestudy2.png',
        alt: 'claude design',
        caption: 'Leveraging Emerging Tools to Elevate our Design System - Claude Design'
      },
    ],
    resultsImages: [],
    caseStudyPdf: '/pdfs/ai-ui-pipeline.pdf',
    caseStudyLabel: 'View full case deck',
    role: 'Product Lead, UI Lead',
    tools: ['Claude', 'Visual Studio Code', 'Google Stitch MCP', 'Figma', 'Figma MCP']
  },
  {
    slug: 'runwayz_profile',
    title: 'Runwayz: Student Profile Revisited',
    context: 'Consulting Project',
    description: 'Elevating the student experience to create a common language between job-seekers and employers.',
    year: '2026',
    tags: ['UI/UX Design', 'Product Strategy', 'UX Research'],
    heroImage: '/images/Screenshot 2026-01-22 at 12.10.31 PM.png',
    overview: 'The student profile is the central marketplace engine for Runwayz, serving as the primary touchpoint for talent evaluation. As the platform scaled, we identified that the existing student profile lacked the elements required for employers to quickly assess a student\'s readiness and experience. My objective was to reimagine the student profile and scope a roadmap for future iterations, including features that facilitate verification, personal branding, and high-intent matching.',
    problem: 'I identified two critical friction points in the legacy profile: a lack of third-party verification and a rigid data-entry structure. To solve for trust, I integrated a Skills Endorsement system. Borrowing a proven model from LinkedIn, this feature allows mentors and professionals to verify a student\'s expertise and skills, providing the social proof necessary for employers to make confident hiring decisions.\n\nThe most significant strategic shift was the introduction of the Student Portfolio. Research with school districts revealed that high school students often struggle to quantify their experience in a traditional resume format. I designed the Student Portfolio as a flexible, "brand-first" workspace. This lowered the barrier to entry, allowing students to tell their stories through projects and media rather than just job titles, effectively solving the "no experience" dilemma for young users.',
    solution: 'While the Portfolio solved for the student experience, I also needed to optimize for employer utility. I introduced Workplace Preferences to bridge the gap between personality traits and professional fit.\n\nBy iterating on our existing career quiz, I implemented subtle but high-impact data-capture tweaks to glean practical insights - such as availability and location preferences - that were previously unmeasured. This wasn\'t just a UI update; it was a foundational step for our skill-based matchmaking roadmap. These new data points now power a more sophisticated recommendation engine, ensuring talent-seekers find candidates who are a fit for both the role and the company.',
    resultsDescription: 'This project successfully transitioned the Runwayz profile from a static bio to a multi-dimensional recruitment tool. By synthesizing research into an actionable roadmap, I delivered the core functionality needed to improve immediate engagement while laying the groundwork for our AI-driven matchmaking future. The result is a more inclusive, verifiable, and "match-ready" experience for both students and employers.',
    results: [
      'Strong design leadership exposure.',
      'Unique UX challenges and exploration.',
      'Ownership over new product features.',
      'Ability to become user-obsessed.'
    ],
    images: [],
    problemTitle:'Endorsements and the Portfolio',
    solutionTitle: 'Preferences and Future Plans',
    overviewImages: [
      {
        src: '/images/Screenshot 2026-01-22 at 10.11.34 AM.png',
        alt: 'profile_old',
        caption: 'Original Profile Page Design'
      },
      {
        src: '/images/Screenshot 2026-01-22 at 12.10.31 PM.png',
        alt: 'figma sandbox',
        caption: 'Overview Figma Sandbox'
      },
      {
        src: '/images/Screenshot 2026-02-11 at 9.13.22 AM.png',
        alt: 'final product',
        caption: 'Final Student Profile In-App'
      }
    ],
    problemImages: [
      {
        src: '/images/Screenshot 2026-01-22 at 10.13.00 AM.png',
        alt: 'skills and endorsements',
        caption: 'Skills and Endorsements in Figma'
      },
      {
        src: '/images/Screenshot 2026-01-22 at 10.13.25 AM.png',
        alt: 'old experience',
        caption: 'The Old Method of Creating Types of Experiences'
      },
      {
        src: '/images/Screenshot 2026-01-28 at 11.36.19 AM.png',
        alt: 'portfolio 1',
        caption: 'Introducing the Portfolio'
      },
      {
        src: '/images/Screenshot 2026-01-22 at 10.11.57 AM.png',
        alt: 'portfolio 2',
        caption: 'Making the Portfolio Obvious and Easy'
      }
    ],
    solutionImages: [
      {
        src: '/images/Screenshot 2026-01-22 at 10.14.17 AM.png',
        alt: 'preferences and traits',
        caption: 'Preferences and Traits'
      },
      {
        src: '/images/Screenshot 2026-01-22 at 10.14.46 AM.png',
        alt: 'Career quiz results',
        caption: 'Career Quiz Results'
      },
      {
        src: '/images/Screenshot 2026-01-22 at 10.13.51 AM.png',
        alt: 'figma overview',
        caption: 'Figma Overview with Preferences and Traits'
      },
      {
        src: '/images/Screenshot 2026-02-11 at 9.13.22 AM.png',
        alt: 'final version',
        caption: 'Final Version In-App'
      }
    ],
    resultsImages: [],
    role: 'Product Lead, UI/UX Designer',
    tools: ['Figma','Bubble.io','Notion']
  },
  {
    slug: 'movemint',
    title: 'Movemint',
    context: 'Studio Project',
    description: 'A deep dive into consumer-facing design for the healthcare industry with a focus on PT patient accessiblity and accountability.',
    year: '2023',
    tags: ['Healthcare', 'Consumer', 'User Experience'],
    heroImage: '/images/6523231b00afd1e2a4547d4e_Screen Shot 2023-10-08 at 4.40.49 PM.png',
    overview: 'Movemint is a comprehensive telehealth ecosystem consisting of a HIPAA-compliant EMR, a provider-facing treatment portal, and a patient-facing recovery tracker. Faced with a rigorous six-week timeline, I dedicated the first three weeks to deep UX research and architectural design, leaving three weeks for the build. My objective was to create a friction-free experience for patients while maintaining the high regulatory standards required for clinical data management.\n\nPatient onboarding was an early challenge. I wanted to require as little personal intake as possible for patients, while still providing enough information for providers to properly assess and create a plan. After numerous iterations, I arrived at an intake form that satisfied both patients and providers.',
    problem: 'Designing in the healthcare space required a strategic shift from "building from scratch" to leveraging specialized infrastructure. To ensure full HIPAA compliance without over-engineering the backend, I integrated Healthie to manage the telehealth experience and sensitive client data.\n\nTo maintain security within our Bubble-built tracker app, I architected an anonymized data structure. We utilized unique IDs to link patients to their treatment plans (e.g., lower back or ankle recovery) without storing Personally Identifiable Information (PII). This allowed us to launch a secure, functional MVP that prioritized patient privacy while giving providers full autonomy to create, monitor, and update recovery plans.',
    solution: 'For the mobile experience, I focused on accountability and gamification. Since Movemint is a telehealth-first practice, the app serves as a digital companion to physical therapy. By tracking general performance trends rather than sensitive personal data, we empowered providers to identify engagement patterns and tailor treatment plans to maximize patient adherence and recovery outcomes.',
    solutionTitle: 'Empowering Patient Accountability',
    problemTitle: 'The Provider Experience & HIPAA',
    resultsDescription: 'The Movemint launch demonstrated my ability to ship high-stakes products in regulated industries under compressed timelines. By making informed trade-offs—such as prioritizing the patient UI over provider-facing automation for the MVP—we successfully launched a secure, scalable product. This project deepened my expertise in consumer-facing mobile products, healthcare UX, HIPAA-compliant data architecture, and the use of no-code tools like Bubble to solve complex enterprise problems.',
    results: [
      'Consumer-facing user experience design.',
      '100% ownership of product design & build.',
      'HIPAA & healthcare industry exposure.',
      'Dual-sided stakeholder software development.'
    ],
    images: [],
    overviewImages: [
      {
        src: '/images/Frame 2 (2).png',
        alt: 'intake original',
        caption: 'Original Patient Intake Form - Mockup'
      },
      {
        src: '/images/65d4b6be29b0640cb7481a72_Screen Shot 2024-02-20 at 9.24.52 AM.png',
        alt: 'intake form',
        caption: 'Patient Intake Form - Final Design'
      },
      {
        src: '/images/65d4b6df30ce5dac62dc929d_Screen Shot 2024-02-20 at 9.25.23 AM.png',
        alt: 'intake form 2',
        caption: 'Patient Intake Form - Final Design'
      }
    ],
    problemImages: [
      {
        src: '/images/65d4b8c2989b365c8d08548e_Screen Shot 2024-02-20 at 9.33.02 AM.png',
        alt: 'plan log',
        caption: 'Treatment Plan Log - Provider'
      },
      {
        src: '/images/65d4b8ddf7ce9a19dfce456d_Screen Shot 2024-02-20 at 9.33.22 AM.png',
        alt: 'plan overview',
        caption: 'Treatment Plan Overview - Provider'
      },
      {
        src: '/images/65d4b8eec94e6608535c8bfc_Screen Shot 2024-02-20 at 9.33.35 AM.png',
        alt: 'week overview',
        caption: 'Treatment Plan Overview - Week View'
      },
      {
        src: '/images/65f4d0586537490dba1bad9e_Movemint_Create_Workout_Week.gif',
        alt: 'plan creation',
        caption: 'Treatment Plan Creation - Walkthrough'
      }
    ],
    solutionImages: [
      {
        src: '/images/6523245c3cc18faf8e0f889f_Screen Shot 2023-10-08 at 4.42.57 PM.png',
        alt: 'calculation 1',
        caption: 'View Program Weeks - Patient Experience'
      },
      {
        src: '/images/6523248cb97a83b9c256ffe9_Screen Shot 2023-10-08 at 4.45.05 PM.png',
        alt: 'calculation 2',
        caption: 'View Todays Workout - Patient Experience'
      },
      {
        src: '/images/6523247436a7c0b4483642fa_Screen Shot 2023-10-08 at 4.43.55 PM.png',
        alt: 'calculation 2',
        caption: 'View & Complete Workout - Patient Experience'
      },
      {
        src: '/images/652324679430ed3ec41be989_Screen Shot 2023-10-08 at 4.43.09 PM.png',
        alt: 'calculation 2',
        caption: 'View Todays Workout Empty - Patient Experience'
      }
    ],
    role: 'Lead Developer, UX/UI Designer, Product Lead',
    tools: ['Figma','Bubble.io', 'Javascript', 'Healthie']
  },
  {
    slug: 'siid-technologies',
    title: 'SIID Technologies',
    context: 'Studio Project',
    description: 'An AI-empowered evidence tool that introduced me to machine-learning in AWS and setting realistic expectations with founders.',
    year: '2023',
    tags: ['Data Visualization', 'SaaS', 'Web Development', 'AI/ML', 'UX Design'],
    heroImage: '/images/SIID_heroImage.png',
    overview: 'SIID Technologies leveraged the power of AWS to transcribe audio & video files and produce insights to aid in the legal evidence discovery process. Historically, this is a very lengthy, diligent, and manual process for legal aides.\n\nAs my first project as the Development Lead at Platform, all aspects of the SIID product timeline, feature prioritization, and build were my responsibility. The level of fidelity that we achieved in an 8-week development window was impressive, but that was not without its obstacles.\n\nThe original mockups were very high fidelity. To aid collaboration within law offices, I wanted all of the necessary information visible at one time. Given that case files are often quite large, I realized quickly that it was not in the users\' best interests. Thus, we opted for a tab-based right-hand column and increased emphasis on the descriptive iconography.\n\nWarning: Strong Language',
    problem: 'The biggest mistake made during this build was weak expectation-setting. We created a beautiful wireframe prototype in Figma and did not communicate proper expectations to the founder regarding feasibility. Since Platform used experimental development frameworks such as Bubble.io, and this was my first time experimenting with AWS, we could not validate all of the designs right away. In the end, the product resembled the prototype pixel for pixel; however we did not create the machine-learning pipeline that the founder had expected at launch.\n\nWith the understanding that our smart analysis would be simplified for launch, I focused on organizing data and improving the speed and collaborative power of the tool. We wanted this to be the best budget evidence discovery option on the market. However, there are many ways to skin a cat. I found myself frequently saying "just because we can do this does not mean we should". One of our experiments was generating a wordcloud for users based on commonly repeated words or phrases in the inputted video footage.\n\nFurthermore, we designed the collaboration settings to mimic Google Drive file sharing, comments, edit history and tagging.',
    solution: 'Originally, our transcript editing was tracked via manual project notes—a temporary fix for a tight launch window. Post-launch, I overhauled this into a robust version history system. By leveraging an open-source API from Google search history, I moved beyond simple \'change notifications\' to a comprehensive audit trail. This allowed users to view a comprehensive history of edits, navigate instantly to modified sections, and manage versioning directly within the transcript blocks, significantly improving a legal team\'s collaboration and transparency.',
    results: [
      '200+ businesses using the platform.',
      'Average 30% increase in decision-making speed.',
      '99.9% uptime over 12 months.',
      'Named "Best Analytics Tool" by E-Commerce Weekly.'
    ],
    resultsDescription: 'As one of the most advanced MVPs of my career, the mistakes I made during the development process were critical to my growth and success with subsequent builds. I learned to prioritize my relationship with the founder and to properly set expectations. As a young developer, I tried to bite off more than I could chew, but I am a better product leader as a result.',
    images: [],
    problemTitle:'Basic Features Overview',
    solutionTitle: 'Digging Deep on Transcript Edit History',
    overviewImages: [
      {
        src: '/images/SIID_heroImage.png',
        alt: 'siid final',
        caption: 'SIID Primary Case Dashboard - Production'
      },
      {
        src: '/images/SIID_problem1.png',
        alt: 'siid wireframe',
        caption: 'SIID Primary Case Dashboard - Figma Wireframe'
      }
    ],
    problemImages: [
      {
        src: '/images/SIID_problem2.png',
        alt: 'key moments',
        caption: 'Case Dashboard - Key Moments & Key Word Wordcloud'
      },
      {
        src: '/images/SIID_problem3.png',
        alt: 'collaboration',
        caption: 'Case Collaboration - Sharing Access & Adding Teammates'
      },
      {
        src: '/images/SIID_problem4.png',
        alt: 'onboarding',
        caption: 'Case Introduction - Onboarding Tutorial Modals'
      }
    ],
    solutionImages: [
      {
        src: '/images/SIID_solution1.png',
        alt: 'edit history',
        caption: 'Edit History - Notifications and Interactive Timeline'
      },
      {
        src: '/images/SIID_solution2.png',
        alt: 'edit history 2',
        caption: 'Edit History Within the Transcription Timeline'
      },
      {
        src: '/images/SIID_solution3.gif',
        alt: 'edit history gif',
        caption: 'Edit History - Realtime Demonstration of Functionality'
      },
      {
        src: '/images/SIID_solution4.png',
        alt: 'google api',
        caption: 'Edit History - Google API Text Formatting Javascript'
      }
    ],
    role: 'Lead Developer, UX Designer, Systems Architect',
    tools: ['Figma', 'Bubble.io', 'AWS Lambda', 'Javascript', 'Adobe', 'Segment']
  },
  {
    slug: 'runwayz_company',
    title: 'Runwayz: Company Page Refresh',
    context: 'Consulting Project',
    description: 'Redefining Runwayz\'s employer UX to promote employer engagement and student success.',
    year: '2026',
    tags: ['UI/UX Design', 'Product Strategy', 'UX Research'],
    heroImage: '/images/Runwayz_companyPage.png',
    overview: 'At Runwayz, our goal is to crack the code on connecting students (job seekers) with career opportunities. This starts with educating them on the options and the types of employers they can engage with.\n\nWhen I joined the company, we had a pre-existing page for employers to display simple company data, but the customization and engagement options were severely limited. My goal was to re-imagine this experience, transforming it into a dual-sided value engine that drove student engagement with employers\' pages and provided employers with actionable recruitment data.',
    problem: 'To redesign this experience, I navigated the competing requirements of two distinct user groups. Students required a friction-free, media-rich interface to evaluate job opportunities rapidly and easily. Conversely, employers needed a flexible and customizable page to control their brand narrative and aid in their recruiting process.\n\nThe core question was: Can we automate the value proposition for employers before they even sign up? In order to do so, we pivoted to a "pre-populated" strategy, architecting a system that generates robust company profiles automatically. This serves as both a high-conversion acquisition tactic and a "white-glove" onboarding experience, decreasing friction and allowing employers to see their brand through the eyes of a student immediately upon entry.',
    solution: 'Through this process, I uncovered the true value of these pages - the data. Employers want to see who is engaging with their content before committing to working with us, so the ability to autonomously populate employer pages and track user engagement is the real super power.\n\nThis challenged my initial assumptions. Talking with employers and working through the user experience helped uncover the real problem we needed to solve. The ability to populate the employer pages ourselves is only as valuable as the degree through which they are engaged by job-seekers. This student engagement data now serves as the primary driver for our paid employer partnerships, proving that design-led exploration can directly inform a company\'s revenue model.',
    resultsDescription: 'As Head of Product at Runwayz, my assumptions about product and design are challenged daily. This project exemplifies the iterative nature of building in a high-growth environment. By aligning UX improvements with a clear B2B acquisition strategy, we can identify a product\'s true value proposition. The ongoing evolution of these employer pages continues to sharpen my approach to product leadership, balancing rapid execution with data-backed design decisions.',
    results: [
      'Strong design leadership exposure.',
      'Unique UX challenges and exploration.',
      'Ownership over new product features.',
      'Autonomy to engage in design discovery.'
    ],
    images: [],
    problemTitle:'Understanding Stakeholder Needs',
    solutionTitle: 'Connecting Students to Employers in a Smarter Way',
    overviewImages: [
      {
        src: '/images/Screenshot 2026-01-06 at 2.43.27 PM.png',
        alt: 'company_old',
        caption: 'Original Company Page Design'
      },
      {
        src: '/images/Screenshot 2026-01-06 at 2.44.28 PM.png',
        alt: 'new company page',
        caption: 'New Company Page Design in Bubble'
      },
      {
        src: '/images/Screenshot 2026-01-06 at 2.47.37 PM.png',
        alt: 'company figma',
        caption: 'Figma Overview of Company Page Refresh'
      }
    ],
    problemImages: [
      {
        src: '/images/Screenshot 2026-01-06 at 2.45.10 PM.png',
        alt: 'company overview tab',
        caption: 'Company Overview Tab'
      },
      {
        src: '/images/Screenshot 2026-01-06 at 2.45.21 PM.png',
        alt: 'media tab',
        caption: 'Company Wayz to Network Tab'
      },
      {
        src: '/images/Screenshot 2026-01-06 at 2.45.31 PM.png',
        alt: 'jobs tab',
        caption: 'Company Opportunities Tab'
      },
      {
        src: '/images/Screenshot 2026-01-06 at 2.45.41 PM.png',
        alt: 'company figma',
        caption: 'Figma Overview of Company Page Refresh'
      }
    ],
    solutionImages: [
      {
        src: '/images/Screenshot 2026-01-06 at 2.46.47 PM.png',
        alt: 'southwest example',
        caption: 'Southwest Company Example Figma'
      },
      {
        src: '/images/Screenshot 2026-01-07 at 10.42.32 AM.png',
        alt: 'southwest in context',
        caption: 'Edit Media as an Employer'
      },
      {
        src: '/images/Screenshot 2026-01-06 at 2.47.01 PM.png',
        alt: 'media tab in context',
        caption: 'Wayz to Network with Southwest In-App'
      },
      {
        src: '/images/Screenshot 2026-01-06 at 2.47.12 PM.png',
        alt: 'view video',
        caption: 'Engage with Scraped Media In-App'
      }
    ],
    resultsImages: [],
    role: 'Product Developer & Designer',
    tools: ['Figma', 'Bubble.io', 'Javascript', 'AWS', 'PostgreSQL']
  },
  /*
  {
    slug: 'runwayz_quiz',
    title: 'Runwayz: Onboarding & Insights',
    context: 'Consulting Project',
    description: 'Understanding and exploring key data needs for a high growth startup.',
    year: '2025',
    tags: ['Web Development', 'AI/ML', 'Product Strategy', 'Leadership'],
    heroImage: '/images/Screenshot 2025-10-29 at 11.09.45 AM.png',
    overview: 'As the Head of Product at Runwayz, I oversee the technical roadmap and hands-on feature development. While the product remains under wraps, the work represents a significant milestone in my career. My focus is on architecting a seamless, AI-driven ecosystem that connects students with career opportunities through high-utility data and intuitive design.',
    problem: 'The primary challenge at Runwayz was designing an onboarding flow that captured relevant career profile information in order to match users to ideal job opportunities without inducing user fatigue. Given our student demographic, I prioritized a "white-glove" experience that minimized friction.\n\nI replaced traditional, exhaustive career assessments with a gamified, short-form quiz. By utilizing rapid-fire multiple-choice questions, we increased engagement and honesty in responses. This strategy allowed us to gather the necessary data points to power our matching engine while maintaining an entry barrier low enough to ensure high completion rates.',
    solution: 'The second phase of my work focused on the experience for educational administrators. Administrators need to efficiently track student engagement and activity across the platform.\n\nThis was a unique opportunity to build a clean and personalized dashboard that collected insights rather than information. Based on all the information the app was collecting, this new dashboard could aggregate that data into digestible, and more importantly, actionable insights. Not only could the admins view smart aggregation of data, but they could react to it in a meaningful way.\n\nLastly, I introduced the "Recent Activity" module, giving a snapshot of student behavior and employer demand. This allows admins to evaluate the health of their student body at a glance and react in real-time to emerging career trends.',
    resultsDescription: 'These features culminate in a sophisticated AI chatbot experience that synthesizes student profiles, administrative insights, and employer needs into a single, cohesive interface. Navigating the complexity of this multi-sided marketplace has been profoundly rewarding. While the full documentation remains private, the results have solidified our product\'s vision: turning fragmented student data into meaningful career trajectories.',
    results: [
      'Strong product leadership exposure.',
      'Unique UX challenges and exploration.',
      'Ownership over a high-growth product.',
      'Autonomy to ask smart questions and fail.'
    ],
    images: [],
    problemTitle:'Making a Career Quiz Not Boring',
    solutionTitle: 'Gathering & Viewing Insights Effectively',
    overviewImages: [
      {
        src: '/images/Screenshot 2025-10-30 at 12.20.32 PM.png',
        alt: 'runwayz website',
        caption: 'Runwayz Website & Hero CTA'
      },
      {
        src: '/images/Screenshot 2025-10-30 at 12.20.46 PM.png',
        alt: 'runwayz value prop',
        caption: 'Runwayz Value Proposition & Market Metrics'
      },
      {
        src: '/images/Screenshot 2025-10-30 at 12.21.17 PM.png',
        alt: 'accolades',
        caption: 'Runwayz Wins McKloskey New Venture Competition'
      }
    ],
    problemImages: [
      {
        src: '/images/Screenshot 2025-10-29 at 11.03.04 AM.png',
        alt: 'student profile',
        caption: 'Runwayz Student Profile'
      },
      {
        src: '/images/Screenshot 2025-10-29 at 11.03.14 AM.png',
        alt: 'career quiz',
        caption: 'Runwayz Career Quiz - Review Results'
      },
      {
        src: '/images/Screenshot 2025-10-29 at 11.03.34 AM.png',
        alt: 'career quiz 2',
        caption: 'Runwayz Career Quiz - Question Structure'
      }
    ],
    solutionImages: [
      {
        src: '/images/Screenshot 2025-10-29 at 11.09.45 AM.png',
        alt: 'dashboard',
        caption: 'Admin Dashboard - Overview'
      },
      {
        src: '/images/Screenshot 2025-10-29 at 11.10.03 AM.png',
        alt: 'dashboard 2',
        caption: 'Admin Dashboard - Student Body'
      },
      {
        src: '/images/Screenshot 2025-10-30 at 12.01.52 PM.png',
        alt: 'dashboard detail',
        caption: 'Admin Dashboard - View Student Insights'
      }
    ],
    resultsImages: [],
    role: 'Product Developer & Designer',
    tools: ['Figma', 'Bubble.io', 'Javascript', 'AWS', 'PostgreSQL']
  },
  */
  {
    slug: 'house-rx',
    title: 'HouseRX',
    context: 'Consulting Project',
    description: 'A home concierge experience that taught me the importance of smart UX discovery.',
    year: '2025',
    tags: ['UI/UX Design', 'User Research', 'Product Discovery'],
    heroImage: '/images/hrxheroImage.png',
    overview: 'I was brought on by HouseRX founder, Ron Fesko, to realign a product trajectory that had decoupled from its original vision. While the existing development agency was technically proficient, the product had pivoted toward an ad-hoc scheduling tool that placed undue burden on homeowners. The vision for HouseRX was to create an ecosystem for homeowners and property managers to monitor and maintain home wellness effortlessly with the assistance of intuitive software and a network of trusted, local technicians. I stepped in to architect a true three-sided ecosystem, balancing the needs of owners, property managers, and technicians, and transform a fragmented interface into an intuitive platform for proactive home wellness.',
    problem: 'The initial product direction was homeowner-centric, resulting in a vague dashboard and a recurring audit feature that lacked clear daily utility. My goal was to pivot the experience toward the user who would drive the most value during the MVP stage.\n\nThrough user flow mapping and a high-level database schema analysis, I identified a critical disconnect. While homeowners want peace of mind, property managers need functional control. We were effectively replacing a legacy "pen and paper" system for managers, making them the high-intent user required for a successful launch.\n\nBy prioritizing the \'Property Manager\' persona, we built a high-utility tool that provided the granular control existing products lacked. We would eventually curate a separate experience for technicians, but in the meantime, they could use a modified version of the property manager experience. This allowed us to streamline the technician experience in the interim and gave the homeowner exactly what they wanted: the confidence that their property was being managed by a professional with the right tools.',
    solution: 'Designing the HRX Dashboard served as a catalyst for identifying the other missing links in the user experience – such as: Where can users see the status of the items in their home? Where can property managers track maintenance logged by technicians? Where can technicians go to make their inspection and maintenance process faster and more effective? I began with a high-level iteration process to transform a "blank canvas" into a centralized, beautiful, and functional command center.\n\nThe second iteration moved us closer to the final MVP. Based on stakeholder feedback, we prioritized a \'Home at a Glance\' approach, making everything in their home easily indexable by room and type of equipment (HVAC, kitchen, plumbing, etc). By reducing the hero section\'s footprint, we shifted the focus from decorative elements to actionable data. However, this phase revealed a critical pivot: we needed to move beyond showing \'current status\' and instead prioritize a reliable, predictable maintenance timeline for every asset in the home.',
    results: [
      'Clear alignment on key product stakeholders.',
      'UX overhaul to address key user roles.',
      'Continuous improvement of Figma expertise.',
      'Exposure to a new and exciting product space.'
    ],
    resultsDescription: 'This project was a definitive exercise in product evolution - taking a fragmented concept and architecting it into a cohesive system. It challenged me to balance complex data requirements with a clean user interface. Working alongside the founders and development team reinforced a core tenet of my practice: great design isn\'t just about aesthetics; it starts with asking the right questions about the people using the tool.',
    images: [],
    problemTitle:'Understanding User Roles',
    solutionTitle: 'Designing an Effective Dashboard',
    overviewImages: [
      {
        src: '/images/hrx_whiteboard.png',
        alt: 'HouseRX Old Design',
        caption: 'Overview of FigJam discovery'
      },
      {
        src: '/images/hrx_figma.png',
        alt: 'Persona User Flow',
        caption: 'Overview of Prototype & Design Journey'
      },
      {
        src: '/images/hrx_overview.png',
        alt: 'Db Schema',
        caption: 'Overview of Key Wireframes'
      }
    ],
    problemImages: [
      {
        src: '/images/hrx2.png',
        alt: 'Original HouseRX dashboard',
        caption: 'The Original Dashboard Lacked Clear Definition of User Roles'
      },
      {
        src: '/images/hrx3.png',
        alt: 'user experience',
        caption: 'Guided App UX User Flow'
      },
      {
        src: '/images/hrx4.png',
        alt: 'db schema',
        caption: 'Proposed Database Schema to Address User Roles'
      }
    ],
    solutionImages: [
      {
        src: '/images/hrx_dashv1.png',
        alt: 'hrx dashboard v1',
        caption: 'HouseRX Dashboard First Draft'
      },
      {
        src: '/images/hrx_dashv2.png',
        alt: 'hrx dashboard v2',
        caption: 'HouseRX Dashboard Second Draft'
      },
      {
        src: '/images/hrx_dash3.png',
        alt: 'hrx dashboard v3',
        caption: 'HouseRX Dashboard Final Design'
      }
    ],
    resultsImages: [],
    role: 'Lead Product Designer',
    tools: ['Figma', 'Bubble.io', 'Adobe']
  },
  {
    slug: 'partyplease',
    title: 'PartyPlease',
    context: 'Studio Project',
    description: 'A beautiful party-planning ecosystem that helped teach iteration, innovation and smart pivots.',
    year: '2023',
    tags: ['Mobile Marketplace', 'Design Leadership', 'UI/UX'],
    heroImage: '/images/party_hero.png',
    overview: 'PartyPlease is an extremely fun product – to use and to build. Despite its relatively simple approach, a fair amount of complexity was required for the management system. We built this product in 6 weeks, and we started the stopwatch at the first wireframe. I carried my learnings from other projects with this build, and it is now Platform\'s most successful portfolio company.\n\nPartyPlease is beautiful and simple, but it did not start that way. With a design language that is driven by its products, it was a long road to achieve the final design of the homepage.',
    problem: 'The original product page was a pop-up rather than a dedicated page - and included many parameters to add a product to your cart. The vendor needed to be available, delivery time needed to be determined, and the options were too constrained. It was a cumbersome process for hosts and vendors alike.\n\nRemoving location services from the mix was critical. Our revenue and booked parties increased by 1400% in the first month after launching V2 of the search engine and homepage. Styles were not the only thing we updated; the checkout and product discovery processes were brand new. Rather than putting pressure on both user types, we now employ an intermediary party planner to run communication between all party members and find similar products that might suit the host\'s needs. The user testers revealed that sometimes less is more.',
    solution: 'When PartyPlease launched, its homepage was also its search engine, putting emphasis on hosts exploring different vendors by city. I had originally thought that hosts would want to explore and book options themselves, and furthermore, that filtering by location would not be that difficult. I was wrong about pretty much all of that.\n\nWithout pre-selected cities, the filtering became too general. Any search needed to be within 100 miles of any given major city in order to yield results. Furthermore, our user research suggested that hosts want their parties planned for them, with as little personal involvement as possible.',
    results: [
      'Design system pivot and overhaul.',
      'Geo-filtering development trial and error.'
    ],
    resultsDescription: 'As a new designer and developer at the time, I had a natural tendency to over-design or over-engineer a product. This was a great lesson in listening to user feedback and effective user research. PartyPlease is an example of every team member giving their absolute most for a project, and that all started with the founder, Molly. Molly was not afraid to dive into the product and get her hands dirty, and that inspired all of us to put our best foot forward and build an amazing product. Effective design-thinking and smart pivots made PartyPlease one of Platform\'s fastest growing companies to date.',
    images: [],
    problemTitle: 'Product Page',
    solutionTitle: 'Handling Geo-Filtering',
    overviewImages: [
      {
        src: '/images/party_homepageBefore.png',
        alt: 'home page 1',
        caption: 'PartyPlease HomePage - Before'
      },
      {
        src: '/images/party_overview1.png',
        alt: 'product search',
        caption: 'New Product Search Catalog'
      },
      {
        src: '/images/party_overview2.png',
        alt: 'home page 2',
        caption: 'PartyPlease HomePage - After'
      }
    ],
    problemImages: [
      {
        src: '/images/party_detailbefore.png',
        alt: 'detail page 1',
        caption: 'Product Detail Popup - Before'
      },
      {
        src: '/images/party_detailafter.png',
        alt: 'detail page 2e',
        caption: 'Product Detail Page - After'
      }
    ],
    solutionImages: [
      {
        src: '/images/party_hero.png',
        alt: 'hero image',
        caption: 'PartyPlease - Final Product Search Page'
      },
      {
        src: '/images/party_geofilter.png',
        alt: 'geo filter',
        caption: 'Geo-filter - Search & Index Parameters'
      }
    ],
    role: 'Product Designer & Development Lead',
    tools: ['Figma', 'Bubble.io', 'Typeform', 'Segment']
  },
  {
    slug: 'smarthaul',
    title: 'SmartHaul',
    context: 'Studio Project',
    description: 'A cross-platform freight management ecosystem that helped showcase my growth as a designer, developer and product leader.',
    year: '2024',
    tags: ['Mobile-first', 'UI/UX Design', 'Product Management', 'Backend Development'],
    heroImage: '/images/smarthaul_hero.png',
    overview: 'During the development of SmartHaul, I began to see myself growing as a designer and product developer. With SmartHaul, I was able to demonstrate my expertise in all aspects of the development timeline - UX research/writing, interface design, product management, and the engineering of the product itself.\n\nThe SmartHaul \'loads dashboard\' contained more onscreen data than any of our previous builds; maintaining balance and fidelity without overwhelming either user type was the priority. This was a challenging UX to design; the trucking and logistics industry is synonymous with large amounts of data and very little emphasis on design.\n\nIntegrating contextual communications between all involved parties during an active load was another priority. A/B testing revealed that users would rather have their messages on a dedicated page.',
    problem: 'As a well-oiled machine at this point, we gave ourselves a shorter timeline, a larger scope for the build, and a second developer. SmartHaul was a fast-paced, professional project, and every component of this build put my collaboration skills to the test. As a natural hands-on builder, this project forced me to delegate different aspects of the design and development to other members of the team and the founder.\n\nAs a cross-platform web-app with a completely separate mobile experience, we needed contextual alerts to appear in real-time across all devices to allow drivers and shippers to respond promptly.\n\nI solved this problem using a timed event trigger that evaluated the status of a user\'s most recent notification. This way, SmartHaul had complete flexibility over the notification and the load data. Once the event was triggered, our team could make any necessary changes to a user\'s notifications and change the status of the load itself. Regarding style, it was important for the contextual alerts to contrast with the rest of the app. Thus, these alerts appear in dark mode on desktop and light mode on mobile.',
    solution: '',
    overviewTitle: 'Context',
    problemTitle: 'Contextual Notifications',
    solutionTitle: ' ',
    resultsDescription: 'Throughout this very formative project, I was able to utilize every tool in my tool belt and operate as a leader in ways I had not before. While my title was Development Lead at Platform, it was not until this project that I truly embodied that responsibility and maximized my impact and insights. SmartHaul\'s design, development and launch was executed in 8 weeks.',
    overviewImages: [
      {
        src: '/images/smarthaul_hero.png',
        alt: 'smarthaul dashboard',
        caption: 'SmartHaul Main Loads Dashboard'
      },
      {
        src: '/images/smarthaul_overview1.png',
        alt: 'inter load chat',
        caption: 'SmartHaul Main Loads Dashboard - Contextual Messaging'
      }
    ],
    problemImages: [
      {
        src: '/images/smarthaul_contextual1.png',
        alt: 'contextual notifs 1',
        caption: 'Real-time contextual alerts - Desktop'
      },
      {
        src: '/images/smarthaul_contextual2.png',
        alt: 'contextual notifs 2',
        caption: 'Contextual Alert Triggering Workflow'
      },
      {
        src: '/images/smarthaul_contextual3.png',
        alt: 'contextual notifs 3',
        caption: 'Contextual Alerts Triggering & Display Workflow'
      },
      {
        src: '/images/smarthaul_contextual4.png',
        alt: 'contextual notifs 4',
        caption: 'Real-Time Contextual Alerts - Mobile'
      }
    ],
    results: [
      'Cross-platform events and notifications.',
      'Mobile-first light and dark mode design.',
      'Successful execution of product pipeline.',
      'Logistics and data-heavy design challenge.'
    ],
    images: [],
    role: 'Product Development Lead',
    tools: ['Figma', 'Bubble.io', 'Adobe', 'SQL', 'Segment']
  },
  {
    slug: 'unit-economics',
    title: 'Unit Economics Calculator',
    context: 'Studio Project',
    description: 'A complex quantitative internal tool that challenged me to exceed my own expectations as a problem solver.',
    year: '2022',
    tags: ['Web Development', 'Calculation', 'Data Visualization'],
    heroImage: '/images/unit_hero.png',
    overview: 'This tool was designed for Platform Venture Studio\'s portfolio companies for investor pitches and tracking of relevant metrics. This was the first project I was given at the studio to handle entirely on my own. As an ambitious designer and developer, I was more than willing to take on this challenge.\n\nRegarding ease of use, creating simple tooltips was more complex than expected. I wanted users to understand the concepts without overwhelming them with information. Since CAC Recovery and CAC Doubling are not universal concepts, this was a great lesson in UX writing.',
    problem: 'The unit economics tool existed only as a financial model in excel before I was handed the project. I was tasked with reverse-engineering the excel formula to create an accurate calculator, while simultaneously developing an experience that was extremely intuitive for users.',
    solution: '',
    solutionTitle: ' ',
    problemTitle: 'The Math',
    resultsDescription: 'I typically thrive when I get to solve complex problems, but normally I have some form of a solution before I tackle the project. With this one, I had no idea how I was going to build the solution when I accepted the challenge. At the end of the day, it is a simple tool; but for me, it was an incredible learning experience. I learned key lessons in UX writing and the value of Unit Economics for early-stage venture; these lessons have made me a better UX researcher and product leader when working with founders.',
    results: [
      'Reverse-Engineered Excel formula.',
      '100% ownership of product design & build.',
      'Complex data visualization workflow.',
      'The first project I owned independently.'
    ],
    images: [],
    overviewImages: [
      {
        src: '/images/unit_overview1.png',
        alt: 'collapsed',
        caption: 'Calculator Tool Overview - Collapsed'
      },
      {
        src: '/images/unit_overview2.png',
        alt: 'expanded',
        caption: 'Calculator Tool Overview - Advanced Settings'
      },
      {
        src: '/images/unit_overview3.png',
        alt: 'tooltip',
        caption: 'Calculator Tooltip & Helpful Context'
      }
    ],
    problemImages: [
      {
        src: '/images/unit_math1.png',
        alt: 'calculation 1',
        caption: 'Customer Acquisition Cost Recovery Time - Calculation Javascript (With Churn Rate)'
      },
      {
        src: '/images/unit_math2.png',
        alt: 'calculation 2',
        caption: 'Customer Acqusition Cost Recovery Time - Calculation Pt. 2'
      }
    ],
    role: 'Lead Developer, UX/UI Designer, System Architect',
    tools: ['Bubble.io', 'Javascript', 'Microsoft Excel', 'Segment']
  },
  {
    slug: 'music-under-water',
    title: 'Music Under Water',
    context: 'Independent Work',
    description: 'An innovative hardware solution with astronomical potential.',
    year: '2010',
    tags: ['Product Discovery','User Research','Design Leadership'],
    heroImage: '/images/IMG_1832.jpeg',
    overview: 'Early in my career, I had the opportunity to conduct some innovative product discovery for my 5th grade science fair. At the time, the term "bluetooth audio" didn\'t even exist. With a passion for both ingenuity and aquatics, I set out to achieve the impossible: create a device that could project music...underwater.',
    overviewTitle: 'Overview',
    problem: 'The discovery process was thorough and extraordinarily validating. I began by scoping out my development roadmap, making sure to highlight the key priorities for my product (slogans, logos, patents, etc). Once the road ahead was clear, I conducted a validation workshop, gathering positive reinforcement from trusted community members (echo chambers are good, right?).\n\nI then moved onto more objective consumer surveys and pricing exploration. To no one\'s surprise, my product received universal praise, achieving a rare NPS score of 100 - virtually unheard of nowadays. Fueled by my strong research insights, I determined that a premium pricing model made the most sense for my product.',
    problemTitle: 'Insights & Customer Discovery',
    solution: 'The creative process was both intellectually demanding and wide-reaching. Since a product of this scope and scale had never been achieved before, I couldn\'t simply name the product \'Music Under Water\' - or could I? The simplicity of the name helped enhance the gravity of the product itself. Pure genius.\n\nIt was during this stage of the development process that I found my passion for design and innovation. In order to truly break down barriers, one needed to be fearless throughout the process and not afraid to take big swings. With M.U.W, I may have taken the biggest swing of them all.',
    solutionTitle: 'Final Deliverable',
    resultsDescription: 'As it turns out, bluetooth audio cannot penetrate water, so we are still fighting an uphill battle with underwater audio to this day. There have been a few minor breakthroughs in the space, but nothing as truly disruptive as my concept. After spending the last 15 years preparing, M.U.W may finally be ready to enter the prototyping phase.',
    results: [
      'True 0-1 product pipeline.',
      'Won the 5th grade science fair.',
      'Early exposure to design thinking.',
      'Breakthrough in audio technology.'
    ],
    images: [],
    overviewImages: [
      {
        src: '/images/IMG_6600 1.jpg',
        alt: 'Music Under Water overview image 1',
        caption: ''
      },
      {
        src: '/images/IMG_6601 1.jpg',
        alt: 'Music Under Water overview image 2',
        caption: ''
      }
    ],
    problemImages: [
      {
        src: '/images/IMG_4163.jpeg',
        alt: 'Early Feedback and Validation',
        caption: 'Early Feedback and Validation'
      },
      {
        src: '/images/IMG_5327.jpeg',
        alt: 'Product Roadmap Scoping',
        caption: 'Product Roadmap Scoping'
      },
      {
        src: '/images/IMG_2303.jpeg',
        alt: 'Consumer Survey Breakdown',
        caption: 'Consumer Survey Breakdown'
      },
      {
        src: '/images/IMG_9701.jpeg',
        alt: 'Pricing Exploration Analysis',
        caption: 'Pricing Exploration Analysis'
      }
    ],
    solutionImages: [
      {
        src: '/images/IMG_1148.jpeg',
        alt: 'Logo Brainstorm',
        caption: 'Logo Brainstorm'
      },
      {
        src: '/images/IMG_2274.jpeg',
        alt: 'First Magazine Draft with Notes',
        caption: 'First Magazine Draft with Notes'
      },
      {
        src: '/images/IMG_5114.jpeg',
        alt: 'Product Overview Draft',
        caption: 'Product Overview Draft'
      },
      {
        src: '/images/IMG_1832.jpeg',
        alt: 'Final Product and Presentation',
        caption: 'Final Product and Presentation'
      }
    ],
    resultsImages: [],
    role: 'Product Lead | Chief Inventor',
    tools: ['Pen & paper','Markers']
  }
]
