import { BackgroundProps, IndexProps } from '@/interface';
import { colors } from '@/styles/color';
import { ReactNode } from 'react';
import styled from 'styled-components';

export interface ITwoTitleBlock {
  title1: string;
  content1: string;
  title2: string;
  content2: string;
  children?: ReactNode;
  $background: string;
  /**
   * color1: title1, content1 font color
   */
  $color1: string;
  /**
   * color2: title2, content2 font color
   */
  $color2: string;
}

const TwoTitleBlock = ({
  title1,
  content1,
  title2,
  content2,
  children,
  $background: background,
  $color1: color1,
  $color2: color2,
}: ITwoTitleBlock) => {
  return (
    <MyStatusWrapper $background={background}>
      <MyStatusSmallTitle color={color1} $index={0}>
        {title1}
      </MyStatusSmallTitle>
      <MyStautsSmallContent color={color1} $index={0}>
        {content1}
      </MyStautsSmallContent>
      <MyStatusSmallTitle color={color2} $index={1}>
        {title2}
      </MyStatusSmallTitle>
      <MyStautsSmallContent color={color2} $index={1}>
        {content2}
      </MyStautsSmallContent>
      {children}
    </MyStatusWrapper>
  );
};

export default TwoTitleBlock;

export const MyStatusWrapper = styled.div<BackgroundProps>`
  @media (max-width: 600px) {
    width: 380px;
    height: 110px;
    border-radius: 20px;
  }
  @media (max-width: 450px) {
    width: 360px;
    height: 100px;
    border-radius: 20px;
  }
  @media (max-width: 392px) {
    width: 345px;
    height: 95px;
    border-radius: 20px;
  }
  margin-top: 10px;
  background: ${(props) => props.$background};
  position: relative;
  display: flex;
  justify-content: center;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

export const MyStatusSmallTitle = styled.div<IndexProps>`
  @media (max-width: 600px) {
    font-size: 16px;
    top: 15px;
    left: ${(props) => props.$index == 0 && '30px'};
    right: ${(props) => props.$index == 1 && '30px'};
  }
  @media (max-width: 450px) {
    font-size: 15px;
    top: 15px;
    left: ${(props) => props.$index == 0 && '26px'};
    right: ${(props) => props.$index == 1 && '26px'};
  }
  @media (max-width: 392px) {
    font-size: 14px;
    top: 15px;
    left: ${(props) => props.$index == 0 && '24px'};
    right: ${(props) => props.$index == 1 && '24px'};
  }
  font-weight: 500;
  color: ${(props) => props.color};
  position: absolute;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

export const MyStautsSmallContent = styled.div<IndexProps>`
  @media (max-width: 600px) {
    font-size: 28px;
    bottom: 20px;
    left: ${(props) => props.$index == 0 && '30px'};
    right: ${(props) => props.$index == 1 && '30px'};
  }
  @media (max-width: 450px) {
    font-size: 25px;
    bottom: 18px;
    left: ${(props) => props.$index == 0 && '26px'};
    right: ${(props) => props.$index == 1 && '26px'};
  }
  @media (max-width: 392px) {
    font-size: 24px;
    bottom: 15px;
    left: ${(props) => props.$index == 0 && '24px'};
    right: ${(props) => props.$index == 1 && '24px'};
  }
  font-weight: 600;
  color: ${(props) => props.color};
  position: absolute;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;
