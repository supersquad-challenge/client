"use client"
import Profile from '@/components/base/Profile/Profile'
import FillButton from '@/components/base/button/FillButton'
import { AuthContext } from '@/context/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'

const AuthSetContainer = styled.div`
  width: auto;
  height: 100%;
  padding-right: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const ButtonContainer = styled.div`
  height: 26px;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #8A01D7;
  transition: all .3s;

  &:hover {
    background-color: #8A01D7;
  }
`

const IconContainer = styled.div`
  width: auto;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`

const AuthSet = () => {
  const { isLogin, userName } = useContext(AuthContext);
  const [isMount, setIsMount] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsMount(true);
  }, [])

  return (
    <AuthSetContainer>
      {isMount && (
        isLogin ? (
          <IconContainer>
            <Username>{userName}</Username>
            <Link href={'/mypage'}>
              <Profile  
                color='#222222'
                size={26}
              />
            </Link>
          </IconContainer>
          ) : (
          <ButtonContainer>
            <FillButton
              title='Login'
              onClickHandler={() => {
                router.push('/signup')
              }}
              color='#8A01D7'
              fontSize={16}
              backgroundcolor='#ffffff'
            />
          </ButtonContainer>
        )
      )}
    </AuthSetContainer>
  )
}

const Username = styled.div`
  font-size: 13px;
  margin-right: 5px;
  margin-bottom: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`

export default AuthSet