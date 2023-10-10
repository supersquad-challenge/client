import AuthSet from '@/components/common/authSet/AuthSet'
import { useGetTitle } from '@/hook/useGetTitle'
import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`

const HeaderInner = styled.section`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const NavItem = styled.div`
  width: 50%;
  min-width: 160px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  const headerTitle = useGetTitle();
  return (
    <HeaderContainer>
      <HeaderInner>
        <HeaderTitle>
          {headerTitle} 
        </HeaderTitle>
        <AuthSet />
      </HeaderInner>
      <HeaderInner>
        <NavItem>
          onApplication
        </NavItem>
        <NavItem>
          onGoing 
        </NavItem>
      </HeaderInner>
    </HeaderContainer>
  )
}

export default Header