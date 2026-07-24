'use client'

import { useEffect, useRef, useState } from 'react'

interface BackgroundMusicProps {
  isPlaying: boolean
}

export default function BackgroundMusic({ isPlaying }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [hasInteracted, setHasInteracted] = useState(false)

  // Handle play/pause based on isPlaying prop
  useEffect(() => {
    if (!audioRef.current) return

    if (isPlaying && hasInteracted) {
      audioRef.current.play().catch(() => {
        // Autoplay might be blocked, user interaction required
        console.log('Autoplay blocked - waiting for user interaction')
      })
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying, hasInteracted])

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

  return (
    <audio
      ref={audioRef}
      preload="auto"
      loop
      style={{ display: 'none' }}
    >
      <source 
        src="/audio/wedding-instrumental.mp3" 
        type="audio/mpeg" 
      />
      Your browser does not support the audio element.
    </audio>
  )
}
