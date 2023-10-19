"use client"
import React from 'react'
import styled from 'styled-components'
import UnRegisterItem from '@/components/common/challenge/unregistered/ChallengeItem'
import { convertIsoDateToReadable } from '@/utils/dateFormatUtils'
import { thousandFormat } from '@/utils/moneyFormatUtils'

type Props = {
  id: string;
  title: string;
  category: string;
  endDate: string;
  startDate: string;
  participants: number;
  deposit: number;
  thumbnail: string;
  isRegistered: boolean;
}

const ChallengeSet = ({ 
  id,
  title,
  category, 
  endDate,
  startDate,
  participants,
  thumbnail,
  deposit,
  isRegistered
 }: Props) => {

  return (
    <ItemContainer>
      <ItemCategory>
        #{category}
      </ItemCategory>
      <UnRegisterItem
        id={id}
        title={title}
        thumbnailUrl={thumbnail}
        duration={`${convertIsoDateToReadable(startDate)} 
        - ${convertIsoDateToReadable(endDate)}`}
        participants={participants}
        deposit={thousandFormat(deposit)}
        isRegistered={isRegistered}
      />
    </ItemContainer>
  )
}

const ItemContainer = styled.section`
  width: 100%;
  height: 220px;
  margin: 18px auto;
`

const ItemCategory = styled.div`
  font-weight: 700;
  font-size: 24px;
`

export default ChallengeSet