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
            ? 'bg-white/95 backdrop-blur-md shadow-md py-4 border-b border-primary-100'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <a
            href="#hero"
            className="text-2xl md:text-3xl font-bold font-display text-accent-500 tracking-wider hover:text-primary-500 transition-colors"
          >
            K <span className="text-primary-500 font-light">&</span> S
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wider uppercase text-accent-500 hover:text-primary-500 transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary-500 transition-all group-hover:w-full" />
              </a>
            ))}
            <a href="#rsvp" className="btn-primary py-2 px-6 text-sm">
              RSVP
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-accent-500 focus:outline-none"
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
            className="fixed inset-0 top-[72px] bg-white z-40 md:hidden border-t border-primary-100 flex flex-col justify-start pt-12 px-6"
          >
            <div className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium tracking-widest uppercase text-accent-500 hover:text-primary-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#rsvp"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full max-w-xs mx-auto"
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
