import React, { useState } from 'react';
import styled from 'styled-components';

type Container = {
  title: string;
  onClickHandler: (text: string) => void;
};

type Presenter = {
  $color: string;
  $backgroundcolor: string;
  $borderradius600: number;
  $borderradius450: number;
  $borderradius392: number;
  $paddinghorizontal600: number;
  $paddinghorizontal450: number;
  $paddinghorizontal392: number;
  $paddingvertical600?: number;
  $paddingvertical450?: number;
  $paddingvertical392?: number;
  $fontsize600: number;
  $fontsize450: number;
  $fontsize392: number;
};

const BasicTag = ({
  title,
  onClickHandler,
  $color,
  $backgroundcolor,
  $borderradius600: $borderradius600,
  $borderradius450: $borderradius450,
  $borderradius392: $borderradius392,
  $paddinghorizontal600: $paddinghorizontal600,
  $paddinghorizontal450: $paddinghorizontal450,
  $paddinghorizontal392: $paddinghorizontal392,
  $fontsize600: $fontsize600,
  $fontsize450: $fontsize450,
  $fontsize392: $fontsize392,
}: Container & Presenter) => {
  return (
    <BasicTagWrapper
      onClick={() => onClickHandler(title)}
      $color={$color}
      $backgroundcolor={$backgroundcolor}
      $borderradius600={$borderradius600}
      $borderradius450={$borderradius450}
      $borderradius392={$borderradius392}
      $paddinghorizontal600={$paddinghorizontal600}
      $paddinghorizontal450={$paddinghorizontal450}
      $paddinghorizontal392={$paddinghorizontal392}
      $fontsize600={$fontsize600}
      $fontsize450={$fontsize450}
      $fontsize392={$fontsize392}
    >
      {title}
    </BasicTagWrapper>
  );
};

export default BasicTag;

const BasicTagWrapper = styled.div<Presenter>`
  width: fit-content;
  height: 100%;
  font-weight: 400;
  background-color: ${(props) => props.$backgroundcolor};
  color: ${(props) => props.$color};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  border-radius: ${(props) => `${props.$borderradius600}px`};
  padding-left: ${(props) => `${props.$paddinghorizontal600}px`};
  padding-right: ${(props) => `${props.$paddinghorizontal600}px`};
  font-size: ${(props) => `${props.$fontsize600}px`};

  @media (max-width: 600px) {
    border-radius: ${(props) => `${props.$borderradius600}px`};
    padding-left: ${(props) => `${props.$paddinghorizontal600}px`};
    padding-right: ${(props) => `${props.$paddinghorizontal600}px`};
    font-size: ${(props) => `${props.$fontsize600}px`};
  }
  @media (max-width: 450px) {
    border-radius: ${(props) => `${props.$borderradius450}px`};
    padding-left: ${(props) => `${props.$paddinghorizontal450}px`};
    padding-right: ${(props) => `${props.$paddinghorizontal450}px`};
    font-size: ${(props) => `${props.$fontsize450}px`};
  }
  @media (max-width: 392px) {
    border-radius: ${(props) => `${props.$borderradius392}px`};
    padding-left: ${(props) => `${props.$paddinghorizontal392}px`};
    padding-right: ${(props) => `${props.$paddinghorizontal392}px`};
    font-size: ${(props) => `${props.$fontsize392}px`};
  }
`;
