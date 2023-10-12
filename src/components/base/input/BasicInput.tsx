import React from 'react';
import styled from 'styled-components';
import { InputProp } from '@/types/Input';

type BasicInputT = {
  color: string;
  fontsize: number;
};

const BasicInputElement = styled.input<BasicInputT>`
  width: 100%;
  min-width: 70px;
  height: 100%;
  min-height: 30px;
  font-size: ${(props) => `${props.fontsize}px`};
  color: ${(props) => props.color};
  border: none;
  text-align: left;
  padding-left: 12px;

  &::placeholder {
    color: #cccccc;
  }
`;

const BasicInput = ({
  placeholder,
  updateInput,
  submitInput,
  currentValue,
  color,
  fontsize: fontsize,
}: InputProp & BasicInputT) => {
  return (
    <BasicInputElement
      type="text"
      maxLength={40}
      placeholder={placeholder}
      onChange={(event) => updateInput(event)}
      onKeyUp={(event) => submitInput(event)}
      color={color}
      fontsize={fontsize}
      value={currentValue}
    />
  );
};

export default BasicInput;
