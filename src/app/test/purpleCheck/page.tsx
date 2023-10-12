'use client';
import BasicButton from '@/components/base/button/BasicButton';
import Completion from '@/components/common/Completion';
import { colors } from '@/styles/color';
import styled from 'styled-components';

const PurpleCheck = () => {
  return (
    <Container>
      <Completion
        title="Now you are in"
        detail="Be ready to enforce goals and earn"
        buttonTitle="Go to My Challenge"
      />
    </Container>
  );
};
export default PurpleCheck;

const Container = styled.div`
  height: 100%;

  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  /* background-color: red;
  border: 1px solid green;
  box-sizing: border-box; */
`;
