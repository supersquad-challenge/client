import { ReactNode  } from 'react'
import Header from '@/layout/Header'
import React from 'react'

const Layout = (
  { children }: 
  { children: ReactNode }) => {
  return (
    <>
      <Header />
        {children}
    </>
  )
}

export default Layout