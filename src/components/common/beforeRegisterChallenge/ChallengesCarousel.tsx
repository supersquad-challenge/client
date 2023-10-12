import React, { ReactElement } from 'react';
import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';
import {
  AllChallengeProps,
  ImageProps,
  IndexProps,
  OnClickProps,
} from '@/interface';
import { useRouter } from 'next/router';
import { colors } from '@/styles/color';
import BasicTag from '../../base/tag/BasicTag';

interface ChallengesCarouselProps {
  data: AllChallengeProps[];
}

const ChallengesCarousel: React.FC<ChallengesCarouselProps> = ({ data }) => {
  const items: ReactElement[] = data.map((datum, index) => (
    <Challenge onClick={() => {}} datum={datum} key={index} />
  ));

  return (
    <Carousel
      autoPlay={false}
      navButtonsAlwaysVisible={false}
      animation="slide"
      cycleNavigation={true}
    >
      {chunkArray([...items], 2).map((chunk, index) => (
        <Item key={index} chunk={chunk} />
      ))}
    </Carousel>
  );
};

export default ChallengesCarousel;

function chunkArray(
  myArray: ReactElement[],
  chunk_size: number,
): ReactElement[][] {
  let results: ReactElement[][] = [];

  while (myArray.length) {
    results.push(myArray.splice(0, chunk_size));
  }

  return results;
}

interface ItemProps {
  chunk: ReactElement[];
}

const Item: React.FC<ItemProps> = ({ chunk }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      {chunk.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};
interface ChallengeProps extends OnClickProps {
  datum: AllChallengeProps;
}

const Challenge = ({ onClick, datum }: ChallengeProps) => {
  return (
    <ChallengeWrapper onClick={onClick}>
      <ChallengeThumbnail imageUrl="/dietThumbnail.svg" />
      <ChallengeTitle>{datum.challengeName}</ChallengeTitle>
      <ChallengePeriod>
        {datum.challengeStartsAt} -{datum.challengeEndsAt}
      </ChallengePeriod>
      <div
        style={{
          display: 'flex',
          marginTop: '5px',
        }}
      >
        <ChallengeParticipants>
          {datum.challengeParticipantsCount} particiants
        </ChallengeParticipants>
        <ChallengeTotalDeposit>
          ${datum.challengeTotalDeposit}
        </ChallengeTotalDeposit>
      </div>
      <ChallengeTagContainer>
        <ChallengeTag
          title="Everyday"
          onClickHandler={() => {}}
          backgroundcolor={`${colors.lightGray}`}
        />
        <ChallengeTag
          title="1 Week"
          onClickHandler={() => {}}
          backgroundcolor={`${colors.lightPurple}`}
        />
      </ChallengeTagContainer>
    </ChallengeWrapper>
  );
};

const ChallengeWrapper = styled.div`
  @media (max-width: 600px) {
    width: 205px;
    height: 220px;
  }
  @media (max-width: 450px) {
    width: 175px;
    height: 180px;
  }
  @media (max-width: 392px) {
    width: 160px;
    height: 165px;
  }
  color: ${colors.black};
  position: relative;

  /* border: 1px solid green;
  box-sizing: border-box; */
`;

const ChallengeThumbnail: React.FC<ImageProps> = ({ imageUrl }) => {
  return (
    <ChallengeThumbnailWrapper>
      <ChallengeThumbnailImage src={imageUrl} />
    </ChallengeThumbnailWrapper>
  );
};
const ChallengeThumbnailWrapper = styled.div`
  @media (max-width: 600px) {
    width: 205px; // 원하는 크기로 설정
    height: 131px;
  }
  @media (max-width: 450px) {
    /* width: 184px; // 원하는 크기로 설정 */
    width: 175px; // 원하는 크기로 설정
    height: 110px;
  }
  @media (max-width: 392px) {
    width: 160px; // 원하는 크기로 설정
    height: 100px;
  }
  overflow: hidden; // 이미지 영역을 넘어가는 부분은 보이지 않도록 설정

  /* border: 1px solid green;
  box-sizing: border-box; */
`;

const ChallengeThumbnailImage = styled.img`
  @media (max-width: 600px) {
    width: 205px;
  }
  @media (max-width: 450px) {
    /* width: 184px; */
    width: 175px;
  }
  @media (max-width: 392px) {
    width: 160px;
  }
  object-fit: cover; // 이미지 비율에 맞게 잘리도록 설정
`;

const ChallengeTitle = styled.div`
  @media (max-width: 600px) {
    font-size: 24px;
    margin-top: 8px;
  }
  @media (max-width: 450px) {
    font-size: 20px;
    margin-top: 6px;
  }
  @media (max-width: 392px) {
    font-size: 18px;
    margin-top: 5px;
  }
  color: ${colors.black};
  font-weight: 500;

  width: fit-content;
`;

const ChallengePeriod = styled.div`
  @media (max-width: 600px) {
    width: 245px;
    font-size: 14px;
    margin-top: 8px;
  }
  @media (max-width: 450px) {
    width: 184px;
    font-size: 11px;
    margin-top: 6px;
  }
  @media (max-width: 392px) {
    width: 160px;
    font-size: 10px;
    margin-top: 5px;
  }
  font-weight: 500;
  color: ${colors.gray};

  /* border: 1px solid green;
  box-sizing: border-box; */
`;

const ChallengeParticipants = styled.div`
  @media (max-width: 600px) {
    height: 18px;
    font-size: 14px;
  }
  @media (max-width: 450px) {
    height: 14px;
    font-size: 11px;
  }
  @media (max-width: 392px) {
    height: 12px;
    font-size: 10px;
  }
  color: ${colors.black};
  font-weight: 500;

  /* border: 1px solid green;
  box-sizing: border-box; */
`;

const ChallengeTotalDeposit = styled.div`
  @media (max-width: 600px) {
    height: 18px;

    font-size: 15px;
    margin-left: 15px;
  }
  @media (max-width: 450px) {
    height: 14px;

    font-size: 11px;
    margin-left: 11px;
  }
  @media (max-width: 392px) {
    height: 12px;

    font-size: 10px;
    margin-left: 10px;
  }
  color: ${colors.black};
  font-weight: 500;

  /* border: 1px solid green;
  box-sizing: border-box; */
`;

const ChallengeTagContainer = styled.div`
  @media (max-width: 600px) {
    left: 9px;
    top: 12px;
  }
  @media (max-width: 450px) {
    left: 7px;
    top: 9px;
  }
  @media (max-width: 392px) {
    left: 6px;
    top: 8px;
  }
  width: fit-content;
  height: fit-content;

  color: ${colors.lightGray};

  display: flex;

  position: absolute;
  z-index: 1;

  /* border: 1px solid green;
  box-sizing: border-box; */
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
        $fontsize600={12}
        $fontsize450={9}
        $fontsize392={8}
      />
    </ChallengeTagWrapper>
  );
};

const ChallengeTagWrapper = styled.div`
  @media (max-width: 600px) {
    height: 24px;
  }
  @media (max-width: 450px) {
    height: 18px;
  }
  @media (max-width: 392px) {
    height: 16px;
  }
  width: fit-content;
  margin-right: 5px;
`;
