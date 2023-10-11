import BasicTag from '@/components/base/tag/BasicTag';
import { colors } from '@/styles/color';
import styled from 'styled-components';

interface IChallengeTwoTags {
  tag1: string;
  tag2: string;
}

const ChallengeTwoTags = ({ tag1, tag2 }: IChallengeTwoTags) => {
  return (
    <TagsContainer>
      <ChallengeTag
        title={tag1}
        onClickHandler={() => {}}
        backgroundcolor={`${colors.lightGray}`}
      />
      <ChallengeTag
        title={tag2}
        onClickHandler={() => {}}
        backgroundcolor={`${colors.lightPurple}`}
      />
    </TagsContainer>
  );
};

export default ChallengeTwoTags;

const TagsContainer = styled.div`
  @media (max-width: 600px) {
    width: 440px;
    height: 36px;
  }
  @media (max-width: 450px) {
    width: 370px;
    height: 30px;
  }
  @media (max-width: 392px) {
    width: 345px;
    height: 27px;
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
        color={`${colors.black}`}
        backgroundcolor={backgroundcolor}
        borderRadius600={15}
        borderRadius450={11}
        borderRadius392={10}
        paddingHorizontal600={15}
        paddingHorizontal450={11}
        paddingHorizontal392={10}
        paddingVertical600={6}
        paddingVertical450={4}
        paddingVertical392={3}
        fontSize600={18}
        fontSize450={16}
        fontSize392={14}
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
