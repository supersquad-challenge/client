"use client"
import { getAllChallenge } from '@/lib/api/axios/challenge/getAllChallenge'
import { useQuery } from "react-query";
import React from 'react'
import styled from 'styled-components'
import UnRegisterItem from '@/components/common/challenge/unregistered/ChallengeItem'

const ChallengeSet = () => {


  return (
    <ItemContainer>
      <UnRegisterItem />
    </ItemContainer>
  )
}

const ItemContainer = styled.section`
  width: 100%;
`

export default ChallengeSet