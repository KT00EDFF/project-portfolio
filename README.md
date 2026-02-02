# AI Product Builder Portfolio

A modern, premium-feeling single-page portfolio site built with Next.js, TypeScript, and Tailwind CSS. Designed specifically for AI Product Builders seeking Senior/Lead Product roles.

## Features

- **Single-page layout** with smooth scrolling between sections
- **Responsive design** optimized for all devices
- **Dark mode** with system preference detection and persistence
- **Accessible** with keyboard navigation, ARIA labels, and semantic HTML
- **Performance-optimized** for Lighthouse scores
- **Smooth animations** with IntersectionObserver
- **Mobile-friendly** navigation with hamburger menu

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React**

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download this repository

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The site will hot-reload as you make changes.

### Build for Production

```bash
npm run build
npm start
```

## How to Customize

### 1. Personal Information

Update personal details in the following files:

**Hero Section** (`app/components/Hero.tsx`):
- Update headline, subhead, and stats
- Modify CTAs if needed

**About Section** (`app/components/About.tsx`):
- Replace bio with your own story
- Adjust paragraphs to match your experience

**Contact Section** (`app/components/Contact.tsx`):
- Update email address (search for `your.email@example.com`)
- Update LinkedIn URL (search for `linkedin.com/in/yourprofile`)
- Update GitHub URL (search for `github.com/yourusername`)

**Layout** (`app/layout.tsx`):
- Update metadata (title, description, etc.)
- Replace author name

### 2. Skills

Edit the `skillCategories` array in `app/components/Skills.tsx`:

```typescript
const skillCategories = [
  {
    title: 'Your Category',
    skills: ['Skill 1', 'Skill 2', ...],
  },
  // Add more categories
]
```

### 3. Projects

Edit the `projects` array in `app/components/Projects.tsx`:

```typescript
const projects = [
  {
    title: 'Project Name',
    description: 'One-line value prop',
    stack: ['Tech1', 'Tech2'],
    outcomes: [
      'Metric-driven outcome 1',
      'Metric-driven outcome 2',
    ],
    github: 'https://github.com/...',
    live: 'https://...' // or null if no demo
  },
  // Add more projects
]
```

### 4. Experience

Edit the `experiences` array in `app/components/Experience.tsx`:

```typescript
const experiences = [
  {
    role: 'Your Role',
    company: 'Company Name',
    period: '2022 - Present',
    highlights: [
      'Impact statement with metrics',
      'Another achievement',
    ],
  },
  // Add more experiences
]
```

### 5. Theme Colors

Update accent colors in `tailwind.config.ts`:

```typescript
colors: {
  accent: {
    // Customize these values
    500: '#0ea5e9',
    600: '#0284c7',
    // etc.
  },
}
```

Current accent color is a blue shade. You can change it to any color by updating the color values.

### 6. Navigation

To add/remove sections, update `navItems` in `app/components/Navigation.tsx`:

```typescript
const navItems = [
  { label: 'Section Name', href: '#section-id' },
  // Add or remove items
]
```

Make sure the `href` matches the `id` attribute of the corresponding section.

### 7. Fonts

The site uses Inter font from Google Fonts. To change it:

1. Update the import in `app/layout.tsx`
2. Update the `fontFamily` in `tailwind.config.ts`

## Project Structure

```
ai-portfolio/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx      # Sticky nav with mobile menu
│   │   ├── Hero.tsx            # Hero section
│   │   ├── About.tsx           # About section
│   │   ├── Skills.tsx          # Skills section
│   │   ├── Projects.tsx        # Projects section
│   │   ├── Experience.tsx      # Experience section
│   │   ├── Contact.tsx         # Contact form
│   │   ├── ThemeProvider.tsx   # Dark mode context
│   │   ├── ThemeToggle.tsx     # Theme toggle button
│   │   └── SectionReveal.tsx   # Scroll animation wrapper
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Main page
│   └── globals.css             # Global styles
├── public/                     # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Accessibility Features

- Semantic HTML with proper landmarks (`nav`, `main`, `section`, `footer`)
- Keyboard navigation support
- Focus visible states
- ARIA labels for interactive elements
- Reduced motion support
- Proper heading hierarchy
- Color contrast compliance

## Performance Optimizations

- Minimal JavaScript bundle
- No heavy external libraries
- Optimized animations with IntersectionObserver
- Efficient CSS with Tailwind's purge
- Static generation with Next.js

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Build the site: `npm run build`
2. Deploy the `.next` folder to Netlify

### Deploy to any static host

1. Build: `npm run build`
2. Export: Add `output: 'export'` to `next.config.js`
3. Deploy the `out` folder

## License

This portfolio template is free to use for personal and commercial projects.

## Support

For issues or questions, please open an issue in the repository.

---

Built with ❤️ using Next.js and Tailwind CSS
