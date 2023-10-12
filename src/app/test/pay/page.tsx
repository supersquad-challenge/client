'use client';
import PaymentMethodModal from '@/components/base/modal/PaymentMethodModal';
import { useState } from 'react';
import styled from 'styled-components';

const Pay = () => {
  const [isChargeDepositModalOpen, setIsChargeDepositModalOpen] =
    useState(true);
  return (
    <Container>
      <PaymentMethodModal
        isModalOpen={true}
        setIsModalOpen={setIsChargeDepositModalOpen}
      />
    </Container>
  );
};

export default Pay;
const Container = styled.div`
  height: fit-content;
  position: relative;
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
