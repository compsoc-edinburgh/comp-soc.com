import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'CompSoc',
  description:
    "CompSoc is Edinburgh University's technology society! We're Scotland's best and largest of its kind, and form one of the largest societies within the university.",
  icons: {
    icon: '/compsoc-mini.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#222222', // TODO: Should be fed from tailwind.config.ts
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-background relative">
        <Navbar />
        <div className="container mx-auto max-w-screen-xl p-4">{children}</div>
      </body>
    </html>
  )
}
