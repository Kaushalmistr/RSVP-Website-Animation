'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function HeroEnhanced() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  }

  // Render name with letter-by-letter animation
  const renderAnimatedText = (text: string) => {
    return text.split('').map((letter, index) => (
      <motion.span
        key={index}
        variants={letterVariants}
        style={{
          display: 'inline-block',
          perspective: '1200px',
        }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))
  }

  // Floating decoration animation
  const floatingVariants = {
    animate: {
      y: [0, -30, 0],
      x: [0, 10, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
    },
  }

  // Pulse animation
  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.5, 1, 0.5],
      transition: { duration: 3, repeat: Infinity },
    },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isLoaded ? { opacity: 0.4, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.2 }}
        className="absolute top-10 right-5 w-96 h-96 bg-primary-100 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isLoaded ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute bottom-10 left-5 w-96 h-96 bg-primary-100 rounded-full blur-3xl"
      />

      {/* Animated gradient overlay */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(212, 165, 165, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(212, 165, 165, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(212, 165, 165, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? 'visible' : 'hidden'}
        className="container-custom text-center z-10 relative"
      >
        {/* Top decorative line */}
        <motion.div
          variants={lineVariants}
          className="flex justify-center mb-8 origin-center"
        >
          <div className="h-1 w-12 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
        </motion.div>

        {/* Invitation text */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.2em' }}
          animate={isLoaded ? { opacity: 1, letterSpacing: '0.15em' } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm font-light tracking-widest text-accent-500 uppercase mb-8"
        >
          Together with their parents
        </motion.p>

        {/* Couple names with letter animation */}
        <motion.div variants={containerVariants} className="mb-6">
          <h1 className="text-6xl md:text-8xl text-display font-bold leading-tight mb-2">
            <span className="text-primary-500 inline-block">
              {renderAnimatedText('Kaushal')}
            </span>
          </h1>

          {/* Animated ampersand */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-4xl md:text-5xl text-accent-500 font-light my-3 relative"
          >
            &
            {/* Decorative sparkles */}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-2 -left-4 text-primary-300 text-xl"
            >
              ✨
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute -top-2 -right-4 text-primary-300 text-xl"
            >
              ✨
            </motion.span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl text-display font-bold leading-tight">
            <span className="text-primary-500 inline-block">
              {renderAnimatedText('Simran')}
            </span>
          </h1>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          variants={lineVariants}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-8 mb-8 origin-center"
        >
          <div className="h-1 w-12 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
        </motion.div>

        {/* Event details with staggered reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 mb-8"
        >
          <p className="text-lg md:text-xl font-light text-accent-500 mb-2">
            request the honor of your presence
          </p>
          <p className="text-sm md:text-base text-accent-500/70 font-light">
            at their Wedding Celebration
          </p>
        </motion.div>

        {/* Date with number animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 mb-12"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 0 rgba(212, 165, 165, 0)',
                '0 0 20px rgba(212, 165, 165, 0.5)',
                '0 0 0 rgba(212, 165, 165, 0)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block"
          >
            <p className="text-base md:text-lg font-semibold text-primary-500 mb-2">
              Saturday, the fifteenth of June
            </p>
          </motion.div>
          <p className="text-sm md:text-base text-accent-500/70">
            Two thousand twenty-six
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-sm md:text-base text-accent-500/70 mt-4"
          >
            Mumbai, Maharashtra
          </motion.p>
        </motion.div>

        {/* CTA Buttons with stagger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#rsvp"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 25px rgba(212, 165, 165, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary shadow-lg"
          >
            RSVP Now
          </motion.a>
          <motion.a
            href="#events"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 25px rgba(212, 165, 165, 0.2)' }}
            whileTap={{ scale: 0.98 }}
            className="btn-secondary shadow-md"
          >
            View Details
          </motion.a>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary-500 text-sm font-light"
          >
            Scroll to explore
          </motion.div>
          <motion.div className="flex justify-center mt-2">
            <svg
              className="w-6 h-6 text-primary-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-1/4 right-10 text-6xl opacity-20"
        >
          💍
        </motion.div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-1/4 left-10 text-6xl opacity-20"
        >
          💕
        </motion.div>
      </motion.div>
    </section>
  )
}
