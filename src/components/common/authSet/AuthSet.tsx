import Profile from '@/components/base/Profile/Profile'
import { AuthContext } from '@/context/auth'
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

const AuthSet = () => {
  const { isLoggined } = useContext(AuthContext);

  return (
    <AuthSetContainer>
      {isLoggined ? (
        <Profile
          color='#cccccc'
          size={28}
        />
      ) : (
        <div>로그인</div>
      )}
    </AuthSetContainer>
  )
}

export default AuthSet