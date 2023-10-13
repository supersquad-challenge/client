import { BackgroundProps } from '@/interface';
import styled from 'styled-components';

interface IOneTitleBlock {
  background: string;
  title: string;
  content: string;
  isSmall: boolean;
}

const OneTitleBlock = ({
  background,
  title,
  content,
  isSmall,
}: IOneTitleBlock) => {
  return isSmall ? (
    <OneTitleBlockSmallWrapper $background={background}>
      <TwoTitleBlockSmallTitle>{title}</TwoTitleBlockSmallTitle>
      <TwoTitleBlockSmallContent>{content}</TwoTitleBlockSmallContent>
    </OneTitleBlockSmallWrapper>
  ) : (
    <OneTitleBlockBigWrapper $background={background}>
      <TwoTitleBlockSmallTitle>{title}</TwoTitleBlockSmallTitle>
      <TwoTitleBlockSmallContent>{content}</TwoTitleBlockSmallContent>
    </OneTitleBlockBigWrapper>
  );
};

export default OneTitleBlock;

export const OneTitleBlockSmallDoubleContainer = styled.div`
  width: 400px;
  @media (max-width: 600px) {
    width: 380px;
  }
  @media (max-width: 450px) {
    width: 360px;
  }
  @media (max-width: 392px) {
    width: 345px;
  }

  margin-top: 10px;

  height: fit-content;
  display: flex;
  justify-content: space-between;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const OneTitleBlockBigWrapper = styled.div<BackgroundProps>`
  width: 400px;
  height: 120px;
  @media (max-width: 600px) {
    width: 380px;
    height: 110px;
  }
  @media (max-width: 450px) {
    width: 360px;
    height: 100px;
  }
  @media (max-width: 392px) {
    width: 345px;
    height: 95px;
  }

  margin-top: 10px;
  border-radius: 20px;
  background: ${(props) => props.$background};
  position: relative;
  display: flex;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;
const OneTitleBlockSmallWrapper = styled.div<BackgroundProps>`
  width: 190px;
  height: 120px;
  @media (max-width: 600px) {
    width: 184px;
    height: 110px;
  }
  @media (max-width: 450px) {
    width: 176px;
    height: 100px;
  }
  @media (max-width: 392px) {
    width: 168px;
    height: 95px;
  }
  border-radius: 20px;
  background: ${(props) => props.$background};
  position: relative;
  display: flex;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const TwoTitleBlockSmallTitle = styled.div`
  font-size: 17px;
  top: 15px;
  left: 22px;
  @media (max-width: 600px) {
    font-size: 16px;
    top: 15px;
    left: 20px;
  }
  @media (max-width: 450px) {
    font-size: 15px;
    top: 15px;
    left: 20px;
  }
  @media (max-width: 392px) {
    font-size: 14px;
    top: 15px;
    left: 18px;
  }
  font-weight: 500;
  color: ${(props) => props.color};
  position: absolute;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const TwoTitleBlockSmallContent = styled.div`
  font-size: 30px;
  bottom: 22px;
  left: 22px;
  @media (max-width: 600px) {
    font-size: 28px;
    bottom: 20px;
    left: 20px;
  }
  @media (max-width: 450px) {
    font-size: 25px;
    bottom: 18px;
    left: 20px;
  }
  @media (max-width: 392px) {
    font-size: 24px;
    bottom: 15px;
    left: 18px;
  }
  font-weight: 600;
  color: ${(props) => props.color};
  position: absolute;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;
