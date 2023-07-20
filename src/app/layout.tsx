import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PersonalGPT',
  description: 'I\'m a personal assistent! 🤖',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-blue-400 to-emerald-400">{children}</body>
    </html>
  )
}
