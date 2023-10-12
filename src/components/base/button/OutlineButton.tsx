import React from 'react';
import { ButtonProp } from '@/types/Button';
import styled from 'styled-components';

type OutlineButtonT = {
  color: string;
  fontsize: number;
  bordercolor: string;
};

const OutlineButton = ({
  title,
  onClickHandler,
  color,
  fontsize: fontsize,
  bordercolor,
}: ButtonProp & OutlineButtonT) => {
  const OutlineButton = styled.button<OutlineButtonT>`
    width: 100%;
    min-width: 50px;
    height: 100%;
    min-height: 20px;
    font-size: ${(props) => `${props.fontsize}px`};
    color: ${(props) => props.color};
    text-align: center;
    border: 1px solid ${(props) => props.bordercolor};

    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.bordercolor};
      color: #fff;
    }
  `;

  return (
    <OutlineButton
      color={color}
      fontsize={fontsize}
      bordercolor={bordercolor}
      onClick={() => onClickHandler()}
    >
      {title}
    </OutlineButton>
  );
};

export default OutlineButton;
