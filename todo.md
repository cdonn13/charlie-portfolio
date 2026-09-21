# Portfolio Development Todo List

## Completed ✅

- [x] Initialize Next.js 14 project with TypeScript and Tailwind CSS
- [x] Configure fonts (Roboto, Manrope) and Tailwind config
- [x] Create core layout components (Navbar, Footer, root layout)
- [x] Build Hero component for home page
- [x] Create project data structure and TypeScript types
- [x] Build ProjectCard component with numbered design
- [x] Create home/portfolio page with project grid
- [x] Build dynamic case study page template
- [x] Create About/Story page
- [x] Create Resume page
- [x] Add 404 page
- [x] Initialize git repository
- [x] Set up proper image folder structure (public/images)
- [x] Add HouseRX hero image

## In Progress 🔄

- [x] Add 3D Book component to About page

## Pending 📋

- [ ] Customize project content for HouseRX
- [ ] Add remaining project images and content

## Current Plan: Add "AI-empowered UI Pipeline" project (FIRST in list)

**Field mapping (per `Project` interface):**
- slug: `ai-ui-pipeline`
- title: `Designing an AI-empowered UI Pipeline`
- context: `Consulting Project` (Runwayz work — matches other Runwayz entries)
- description: provided one-liner
- year: `2026`
- tags: `['AI/ML', 'Product Strategy', 'UI/UX Design', 'Design Systems']` — confirm?
- heroImage: `''` placeholder (user adds next step)
- overview / overviewTitle: "The Need (Context)" body / `The Need`
- problem / problemTitle: "Building the Pipeline" body / `Building the Pipeline`
- solution / solutionTitle: "A Flexible Model" body / `A Flexible Model`
- resultsDescription: the closing quote (verbatim, in quotes)
- results: 4 short bullets (proposing — user confirms):
  - `Faster MVP iteration speed.`
  - `AI-driven design pipeline built end-to-end.`
  - `Unified brand context across Claude skills.`
  - `Hands-on integration of Stitch + Figma MCP.`
- images / overviewImages / problemImages / solutionImages / resultsImages: empty (user adds next)
- role: `Product Lead, UI Lead`
- tools: `['Claude', 'Visual Studio Code', 'Google Stitch MCP', 'Figma', 'Figma MCP']`

**Tasks:**
- [x] Insert new project as index 0 of `projects` array in `data/projects.ts`
- [x] Escape apostrophes (`\'`) in single-quoted strings
- [x] Verify `tsc --noEmit` clean

## Review: AI-empowered UI Pipeline project added ✅

**Changes:**
- `data/projects.ts`: prepended new project (`slug: ai-ui-pipeline`) as first entry; all required `Project` fields populated
- Image arrays empty — user will add next step
- Apostrophes escaped (`isn\'t`, `Google\'s`, `didn\'t`, `\'AI-slop\'`)
- `resultsDescription` wraps the closing testimonial in literal quotes
- Tweaked: "wire-faming" → "wire-framing"; "Visual Studio" capitalization; collapsed double-space in quote
- Type-check clean (`tsc --noEmit`)
- [ ] Test responsive design across all pages
- [ ] Add SEO metadata optimizations
- [ ] Final design polish and styling review
- [ ] Deploy to production (Vercel/Netlify)

## Current Plan: Add 3D Book Reading List

**Task:** Add 3D book component to About page below image carousel

**Implementation:**
1. Create Book3D component (TypeScript, client component)
2. Add CSS for 3D transforms and animations
3. Add book data with titles and cover images
4. Integrate into about page below carousel (line ~120)

**Files to change:**
- components/Book3D.tsx (new)
- app/globals.css (add 3D book styles)
- app/about/page.tsx (add component below carousel)

**Impact:** Minimal - 1 new component, small CSS addition, 1 line added to about page

## Review: 3D Book Component ✅

**Changes:**
- components/Book3D.tsx: New client component with TypeScript support
- app/globals.css: Added 3D book styles with transforms, shadows, and responsive grid
- app/about/page.tsx: Imported and added BooksGrid below image carousel
- next.config.js: Added framerusercontent.com to allowed image domains

**Initial Features (v1):**
- Interactive 3D book effect on mouse movement
- Mouse rotation follows cursor position
- Responsive grid layout

