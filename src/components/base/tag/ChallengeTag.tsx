import BasicTag from "@/components/base/tag/BasicTag";
import { colors } from "@/styles/color";
import styled from "styled-components";

type Props = {
  title: string;
  onClickHandler: (text: string) => void;
  backgroundcolor: string;
}

const ChallengeTag = ({
  title,
  onClickHandler,
  backgroundcolor,
}: Props) => {
  return (
    <ChallengeTagWrapper>
      <BasicTag
        title={title}
        onClickHandler={onClickHandler}
        color={`${colors.black}`}
        backgroundcolor={backgroundcolor}
        borderRadius600={15}
        borderRadius450={11}
        borderRadius392={10}
        paddingHorizontal600={15}
        paddingHorizontal450={11}
        paddingHorizontal392={10}
        fontSize600={12}
        fontSize450={9}
        fontSize392={8}
      />
    </ChallengeTagWrapper>
  );
};

const ChallengeTagWrapper = styled.div`
  @media (max-width: 600px) {
    height: 24px;
  }
  @media (max-width: 450px) {
    height: 18px;
  }
  @media (max-width: 392px) {
    height: 16px;
  }
  width: fit-content;
  margin-right: 5px;
`;

export default ChallengeTag