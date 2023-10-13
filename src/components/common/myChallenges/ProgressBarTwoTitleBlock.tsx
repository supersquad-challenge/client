import TwoTitleBlock, {
  ITwoTitleBlock,
} from '@/components/base/block/TwoTitleBlock';
import { colors } from '@/styles/color';
import styled from 'styled-components';

interface IProgessBarTwoTitleBlock {
  title: string;
  percentage: number;
}

const ProgressBarTwoTitleBlock = ({
  title,
  percentage,
}: IProgessBarTwoTitleBlock) => {
  return (
    <TwoTitleBlock
      title1={title}
      content1={`${percentage}%`}
      title2="Target Success"
      content2="100%"
      $background={colors.blockGray}
      $color1={colors.black}
      $color2={colors.black}
    >
      <ProgressBar percentage={percentage}></ProgressBar>
    </TwoTitleBlock>
  );
};

export default ProgressBarTwoTitleBlock;

const ProgressBarContainer = styled.div`
  width: 144px;
  height: 22px;
  bottom: 27px;
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

const Filler = styled.div<{ $percentage: number }>`
  height: 100%;
  width: ${(props) => props.$percentage}%;
  background-color: ${colors.darkPurple};
  border-radius: inherit;
  text-align: right;
`;

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage: percentage,
}) => {
  return (
    <ProgressBarContainer>
      <Filler $percentage={percentage}></Filler>
    </ProgressBarContainer>
  );
};
