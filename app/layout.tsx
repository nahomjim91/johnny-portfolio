
// app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { ScrollProgress } from '../components/shared/ScrollProgress'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: 'Johnny Video Production - Luxury Wedding Videography',
  description: 'Luxury wedding videography capturing love stories across cultures and continents. Professional wedding videographer with 8+ years experience, 150+ weddings captured in 15+ countries.',
  keywords: 'wedding videography, luxury weddings, destination weddings, wedding films, cinematic wedding videos',
  authors: [{ name: 'Johnny Video Production' }],
  creator: 'Johnny Video Production',
  openGraph: {
    title: 'Johnny Video Production - Luxury Wedding Videography',
    description: 'Luxury wedding videography capturing love stories across cultures and continents',
    url: 'https://johnnyvideoduaction.com',
    siteName: 'Johnny Video Production',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Johnny Video Production',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Johnny Video Production - Luxury Wedding Videography',
    description: 'Luxury wedding videography capturing love stories across cultures and continents',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
      <body className={inter.className}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
