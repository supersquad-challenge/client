import AuthSet from '@/components/common/authSet/AuthSet'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
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
        transform: translateX(0%);
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
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 24px;
`

const Header = () => {
  const [pageState, setPageState] = useState<boolean | null>(true);
  const [pageTitle, setPageTitle] = useState<string>('');
  const router = useRouter();
  const params = useSearchParams();
  const state =  params.get('state')
  const pathname = usePathname();
  
  useEffect(() => {
    setPageState(state === "application" ? true : false);
    
    if (pathname === "/challenge") {
      setPageTitle(state === "application" ? "Supersquad" : "Ongoing Challenges");
    } else if (pathname === "/challenge/my") {
      setPageTitle("My Challenges")
    }

  }, [state, pathname])


  return (
    <HeaderContainer>
      <HeaderInner>
        <HeaderTitle>
          {pageTitle}
        </HeaderTitle>
        <AuthSet />
      </HeaderInner>
      <HeaderInner>
        <NavItem
          onClick={() => {
            const query = "application"
            router.push(`${pathname}?state=${query}`)
          }}
          display={!pageState ? "none" : "block"}
          animation={'appearLeft'}
        >
          On Application
        </NavItem>
        <NavItem
          onClick={() => {
            const query = "going"
            router.push(`${pathname}?state=${query}`)
          }}
          display={!pageState ? "block" : "none"}
          animation={'appearRight'}
        >
          On Going 
        </NavItem>
      </HeaderInner>
    </HeaderContainer>
  )
}

export default Header