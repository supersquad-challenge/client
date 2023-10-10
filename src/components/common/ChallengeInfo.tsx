import { TitleContentProps } from '@/interface';
import styled from 'styled-components';
import Block from '../base/block/block';

interface IChallengeInfo extends TitleContentProps {
  contentColor: string;
}

const ChallengeInfo = ({ title, content, contentColor }: IChallengeInfo) => {
  return (
    <Block backgroundColor="white">
      <ChallengeInfoTitle>{title}</ChallengeInfoTitle>
      <ChallengeInfoContent color={contentColor}>
        {content}
      </ChallengeInfoContent>
    </Block>
  );
};

export default ChallengeInfo;

const ChallengeInfoTitle = styled.div`
  @media (max-width: 600px) {
    font-size: 18px;
  }
  @media (max-width: 450px) {
    font-size: 16px;
  }
  @media (max-width: 392px) {
    font-size: 14px;
  }
  font-weight: 400;
  margin-left: 16px;
  margin-top: 12px;
  width: fit-content;
  color: black;

  /* border: 1px solid green;
  box-sizing: border-box; */
`;

const ChallengeInfoContent = styled.div`
  @media (max-width: 600px) {
    font-size: 22px;
  }
  @media (max-width: 450px) {
    font-size: 20px;
  }
  @media (max-width: 392px) {
    font-size: 18px;
  }
  font-weight: 600;
  margin-left: 16px;
  margin-top: 10px;

  width: fit-content;
  color: ${(props) => props.color};
  //4번째꺼는 darkPurple

  /* border: 1px solid green;
  box-sizing: border-box; */
`;
