import React, { useState } from 'react';
import styled from 'styled-components';

type Container = {
  title: string;
  onClickHandler: (text: string) => void;
};

type Presenter = {
  color: string;
  backgroundcolor: string;
  borderRadius600: number;
  borderRadius450: number;
  borderRadius392: number;
  paddingHorizontal600: number;
  paddingHorizontal450: number;
  paddingHorizontal392: number;
  paddingVertical600?: number;
  paddingVertical450?: number;
  paddingVertical392?: number;
  fontSize600: number;
  fontSize450: number;
  fontSize392: number;
};

const BasicTag = ({
  title,
  onClickHandler,
  color,
  backgroundcolor,
  borderRadius600,
  borderRadius450,
  borderRadius392,
  paddingHorizontal600,
  paddingHorizontal450,
  paddingHorizontal392,
  fontSize600,
  fontSize450,
  fontSize392,
}: Container & Presenter) => {
  return (
    <BasicTagWrapper
      onClick={() => onClickHandler(title)}
      color={color}
      backgroundcolor={backgroundcolor}
      borderRadius600={borderRadius600}
      borderRadius450={borderRadius450}
      borderRadius392={borderRadius392}
      paddingHorizontal600={paddingHorizontal600}
      paddingHorizontal450={paddingHorizontal450}
      paddingHorizontal392={paddingHorizontal392}
      fontSize600={fontSize600}
      fontSize450={fontSize450}
      fontSize392={fontSize392}
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
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 600px) {
    border-radius: ${(props) => `${props.borderRadius600}px`};
    padding-left: ${(props) => `${props.paddingHorizontal600}px`};
    padding-right: ${(props) => `${props.paddingHorizontal600}px`};
    font-size: ${(props) => `${props.fontSize600}px`};
  }
  @media (max-width: 450px) {
    border-radius: ${(props) => `${props.borderRadius450}px`};
    padding-left: ${(props) => `${props.paddingHorizontal450}px`};
    padding-right: ${(props) => `${props.paddingHorizontal450}px`};
    font-size: ${(props) => `${props.fontSize450}px`};
  }
  @media (max-width: 392px) {
    border-radius: ${(props) => `${props.borderRadius392}px`};
    padding-left: ${(props) => `${props.paddingHorizontal392}px`};
    padding-right: ${(props) => `${props.paddingHorizontal392}px`};
    font-size: ${(props) => `${props.fontSize392}px`};
  }
`;
