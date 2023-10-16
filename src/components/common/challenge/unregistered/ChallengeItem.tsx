import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const UnRegisterItem = () => {
  return (
    <ChallengeContainer>
      <ImageContainer>
        <Image
          src={"/default/diet_thumbnail.svg"}
          alt='challenge'
          fill
          style={{
            objectFit: "cover"
          }}
          priority={true}
        />
      </ImageContainer>
      <ChallengeTitle>
        asdf
      </ChallengeTitle>
      <ChallengeDur>
        Sep 11st - Oct 11st
      </ChallengeDur>
      <ChallengeMetaContainer>
        <ChallengeMetaItem>
          asdf
        </ChallengeMetaItem>
        <ChallengeMetaItem>
          asdf
        </ChallengeMetaItem>
      </ChallengeMetaContainer>
    </ChallengeContainer>
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
  font-size: 20px;
  font-weight: 600;
  margin: 5px 0;
`

const ChallengeDur = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #cccccc;
`

const ChallengeMetaContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

const ChallengeMetaItem = styled.div`
  width: 50%;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
`

export default UnRegisterItem