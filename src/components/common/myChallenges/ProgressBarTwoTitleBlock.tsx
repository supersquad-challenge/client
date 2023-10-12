import TwoTitleBlock from '@/components/base/block/TwoTitleBlock';
import { colors } from '@/styles/color';
import styled from 'styled-components';

interface IProgessBarTwoTitleBlock {
  percentage: number;
}

const ProgressBarTwoTitleBlock = ({ percentage }: IProgessBarTwoTitleBlock) => {
  return (
    <TwoTitleBlock
      title1={'My Success Rate'}
      content1={`${percentage}%`}
      title2={'Target Success'}
      content2="100%"
      background={colors.blockGray}
    >
      <ProgressBar percentage={percentage}></ProgressBar>
    </TwoTitleBlock>
  );
};

export default ProgressBarTwoTitleBlock;

const ProgressBarContainer = styled.div`
  @media (max-width: 600px) {
    width: 140px;
    height: 20px;
    bottom: 25px;
  }
  @media (max-width: 450px) {
    width: 140px;
    height: 18px;
    bottom: 23px;
  }
  @media (max-width: 392px) {
    width: 140px;
    height: 16px;
    bottom: 21px;
  }
  background-color: ${colors.gray};
  border-radius: 10px;

  position: absolute;
`;

const Filler = styled.div<{ percentage: number }>`
  height: 100%;
  width: ${(props) => props.percentage}%;
  background-color: ${colors.darkPurple};
  border-radius: inherit;
  text-align: right;
`;

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <ProgressBarContainer>
      <Filler percentage={percentage}></Filler>
    </ProgressBarContainer>
  );
};
