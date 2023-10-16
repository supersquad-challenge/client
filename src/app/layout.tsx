"use client"
import Layout from '@/layout/Layout'
import './globals.css'
import { WindowProvider } from '@/context/window'
import { AuthProvider } from '@/context/auth'
import StyledComponentsRegistry from '@/app/registry/registry'
import { QueryClient, QueryClientProvider } from 'react-query'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const client = new QueryClient();

  return (
    <html lang="en">
      <body>
      <QueryClientProvider client={client}>
        <AuthProvider>
          <WindowProvider>
            <StyledComponentsRegistry>
              <Layout>
                {children}
              </Layout>
            </StyledComponentsRegistry>
          </WindowProvider>
        </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
