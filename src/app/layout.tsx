"use client"
import Layout from '@/layout/Layout'
import './globals.css'
import { WindowProvider } from '@/context/window'
import { AuthProvider } from '@/context/auth'
import StyledComponentsRegistry from '@/app/registry/registry'
import { QueryClient, QueryClientProvider } from 'react-query'
import GoogleAnalytics from '@/app/GoogleAnalytics'
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react"
import { goerli, mainnet, polygon, polygonMumbai } from "wagmi/chains"
import GlobalStyle from '@/styles/global'
import { WagmiConfig, sepolia } from "wagmi"
import { getProvider } from '@/utils/getProvider'
import { Web3ReactProvider } from '@web3-react/core';

const PROJECT_ID = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '';

const metadata = {
  name: 'Supersquad',
  description: 'supersqaud challenge',
  url: 'https://supersquad.site',
  icons: ['/src/app/favicon.ico']
}

const chains = [mainnet, goerli, sepolia, polygon, polygonMumbai]

const wagmiConfig = defaultWagmiConfig({ chains, projectId: PROJECT_ID, metadata })

createWeb3Modal({ wagmiConfig, projectId: PROJECT_ID, chains })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const client = new QueryClient();

  return (
    <html lang="en">
      <body>
        <Web3ReactProvider getLibrary={getProvider}>
        <QueryClientProvider client={client}>
            <WagmiConfig config={wagmiConfig}>
              <AuthProvider>
                <WindowProvider>
                  <GlobalStyle />
                    <StyledComponentsRegistry>
                      <GoogleAnalytics />
                      <Layout>
                        {children}
                      </Layout>
                    </StyledComponentsRegistry>
                </WindowProvider>
              </AuthProvider>
            </WagmiConfig>
      </QueryClientProvider>
      </Web3ReactProvider>
    </body>
  </html>
  )
}
