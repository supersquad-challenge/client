'use client';

import BasicTag from '@/components/base/tag/BasicTag';
import BeforeRegisterChallenge from '@/components/common/BeforeRegisterChallenge';
import React from 'react';
import styled from 'styled-components';

const Test = () => {
  return (
    <Container>
      <BeforeRegisterChallenge />
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
