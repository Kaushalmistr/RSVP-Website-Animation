'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface GalleryImage {
  id: string
  title: string
  category: string
  emoji: string
  color: string
}

export default function GalleryEnhanced() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('all')

  const galleryImages: GalleryImage[] = [
    { id: '1', title: 'First Date', category: 'memories', emoji: '💕', color: 'from-pink-300 to-red-300' },
    { id: '2', title: 'Proposal Moment', category: 'special', emoji: '💎', color: 'from-purple-300 to-pink-300' },
    { id: '3', title: 'Adventure Time', category: 'memories', emoji: '🎒', color: 'from-orange-300 to-yellow-300' },
    { id: '4', title: 'Sunset Together', category: 'special', emoji: '🌅', color: 'from-yellow-300 to-orange-300' },
    { id: '5', title: 'Laughter & Love', category: 'memories', emoji: '😄', color: 'from-green-300 to-cyan-300' },
    { id: '6', title: 'Our Journey', category: 'special', emoji: '🚀', color: 'from-blue-300 to-purple-300' },
    { id: '7', title: 'Beach Days', category: 'memories', emoji: '🏖️', color: 'from-cyan-300 to-blue-300' },
    { id: '8', title: 'Forever Starts Now', category: 'special', emoji: '💍', color: 'from-red-300 to-pink-300' },
  ]

  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, rotateZ: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateZ: 0,
      transition: {
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      rotateZ: 180,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="gallery" className="section-spacing relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-20"
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-4xl md:text-5xl text-display font-bold text-accent-500 mb-3"
          >
            Our Gallery
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="divider-accent mx-auto"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-accent-500/70 font-light mt-6 max-w-2xl mx-auto text-lg"
          >
            Moments that tell our love story
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {['all', 'memories', 'special'].map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide transition-all ${filter === category
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-primary-100 text-accent-500 hover:bg-primary-200'
                }`}
            >
              {category === 'all' ? 'All' : category === 'memories' ? 'Memories' : 'Special Moments'}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setSelectedId(image.id)}
                className="relative group cursor-pointer"
              >
                <motion.div
                  whileHover={{
                    y: -15,
                    boxShadow: '0 30px 60px rgba(212, 165, 165, 0.4)',
                  }}
                  className={`aspect-square bg-gradient-to-br ${image.color} rounded-xl overflow-hidden shadow-lg relative`}
                >
                  {/* 3D flip effect background */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center perspective"
                  >
                    <motion.div
                      whileHover={{
                        rotateY: 180,
                      }}
                      transition={{ duration: 0.6 }}
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      {/* Front side */}
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 relative overflow-hidden">
                        {/* Animated background pattern */}
                        <motion.div
                          animate={{
                            backgroundPosition: ['0% 0%', '100% 100%'],
                          }}
                          transition={{ duration: 5, repeat: Infinity }}
                          className="absolute inset-0 opacity-30"
                          style={{
                            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                            backgroundSize: '50px 50px',
                            backgroundPosition: '0px 0px',
                          }}
                        />

                        <div className="relative text-center z-10">
                          <motion.div
                            animate={{
                              scale: [1, 1.3, 1],
                              rotate: [0, 360, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              delay: index * 0.2,
                            }}
                            className="text-6xl mb-4"
                          >
                            {image.emoji}
                          </motion.div>
                          <p className="text-sm font-bold text-white drop-shadow-lg">
                            {image.title}
                          </p>
                        </div>

                        {/* Hover overlay with glassmorphism */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
                        >
                          <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-white text-accent-500 font-bold px-6 py-2 rounded-full shadow-lg"
                          >
                            View
                          </motion.button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Border animation */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-white to-transparent"
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
              exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
                transition={{ type: 'spring', stiffness: 100 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gradient-to-br from-white to-primary-50 rounded-2xl max-w-2xl w-full p-8 md:p-12 relative shadow-2xl border-2 border-primary-200"
              >
                {/* Close button with animation */}
                <motion.button
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 text-accent-500 hover:text-primary-500 transition-colors"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>

                {/* Image content */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`aspect-square bg-gradient-to-br ${galleryImages.find((img) => img.id === selectedId)?.color
                    } rounded-xl flex items-center justify-center mb-6 relative overflow-hidden`}
                >
                  {/* Animated background */}
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 opacity-10"
                  />

                  {galleryImages.find((img) => img.id === selectedId) && (
                    <div className="relative z-10 text-center">
                      <motion.div
                        animate={{
                          y: [0, -20, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                        }}
                        className="text-8xl mb-4"
                      >
                        {galleryImages.find((img) => img.id === selectedId)?.emoji}
                      </motion.div>
                      <p className="text-2xl text-white font-semibold drop-shadow-lg">
                        {galleryImages.find((img) => img.id === selectedId)?.title}
                      </p>
                    </div>
                  )}
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <p className="text-accent-500/70 font-light text-lg">
                    A beautiful moment from our journey together
                  </p>

                  {/* Animated dots */}
                  <div className="flex justify-center gap-2 mt-4">
                    {[0, 1, 2].map((dot) => (
                      <motion.div
                        key={dot}
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: dot * 0.2,
                        }}
                        className="w-2 h-2 bg-primary-500 rounded-full"
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
