'use client'

import { motion } from 'framer-motion'

export default function Footer({ names = ["Kaushal", "Simran"] }: { names?: string[] }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer 
      className="text-white py-20 relative overflow-hidden"
      style={{ backgroundColor: "rgb(168 96 96)" }}
    >
      {/* ─── DECORATIVE PETALS ─── */}
      <div className="absolute top-10 left-12 w-6 h-6 opacity-30">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="8" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-16 right-20 w-8 h-8 opacity-40">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 5C26 5 31 10 32 17C33 24 28 32 20 35C12 32 7 24 8 17C9 10 14 5 20 5Z" fill="currentColor" opacity="0.7" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-1/4 w-6 h-6 opacity-30">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="8" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main Section */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          {/* Small label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm tracking-widest uppercase mb-3"
            style={{
              color: "rgba(255, 255, 255, 0.7)",
              letterSpacing: "0.08em",
              fontFamily: "var(--font-poppins), Poppins, sans-serif"
            }}
          >
            WITH LOVE
          </motion.p>

          {/* Couple Names */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-cursive text-white mb-6"
            style={{
              fontFamily: "var(--font-great-vibes), 'Great Vibes', cursive"
            }}
          >
            {names[0]} & {names[1]}
          </motion.h2>

          {/* Decorative divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-12 h-px bg-white/40 mb-6"
          />

          {/* Date */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-base italic mb-2"
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              fontFamily: "'Cormorant Garamond', Georgia, serif"
            }}
          >
            31st July 2026
          </motion.p>

          {/* Hashtag */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xs md:text-sm tracking-widest uppercase"
            style={{
              color: "rgba(255, 255, 255, 0.7)",
              letterSpacing: "0.08em",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 500
            }}
          >
            #KAUSHALPRAJYU
          </motion.p>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-white/20 pt-8 text-center"
        >
          <p className="text-xs md:text-sm text-white/60 font-light tracking-widest">
            MADE WITH ❤️ FOR {names[0]?.toUpperCase()} & {names[1]?.toUpperCase()}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
