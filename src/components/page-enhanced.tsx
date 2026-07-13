'use client'

import HeroEnhanced from '@/components/Hero'
import CountdownTimer from '@/components/CountdownTimer'
import StoryEnhanced from '@/components/Story'
import EventsEnhanced from '@/components/Events'
import GalleryEnhanced from '@/components/Gallery'
import RSVP from '@/components/RSVP'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <HeroEnhanced />
      <CountdownTimer />
      <StoryEnhanced />
      <EventsEnhanced />
      <GalleryEnhanced />
      <RSVP />
      <Footer />
    </main>
  )
}
