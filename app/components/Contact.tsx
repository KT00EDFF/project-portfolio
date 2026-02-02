'use client'

import { useState, FormEvent } from 'react'
import SectionReveal from './SectionReveal'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const newErrors = {
      name: '',
      email: '',
      message: '',
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      const mailtoLink = `mailto:kyle.owen.thomas@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
      window.location.href = mailtoLink
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => setIsSubmitted(false), 5000)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <SectionReveal>
      <section id="contact" className="py-24 px-6 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            Interested in working together? Let's connect.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 dark:border-gray-700 focus:border-accent-500 focus:ring-accent-500'
                    } bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 dark:border-gray-700 focus:border-accent-500 focus:ring-accent-500'
                    } bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 dark:border-gray-700 focus:border-accent-500 focus:ring-accent-500'
                    } bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-colors resize-none`}
                    placeholder="Tell me about your project or opportunity..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-lg bg-accent-600 hover:bg-accent-700 dark:bg-accent-500 dark:hover:bg-accent-600 text-white font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent-500/30"
                >
                  Send Message
                </button>

                {isSubmitted && (
                  <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 text-sm">
                    Thanks! Your default email client should open. If not, please email me directly.
                  </div>
                )}
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Connect with me
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://linkedin.com/in/kyle-thomas-mba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-accent-50 dark:group-hover:bg-accent-900/20 transition-colors">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-sm text-gray-500">Connect professionally</div>
                    </div>
                  </a>

                  <a
                    href="mailto:kyle.owen.thomas@gmail.com"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-accent-50 dark:group-hover:bg-accent-900/20 transition-colors">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-gray-500">kyle.owen.thomas@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="tel:720-305-6312"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-accent-50 dark:group-hover:bg-accent-900/20 transition-colors">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-sm text-gray-500">720-305-6312</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-accent-50 dark:bg-accent-900/20 border border-accent-200 dark:border-accent-800">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Open to opportunities
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Currently seeking Senior/Lead Product Manager roles at AI-first companies. Especially interested in 0→1 product development and scaling AI products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
