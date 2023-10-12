'use client';

import styled from 'styled-components';
import ChallengesCarousel from './ChallengesCarousel';
import allChallengesData from '../../../testData/allChallenges.json';
import { colors } from '@/styles/color';
import { useEffect } from 'react';

// navigation = home에서 모든 챌린지를 보여주는 창에서 보여지는 모습
// ChallengeCarousel에 해시태그(ex. #Diet)도 포함한 것
// allChallengesData는 test data

interface IBeforeRegisterChallenge {
  hashTag: string;
}

export default function BeforeRegisterChallenge({
  hashTag,
}: IBeforeRegisterChallenge) {
  useEffect(() => {
    //탭 표시바 위치 지정
    const setMarginTop = () => {
      const element = document.querySelector('.css-1m9128y') as HTMLElement;
      if (element) {
        element.style.setProperty('margin-top', '15px');
        element.style.setProperty('position', 'relative');
      }
    };

    setMarginTop();
    window.addEventListener('resize', () => {
      setMarginTop;
    });
  }, []);

  return (
    <ChallengeSection>
      <ChallengeHashTag>#{hashTag}</ChallengeHashTag>
      <ChallengesCarousel data={allChallengesData} />
    </ChallengeSection>
  );
}

const ChallengeSection = styled.div`
  height: 375px;
  @media (max-width: 600px) {
    height: 325px;
  }
  @media (max-width: 450px) {
    height: 275px;
  }
  @media (max-width: 390px) {
    height: 245px;
  }
  width: 90%;

  /* border: 1px solid green;
  box-sizing: border-box; */
`;

const ChallengeHashTag = styled.div`
  font-size: 50px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    font-size: 40px;
    margin-bottom: 15px;
  }
  @media (max-width: 450px) {
    font-size: 34px;
    margin-bottom: 11px;
  }
  @media (max-width: 390px) {
    font-size: 30px;
    margin-bottom: 10px;
  }
  font-weight: 800;
  color: ${colors.black};

  /* border: 1px solid green;
  box-sizing: border-box; */
`;
