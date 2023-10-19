import React from 'react'
import styled from 'styled-components'
import { IoIosNotifications } from 'react-icons/io'

type Props = {
  title: string
}

const PopupModal = ({ title }: Props) => {

  return (
    <ModalContainer>
      <ModalInner>
        <IoIosNotifications
          size='20'
          color='#8A01D7'
        />
        <ModalTitle>
          {title}
        </ModalTitle>
      </ModalInner>
    </ModalContainer>
  )
}

const ModalContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.4);
`

const ModalTitle = styled.span`
  font-weight: 500;
  font-size: 16px;
  margin-left: 10px;
  padding-bottom: 2px;
  color:#8A01D7;
`

const ModalInner = styled.div`
  width: auto;
  height: auto;
  min-width: 250px;
  max-width: 400px;
  padding: 10px 20px;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 5px 5px 50px #818181;
  border-radius: 10px;

  animation: appearIn;
  animation-duration: 2.5s;
  animation-timing-function: ease-in-out;

  @keyframes appearIn {
    0% {
      opacity: 0;
      transform: translate(-50%, -100%);
    }
    10% {
      opacity: 1;
      transform: translate(-50%, 0%);
    }
    90% {
      opacity: 1;
      transform: translate(-50%, 0%);    
  }
    100% {
      opacity: 0;
      transform: translate(-50%, -100%);    
  }
  }
`

export default PopupModal