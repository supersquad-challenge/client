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
      console.log(res)
      const challenge = res.challengeInfo;
      return challenge;
    },
    staleTime: 5000,
    cacheTime: Infinity
  });

  console.log(data)

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
            content={`${convertIsoDateToReadable(data.challengeStartsAt)} - ${convertIsoDateToReadable(data.challengeEndsAt)}`}
            contentColor='#000000'
            shadow='rb'
          />
        <ChallengeInfo
          title='How To'
          content='Take a picture'
          contentColor='#000000'
          shadow='rb'
          />
        <ChallengeInfo
            title='Complete'
            content={data.challengeVerificationFrequency}
            contentColor='#000000'
            shadow='rb'
          />
        <ChallengeInfo
          title='Crypto Yield +'
          content={`%${data.cryptoYield}`}
          contentColor='#8A01D7'
          shadow='rb'
        />
        </InfoContainer>
        <PageTitle>
          Description
        </PageTitle>
        <Description>
          {data.description}
        </Description>
        <FooterContainer>
          Complete Mission
        </FooterContainer>
    </Container>
  )
}

const PageTitle = styled.div`
  margin-top: 10px;
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
  width: 90%;
  min-width: 350px;
  max-width: 450px;
  margin: 0 auto;
`
const InfoContainer = styled.div`
  width: 100%;
  display: grid;
  grid: '. .';
`

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  padding: 0 5px;
`

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 60px;
  max-width: 500px;
  background-color: #000000;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-size: 18px;
  border: 1px solid #000000;

  &:hover {
    cursor: pointer;
    background-color: #ffffff;
    color: #000000;
  }
`


export default About