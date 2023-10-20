import { isValidUrl } from '@/utils/urlUtils';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import styled from 'styled-components'

type Props = {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  participants: number;
  deposit: string;
  isRegistered: boolean;
}

const UnRegisterItem = ({
  id,
  title,
  thumbnailUrl,
  duration,
  participants,
  deposit,
  isRegistered
}: Props) => {
  return (
    <Link href={isRegistered 
      ? `/challenge/my/detail/${id}?state=my`
      : `/challenge/detail/${id}`}>
      <ChallengeContainer>
        <ImageContainer>
          <Image
            src={isValidUrl(thumbnailUrl) ? thumbnailUrl : "/default/diet_thumbnail.svg"}
            alt='challenge'
            fill
            style={{
              objectFit: "cover"
            }}
            priority={true}
          />
        </ImageContainer>
        <ChallengeTitle>
          {title}
        </ChallengeTitle>
        <ChallengeDur>
          {duration}
        </ChallengeDur>
        <ChallengeMetaContainer>
          <ChallengeMetaItem>
            {participants} participants
          </ChallengeMetaItem>
          <ChallengeMetaItem>
            ${deposit}
          </ChallengeMetaItem>
        </ChallengeMetaContainer>
      </ChallengeContainer>
    </Link>
  )
}

const ChallengeContainer = styled.div`
  width: 180px;
  height: 110px;
  background-color: #cccccc;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 120px;
  position: relative;
`

const ChallengeTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin: 5px 0;
`

const ChallengeDur = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #cccccc;
`

const ChallengeMetaContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ChallengeMetaItem = styled.div`
  width: auto;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
`

export default UnRegisterItem