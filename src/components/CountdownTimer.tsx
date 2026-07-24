'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface CountdownTimerProps {
  targetDate?: string // ISO date string e.g. '2026-12-31'
}

export default function CountdownTimer({ targetDate = '2026-12-31' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = () => {
      // Append T00:00:00 to ensure the date is parsed in local timezone
      // (without it, 'YYYY-MM-DD' is parsed as UTC midnight which can
      //  cause off-by-one issues depending on the user's timezone)
      const dateStr = targetDate.includes('T') ? targetDate : `${targetDate}T00:00:00`
      const target = new Date(dateStr).getTime()

      // Guard against invalid dates
      if (isNaN(target)) return

      const now = new Date().getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) return null

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section className="py-10 md:py-14 bg-sage-soft border-y border-gold-soft">
      <div className="max-w-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-cursive text-rose-deep mb-2">
            Time Until Our Big Day
          </h2>
          <div className="w-16 h-[1px] bg-gold-soft mx-auto my-4" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-4 gap-3"
        >
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              variants={itemVariants}
              className="bg-cream rounded-2xl border border-gold-soft p-3 md:p-4 text-center shadow-soft hover:shadow-elegant transition-all"
            >
              <div className="mb-2">
                <motion.div
                  key={unit.value}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl md:text-4xl font-cinzel tracking-widest text-rose-deep tabular-nums"
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.div>
              </div>
              <p className="text-[10px] md:text-xs font-cinzel tracking-widest uppercase text-sage-deep">
                {unit.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-6 text-sm font-serif-display text-ink/70"
        >
          We can't wait to celebrate with you!
        </motion.p>
      </div>
    </section>
  )
}
