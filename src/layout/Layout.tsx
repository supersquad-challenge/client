"use client"
import { ReactNode  } from 'react'
import Header from '@/layout/Header'
import React from 'react'
import Footer from '@/layout/Footer'
import { usePathname } from 'next/navigation'

const Layout = (
  { children }: 
  { children: ReactNode }) => {
  const pathname = usePathname();
  const showHeader = () => {
    if (pathname === '/signup')
      return false;
    return true;
  }
  const showFooter = () => {
    if (pathname === '/signup')
      return false;
    return true;
  }
  return (
    <>
      {showHeader() && <Header />}
        {children}
      {showFooter() && <Footer />}
    </>
  )
}

export default Layout