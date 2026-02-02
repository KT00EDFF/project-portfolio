import type { Metadata } from 'next'
import { Inconsolata, Syne } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'

const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inconsolata',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'swap',
  variable: '--font-syne',
})

export const metadata: Metadata = {
  title: 'Kyle Owen Thomas | AI Product Leader & Platform Builder',
  description: 'AI product leader and platform builder with 5+ years shipping products at scale. Enterprise platform infrastructure, GenAI systems, and human-in-the-loop design.',
  keywords: ['AI Product Manager', 'Platform Infrastructure', 'AI/ML', 'Product Leadership', 'GenAI', 'Human-in-the-loop'],
  authors: [{ name: 'Kyle Owen Thomas' }],
  openGraph: {
    title: 'Kyle Owen Thomas | AI Product Leader & Platform Builder',
    description: 'AI product leader and platform builder with 5+ years shipping products at scale. Enterprise platform infrastructure and GenAI-powered decisioning systems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inconsolata.variable} ${syne.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
