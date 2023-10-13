import styled from 'styled-components';

//챌린지 등록하러 들어갔을 때, 챌린지 제목과 등록자 수, total deposit
interface IChallengeTitlePartDep {
  challengeName: string;
  challengeParticipantsCount: number;
  challengeTotalDeposit: number;
}

const ChallengeTitlePartDep = ({
  challengeName,
  challengeParticipantsCount,
  challengeTotalDeposit,
}: IChallengeTitlePartDep) => {
  return (
    <ChallengeContainer>
      <ChallengeTitle>{challengeName}</ChallengeTitle>
      <ParticipantsTotalDepositWrapper>
        <ChallengeParticipants>
          {challengeParticipantsCount} Participants
        </ChallengeParticipants>
        <ChallengeTotalDeposit>${challengeTotalDeposit}</ChallengeTotalDeposit>
      </ParticipantsTotalDepositWrapper>
    </ChallengeContainer>
  );
};

export default ChallengeTitlePartDep;

const ChallengeContainer = styled.div`
  height: 380px;
  background-color: white;
  position: absolute;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChallengeTitle = styled.div`
  font-size: 35px;
  width: 460px;
  @media (max-width: 600px) {
    font-size: 33px;
    width: 440px;
  }
  @media (max-width: 450px) {
    font-size: 28px;
    width: 370px;
  }
  @media (max-width: 392px) {
    font-size: 24px;
    width: 345px;
  }
  margin-top: 20px;
  font-weight: 600;
  /* width: fit-content; */

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const ParticipantsTotalDepositWrapper = styled.div`
  width: 460px;
  @media (max-width: 600px) {
    width: 440px;
  }
  @media (max-width: 450px) {
    width: 370px;
  }
  @media (max-width: 392px) {
    width: 345px;
  }
  display: flex;
  margin-top: 5px;
`;

const ChallengeParticipants = styled.div`
  font-size: 20px;
  padding-right: 12px;
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
  font-size: 20px;
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
