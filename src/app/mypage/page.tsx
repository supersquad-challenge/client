"use client"
import UserInfo from '@/components/common/user/UserInfo'
import React from 'react'
import styled from 'styled-components'

const MyPage = () => {
  
  return (
    <PageContainer>
      <PageInner>
        <PageTitle>
          Profile
        </PageTitle>
        <UserInfo
          id='65194b0d9f321ba6780caf11'
        />
      </PageInner>
    </PageContainer>
  )
}


const PageContainer = styled.main`
  width: 100%;
  height: auto;
  position: relative;
`

const PageInner = styled.section`
  width: 90%;
  margin: 100px auto 0 auto;
  display: flex;
  flex-direction: column;
`

const PageTitle = styled.div`
  @media (max-width: 600px) {
    font-size: 35px;
    margin-bottom: 15px;
  }
  @media (max-width: 450px) {
    font-size: 30px;
    margin-bottom: 11px;
  }
  @media (max-width: 390px) {
    font-size: 25px;
    margin-bottom: 10px;
  }
  font-weight: 800;
  color: #000000;
`



export default MyPage