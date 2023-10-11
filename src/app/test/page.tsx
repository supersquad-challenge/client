'use client';

import BasicModal from '@/components/base/modal/BasicModal';
import ChargeDepositModal from '@/components/base/modal/ChargeDepositModal';
import PaymentMethodModal from '@/components/base/modal/PaymentMethodModal';
import BeforeRegisterChallenge from '@/components/common/beforeRegisterChallenge/BeforeRegisterChallenge';
import React, { useState } from 'react';
import styled from 'styled-components';

const Test = () => {
  const [isChargeDepositModalOpen, setIsChargeDepositModalOpen] =
    useState(true);
  return (
    <Container>
      <BeforeRegisterChallenge />
      {/* <PaymentMethodModal
        isModalOpen={true} //이렇게 해야만 열림... 왜..?
        setIsModalOpen={setIsChargeDepositModalOpen}
      /> */}
      <ChargeDepositModal
        isModalOpen={true}
        setIsModalOpen={setIsChargeDepositModalOpen}
      />
    </Container>
  );
};

export default Test;

const Container = styled.div`
  height: fit-content;
  position: relative;
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
`;
