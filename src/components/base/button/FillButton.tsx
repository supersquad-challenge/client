import React from 'react'
import { ButtonProp } from '@/types/Button'
import styled from 'styled-components'

type FillButtonT = {
  color: string;
  fontSize: number;
  backgroundcolor: string;
}

const FillButton = ({ title, onClickHandler, color, fontSize, backgroundcolor }: ButtonProp & FillButtonT) => {

const FillButton = styled.button<FillButtonT>`
    width: 100%;
    min-width: 50px;    
    height: 100%;
    min-height: 20px;
    font-size: ${(props) => `${(props.fontSize)}px`};
    color: ${(props) => props.color};
    text-align: center;
    line-height: 100%;
    background-color: ${(props) => props.backgroundcolor};
    border: none;

    &:hover {
      cursor: pointer;
      font-weight: 500;
      background-color: ${(props) => props.color};
      color: ${(props) => props.backgroundcolor};
    }
  `
  return (
    <FillButton
      color={color}
      fontSize={fontSize}
      backgroundcolor={backgroundcolor}
      onClick={() => onClickHandler()}
    >
      {title}
    </FillButton>
  )
}

export default FillButton