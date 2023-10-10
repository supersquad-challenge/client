import React from 'react';
import styled from 'styled-components';

import { useRecoilState } from 'recoil';
import BasicInput from '@/components/base/input/BasicInput';
import { useTheme } from '@/hook/useTheme';
import DeleteIcon from '@/components/icons/DeleteIcon';

type Props = {
  title: string;
  placeholder: string;
  updateInput: () => void;
  submitInput: (text: string) => void;
  color: string;
  fontSize: number;
  currentValue: string;
};

const ModalContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(195, 195, 195, 0.3);
  z-index: 999;
`;
const ModalInner = styled.div`
  width: 50%;
  min-width: 600px;
  height: 400px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 10px 20px 60px #3434344b;
  border-radius: 10px;
`;

const ModalHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

const ModalTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
`;

const CloseButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: #ccc;
  }
`;

const ModalBody = styled.div`
  width: 100%;
  padding: 10px 20px;
`;

const PostModal = ({
  title,
  placeholder,
  updateInput,
  submitInput,
  color,
  fontSize,
  currentValue,
}: Props) => {
  const themeColor = useTheme();

  return (
    <ModalContainer>
      <ModalInner>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton>
            <DeleteIcon color={themeColor['--gray-4']} />
          </CloseButton>
        </ModalHeader>
        <ModalBody>
          <BasicInput
            placeholder={placeholder}
            updateInput={() => {}}
            submitInput={() => {}}
            color="#222"
            fontSize={fontSize}
            currentValue={currentValue}
          />
        </ModalBody>
      </ModalInner>
    </ModalContainer>
  );
};

export default PostModal;
