import BaseBlock from '@/components/base/block/BaseBlock';
import styled from 'styled-components';

type Props = {
  title: string;
  content: string;
  contentColor: string;
  shadow: 'rt' | 'rb' | 'lt' | 'lb';
}

const ChallengeInfo = ({ title, content, contentColor, shadow }: Props) => {
  return (
    <ShadowContainer>
      <BaseBlock backgroundColor="white">
        <Title>{title}</Title>
        <Content $color={contentColor}>
          {content}
        </Content>
      </BaseBlock>
    </ShadowContainer>
  );
};

export default ChallengeInfo;

const ShadowContainer = styled.div`
  border-radius: 20px;
  margin: 10px auto;
  box-shadow: 0px 5px 25px 0px #eee;
  overflow: hidden;

  width: 50%;
  min-width: 220px;
  height: 130px;

  @media (max-width: 600px) {
    min-width: 170px;
    height: 120px;
  }
  @media (max-width: 450px) {
    min-width: 150px;
    height: 103px;
  }
  @media (max-width: 350px) {
    min-width: 130px;
    height: 95px;
  }

`

const Title = styled.div`
  font-size: 18px;
  @media (max-width: 600px) {
    font-size: 16px;
  }
  @media (max-width: 450px) {
    font-size: 14px;
  }
  @media (max-width: 350px) {
    font-size: 12px;
  }
  font-weight: 500;
  margin-top: 10px;
  margin-left: 20px;
`;

const Content = styled.div<{
  $color: string
}>`
  font-size: 23px;
  @media (max-width: 600px) {
    font-size: 21px;
  }
  @media (max-width: 450px) {
    font-size: 19px;
  }
  @media (max-width: 392px) {
    font-size: 17px;
  }
  font-weight: 700;
  margin-top: 10px;
  margin-left: 20px;
  color: ${(props) => props.$color};
`;