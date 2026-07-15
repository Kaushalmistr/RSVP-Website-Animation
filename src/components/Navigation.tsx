'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Story', href: '#story' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'RSVP', href: '#rsvp' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-soft py-4 border-b border-gold-soft'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <a
            href="#hero"
            className="text-2xl md:text-3xl font-bold font-cinzel text-ink tracking-widest hover:text-rose-deep transition-colors"
          >
            K <span className="text-gold-soft font-light">&</span> S
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-cinzel tracking-widest uppercase text-ink hover:text-rose-deep transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-rose-deep transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href="#rsvp"
              className="bg-rose-deep text-cream hover:bg-rose px-6 py-2 rounded-full font-cinzel tracking-widest text-xs font-semibold shadow-soft hover:shadow-elegant transition-all text-center"
            >
              RSVP
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-ink focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] bg-cream z-40 md:hidden border-t border-gold-soft flex flex-col justify-start pt-12 px-6"
          >
            <div className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-cinzel tracking-widest uppercase text-ink hover:text-rose-deep transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#rsvp"
                onClick={() => setIsOpen(false)}
                className="bg-rose-deep text-cream hover:bg-rose px-6 py-3 rounded-full font-cinzel tracking-widest text-sm font-semibold shadow-soft hover:shadow-elegant transition-all text-center w-full max-w-xs mx-auto"
              >
                RSVP
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
