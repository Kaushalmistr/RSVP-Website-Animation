'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function StoryEnhanced() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.2', 'end 0.9'],
  })

  // Multiple parallax effects
  const bgY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const rotateProgress = useTransform(scrollYProgress, [0, 1], [-10, 0])

  const storyPoints = [
    {
      year: '2020',
      title: 'We Met',
      description: 'A chance encounter that changed everything. Two strangers became instant friends, and soon, much more.',
      emoji: '👀',
      color: 'from-pink-100 to-purple-100',
    },
    {
      year: '2022',
      title: 'First Trip Together',
      description: 'We explored new places, created unforgettable memories, and realized we wanted to explore life together.',
      emoji: '✈️',
      color: 'from-blue-100 to-cyan-100',
    },
    {
      year: '2024',
      title: 'The Proposal',
      description: 'Under the stars, with our hearts full of love, Kaushal asked Simran to be his forever. The answer was yes!',
      emoji: '💎',
      color: 'from-purple-100 to-pink-100',
    },
    {
      year: '2026',
      title: 'Our Wedding',
      description: 'Now, we invite you to celebrate the beginning of our forever story. Join us as we say "I do"!',
      emoji: '💍',
      color: 'from-red-100 to-pink-100',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50, rotateY: -90 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="story" ref={containerRef} className="section-spacing relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-20" />
      </motion.div>

      <div className="container-custom relative z-10">
        {/* Section Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl text-display font-bold text-accent-500 mb-3">
              Our Story
            </h2>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="divider-accent mx-auto"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-accent-500/70 font-light mt-6 max-w-2xl mx-auto text-lg"
          >
            A journey of love, laughter, and a thousand moments that led us here
          </motion.p>
        </motion.div>

        {/* Timeline with 3D effects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          {/* Vertical timeline line */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: '100%', opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-primary-300 via-primary-500 to-transparent"
          />

          <div className="space-y-16 md:space-y-24">
            {storyPoints.map((point, index) => (
              <motion.div
                key={point.year}
                variants={itemVariants}
                viewport={{ once: true }}
                className={`md:flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-primary-500 rounded-full items-center justify-center shadow-lg z-10"
                >
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="text-2xl"
                  >
                    {point.emoji}
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`bg-gradient-to-br ${point.color} rounded-xl p-8 shadow-lg border border-white/50 backdrop-blur-sm`}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      className="inline-block text-sm font-bold text-primary-600 uppercase tracking-widest mb-2"
                    >
                      {point.year}
                    </motion.span>

                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                      className="text-3xl text-display font-bold text-accent-500 mt-2 mb-3"
                    >
                      {point.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                      className="text-accent-500/80 font-light leading-relaxed"
                    >
                      {point.description}
                    </motion.p>

                    {/* Animated accent line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      viewport={{ once: true }}
                      className={`h-1 w-16 bg-gradient-to-r from-primary-500 to-transparent mt-4 ${index % 2 === 0 ? 'ml-auto' : 'ml-0'
                        }`}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 right-5 text-7xl opacity-10 pointer-events-none"
        >
          💑
        </motion.div>

        {/* Quote section with advanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mt-20 text-center py-12 border-y-2 border-primary-200 relative overflow-hidden"
        >
          {/* Animated background shimmer */}
          <motion.div
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
          />

          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-display font-light text-accent-500 italic relative z-10"
          >
            "In you, I found my home, my love, my forever"
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
