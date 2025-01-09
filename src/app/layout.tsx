import { ThemeProvider } from '@/components/theme/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import { Layout } from '@/components/layout/layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NFT Ticket Platform',
  description: 'NFT ticket platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Layout>
            {children}
          </Layout>
          <Toaster />
        </ThemeProvider>

      </body>
    </html>
  )
}
