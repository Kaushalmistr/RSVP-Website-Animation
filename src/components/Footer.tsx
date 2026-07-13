'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-accent-900 text-white py-16 relative border-t-2 border-primary-500">
      {/* Decorative floral elements placeholder or design */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-500 border-4 border-accent-900 flex items-center justify-center text-white">
        ♥
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
          {/* Couple Logo */}
          <div className="flex flex-col items-center md:items-start">
            <a
              href="#hero"
              className="text-3xl font-bold font-display text-primary-300 tracking-wider mb-3"
            >
              K <span className="text-white font-light">&</span> S
            </a>
            <p className="text-sm font-light text-white/60 tracking-wider">
              JUNE 15, 2026 • MUMBAI
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-bold font-display text-primary-300 mb-4">
              Quick Links
            </h4>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: 'Story', href: '#story' },
                { name: 'Events', href: '#events' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'RSVP', href: '#rsvp' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-primary-300 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Scroll To Top */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-lg font-bold font-display text-primary-300 mb-3">
              Contact Us
            </h4>
            <p className="text-sm text-white/70 font-light mb-1">
              contact@kaushalsimran.com
            </p>
            <p className="text-sm text-white/70 font-light mb-4">
              +91 98765 43210
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 hover:text-white transition-all duration-300"
              aria-label="Scroll to top"
            >
              ↑
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-xs text-white/40 font-light tracking-widest">
            MADE WITH ❤️ FOR KAUSHAL & SIMRAN. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  )
}
