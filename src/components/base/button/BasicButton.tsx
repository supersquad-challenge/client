import React from 'react';
import styled from 'styled-components';
import { ButtonProp } from '@/types/Button';

type BasicButtonT = {
  $color: string;
  $fontsize: number;
  $borderradius: number;
  $backgroundcolor: string;
};

const BasicButton = ({
  title,
  onClickHandler,
  $color: color,
  $fontsize: fontsize,
  $borderradius: borderRadius,
  $backgroundcolor: backgroundColor,
}: BasicButtonT & ButtonProp) => {
  return (
    <BasicButtonWrapper
      $color={color}
      $fontsize={fontsize}
      onClick={() => onClickHandler()}
      $borderradius={borderRadius}
      $backgroundcolor={backgroundColor}
    >
      {title}
    </BasicButtonWrapper>
  );
};

export default BasicButton;

const BasicButtonWrapper = styled.button<BasicButtonT>`
  width: 100%;
  min-width: 50px;
  height: 100%;
  min-height: 20px;
  font-size: ${(props) => `${props.$fontsize}px`};
  color: ${(props) => props.$color};
  text-align: center;
  border: none;
  transition: all ease 0.2s;
  border-radius: ${(props) => `${props.$borderradius}px`};
  background-color: ${(props) => props.$backgroundcolor};

  &:hover {
    cursor: pointer;
  }
`;
