import { ModalOpenProps } from '@/interface';
import BasicModal from './BasicModal';
import styled from 'styled-components';
import { useState } from 'react';
import DepositSlider from '@/components/common/DepositSlider';
import BasicButton from '../button/BasicButton';
import { colors } from '@/styles/color';

//api 연결부분이라 따로 템플릿화를 시켜놓지 않음.

const ChargeDepositModal = ({
  isModalOpen,
  setIsModalOpen,
}: ModalOpenProps) => {
  const [deposit, setDeposit] = useState(0);
  return (
    <BasicModal
      isOpen={isModalOpen}
      setIsOpen={setIsModalOpen}
      title="Win your goal"
    >
      <ModalChallengeInfoContainer>
        <ModalChallengeInfoWrapper>
          <div>Period</div>
          <div style={{ fontWeight: 700 }}>Sep 11st - Oct 11st</div>
        </ModalChallengeInfoWrapper>
        <ModalChallengeInfoWrapper>
          <div>Frequency</div>
          <div style={{ fontWeight: 700 }}>Everyday</div>
        </ModalChallengeInfoWrapper>
        <ModalChallengeInfoWrapper style={{ marginBottom: 0 }}>
          <div>Deposit</div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ fontWeight: 700, marginRight: 15 }}>0</div>
            <DepositSlider deposit={deposit} setDeposit={setDeposit} />
            <div style={{ fontWeight: 700, marginLeft: 15 }}>200</div>
          </div>
        </ModalChallengeInfoWrapper>
      </ModalChallengeInfoContainer>
      <DepositWrapper>${deposit} USDT</DepositWrapper>
      <UserAverageWrapper>
        Members deposit &nbsp;<OrangeText>$ 150 USDT </OrangeText>&nbsp;/ 3 week
        in average
      </UserAverageWrapper>
      <BasicButtonContainer>
        <BasicButton
          title="Charge Deposit"
          onClickHandler={() => {}}
          color="white"
          backgroundColor={colors.black}
          borderRadius={20}
          fontSize={16}
        />
      </BasicButtonContainer>
    </BasicModal>
  );
};

export default ChargeDepositModal;

const ModalChallengeInfoContainer = styled.div`
  @media (max-width: 600px) {
    margin-top: 30px;
    width: 420px;
  }
  @media (max-width: 450px) {
    margin-top: 30px;
    width: 340px;
  }
  @media (max-width: 392px) {
    margin-top: 30px;
    width: 320px;
  }

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const ModalChallengeInfoWrapper = styled.div`
  @media (max-width: 600px) {
    height: 30px;
    font-size: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: 450px) {
    height: 28px;
    font-size: 16px;
    margin-bottom: 20px;
  }
  @media (max-width: 392px) {
    height: 21px;
    font-size: 14px;
    margin-bottom: 20px;
  }
  font-weight: 500;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* border: 1px solid green;
  box-sizing: border-box; */
`;

const DepositWrapper = styled.div`
  @media (max-width: 600px) {
    width: 420px;
    height: 45px;

    margin-top: 16px;
    padding-left: 12px;

    border-radius: 10px;
  }
  @media (max-width: 450px) {
    width: 340px;
    height: 40px;

    margin-top: 20px;
    padding-left: 12px;

    border-radius: 9px;
  }
  @media (max-width: 392px) {
    width: 320px;
    height: 40px;

    margin-top: 20px;
    padding-left: 12px;

    border-radius: 8px;
  }

  display: flex;
  align-items: center;
  text-align: center;

  border: 1px solid #ececec;
`;

const UserAverageWrapper = styled.div`
  @media (max-width: 600px) {
    width: 420px;
    height: 22px;
    font-size: 14px;
  }
  @media (max-width: 450px) {
    width: 340px;
    height: 22px;
    font-size: 14px;
  }
  @media (max-width: 392px) {
    width: 320px;
    height: 22px;
    font-size: 12px;
  }
  color: #898989;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 10px;
`;

const OrangeText = styled.span`
  color: #eb4826;
`;

const BasicButtonContainer = styled.div`
  @media (max-width: 600px) {
    width: 420px;
    height: 50px;
  }
  @media (max-width: 450px) {
    width: 340px;
    height: 50px;
  }
  @media (max-width: 392px) {
    width: 320px;
    height: 50px;
  }
  bottom: 20px;
  position: absolute;
`;
