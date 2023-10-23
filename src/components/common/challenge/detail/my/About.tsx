import React from 'react'
import { useQuery } from 'react-query';
import { getChallenge } from '@/lib/api/querys/user/getChellenge';
import CommonError from '@/components/common/error/CommonError';
import Loading from '@/components/animation/Loading/Loading';
import styled from 'styled-components';
import ChallengeInfo from '@/components/common/challenge/unregistered/ChallengeInfo';
import { convertIsoDateToReadable } from '@/utils/dateFormatUtils';
import { colors } from '@/styles/color';

type Props = {
  id: string;
}

const About = ({ id }: Props) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [`challenge-${id}`],
    queryFn: async () => {
      const res = await getChallenge({
        userChallengeId: id
      })
      const challenge = res.challengeInfo;
      return challenge;
    },
    staleTime: 5000,
    cacheTime: Infinity
  });

  if (isLoading) {
    return <Loading />
  }
  
  if (!isLoading && (error
    || data === undefined || data === null)) {
    return <CommonError msg="Fetch failed" />;
  }

  return (
    <Container>
      <InfoContainer>
          <ChallengeInfo
            title='Schedule'
            content={data.challengeStartsAt.length === 0 ? 'None' : `${convertIsoDateToReadable(data.challengeStartsAt)} - ${convertIsoDateToReadable(data.challengeEndsAt)}`}
            contentColor='#000000'
            direction='left'
            shadow='rb'
          />
          <ChallengeInfo
            title='How To'
            content='Take a picture'
            contentColor='#000000'
            direction='right'
            shadow='rb'
            />
          <ChallengeInfo
              title='Complete'
              content={data.challengeVerificationFrequency}
              contentColor='#000000'
              direction='left'
              shadow='rb'
            />
          <ChallengeInfo
            title='Crypto Yield +'
            content={`%${data.cryptoYield}`}
            contentColor='#8A01D7'
            direction='right'
            shadow='rb'
          />
        </InfoContainer>
        <PageTitle>
          Description
        </PageTitle>
        <Description>
          {data.description}
        </Description>
    </Container>
  )
}

const PageTitle = styled.div`
  margin-top: 10px;
  font-size: 35px;

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
  color: ${colors.black};
`

const Container = styled.section`
  width: 100%;
  min-width: 250px;
  max-width: 450px;
  margin: 0 auto;
`
const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  padding: 0 5px;
`

export default About