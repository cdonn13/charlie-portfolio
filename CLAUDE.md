## Standard Workflow
1. First think through the problem, read the codebase for relevant files, and write a plan to todo.md
2. The plan should have a list of todo items that you can check off as you complete them
3. Before you begin working, check in with me and we can verify the plan together. 
4. When verifying the plan with me, I want you to communicate as concisely as possible; sacrifice grammar in favor of concision.
5. Then, begin working on the todo items, marking them complete as you go.
6. Please every step of the way just give me a high level explanation of what changes you made
7. Make every task and code change you do as simple and concise as possible. We want to avoid making any massive or complex changes. Every change should impact as little code as possible. Everything is about simplicity.
8. Finally, add a review section to the todo.md file with a summary of the changes you made and any other relevant information.

## Spacing & layout for UI
1. Base spacing unit: 4px (use multiples: 8px, 16px, 24px, 32px, 48px)
2. Container max-width: 1280px
3. Grid system: 12-column layout
4. Minimum touch target size: 44x44px (mobile)
5. Consistent padding: 
  - Small: 8px
  - Medium: 16px  
  - Large: 24px
  - XL: 32px

## Typography & Color
- Font stack: System fonts for performance
- Scale: 12px, 14px, 16px (base), 18px, 20px, 24px, 32px, 48px
- Line height: 1.5 for body text, 1.2 for headings
- Max line length: 65-75 characters for readability
- Font weights: 400 (regular), 500 (medium), 700 (bold)
- Primary, secondary, accent colors defined
- Neutral scale: 50, 100, 200...900
- Semantic colors: success, warning, error, info
- Minimum contrast ratio: 4.5:1 (text), 3:1 (UI components)
- Dark mode variants for all colors

## Accessibility Standards (WCAG 2.1 AA minimum)
- All interactive elements keyboard accessible
- Proper focus indicators (visible, 2px min)
- Semantic HTML (nav, main, section, article)
- ARIA labels for icon-only buttons
- Alt text for all images
- Form labels properly associated
- Skip-to-content links
- No reliance on color alone for information

## Component Patterns & Responsiveness
- Buttons: Clear hierarchy (primary, secondary, tertiary)
- Forms: Labels above inputs, inline validation
- Loading states: Skeletons > spinners
- Empty states: Helpful guidance, not just "No data"
- Error states: Clear message + recovery action
- Modal dialogs: Escape to close, focus trap
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Mobile-first approach

## App Performance
- Images: WebP with fallbacks, lazy loading
- Icons: SVG sprite or icon font
- Animations: Respect prefers-reduced-motion
- Bundle size: Monitor and code-split

## File Organization
- `/components` - Reusable UI components
- `/pages` - Route/page components
- `/utils` - Helper functions
- `/hooks` - Custom React hooks
- `/api` - API integration layer
- `/types` - TypeScript definitions
- `/constants` - Config and constants

## Naming Conventions
- Components: PascalCase (UserProfile.tsx)
- Files: kebab-case (user-profile.utils.ts)
- Functions: camelCase (getUserData)
- Constants: UPPER_SNAKE_CASE (API_BASE_URL)

## Code Quality Best Practices
- Write TypeScript, not JavaScript
- Every component gets PropTypes/TypeScript types
- No magic numbers - use named constants
- Extract logic into custom hooks
- Keep components under 250 lines
- One component per file
- DRY: Extract duplicate code into utilities

## Error Handling
- Always handle async errors with try/catch
- User-friendly error messages
- Log errors appropriately
- Graceful degradation, not crashes

## Testing Requirements
- Unit tests for utilities
- Component tests for UI logic
- Integration tests for critical flows
- Minimum 70% coverage

## Git Commit Messages
Format: type(scope): message
- feat: New feature
- fix: Bug fix
- refactor: Code restructure
- style: Formatting changes
- docs: Documentation
- test: Test additions