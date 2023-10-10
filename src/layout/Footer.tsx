import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { GoHome } from 'react-icons/go'
import { LuFlag } from 'react-icons/lu'
import Profile from '@/components/base/Profile/Profile'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const FooterContainer = styled.footer`
  width: 90%;
  height: 72px;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #000000;
  border-radius: 21px;
`

const FooterItem = styled.div<{display: string}>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    cursor: pointer;
  }
    
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 50%;
    border: 1.5px solid #ffffff;
    border-radius: 2px;
    z-index: 9;
    display: ${(props) => props.display};
    transform: translateX(-50%);
  }
`

const Footer = () => {
  const pathname = usePathname();
  const params = useSearchParams();
  const query = params.get('state');
  const router = useRouter();
  
  const handlePageState = () => {
    if (pathname === "/challenge") {
      return 0
    } else if (pathname === "/challenge/my") {
      return 1
    } else {
      return 2
    }
  }
 
  const [pageState, setPageState] = useState<number>(handlePageState());

  useEffect(() => {
    setPageState(handlePageState());
  }, [pathname])

  return (
    <FooterContainer>
      <FooterItem
        onClick={() => {
          const path = "/challenge"
          router.push(`${path}?state=${query}`)
        }}
        display={pageState === 0 ? "block" : "none"}
      >
        <GoHome
          color="#ffffff"
          size="28"
        />
      </FooterItem>
      <FooterItem
        onClick={() => {
          const path = "/challenge/my"
          router.push(`${path}?state=${query}`)
        }}
        display={pageState === 1 ? "block" : "none"}
      >
        <LuFlag
          color="#ffffff"
          size="27"
        />
      </FooterItem>
      <FooterItem
        onClick={() => {
          const path = "/mypage"
          router.push(`${path}?state=${query}`)
        }}
        display={pageState === 2 ? "block" : "none"}
      >
        <Profile
          color='#ffffff'
          size={28}
        />
      </FooterItem>
    </FooterContainer>
  )
}

export default Footer