**Enhanced Features (v2 - Bookshelf Style):**
- Books now appear standing on shelf with -15deg Y rotation
- Dramatic hover effect: rotates to -35deg, lifts up 20px, scales to 1.05x
- Enhanced 3D depth: spine width 50px, translateZ 25px (was 15px)
- Better shadows: 0 20px 60px for depth, inset shadows on spine
- Page texture: repeating gradient lines for realistic paper effect
- Smooth bounce animation: cubic-bezier(0.34, 1.56, 0.64, 1)
- Title lifts on hover with color change
- Responsive: adjusted transforms for mobile

**Visual Improvements:**
- Thicker spine with gradient shadow
- Realistic page edges with inset shadows
- Cover overlay gradient for depth
- Larger grid gaps (64px vertical, 48px horizontal)
- More dramatic perspective (2000px on grid)

**How to Customize:**
Edit books array in app/about/page.tsx (lines 122-143):
```ts
{ title: "Book Title", cover: "/images/book-cover.jpg" }
```

**Location:** Between image carousel and Skills & Values section

## Review: Bookshelf Spine View (v3) ✅

**Final Changes:**
- Books now start at -82deg rotation (showing spine only)
- Hover reveals full cover: -25deg rotation, lifts 30px, scales 1.1x
- Added vertical spine text with book titles
- Changed layout from grid to flexbox (books sit side-by-side)
- Titles hidden by default, fade in on hover
- Z-index management for proper hover layering

**Spine Design:**
- Darker gradient background for visibility
- White text with shadow (vertical orientation)
- Font size 11px, weight 600, letter-spacing 0.5px
- Text shadow for depth on dark background

**Interaction:**
- Default: Books show only spine (like bookshelf)
- Hover: Book pulls out, rotates to show cover, title fades in
- Smooth bounce animation (0.7s cubic-bezier)
- Proper stacking (hovered book appears above others)

**Responsive:**
- Mobile: Adjusted transforms and spacing
- Zero gap between books for tight shelf appearance
- Flexbox ensures books wrap naturally on small screens

## Review: Solid 3D Books (v4) ✅

**Final Changes:**
- Added complete 3D geometry: front, back, spine, top, bottom, pages (right side)
- All 6 faces now render for solid book appearance
- No see-through parts - backface-visibility: hidden on all faces

