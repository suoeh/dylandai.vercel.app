import "./globals.css"
import { Space_Grotesk, Inter } from "next/font/google"
import type React from "react"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: 'DYLAN DAI',
  description: 'Dylan Dai\'s personal website',
  openGraph: {
    title: 'DYLAN DAI',
    description: 'Dylan Dai\'s personal website',
    url: 'https://dylandai.vercel.app',
    siteName: 'DYLAN DAI',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'DYLAN DAI',
      },
    ],
    locale: 'en-CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DYLAN DAI',
    description: 'Dylan Dai\'s personal website',
    images: ['/icon.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>{children}</body>
    </html>
  )
}


