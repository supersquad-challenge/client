import { colors } from '@/styles/color';
import styled from 'styled-components';
import myChallenge from '../../../../src/testData/myChallenge.json';
import { daysBetweenDates } from '@/lib/dates';
import { AiOutlineRight } from 'react-icons/ai';
import FixedSizeImage from '@/components/base/image/FixedSizeImage';
import BasicButton from '@/components/base/button/BasicButton';

const BeforeMyChallengeDetail = () => {
  return (
    <MyChllengeWrapper onClick={() => {}}>
      <FixedSizeImageWrapper>
        <FixedSizeImage
          imageUrl="/dietThumbnail.svg"
          width={90}
          height={90}
          $borderRadius={10}
        />
      </FixedSizeImageWrapper>
      <MyChallengeInfoWrapper>
        <MyChallengeTitle>{myChallenge.challengeName}</MyChallengeTitle>
        <MyChallengeDuration>
          {' '}
          {myChallenge.challengeVerificationFrequency} |{' '}
          {daysBetweenDates(
            myChallenge?.challengeEndsAt as string,
            myChallenge?.challengeStartsAt as string,
          )}
        </MyChallengeDuration>
        <BasicButtonContainer>
          <BasicButton
            title="Starting Soon"
            onClickHandler={() => {}}
            $color={colors.black}
            $backgroundcolor="#dadada"
            $borderradius={50}
            $fontsize={14}
          />
        </BasicButtonContainer>
      </MyChallengeInfoWrapper>
      <GoDetailIcon />
    </MyChllengeWrapper>
  );
};

export default BeforeMyChallengeDetail;

const MyChllengeWrapper = styled.div`
  width: 430px;
  height: 135px;
  @media (max-width: 600px) {
    width: 400px;
    height: 135px;
  }
  @media (max-width: 450px) {
    width: 370px;
    height: 130px;
  }
  @media (max-width: 392px) {
    width: 345px;
    height: 115px;
  }
  margin-top: 20px;
  border-radius: 20px;
  position: relative;

  background-color: ${colors.blockGray};
`;

const FixedSizeImageWrapper = styled.div`
  left: 28px;
  top: 23px;
  @media (max-width: 600px) {
    left: 23px;
    top: 23px;
  }
  @media (max-width: 450px) {
    left: 20px;
    top: 20px;
  }
  @media (max-width: 392px) {
    left: 15px;
    top: 13px;
  }
  width: fit-content;
  height: fit-content;
  position: absolute;
`;

const MyChallengeInfoWrapper = styled.div`
  left: 148px;
  top: 23px;
  @media (max-width: 600px) {
    left: 140px;
    top: 23px;
  }
  @media (max-width: 450px) {
    left: 135px;
    top: 20px;
  }
  @media (max-width: 392px) {
    left: 122px;
    top: 15px;
  }
  width: fit-content;
  position: absolute;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const MyChallengeTitle = styled.div`
  font-size: 19px;
  @media (max-width: 600px) {
    font-size: 19px;
  }
  @media (max-width: 450px) {
    font-size: 18px;
  }
  height: 25px;
  font-weight: 600;
  color: #121212;
`;

const MyChallengeDuration = styled.div`
  height: 18px;
  font-size: 15px;
  @media (max-width: 600px) {
    height: 18px;
    font-size: 15px;
  }
  @media (max-width: 450px) {
    height: 18px;
    font-size: 14px;
  }
  @media (max-width: 392px) {
    height: 18px;
    font-size: 14px;
  }
  margin-top: 4px;
  font-weight: 400;
  color: #898989;
`;

const GoDetailIcon = styled(AiOutlineRight)`
  right: 20px;
  top: 58px;
  @media (max-width: 600px) {
    right: 15px;
    top: 58px;
  }
  @media (max-width: 450px) {
    right: 15px;
    top: 58px;
  }
  @media (max-width: 392px) {
    right: 12px;
    top: 50px;
  }
  height: 15px;
  width: 15px;
  position: absolute;
`;

const BasicButtonContainer = styled.div`
  width: 190px;
  height: 34px;
  @media (max-width: 600px) {
    width: 190px;
    height: 34px;
  }
  @media (max-width: 450px) {
    width: 171px;
    height: 34px;
  }
  @media (max-width: 392px) {
    width: 171px;
    height: 34px;
  }
  margin-top: 10px;
  font-size: 14px;
  font-weight: 700;
`;
