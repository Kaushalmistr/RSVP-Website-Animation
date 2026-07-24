'use client'

import { useEffect, useState } from 'react'

const ButterflyIcon = () => (
  <svg width="64" height="52" viewBox="0 0 64 52" xmlns="http://www.w3.org/2000/svg">
    <g>
      {/* Body */}
      <ellipse cx="32" cy="26" rx="1.6" ry="11" fill="#1f2937" />
      
      {/* Head */}
      <circle cx="32" cy="14" r="2.2" fill="#1f2937" />
      
      {/* Antennae */}
      <path d="M32 13 C 29 8, 27 6, 25 5" stroke="#1f2937" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M32 13 C 35 8, 37 6, 39 5" stroke="#1f2937" strokeWidth="1" fill="none" strokeLinecap="round" />
      
      {/* Left Upper Wing */}
      <path d="M30 22 C 10 10, 2 22, 6 32 C 10 42, 24 38, 30 30 Z" fill="#3b82f6" opacity="0.95" />
      
      {/* Left Lower Wing */}
      <path d="M30 30 C 18 38, 10 44, 14 48 C 20 50, 28 42, 30 36 Z" fill="#60a5fa" opacity="0.95" />
      
      {/* Right Upper Wing */}
      <path d="M34 22 C 54 10, 62 22, 58 32 C 54 42, 40 38, 34 30 Z" fill="#3b82f6" opacity="0.95" />
      
      {/* Right Lower Wing */}
      <path d="M34 30 C 46 38, 54 44, 50 48 C 44 50, 36 42, 34 36 Z" fill="#60a5fa" opacity="0.95" />
      
      {/* Wing Details */}
      <circle cx="14" cy="26" r="1.6" fill="#fff" opacity="0.85" />
      <circle cx="50" cy="26" r="1.6" fill="#fff" opacity="0.85" />
    </g>
  </svg>
)

export default function FlyingButterfly() {
  const [mounted, setMounted] = useState(false)
  const [topPosition] = useState(() => Math.random() * 70 + 10)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <style>{`
        @keyframes butterfly-fly {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px));
            opacity: 0;
          }
        }

        @keyframes butterfly-flap {
          0%, 100% {
            transform: scaleX(1);
          }
          50% {
            transform: scaleX(0.7);
          }
        }

        .butterfly-container {
          position: fixed;
          top: ${topPosition}px;
          left: 0;
          width: 64px;
          height: 52px;
          pointer-events: none;
          z-index: 15;
          will-change: transform;
          animation: butterfly-fly 28s linear infinite;
        }

        .butterfly-wings {
          width: 100%;
          height: 100%;
          animation: butterfly-flap 0.4s ease-in-out infinite;
        }
      `}</style>
      <div className="butterfly-container">
        <div className="butterfly-wings">
          <ButterflyIcon />
        </div>
      </div>
    </>
  )
}
