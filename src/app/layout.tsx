import type { Metadata } from 'next'
import { Cinzel, Cormorant_Garamond, Great_Vibes } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kaushal & Simran - Wedding Invitation',
  description: 'You are cordially invited to celebrate the wedding of Kaushal & Simran on June 15, 2026.',
  openGraph: {
    title: 'Kaushal & Simran - Wedding Invitation',
    description: 'You are cordially invited to celebrate the wedding of Kaushal & Simran on June 15, 2026.',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cinzel.variable} ${cormorant.variable} ${greatVibes.variable} font-serif-display antialiased`}>
        {children}
      </body>
    </html>
  )
}
