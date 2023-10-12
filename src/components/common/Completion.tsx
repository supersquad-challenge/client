import styled from 'styled-components';
import BasicButton from '../base/button/BasicButton';
import { colors } from '@/styles/color';

interface ICompletion {
  title: string;
  detail: string;
  buttonTitle: string;
}

const Completion = ({ title, detail, buttonTitle }: ICompletion) => {
  return (
    <Wrapper>
      <CheckImage src="/purpleCheck.svg" alt="prooveCheck" />
      <CompletionTitle>{title}</CompletionTitle>
      <CompletionDetail>{detail}</CompletionDetail>
      <BasicButtonContainer>
        <BasicButton
          title={buttonTitle}
          onClickHandler={() => {}}
          $color="white"
          $backgroundcolor={colors.black}
          $borderradius={12}
          $fontsize={16}
        />
      </BasicButtonContainer>
    </Wrapper>
  );
};
export default Completion;

const Wrapper = styled.div`
  height: fit-content;

  position: absolute;
  width: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  /* background-color: red;
  border: 1px solid green;
  box-sizing: border-box; */
`;

const CheckImage = styled.img`
  @media (max-width: 600px) {
    width: 55px;
    height: 55px;
  }
  @media (max-width: 450px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 392px) {
    width: 48px;
    height: 48px;
  }
`;

const CompletionTitle = styled.div`
  @media (max-width: 600px) {
    font-size: 28px;
  }
  @media (max-width: 450px) {
    font-size: 24px;
  }
  @media (max-width: 392px) {
    font-size: 24px;
  }
  font-weight: 600;
  color: #121212;

  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CompletionDetail = styled.div`
  @media (max-width: 600px) {
    width: 300px;
    font-size: 18px;
  }
  @media (max-width: 450px) {
    width: 280px;
    font-size: 16px;
  }
  @media (max-width: 392px) {
    width: 261px;
    font-size: 14px;
  }

  margin-top: 6px;

  font-weight: 500;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const BasicButtonContainer = styled.div`
  @media (max-width: 600px) {
    width: 200px;
  }
  @media (max-width: 450px) {
    width: 180px;
  }
  @media (max-width: 392px) {
    width: 170px;
  }
  height: 44px;
  margin-top: 25px;
`;