**3D Face Details:**
- **Front cover**: translateZ(25px) - shows book cover image
- **Back cover**: translateZ(-25px) rotateY(180deg) - dark gradient (#2a2a2a to #1a1a1a)
- **Spine** (left): rotateY(90deg) - dark gradient with white title text (vertical)
- **Pages** (right): rotateY(-90deg) - light gradient (#f8f8f8 to #fff) with line texture
- **Top**: rotateX(90deg) - light gray gradient
- **Bottom**: rotateX(-90deg) - slightly darker gray

**Spine Title Text:**
- Vertical orientation (writing-mode: vertical-rl)
- Font size 12px, weight 700
- White color with strong text-shadow
- Letter-spacing 1px for readability
- Visible when books are on shelf (spine-first view)

**Result:** Fully solid 3D books that look realistic from all angles. Spine is clearly visible with book titles when books are at rest on the shelf.

## Review: Inverted Book Rotation (v5) ✅

**Changes:**
- Rotated all books +180° on Y-axis
- Default state: rotateY(98deg) - spine now faces viewer
- Hover state: rotateY(25deg) - opens opposite direction
- Inverted horizontal movement: translateX(-20px) instead of (+20px)

**Result:**
- Spine with title text now faces forward when books are at rest
- Books open to the left on hover (opposite direction)
- More natural bookshelf appearance

## Review: Content Overhaul (PDF Feedback Pass) ✅

**Data edits (`data/projects.ts`)** — replaced overview / problem / solution / resultsDescription per PDF for:
- unit-economics, smarthaul, partyplease, siid-technologies, house-rx, runwayz_quiz, runwayz_company, movemint, runwayz_profile

**Small fixes**:
- smarthaul: `overviewTitle` "Overview" → "Context"
- runwayz_quiz: `solutionTitle` "Gathering and Viewing..." → "Gathering & Viewing..."
- runwayz_company: `solutionTitle` removed trailing period
- siid-technologies: appended periods to all 4 `results` array items
- Role capitalized on movemint, siid-technologies, unit-economics

**About page (`app/about/page.tsx`)** — rewrote 4 timeline entries (2020/2022/2024/2025) and "Have a Personal Life?" paragraph per PDF; capitalized "Head of Product" in 2025 entry

**ImageGallery bug fixes (`components/ImageGallery.tsx`)**:
- Close (X) button: proper 48×48 padded hit target + z-20 (was a bare glyph with tiny hit area)
- Prev / Next buttons: added z-20 — image wrapper was covering prev button, causing back arrow to appear broken

**File cleanup**: normalized 6 non-breaking spaces + 33 narrow no-break spaces + 1 zero-width joiner that had leaked in from copy-paste (were silently breaking string matches)

**Apostrophes**: properly escaped (`\'`) throughout new content in projects.ts (single-quoted strings)

**Verified**: `tsc --noEmit` clean, dev server recompiles with no errors.

## Review: Timeline Layout for Story Section ✅

**Changes:**
- app/about/page.tsx: Replaced plain text paragraphs with visual timeline

**Timeline Design:**
- Vertical line on left side (2px gradient gray)
- Circular year badges (64x64px) with gradient backgrounds
- Years: 2020, 2022, 2024, 2025
- 2025 has special styling (ring effect) as current year
- Content aligned to right of timeline with proper spacing

**Visual Structure:**
- Each timeline item: year badge + content text
- Flexbox layout with 8-unit gap between badge and text
- 12-unit vertical spacing between items
- Badge: rounded-full with gradient from gray-700 to gray-900
- Border: 4px border-gray-800, shadow-lg for depth

**Typography:**
- Year labels: sm font size, bold, gray-100 text
- Content: gray-300, leading-relaxed for readability
- Maintained same content, just reformatted visually

**Result:** Story section now has clear visual progression through career timeline instead of plain text blocks.

## Review: Case Study PDF Viewer ✅

**Goal:** Per-project button that opens a full-bleed popup of a case PDF/deck, only when the project has one.

**Changes:**
- `types/project.ts`: added optional `caseStudyPdf?: string` + `caseStudyLabel?: string`
- `components/PdfModal.tsx` (new client component): floating vertical side tab (fixed, right edge, scroll-persistent) → opens full-bleed modal rendering the PDF in a native `<iframe>`. Closes on ✕, Escape, and includes "Open in new tab". Locks body scroll while open.
- `app/projects/[slug]/page.tsx`: conditional `{project.caseStudyPdf && <PdfModal .../>}`
- `data/projects.ts`: added `caseStudyPdf` to first project (`pre-application-talent-pipeline`)
- Created `public/pdfs/` folder

**User action needed:** drop the actual PDF at `public/pdfs/pre-application-talent-pipeline.pdf` (folder is created, file is not committed yet).

**To add to other projects:** set `caseStudyPdf: '/pdfs/<name>.pdf'` on any project entry; button appears automatically.

**Verified:** `tsc --noEmit` clean.

## Review — Resume content update (Sept resume PDF)

Replaced the data in `app/resume/page.tsx` with the attached "Charles Donnelly Resume Sept.pdf". No layout/styling changes to existing sections.

- **Summary**: header tagline swapped for the resume's summary paragraph (`text-xl` → `text-lg` + `max-w-3xl leading-relaxed` so 3 sentences read well).
- **Experience**: 3 roles — Runwayz / Head of Product, Donnelly Design / Product Lead & Client Manager, Platform Venture Studio / Product Development Lead. All locations Chicago, IL. Bullets verbatim from PDF. Removed the IDEA Center role (not on the new resume).
- **Education**: 3 entries — JHU Carey MBA (May 2027), MICA Master of Design Leadership (May 2027), Notre Dame BA Industrial & Product Design (May 2021). Honors/descriptions now empty and render conditionally so the cards don't leave blank space.
- **Leadership & Service**: new section added between Education and Skills, reusing the Experience timeline markup.
- **Skills**: 4 categories now (Product, Design, Tools, Interests) instead of 2, matching the PDF's Core Skills block.

Verified: `npx tsc --noEmit` clean, `npm run build` succeeds.

## Review — Story page content update

Copy-only changes; no layout or styling changes beyond one moved highlight.

- **Bio line** ([components/Footer.tsx](components/Footer.tsx)): replaced "A passionate product leader creating exciting and innovative products." with the design/development/client-relationships line. Note this string lives in the Footer, not the About hero, so it updates site-wide.
- **Timeline** ([app/about/page.tsx](app/about/page.tsx)): 2020, 2022, 2024, 2025 entries replaced with the new copy verbatim.
- **2026**: new timeline entry added (MBA at JHU + MDL at MICA, still leading product at Runwayz, looking for the next chapter).
- The "current year" highlight ring moved from the 2025 marker to 2026; 2025 now uses the standard marker and gets `pb-8` so spacing stays even.
- Apostrophes written as `&apos;` to satisfy `react/no-unescaped-entities`.

Verified: `npx tsc --noEmit` clean, `next lint` clean, /about returns 200.
