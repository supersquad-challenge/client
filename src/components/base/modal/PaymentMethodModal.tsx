import { useState } from 'react';
import BasicModal from './BasicModal';
import styled from 'styled-components';
import { colors } from '@/styles/color';
import { IsClickedProps, ModalOpenProps } from '@/interface';
import BasicButton from '../button/BasicButton';

const PaymentMethodModal = ({
  isModalOpen,
  setIsModalOpen,
}: ModalOpenProps) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  return (
    <BasicModal
      isOpen={isModalOpen}
      setIsOpen={setIsModalOpen}
      title="You are paying with"
    >
      <ModalPaymentMethodContainer>
        <ModalPaymentMethodWrapper>
          <div
            style={{
              width: 'fit-content',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <CheckButton
              $isclicked={paymentMethod == 'crypto'}
              onClick={() => {
                if (paymentMethod == '' || paymentMethod == 'cash') {
                  setPaymentMethod('crypto');
                } else {
                  setPaymentMethod('');
                }
              }}
            />
          </div>
          <div style={{ marginLeft: '20px' }}>
            <PaymentMethod>a crypto Wallet</PaymentMethod>
            <PaymentMethodDetail>
              Deposit $USDC to enforce your goals
            </PaymentMethodDetail>
          </div>
        </ModalPaymentMethodWrapper>
        <ModalPaymentMethodWrapper style={{ marginTop: '20px' }}>
          <div
            style={{
              width: 'fit-content',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <CheckButton
              $isclicked={paymentMethod == 'cash'}
              onClick={() => {
                if (paymentMethod == '' || paymentMethod == 'crypto') {
                  setPaymentMethod('cash');
                } else {
                  setPaymentMethod('');
                }
              }}
            />
          </div>
          <div style={{ marginLeft: '20px' }}>
            <PaymentMethod>already deposited cash</PaymentMethod>
            <PaymentMethodDetail>Sign up to continue</PaymentMethodDetail>
          </div>
        </ModalPaymentMethodWrapper>
      </ModalPaymentMethodContainer>
      <BasicButtonContainer>
        <BasicButton
          title="Go On"
          onClickHandler={() => {}}
          $color="white"
          $backgroundcolor={colors.black}
          $borderradius={30}
          $fontsize={22}
        />
      </BasicButtonContainer>
    </BasicModal>
  );
};

export default PaymentMethodModal;

const ModalPaymentMethodContainer = styled.div`
  @media (max-width: 600px) {
    margin-top: 30px;
    width: 455px;
  }
  @media (max-width: 450px) {
    margin-top: 30px;
    width: 380px;
  }
  @media (max-width: 392px) {
    margin-top: 30px;
    width: 343px;
  }

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const ModalPaymentMethodWrapper = styled.div`
  @media (max-width: 600px) {
    height: 95px;
  }
  @media (max-width: 450px) {
    height: 75px;
  }
  @media (max-width: 392px) {
    height: 56px;
  }
  width: 100%;
  display: flex;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const CheckButton = styled.div<IsClickedProps>`
  @media (max-width: 600px) {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  @media (max-width: 450px) {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  @media (max-width: 392px) {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  z-index: 201;
  background-color: ${(props) =>
    props.$isclicked ? `${colors.lightPurple}` : 'white'};

  border: ${(props) => (!props.$isclicked ? `${colors.lightGray}` : undefined)};
  box-sizing: border-box;
`;

const PaymentMethod = styled.div`
  @media (max-width: 600px) {
    margin-top: 9px;
    font-size: 24px;
  }
  @media (max-width: 450px) {
    margin-top: 5px;
    font-size: 20px;
  }
  @media (max-width: 392px) {
    margin-top: 3px;
    font-size: 18px;
  }
  font-weight: 500;
  /* border: 1px solid green;
  box-sizing: border-box; */
`;

const PaymentMethodDetail = styled.div`
  @media (max-width: 600px) {
    font-size: 20px;
    margin-top: 18px;
  }
  @media (max-width: 450px) {
    font-size: 16px;
    margin-top: 13px;
  }
  @media (max-width: 392px) {
    font-size: 14px;
    margin-top: 10px;
  }
  font-weight: 400;
  /* border: 1px solid green;
  box-sizing: border-box; */
`;

const BasicButtonContainer = styled.div`
  @media (max-width: 600px) {
    width: 350px;
    height: 70px;
  }
  @media (max-width: 450px) {
    width: 300px;
    height: 60px;
  }
  @media (max-width: 392px) {
    width: 280px;
    height: 56px;
  }
  bottom: 20px;
  position: absolute;
`;
