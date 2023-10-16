"use client"
import Profile from '@/components/base/Profile/Profile'
import FillButton from '@/components/base/button/FillButton'
import { AuthContext } from '@/context/auth'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import styled from 'styled-components'

const AuthSetContainer = styled.div`
  width: auto;
  height: 100%;
  padding-top: 5px;
  padding-right: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const ButtonContainer = styled.div`
  padding: 10px auto;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #8A01D7;
  transition: all .3s;

  &:hover {
    background-color: #8A01D7;
  }
`

const AuthSet = () => {
  const { isLoggined } = useContext(AuthContext);
  const router = useRouter();

  return (
    <AuthSetContainer>
      {isLoggined ? (
        <Profile
          color='#cccccc'
          size={28}
        />
      ) : (
        <ButtonContainer>
          <FillButton
            title='Login'
            onClickHandler={() => {
              router.push('/signup')
            }}
            color='#8A01D7'
            fontSize={13}
            backgroundcolor='#ffffff'
          />
        </ButtonContainer>
      )}
    </AuthSetContainer>
  )
}

export default AuthSet