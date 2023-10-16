"use client"
import styled from 'styled-components';
import React from 'react'
import ChallengeDetail from '@/components/common/challenge/ChallengeDetail';
import { usePathname } from 'next/navigation';

const Challenge = () => {
  const path = usePathname();
  const id = path.split('/')[3];

  return (
    <PageContainer>
      <ChallengeDetail 
        id={id}
      />
    </PageContainer>
  )
}

const PageContainer = styled.main`
  width: 100%;
  height: auto;
  margin-bottom: 120px;
  position: relative;
`

const BodyContainer = styled.section`
  width: 90%;
  margin: 20px auto 0 auto;
  display: grid;
  grid: '. .';
`

export default Challenge