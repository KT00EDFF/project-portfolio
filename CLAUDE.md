# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Kyle Owen Thomas, built as a single-page application with Next.js 14+ (App Router), TypeScript, and Tailwind CSS. The site emphasizes performance, accessibility, and a premium feel with dark mode support.

## Commands

**Development:**
```bash
npm run dev          # Start development server at http://localhost:3000
npm run build        # Create production build
npm start            # Run production build locally
npm run lint         # Run ESLint
```

## Architecture

### Content Management
- **All content lives directly in component files** as TypeScript arrays/objects (not in a CMS or separate data files)
- To update content, edit the arrays directly in the component files:
  - `app/components/Hero.tsx` - headline, subhead, stats
  - `app/components/About.tsx` - bio paragraphs
  - `app/components/Skills.tsx` - `skillCategories` array
  - `app/components/Projects.tsx` - `projects` array
  - `app/components/Experience.tsx` - `experiences` array
  - `app/components/Contact.tsx` - email, LinkedIn, GitHub URLs

### Dark Mode System
- Implemented via React Context in `app/components/ThemeProvider.tsx`
- Uses Tailwind's `class` strategy (adds/removes `dark` class on `<html>`)
- Persists preference to localStorage
- Detects system preference on first visit
- Access theme state via `useTheme()` hook in any component

### Animation System
- `app/components/SectionReveal.tsx` is a reusable wrapper component
- Uses IntersectionObserver API for scroll-triggered fade-up animations
- Wrap any section content with `<SectionReveal>` to enable animations
- Configure threshold and rootMargin in the component if needed

### Single-Page Structure
- `app/page.tsx` composes all section components in order
- Navigation uses anchor links (e.g., `#about`, `#projects`)
- Each section should have a matching `id` attribute
- To add/remove sections: update both `app/page.tsx` and `navItems` in `app/components/Navigation.tsx`

### Styling Approach
- Uses Tailwind CSS exclusively (no CSS modules or styled-components)
- Custom accent color palette defined in `tailwind.config.ts` (currently blue)
- Two Google Fonts configured in `app/layout.tsx`:
  - **Inconsolata** (monospace) - default body font
  - **Syne** (sans-serif, bold weights) - used for headings
- Font variables accessible via `var(--font-inconsolata)` and `var(--font-syne)`

### Path Aliases
- `@/*` maps to project root (configured in `tsconfig.json`)
- Example: `import { useTheme } from '@/app/components/ThemeProvider'`

### TypeScript Configuration
- Strict mode enabled
- React 18 JSX transform (`jsx: 'react-jsx'` - no need to import React in component files)
- Target ES2017 for broad compatibility

## Deployment

The site is configured for Vercel deployment with security headers in `vercel.json`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: origin-when-cross-origin

To deploy elsewhere, remove or adapt `vercel.json` as needed.

## Accessibility Considerations

The codebase prioritizes accessibility:
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- Include ARIA labels on interactive elements
- Maintain proper heading hierarchy (h1 → h2 → h3)
- Test keyboard navigation when adding interactive features
- Respect `prefers-reduced-motion` for animations

## Common Modifications

**Changing theme colors:** Edit the `accent` color palette in `tailwind.config.ts`

**Changing fonts:**
1. Update font imports in `app/layout.tsx`
2. Update `fontFamily` extension in `tailwind.config.ts`

**Adding a new section:**
1. Create component in `app/components/`
2. Import and add to `app/page.tsx`
3. Add corresponding nav item to `navItems` in `Navigation.tsx`
4. Wrap content with `<SectionReveal>` for animations

**Updating metadata:** Edit the `metadata` export in `app/layout.tsx`
