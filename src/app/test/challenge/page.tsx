'use client';
import { BackgroundProps } from '@/interface';
import styled from 'styled-components';
import challengeInfo from '../../../testData/challengeInfo.json';
import { daysBetweenDates } from '@/lib/dates';
import ChallengeInfoTable from '@/components/common/challenges/ChallengeInfo';
import BasicTag from '@/components/base/tag/BasicTag';
import { colors } from '@/styles/color';
import ChallengeInfo from '@/components/common/challenges/ChallengeInfo';
import ChallengeTwoTags from '@/components/common/challenges/ChallengeTwoTags';

const TestChallenge = () => {
  return (
    <Container>
      <ChallengeThumbnailImage src="/dietThumbnail.svg" alt="dietThumbnail" />
      {/* <TagsContainer>
        <ChallengeTag
          title={challengeInfo?.challengeVerificationFrequency}
          onClickHandler={() => {}}
          backgroundcolor={`${colors.lightGray}`}
        />
        <ChallengeTag
          title={daysBetweenDates(
            challengeInfo?.challengeEndsAt as string,
            challengeInfo?.challengeStartsAt as string,
          )}
          onClickHandler={() => {}}
          backgroundcolor={`${colors.lightPurple}`}
        />
      </TagsContainer> */}
      <ChallengeTwoTags
        tag1={challengeInfo?.challengeVerificationFrequency}
        tag2={daysBetweenDates(
          challengeInfo?.challengeEndsAt as string,
          challengeInfo?.challengeStartsAt as string,
        )}
      />
      <ChallengeContainer>
        <ChallengeTitle>{challengeInfo?.challengeName}</ChallengeTitle>
        <ParticipantsTotalDepositWrapper>
          <ChallengeParticipants>
            {challengeInfo?.challengeParticipantsCount} Participants
          </ChallengeParticipants>
          <ChallengeTotalDeposit>
            ${challengeInfo?.challengeTotalDeposit}
          </ChallengeTotalDeposit>
        </ParticipantsTotalDepositWrapper>
      </ChallengeContainer>

      {/* <div style={{ display: 'flex' }}>
        <ChallengeInfo
          contentColor={colors.black}
          title="Schedule"
          content="Oct 11st- Nov 10th"
        />
        <ChallengeInfo
          contentColor={colors.black}
          title="Schedule"
          content="Oct 11st- Nov 10th"
        />
      </div> */}
    </Container>
  );
};

export default TestChallenge;

const Container = styled.div`
  height: fit-content;
  position: relative;
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: center;

  /* background-color: red;
  border: 1px solid green;
  box-sizing: border-box; */
`;

const ChallengeThumbnailImage = styled.img`
  position: absolute;
  width: 100%;
`;

const ChallengeContainer = styled.div`
  @media (max-width: 600px) {
    height: 380px;

    top: 330px;
  }
  @media (max-width: 450px) {
    height: 380px;

    top: 300px;
  }
  @media (max-width: 392px) {
    height: 380px;

    background-color: white;

    top: 290px;
  }

  position: absolute;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TagsContainer = styled.div`
  @media (max-width: 600px) {
    width: 440px;
    height: 36px;

    // 사라져야함/////
    margin-top: 20px;
    top: 265px;
  }
  @media (max-width: 450px) {
    width: 370px;
    height: 30px;

    // 사라져야함/////
    margin-top: 20px;
    top: 200px;
  }
  @media (max-width: 392px) {
    width: 345px;
    height: 27px;

    // 사라져야함/////
    margin-top: 20px;
    top: 180px;
  }

  position: absolute;
  width: 100%;
  display: flex;
  z-index: 1;
  /* 
  box-sizing: content-box;
  border: 1px solid black; */
`;

const ChallengeTag = ({
  title,
  onClickHandler,
  backgroundcolor,
}: {
  title: string;
  onClickHandler: (text: string) => void;
  backgroundcolor: string;
}) => {
  return (
    <ChallengeTagWrapper>
      <BasicTag
        title={title}
        onClickHandler={onClickHandler}
        $color={colors.black}
        $backgroundcolor={backgroundcolor}
        $borderradius600={15}
        $borderradius450={11}
        $borderradius392={10}
        $paddinghorizontal600={15}
        $paddinghorizontal450={11}
        $paddinghorizontal392={10}
        $paddingvertical600={6}
        $paddingvertical450={4}
        $paddingvertical392={3}
        $fontsize600={18}
        $fontsize450={16}
        $fontsize392={14}
      />
    </ChallengeTagWrapper>
  );
};

const ChallengeTagWrapper = styled.div`
  @media (max-width: 600px) {
    height: 36px;
  }
  @media (max-width: 450px) {
    height: 30px;
  }
  @media (max-width: 392px) {
    height: 27px;
  }
  width: fit-content;
  margin-right: 7.5px;
`;

const ChallengeTitle = styled.div`
  @media (max-width: 600px) {
    font-size: 33px;

    width: 440px;

    margin-top: 20px;
  }
  @media (max-width: 450px) {
    font-size: 28px;
    width: 370px;

    margin-top: 20px;
  }
  @media (max-width: 392px) {
    font-size: 24px;
    width: 345px;

    margin-top: 20px;
  }
  font-weight: 600;
  width: fit-content;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const ParticipantsTotalDepositWrapper = styled.div`
  @media (max-width: 600px) {
    width: 440px;
  }
  @media (max-width: 450px) {
    /* width: 345px; */
    width: 370px;
  }
  @media (max-width: 392px) {
    width: 345px;
  }
  display: flex;
  margin-top: 5px;
`;

const ChallengeParticipants = styled.div`
  @media (max-width: 600px) {
    font-size: 18px;
    padding-right: 12px;
  }
  @media (max-width: 450px) {
    font-size: 16px;
    padding-right: 12px;
  }
  @media (max-width: 392px) {
    font-size: 14px;
    padding-right: 12px;
  }
  border-right: 1px solid black;
  margin-right: 12px;
  /* border: 1px solid green;
  box-sizing: border-box; */
`;

const ChallengeTotalDeposit = styled.div`
  @media (max-width: 600px) {
    font-size: 18px;
  }
  @media (max-width: 450px) {
    font-size: 16px;
  }
  @media (max-width: 392px) {
    font-size: 14px;
  }
  /* border: 1px solid green;
  box-sizing: border-box; */
`;
