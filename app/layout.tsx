import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'OwnTheSite - Modern Static Websites for Small Businesses',
  description: 'We design and build fast, mobile-friendly websites for small businesses that generate enquiries — without monthly server costs.',
  generator: 'v0.app',
  openGraph: {
    title: 'OwnTheSite - Modern Static Websites',
    description: 'Fast custom-built websites with zero hosting cost',
    url: 'https://ownthesite.com',
    siteName: 'OwnTheSite',
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
