import { getSingleChallenge } from '@/lib/api/axios/challenge/getSingleChallenge'
import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';

type Props = {
  id: string
}

const ChallengeDetail = async ({ id }: Props) => {
  const challenge = await getSingleChallenge({ challengeId: id });

  console.log(challenge)

  // const fetchChallenge = async() => {
  //   console.log(challenge)
  // }
  // useEffect(() => {
  //   fetchChallenge();
  // }, [])

  return (
    <div>
      <ImageContainer>
        <Image
          src="/default/diet_thumbnail.svg"
          alt='challenge image'
          fill
          style={{
            objectFit: "cover"
          }}
          priority={true}
        />
      </ImageContainer>
    </div>
  )
}


const ImageContainer = styled.section`
  width: 100%;
  height: 240px;
  position: relative;
  @media (max-width: 450px) {
    height: 220px;
  }
  @media (max-width: 370px) {
    height: 200px;
  }
`

export default ChallengeDetail