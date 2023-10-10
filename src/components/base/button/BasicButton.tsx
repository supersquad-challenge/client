import React from 'react'
import styled from 'styled-components'
import { ButtonProp } from '@/types/Button';

type BasicButtonT = {
  color: string;
  fontSize: number;
}


const BasicButton = ({ title, onClickHandler, color, fontSize }: BasicButtonT & ButtonProp) => {
  
  const BasicButton = styled.button<BasicButtonT>`
    width: 100%;
    min-width: 50px;    
    height: 100%;
    min-height: 20px;
    font-size: ${(props) => `${(props.fontSize)}px`};
    color: ${(props) => props.color};
    text-align: center;
    border: none;
    transition: all ease .2s;

    &:hover {
      cursor: pointer;
    }
  `

  return (
    <BasicButton 
      color={color} 
      fontSize={fontSize}
      onClick={() => onClickHandler()}
    >
      {title}
    </BasicButton>
  )
}

export default BasicButton