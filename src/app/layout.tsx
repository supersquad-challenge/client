"use client"
import Layout from '@/layout/Layout'
import './globals.css'
import { WindowProvider } from '@/context/window'
import { AuthProvider } from '@/context/auth'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <WindowProvider>
            <Layout>
              {children}
            </Layout>
          </WindowProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
