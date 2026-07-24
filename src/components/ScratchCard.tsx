'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

interface ScratchCardProps {
  date: string
  year: string
  targetDate?: string // Target date for countdown (defaults to 2026-07-19)
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function ScratchCard({ date, year, targetDate = '2026-07-19' }: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [stage, setStage] = useState<'scratch' | 'revealing' | 'revealed'>('scratch')
  // percent of area that must be scratched to trigger reveal
  const REVEAL_THRESHOLD = 50
  const [hasConfettiFired, setHasConfettiFired] = useState(false)
  const [showCountdown, setShowCountdown] = useState(false)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const isDrawing = useRef(false)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)
  const scratchTimerRef = useRef<NodeJS.Timeout | null>(null)
  const hasStartedScratchingRef = useRef(false)

  // Countdown timer effect
  useEffect(() => {
    if (stage !== 'revealed') return

    const countdownTimeout = setTimeout(() => {
      setShowCountdown(true)
    }, 600)

    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime()
      const now = new Date().getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => {
      clearTimeout(countdownTimeout)
      clearInterval(timer)
    }
  }, [stage, targetDate])

  // Initialize canvas with gradient overlay
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()

    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.scale(dpr, dpr)
    contextRef.current = ctx

    // Create premium gold gradient for scratch overlay
    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height)
    gradient.addColorStop(0, '#D4AF37')
    gradient.addColorStop(0.5, '#F4E4A6')
    gradient.addColorStop(1, '#D4AF37')

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, rect.width, rect.height)

    // Add subtle pattern/texture
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
    for (let i = 0; i < rect.width; i += 40) {
      for (let j = 0; j < rect.height; j += 40) {
        ctx.fillRect(i, j, 20, 20)
      }
    }
  }, [])

  // Calculate scratch progress
  const calculateScratchProgress = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const imageData = contextRef.current?.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    )
    if (!imageData) return

    const data = imageData.data
    let transparentPixels = 0

    for (let i = 3; i < data.length; i += 4) {
      if (data[i] < 128) transparentPixels++
    }

    const progress = (transparentPixels / (data.length / 4)) * 100

    return progress
  }, [])

  // Handle scratch action
  const scratch = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
      if (stage !== 'scratch' || !isDrawing.current) return

      const canvas = canvasRef.current
      if (!canvas || !contextRef.current) return

      const rect = canvas.getBoundingClientRect()
      const ctx = contextRef.current

      let x: number, y: number

      if ('touches' in e) {
        const touch = e.touches[0]
        x = touch.clientX - rect.left
        y = touch.clientY - rect.top
      } else {
        x = e.clientX - rect.left
        y = e.clientY - rect.top
      }

      ctx.globalCompositeOperation = 'destination-out'
      ctx.beginPath()
      ctx.arc(x, y, 25, 0, Math.PI * 2)
      ctx.fill()

      const progress = calculateScratchProgress()
      if (progress && progress >= REVEAL_THRESHOLD && !hasConfettiFired) {
        setHasConfettiFired(true)
        if (scratchTimerRef.current) clearTimeout(scratchTimerRef.current)
        triggerReveal()
      }
    },
    [stage, calculateScratchProgress, hasConfettiFired]
  )

  const triggerReveal = useCallback(() => {
    setStage('revealing')

    const confettiConfig: confetti.Options = {
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F4E4A6', '#FFE5B4', '#FFF8DC', '#DEB887'],
      gravity: 0.8,
      scalar: 1.2,
      ticks: 200,
    }

    confetti(confettiConfig)

    setTimeout(() => {
      confetti({
        ...confettiConfig,
        particleCount: 50,
        spread: 45,
      })
    }, 200)

    setTimeout(() => {
      setStage('revealed')
    }, 600)
  }, [])

  // Start a 4-second auto-reveal timer on first scratch interaction
  const startScratchTimer = useCallback(() => {
    if (hasStartedScratchingRef.current || stage !== 'scratch') return
    hasStartedScratchingRef.current = true
    scratchTimerRef.current = setTimeout(() => {
      if (!hasConfettiFired) {
        setHasConfettiFired(true)
        triggerReveal()
      }
    }, 4000)
  }, [stage, hasConfettiFired, triggerReveal])

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (scratchTimerRef.current) clearTimeout(scratchTimerRef.current)
    }
  }, [])

  const handleMouseDown = () => {
    isDrawing.current = true
    startScratchTimer()
  }

  const handleMouseUp = () => {
    isDrawing.current = false
    // Check progress on mouse up in case user stops after enough scratching
    const progress = calculateScratchProgress()
    if (progress && progress >= REVEAL_THRESHOLD && !hasConfettiFired && stage === 'scratch') {
      setHasConfettiFired(true)
      if (scratchTimerRef.current) clearTimeout(scratchTimerRef.current)
      triggerReveal()
    }
  }

  const handleTouchStart = () => {
    isDrawing.current = true
    startScratchTimer()
  }

  const handleTouchEnd = () => {
    isDrawing.current = false
    // Check progress on touch end as well
    const progress = calculateScratchProgress()
    if (progress && progress >= REVEAL_THRESHOLD && !hasConfettiFired && stage === 'scratch') {
      setHasConfettiFired(true)
      if (scratchTimerRef.current) clearTimeout(scratchTimerRef.current)
      triggerReveal()
    }
  }

  return (
    <section className="relative py-20 px-6 bg-cream">
      <motion.div
        className="relative w-full max-w-xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Single fixed container — same size in both states */}
        <div className="relative mx-auto w-full rounded-[32px] bg-white/95 border border-[#D4AF37]/20 shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6 md:p-8 backdrop-blur-sm overflow-hidden">

          {/* Revealed content — always rendered to define container size */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={stage === 'revealed' ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ delay: stage === 'revealed' ? 0.2 : 0, duration: 0.6 }}
          >
            <div className="text-xs md:text-sm tracking-[0.3em] text-rose-600 font-light uppercase mb-4">
              Save the Date
            </div>
            <div className="border border-[#D4AF37]/30 rounded-[27px] py-4 md:py-5 px-4 md:px-6 mb-6 bg-[#FEF8F0] shadow-inner shadow-[#D4AF37]/10">
              <motion.div
                className="text-4xl md:text-5xl font-serif text-rose-700"
                initial={{ opacity: 0, scale: 0.88 }}
                animate={stage === 'revealed' ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.88 }}
                transition={{ delay: stage === 'revealed' ? 0.4 : 0, duration: 0.6 }}
              >
                {date}
              </motion.div>
            </div>
            <motion.div
              className="text-sm md:text-base tracking-widest text-gray-600 font-light"
              initial={{ opacity: 0 }}
              animate={stage === 'revealed' ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: stage === 'revealed' ? 0.6 : 0, duration: 0.6 }}
            >
              {year}
            </motion.div>
          </motion.div>

          {showCountdown && (
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="grid grid-cols-4 gap-3 md:gap-4">
                {[
                  { label: 'Days', value: String(timeLeft.days).padStart(2, '0') },
                  { label: 'Hours', value: String(timeLeft.hours).padStart(2, '0') },
                  { label: 'Minutes', value: String(timeLeft.minutes).padStart(2, '0') },
                  { label: 'Seconds', value: String(timeLeft.seconds).padStart(2, '0') },
                ].map((unit, index) => (
                  <motion.div
                    key={unit.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.06, duration: 0.5 }}
                  >
                    <div className="bg-[#FEF8F0] border border-[#D4AF37]/30 rounded-3xl p-3 md:p-4 shadow-sm">
                      <motion.div
                        className="text-2xl md:text-3xl font-bold text-rose-700 font-serif"
                        key={`${unit.label}-${unit.value}`}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {unit.value}
                      </motion.div>
                      <div className="text-[10px] md:text-xs text-gray-600 font-light tracking-[0.22em] uppercase mt-2">
                        {unit.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Scratch overlay — sits on top of revealed content, same container */}
          {stage === 'scratch' && (
            <>
              {/* Gold gradient background behind canvas */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-[#D4AF37] via-[#F0D277] to-[#C59F3F] z-10" />

              {/* Scratch text label */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
              >
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <div className="text-sm md:text-base tracking-[0.35em] font-semibold uppercase text-white/90">
                    ✦ Scratch to Reveal ✦
                  </div>
                </motion.div>
              </motion.div>

              {/* Canvas scratch layer */}
              <motion.canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full cursor-pointer z-30 rounded-[32px]"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={scratch}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onTouchMove={scratch}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              />

              {/* Decorative border glow */}
              <div className="absolute inset-0 rounded-[32px] border-2 border-[#D4AF37]/30 pointer-events-none shadow-lg shadow-[#D4AF37]/20 z-20" />
            </>
          )}
        </div>
      </motion.div>
    </section>
  )
}
