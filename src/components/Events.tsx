'use client'

import { motion } from 'framer-motion'

interface EventCard {
  name: string
  subtitle: string
  dateLabel: string
  dateFormatted: string
  timeLabel: string
  timeFormatted: string
  venueLabel: string
  venueFormatted: string
  backgroundImage: string
  coupleImage: string
}

export default function EventsEnhanced() {
  const events: EventCard[] = [
    {
      name: 'Sangeet',
      subtitle: 'A spirited night of song, dance and laughter',
      dateLabel: 'DATE',
      dateFormatted: 'FRI · July 17, 2026',
      timeLabel: 'TIME',
      timeFormatted: '08:00 PM onwards',
      venueLabel: 'VENUE',
      venueFormatted: 'Vikhale, Khatav Taluka, Satara',
      backgroundImage: '/assets/bg-sangeet.jpg',
      coupleImage: '/assets/couple-sangeet.png',
    },
    {
      name: 'Gauday',
      subtitle: 'A golden day of celebration and togetherness',
      dateLabel: 'DATE',
      dateFormatted: 'SAT · July 18, 2026',
      timeLabel: 'TIME',
      timeFormatted: '08:00 AM onwards',
      venueLabel: 'VENUE',
      venueFormatted: 'Vikhale, Khatav Taluka, Satara',
      backgroundImage: '/assets/bg-gauday.jpg',
      coupleImage: '/assets/couple-gauday.png',
    },
    {
      name: 'Haldi',
      subtitle: 'A golden ceremony of blessings and joy',
      dateLabel: 'DATE',
      dateFormatted: 'SUN · July 19, 2026',
      timeLabel: 'TIME',
      timeFormatted: '04:00 PM onwards',
      venueLabel: 'VENUE',
      venueFormatted: 'Vikhale, Khatav Taluka, Satara',
      backgroundImage: '/assets/bg-haldi.jpg',
      coupleImage: '/assets/couple-haldi.png',
    },
    {
      name: 'Sanghnath',
      subtitle: 'A sacred night of blessings and celebration',
      dateLabel: 'DATE',
      dateFormatted: 'MON · July 20, 2026',
      timeLabel: 'TIME',
      timeFormatted: '07:00 PM onwards',
      venueLabel: 'VENUE',
      venueFormatted: 'Vikhale, Khatav Taluka, Satara',
      backgroundImage: '/assets/bg-sanghnath.jpg',
      coupleImage: '/assets/couple-sanghnath.png',
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="py-20 px-4 md:px-6 bg-sage-soft relative overflow-hidden">
      {/* Decorative floating elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-40 h-40 bg-gold-soft/20 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-40 h-40 bg-rose-deep/10 rounded-full blur-3xl"
        animate={{ y: [40, 0, 40] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cursive text-rose-deep mb-4">
            Events Schedule
          </h2>
          <div className="w-20 h-1 bg-gold-soft mx-auto rounded-full" />
        </motion.div>

        {/* Events Grid - 2x2 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          {events.map((event) => (
            <motion.article
              key={event.name}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 group isolate border border-gold-soft min-h-[500px]"
            >
              {/* Background Image */}
              <img
                src={event.backgroundImage}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

              {/* Content Container */}
              <div className="relative w-full h-full flex flex-col sm:flex-row items-stretch justify-between p-6 sm:p-8">
                {/* Left Column - Couple Image */}
                <div className="hidden sm:flex w-1/2 items-center justify-center">
                  <img
                    src={event.coupleImage}
                    alt={`${event.name} couple illustration`}
                    loading="lazy"
                    className="w-full max-w-xs h-auto object-contain drop-shadow-lg"
                  />
                </div>

                {/* Right Column - Event Details */}
                <div className="w-full sm:w-1/2 flex flex-col justify-center items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4">
                  {/* Event Title */}
                  <h3 className="font-cursive text-4xl sm:text-5xl text-cream drop-shadow-lg leading-tight">
                    {event.name}
                  </h3>

                  {/* Event Subtitle */}
                  <p className="text-sm sm:text-base italic text-cream/90 drop-shadow-md leading-relaxed">
                    {event.subtitle}
                  </p>

                  {/* Decorative Divider */}
                  <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start py-2">
                    <span className="h-px w-8 bg-gold-soft/70" />
                    <span className="text-gold-soft text-sm">❀</span>
                    <span className="h-px w-8 bg-gold-soft/70" />
                  </div>

                  {/* Event Details Container */}
                  <div className="space-y-3 w-full">
                    {/* Date */}
                    <div>
                      <div className="font-cinzel text-xs sm:text-sm text-gold-soft uppercase tracking-wider">
                        {event.dateLabel}
                      </div>
                      <div className="font-serif-display text-base sm:text-lg mt-1 text-cream drop-shadow-md">
                        {event.dateFormatted}
                      </div>
                    </div>

                    {/* Time */}
                    <div>
                      <div className="font-cinzel text-xs sm:text-sm text-gold-soft uppercase tracking-wider">
                        {event.timeLabel}
                      </div>
                      <div className="font-serif-display text-base sm:text-lg mt-1 text-cream drop-shadow-md">
                        {event.timeFormatted}
                      </div>
                    </div>

                    {/* Venue */}
                    <div>
                      <div className="font-cinzel text-xs sm:text-sm text-gold-soft uppercase tracking-wider">
                        {event.venueLabel}
                      </div>
                      <div className="font-serif-display text-sm sm:text-base mt-1 text-cream drop-shadow-md">
                        {event.venueFormatted}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
