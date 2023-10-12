import { InputProp } from '@/types/Input';
import React from 'react';
import styled from 'styled-components';

export type OutlineInputT = {
  color: string;
  fontsize: number;
  bordercolor: string;
};

const OutlineInputElement = styled.input<OutlineInputT>`
  width: 100%;
  min-width: 70px;
  height: 100%;
  min-height: 30px;
  font-size: ${(props) => `${props.fontsize}px`};
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.bordercolor};
  border-radius: 5px;
  text-align: left;

  &:focus {
    border: 1.5px solid #222;
  }
`;

const OutlineInput = ({
  placeholder,
  updateInput,
  submitInput,
  currentValue,
  color,
  fontsize: fontsize,
  bordercolor,
}: InputProp & OutlineInputT) => {
  return (
    <OutlineInputElement
      placeholder={placeholder}
      onChange={(event) => updateInput(event)}
      onKeyDown={submitInput}
      color={color}
      fontsize={fontsize}
      bordercolor={bordercolor}
      value={currentValue || ''}
    />
  );
};

export default OutlineInput;
