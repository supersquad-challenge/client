import React from 'react'
import styled from 'styled-components'
import { ButtonProp } from '@/types/Button';

type BasicButtonT = {
  color: string;
  fontSize: number;
}


const Button = styled.button<BasicButtonT>`
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

const BasicButton = ({ title, onClickHandler, color, fontSize }: BasicButtonT & ButtonProp) => {

  return (
    <Button 
      color={color} 
      fontSize={fontSize}
      onClick={() => onClickHandler()}
    >
      {title}
    </Button>
  )
}

export default BasicButton