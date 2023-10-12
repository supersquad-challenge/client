import React from 'react';
import styled from 'styled-components';
import { TextareaProp } from '@/types/Textarea';

type BasicTextareaT = {
  color: string;
  fontsize: number;
};

const BasicTextareaElement = styled.textarea<BasicTextareaT>`
  width: 100%;
  min-width: 400px;
  height: 100%;
  min-height: 120px;
  font-size: ${(props) => `${props.fontsize}px`};
  color: ${(props) => props.color};
  border: 1px solid #ccc;
  border-radius: 10px;
  line-height: ${(props) => `${props.fontsize + 10}px`};
  letter-spacing: 1.5px;
  padding: 10px;
  resize: none;

  &::placeholder {
    color: #cccccc;
  }
`;

const BasicTextarea = ({
  placeholder,
  updateInput,
  currentValue,
  color,
  fontsize: fontsize,
}: TextareaProp & BasicTextareaT) => {
  return (
    <BasicTextareaElement
      placeholder={placeholder}
      onChange={updateInput}
      color={color}
      fontsize={fontsize}
      value={currentValue || ''}
    />
  );
};

export default BasicTextarea;
