import { BackgroundProps } from '@/interface';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface BlockProps {
  backgroundColor: string;
  children: ReactNode;
}

const Block = ({ backgroundColor, children }: BlockProps) => {
  return <BlockWrapper $background={backgroundColor}>{children}</BlockWrapper>;
};
export default Block;

const BlockWrapper = styled.div<BackgroundProps>`
  width: 240px;
  height: 140px;
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
  //이거는 조절해야함.
  margin: 10px;

  border-radius: 20px;
  background-color: ${(props) => props.$background};

  /* box-sizing: content-box;
  border: 1px solid black; */
`;
