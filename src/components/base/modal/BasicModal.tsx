import { IsOpenProps } from '@/interface';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { ReactNode } from 'react';

interface IBasicModal {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: ReactNode;
}

const BasicModal = ({ isOpen, setIsOpen, title, children }: IBasicModal) => {
  return (
    <Modal $isopen={isOpen}>
      <CloseIcon onClick={() => setIsOpen(false)} />
      <ModalTitle>{title}</ModalTitle>
      {children}
    </Modal>
  );
};

export default BasicModal;

const Modal = styled.div<IsOpenProps>`
  @media (max-width: 600px) {
    height: 450px;
  }
  @media (max-width: 450px) {
    height: 410px;
  }
  @media (max-width: 392px) {
    height: 390px;
  }
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1); // 그림자 추가

  position: fixed;
  z-index: 200;
  bottom: 0;
  left: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;

  transform: ${(props) =>
    props.$isopen ? 'translateY(0)' : 'translateY(100%)'};
  transition: transform 0.3s ease-in-out;
`;

const CloseIcon = styled(AiOutlineClose)`
  @media (max-width: 600px) {
    left: 30px;
    top: 30px;
    width: 30px;
    height: 30px;
  }
  @media (max-width: 450px) {
    left: 26px;
    top: 26px;
    width: 26px;
    height: 26px;
  }
  @media (max-width: 392px) {
    left: 24px;
    top: 24px;
    width: 24px;
    height: 24px;
  }

  position: absolute;
`;

const ModalTitle = styled.div`
  @media (max-width: 600px) {
    margin-top: 60px;
    font-size: 32px;
  }
  @media (max-width: 450px) {
    margin-top: 50px;
    font-size: 28px;
  }
  @media (max-width: 392px) {
    margin-top: 46px;
    font-size: 25px;
  }

  font-weight: 700;

  color: black;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  /* border: 1px solid green;
  box-sizing: border-box; */
`;
