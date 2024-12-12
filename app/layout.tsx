import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const darkerGrotesque = localFont({
  src: '../public/fonts/DarkerGrotesque-SemiBold.woff2',
  variable: '--font-darker-grotesque',
})

export const metadata: Metadata = {
  title: 'BambooLab',
  description: 'Laboratoire de recherche innovant du Sankore Research Institute',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${darkerGrotesque.variable}`}>
      <body className="bg-white">{children}</body>
    </html>
  )
}

