'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface BackgroundMusicProps {
  isPlaying: boolean
}

export default function BackgroundMusic({ isPlaying }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const audioSrc = "/assets/Audio/Pehla%20Nasha%20%20-%20Instrumental.mp3"

  // Make the floating button visible only after the envelope opens
  useEffect(() => {
    if (isPlaying) {
      setShowButton(true)
    }
  }, [isPlaying])

  // Handle play/pause based on isPlaying prop
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (!isPlaying) {
      audio.pause()
      return
    }

    audio.muted = isMuted

    if (!hasInteracted) {
      return
    }

    if (isMuted) {
      audio.pause()
      return
    }

    audio.play().catch((error) => {
      console.warn('Audio autoplay blocked or unavailable:', error)
    })
  }, [isPlaying, hasInteracted, isMuted])

  // Allow first interaction to enable audio
  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true)
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
    }

    if (!hasInteracted) {
      document.addEventListener('click', handleInteraction)
      document.addEventListener('touchstart', handleInteraction)
    }

    return () => {
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
    }
  }, [hasInteracted])

  const toggleMute = () => {
    setIsMuted((prev) => !prev)
  }

  return (
    <>
      <audio
        ref={audioRef}
        preload="auto"
        loop
        style={{ display: 'none' }}
        onError={() => console.error('Audio file failed to load:', audioSrc)}
      >
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Floating mute/unmute control */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={toggleMute}
            className="fixed bottom-6 right-6 z-[99] w-12 h-12 rounded-full border border-gold-soft bg-cream/90 backdrop-blur-md text-rose-deep flex items-center justify-center shadow-soft hover:shadow-elegant transition-all duration-300"
            aria-label={isMuted ? 'Unmute music' : 'Mute music'}
          >
            {isMuted ? (
              // Muted / Speaker Off Icon
              <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
            ) : (
              // Playing / Speaker On with Soundwaves Icon
              <div className="relative w-5.5 h-5.5 flex items-center justify-center">
                <svg className="w-full h-full fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
                {/* Small animated sound wave pulses */}
                <span className="absolute -inset-1 rounded-full border border-rose-deep/30 animate-ping opacity-75 pointer-events-none" />
              </div>
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
