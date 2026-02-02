import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kyle Owen Thomas. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </>
  )
}
