"use client"
import React, { useEffect, useState } from 'react'
import AuthSet from '@/components/common/authSet/AuthSet'
import { usePathname, useRouter } from 'next/navigation'
import { FiChevronLeft } from 'react-icons/fi'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  width: 100%;
  max-width: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0px auto 10px auto;
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  overflow: hidden;
  z-index: 99;
  background-color: #ffffff;
  `

const NavItem = styled.div<{display: string, animation: string}>`
  position: relative;
  width: 50%;
  min-width: 160px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #6F7789;
  
  &:hover {
    cursor: pointer;
  }
  
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    border: 2px solid #000000;
    border-radius: 2px;
    z-index: 9;
    display: ${(props) => props.display};
    animation-name: ${(props) => props.animation};
    animation-duration: .3s;
    animation-fill-mode: forwards;

    @keyframes appearRight {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0);
      }
    }

    @keyframes appearLeft {
       0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
`

const HeaderInner = styled.section`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const HeaderTitle = styled.div`
  width: auto;
  min-width: 160px;
  font-size: 20px;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding-left: 24px;
  font-family: Opensans;
  font-weight: bold
`

const Header = () => {
  const [pageTitle, setPageTitle] = useState<string>('');
  const router = useRouter();
  const pathname = usePathname();

  const isDetail = () => {
    if (pathname.includes('/detail') || pathname.includes('/mypage'))
      return false;
    return true;
  }

  useEffect(() => {
    if (pathname === "/challenge") {
      setPageTitle("Supersquad")
    } else if (pathname === "/challenge/my") {
      setPageTitle("My Challenges")
    }

  }, [pathname])


  return (
    <HeaderContainer>
      <HeaderInner>
        {isDetail() ? (
        <HeaderTitle>
          {pageTitle}
        </HeaderTitle>
        ) : (
        <ButtonContainer
          onClick={() => router.back()}
        >
          <FiChevronLeft
            color="#000000"
            size="24"
          />
        </ButtonContainer>
        )}
        <AuthSet />
      </HeaderInner>
    </HeaderContainer>
  )
}

export default Header

const ButtonContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  transition: all .2s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;

  &:hover {
    cursor: pointer;
    background-color: #cccccc;
  }
`