import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import { prefix } from '@/utils/prefix'
import PixelBackground from '@/components/PixelBackground'
import VariableBackground from '@/components/VariableBackground'
import { BackgroundProvider } from '@/components/BackgroundContext'
import Footer from '@/components/footer/Footer'

export const metadata: Metadata = {
  title: 'CompSoc',
  description:
    "CompSoc is Edinburgh University's technology society! We're Scotland's best and largest of its kind, and form one of the largest societies within the university.",
  icons: {
    icon: `${prefix}/compsoc-mini.png`,
  },
}

export const viewport: Viewport = {
  themeColor: '#353535', // TODO: Should be fed from tailwind.config.ts
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="relative overflow-x-clip w-screen mx-auto">
        <VariableBackground>
          <PixelBackground>
            <Navbar />
            <div className="container mx-auto max-w-screen-xl p-4 pb-32">
              {children}
            </div>
          </PixelBackground>
        </VariableBackground>
        <Footer />
      </body>
    </html>
  )
}
