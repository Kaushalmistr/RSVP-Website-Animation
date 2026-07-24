import type { Metadata } from 'next'
import { Playfair_Display, Poppins, Great_Vibes } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
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
      <body className={`${playfair.variable} ${poppins.variable} ${greatVibes.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
