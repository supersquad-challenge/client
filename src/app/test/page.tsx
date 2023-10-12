'use client';

import TwoTitleBlock from '@/components/base/block/TwoTitleBlock';
import BasicModal from '@/components/base/modal/BasicModal';
import ChargeDepositModal from '@/components/base/modal/ChargeDepositModal';
import PaymentMethodModal from '@/components/base/modal/PaymentMethodModal';
import BeforeRegisterChallenge from '@/components/common/beforeRegisterChallenge/BeforeRegisterChallenge';
import BeforeMyChallengeDetail from '@/components/common/myChallenges/BeforeMyChallengeDetail';
import ProgressBarTwoTitleBlock from '@/components/common/myChallenges/ProgressBarTwoTitleBlock';
import { colors } from '@/styles/color';
import React, { useState } from 'react';
import styled from 'styled-components';

const Test = () => {
  const [isChargeDepositModalOpen, setIsChargeDepositModalOpen] =
    useState(true);
  return (
    <Container>
      {/* <BeforeRegisterChallenge /> */}
      {/* <PaymentMethodModal
        isModalOpen={true} //이렇게 해야만 열림... 왜..?
        setIsModalOpen={setIsChargeDepositModalOpen}
      /> */}
      {/* <ChargeDepositModal
        isModalOpen={true}
        setIsModalOpen={setIsChargeDepositModalOpen}
      /> */}
      {/* <BeforeMyChallengeDetail /> */}
      {/* <TwoTitleBlock
        title1={'My Success Rate'}
        content1={'100%'}
        title2={'Target Success'}
        content2={'100%'}
        background={`${colors.blockGray}`}
      ></TwoTitleBlock> */}
      <ProgressBarTwoTitleBlock percentage={30} />
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
