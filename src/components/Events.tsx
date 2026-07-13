'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Event {
  day: string
  date: string
  color: string
  textColor: string
  events: {
    time: string
    name: string
    venue: string
    description: string
    icon: string
  }[]
}

export default function EventsEnhanced() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const events: Event[] = [
    {
      day: 'Friday',
      date: 'June 14, 2026',
      color: 'from-blue-100 to-indigo-100',
      textColor: 'text-blue-600',
      events: [
        {
          time: '6:00 PM',
          name: 'Welcome Dinner',
          venue: 'The Grand Palace, Mumbai',
          description: 'Join us for an evening of celebration and getting to know our families',
          icon: '🍽️',
        },
        {
          time: '9:00 PM',
          name: 'Cocktail & Dinner',
          venue: 'Same Venue',
          description: 'Enjoy delicious food and drinks with our loved ones',
          icon: '🥂',
        },
      ],
    },
    {
      day: 'Saturday',
      date: 'June 15, 2026',
      color: 'from-rose-100 to-pink-100',
      textColor: 'text-rose-600',
      events: [
        {
          time: '4:00 PM',
          name: 'Wedding Ceremony',
          venue: 'Crystal Hall, Mumbai',
          description: 'The moment we become husband and wife',
          icon: '💍',
        },
        {
          time: '7:00 PM',
          name: 'Reception & Dinner',
          venue: 'The Grand Palace, Mumbai',
          description: 'Celebrate with us as we begin our married life',
          icon: '🎉',
        },
      ],
    },
    {
      day: 'Sunday',
      date: 'June 16, 2026',
      color: 'from-amber-100 to-orange-100',
      textColor: 'text-amber-600',
      events: [
        {
          time: '11:00 AM',
          name: 'Farewell Brunch',
          venue: 'Poolside Garden, Mumbai',
          description: 'A relaxed gathering before everyone heads home with memories',
          icon: '☀️',
        },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateY: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="events" ref={containerRef} className="section-spacing relative overflow-hidden bg-gradient-to-b from-white via-primary-50/20 to-white">
      {/* Animated background elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-96 h-96 bg-primary-100 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-display font-bold text-accent-500 mb-3"
          >
            Wedding Schedule
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
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-accent-500/70 font-light mt-6 max-w-2xl mx-auto text-lg"
          >
            A weekend filled with celebration, love, and unforgettable moments
          </motion.p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16"
        >
          {events.map((eventDay, dayIndex) => (
            <motion.div
              key={eventDay.day}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 30px 60px rgba(212, 165, 165, 0.3)',
              }}
              className={`bg-gradient-to-br ${eventDay.color} rounded-2xl overflow-hidden border-2 border-white/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all`}
            >
              {/* Day Header */}
              <motion.div
                initial={{ background: `linear-gradient(135deg, var(--color1), var(--color2))` }}
                whileHover={{
                  background: `linear-gradient(135deg, var(--color2), var(--color1))`,
                }}
                className="bg-gradient-to-r from-primary-400 to-primary-500 px-6 py-10 text-white relative overflow-hidden"
                style={{
                  '--color1': '#D4A5A5',
                  '--color2': '#C9949C',
                } as React.CSSProperties}
              >
                {/* Animated background shimmer */}
                <motion.div
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />

                <motion.h3
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: dayIndex * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="text-display text-4xl font-bold mb-2 relative z-10"
                >
                  {eventDay.day}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: dayIndex * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="font-light text-primary-50 relative z-10"
                >
                  {eventDay.date}
                </motion.p>
              </motion.div>

              {/* Events */}
              <div className="p-6 space-y-6">
                {eventDay.events.map((event, eventIndex) => (
                  <motion.div
                    key={event.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: dayIndex * 0.1 + eventIndex * 0.1 + 0.3,
                      duration: 0.6,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      x: 10,
                      backgroundColor: 'rgba(212, 165, 165, 0.1)',
                    }}
                    className="border-l-4 border-primary-400 pl-4 py-3 rounded-r-lg transition-all"
                  >
                    <motion.p
                      animate={{
                        color: ['#D4A5A5', '#C9A961', '#D4A5A5'],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-xs font-bold uppercase tracking-widest"
                    >
                      {event.time}
                    </motion.p>

                    <motion.h4 className="text-lg text-display font-bold text-accent-500 mt-2 mb-1">
                      {event.icon} {event.name}
                    </motion.h4>

                    <motion.p className="text-sm text-accent-500/70 mb-2">
                      📍 {event.venue}
                    </motion.p>

                    <motion.p className="text-sm text-accent-500/80 font-light leading-relaxed">
                      {event.description}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: '✈️',
              title: 'Travel Info',
              description: 'We have arranged transportation options for our guests',
              gradient: 'from-sky-100 to-blue-100',
            },
            {
              icon: '🏨',
              title: 'Accommodation',
              description: 'Special rates available at nearby hotels for guests',
              gradient: 'from-purple-100 to-pink-100',
            },
            {
              icon: '🍽️',
              title: 'Dietary Requirements',
              description: 'Please let us know any dietary preferences in RSVP',
              gradient: 'from-amber-100 to-orange-100',
            },
          ].map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5 + index * 0.1,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(212, 165, 165, 0.2)',
              }}
              className={`bg-gradient-to-br ${info.gradient} rounded-xl border-2 border-white/60 backdrop-blur-sm p-6 text-center cursor-pointer transition-all`}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className="text-4xl mb-3"
              >
                {info.icon}
              </motion.div>

              <h4 className="text-lg font-bold text-accent-500 mb-2">{info.title}</h4>

              <p className="text-sm text-accent-500/70 font-light">{info.description}</p>

              {/* Animated border on hover */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: '80%' }}
                className="h-1 bg-gradient-to-r from-primary-400 to-primary-600 mt-4 mx-auto rounded-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
