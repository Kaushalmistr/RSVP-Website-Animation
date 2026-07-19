'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import confetti from 'canvas-confetti'

interface ScratchCardProps {
  date: string
  year: string
  targetDate?: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const COUNTDOWN_UNITS = ['Days', 'Hours', 'Minutes', 'Seconds'] as const

export default function ScratchCard({
  date,
  year,
  targetDate = '2026-07-19',
}: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [stage, setStage] = useState<'scratch' | 'revealing' | 'revealed'>('scratch')
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

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      contextRef.current = ctx

      const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height)
      gradient.addColorStop(0, 'hsl(36 60% 65%)')
      gradient.addColorStop(0.5, 'hsl(36 60% 80%)')
      gradient.addColorStop(1, 'hsl(36 60% 65%)')

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, rect.width, rect.height)

      ctx.fillStyle = 'rgba(255, 255, 255, 0.12)'
      for (let i = 0; i < rect.width; i += 40) {
        for (let j = 0; j < rect.height; j += 40) {
          ctx.fillRect(i, j, 20, 20)
        }
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [])

  const calculateScratchProgress = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const imageData = contextRef.current?.getImageData(0, 0, canvas.width, canvas.height)
    if (!imageData) return

    const data = imageData.data
    let transparentPixels = 0

    for (let i = 3; i < data.length; i += 4) {
      if (data[i] < 128) transparentPixels++
    }

    return (transparentPixels / (data.length / 4)) * 100
  }, [])

  const triggerReveal = useCallback(() => {
    setStage('revealing')

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F4E4A6', '#FFE5B4', '#FFF8DC', '#DEB887'],
      gravity: 0.8,
      scalar: 1.2,
      ticks: 200,
    })

    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 45,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F4E4A6', '#FFE5B4', '#FFF8DC', '#DEB887'],
      })
    }, 200)

    setTimeout(() => {
      setStage('revealed')
    }, 600)
  }, [])

  const scratch = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
      if (stage !== 'scratch' || !isDrawing.current) return

      const canvas = canvasRef.current
      if (!canvas || !contextRef.current) return

      const rect = canvas.getBoundingClientRect()
      const ctx = contextRef.current

      let x: number
      let y: number

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
    [stage, calculateScratchProgress, hasConfettiFired, triggerReveal]
  )

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

  useEffect(() => {
    return () => {
      if (scratchTimerRef.current) clearTimeout(scratchTimerRef.current)
    }
  }, [])

  const finishScratch = () => {
    isDrawing.current = false
    const progress = calculateScratchProgress()
    if (progress && progress >= REVEAL_THRESHOLD && !hasConfettiFired && stage === 'scratch') {
      setHasConfettiFired(true)
      if (scratchTimerRef.current) clearTimeout(scratchTimerRef.current)
      triggerReveal()
    }
  }

  const timeValues = [
    timeLeft.days,
    timeLeft.hours,
    timeLeft.minutes,
    timeLeft.seconds,
  ]

  return (
    <section className="relative py-20 px-6 bg-cream">
      <span className="pointer-events-none absolute top-6 left-4 text-4xl opacity-20 select-none">
        🌿
      </span>
      <span className="pointer-events-none absolute top-12 right-6 text-3xl opacity-20 select-none">
        🌸
      </span>
      <span className="pointer-events-none absolute bottom-10 left-10 text-3xl opacity-20 select-none">
        🌼
      </span>
      <span className="pointer-events-none absolute bottom-6 right-4 text-4xl opacity-20 select-none">
        🌿
      </span>

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="my-6 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-gold-soft" />
          <span className="text-gold-soft text-lg">❀</span>
          <span className="h-px w-16 bg-gold-soft" />
        </div>

        <div className="mb-10">
          <div className="relative mx-auto w-full max-w-md h-32 rounded-2xl overflow-hidden border-2 border-gold-soft shadow-elegant select-none">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-cream">
              <p className="font-cinzel tracking-[0.35em] text-sage-deep text-base">
                SAVE THE DATE
              </p>
              <p className="font-cursive text-4xl text-rose-deep mt-1 leading-none">
                {date} {year}
              </p>
            </div>

            {stage === 'scratch' && (
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-none"
                onMouseDown={() => {
                  isDrawing.current = true
                  startScratchTimer()
                }}
                onMouseUp={finishScratch}
                onMouseMove={scratch}
                onMouseLeave={finishScratch}
                onTouchStart={() => {
                  isDrawing.current = true
                  startScratchTimer()
                }}
                onTouchEnd={finishScratch}
                onTouchMove={scratch}
              />
            )}
          </div>
        </div>

        <div
          className={`transition-all duration-700 ${
            showCountdown
              ? 'opacity-100 translate-y-0 pointer-events-auto h-auto'
              : 'opacity-0 translate-y-4 pointer-events-none h-0 overflow-hidden'
          }`}
          aria-hidden={!showCountdown}
        >
          <div className="flex justify-center gap-3 sm:gap-6">
            {COUNTDOWN_UNITS.map((label, index) => (
              <div
                key={label}
                className="flex flex-col items-center min-w-[68px] sm:min-w-[90px]"
              >
                <div className="w-full aspect-square rounded-2xl bg-cream border border-gold-soft shadow-soft flex items-center justify-center backdrop-blur-sm">
                  <span className="font-cinzel text-2xl sm:text-4xl text-rose-deep tabular-nums">
                    {String(timeValues[index]).padStart(2, '0')}
                  </span>
                </div>
                <span className="mt-2 text-xs sm:text-sm tracking-widest uppercase text-sage-deep font-cinzel">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
