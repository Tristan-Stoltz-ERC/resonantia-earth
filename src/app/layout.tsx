import React from 'react'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Resonantia Earth - Cities Where Energy is Free',
  description: 'Building 7 cities in locations where renewable energy is essentially unlimited. A practical vision for humanitys next chapter.',
  keywords: 'renewable energy, sustainable cities, geothermal, solar, hydro, future cities, energy abundance',
  openGraph: {
    title: 'Resonantia Earth - Cities Where Energy is Free',
    description: 'Building 7 cities where renewable energy is essentially unlimited',
    type: 'website',
    url: 'https://resonantia.earth',
    images: ['/images/og-image.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resonantia Earth',
    description: 'Cities Where Energy is Free',
    images: ['/images/twitter-card.jpg']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body bg-glacier-white text-volcanic-black">
        {children}
      </body>
    </html>
  )
}