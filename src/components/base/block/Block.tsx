import { BackgroundColorProps } from '@/interface';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface BlockProps {
  backgroundColor: string;
  children: ReactNode;
}

const Block = ({ backgroundColor, children }: BlockProps) => {
  return (
    <BlockWrapper backgroundColor={backgroundColor}>{children}</BlockWrapper>
  );
};
export default Block;

const BlockWrapper = styled.div<BackgroundColorProps>`
  @media (max-width: 600px) {
    width: 210px;
    height: 120px;
  }
  @media (max-width: 450px) {
    width: 172px;
    height: 103px;
  }
  @media (max-width: 392px) {
    width: 160px;
    height: 95px;
  }
  border-radius: 20px;
  background-color: ${(props) => props.backgroundColor};
`;
