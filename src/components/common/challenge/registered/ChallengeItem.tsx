import { colors } from '@/styles/color';
import styled from 'styled-components';
import BasicButton from '@/components/base/button/BasicButton';
import Image from 'next/image';
import { isValidUrl } from '@/utils/urlUtils';
import { daysBetweenDates } from '@/utils/dateFormatUtils';
import { BsChevronCompactRight } from 'react-icons/bs';
import Link from 'next/link';

type Props = {
  id: string;
  title: string;
  thumbnailUrl: string;
  startDate: string;
  endDate: string;
  frequency: string;
  isRegistered: boolean;
}

const ChallengeItem = ({
  id,
  title,
  thumbnailUrl,
  startDate,
  endDate,
  frequency,
  isRegistered
}: Props) => {
  return (
    <ItemContainer onClick={() => {}}>
      <ImageContainer>
          <Image
            src={isValidUrl(thumbnailUrl) ? thumbnailUrl : "/default/diet_thumbnail.svg"}
            alt='challenge'
            fill
            style={{
              objectFit: "cover",
              borderRadius: '6px'
            }}
            priority={true}
          />
      </ImageContainer>
      <ChallengeInner>
        <ChallengeTitle>
          {title}
        </ChallengeTitle>
        <MetaContainer>
          <Duration>
            {frequency}
          </Duration>
          {startDate.length === 0 ? 'None' : daysBetweenDates(startDate, endDate)}
        </MetaContainer>
        <ButtonContainer>
          <BasicButton
            title="starting soon"
            onClickHandler={() => {}}
            color={'#000000'}
            backgroundColor="#dadada"
            borderRadius={50}
            fontSize={14}
          />
        </ButtonContainer>
      </ChallengeInner>
      <Link href={isRegistered 
        ? `/challenge/my/detail/${id}?state=my`
        : `/challenge/detail/${id}`}>
        <IconContainer>
          <BsChevronCompactRight
            size='32'
          />
        </IconContainer>
      </Link>
    </ItemContainer>
  );
};


const ItemContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  border-radius: 20px;
  position: relative;
  background-color: ${colors.blockGray};
  display: flex;
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`


const ChallengeInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  
  margin-left: 50px;

  @media (max-width: 600px) {
    margin-left: 45px;
  }
  @media (max-width: 450px) {
    margin-left: 30px;
  }
  @media (max-width: 370px) {
    margin-left: 15px;
  }
`;

const ChallengeTitle = styled.div`
  font-size: 19px;

  @media (max-width: 600px) {
    font-size: 19px;

  }

  @media (max-width: 450px) {
    font-size: 18px;
  }

  font-weight: 600;
  color: #121212;
`;

const Duration = styled.div`
  position: relative;
  font-size: 15px;
  padding-right: 10px;
  margin: 0 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 600px) {
    font-size: 15px;
  }

  @media (max-width: 450px) {
    font-size: 14px;
  }

  @media (max-width: 392px) {
    font-size: 14px;
  }

  font-weight: 400;
  color: #898989;
  &::after {
    content: "";
    position: absolute;
    right: 0;
    transform: translateY(-40%);
    top: 50%;
    border: .5px solid #898989;
    border-radius: 0.5px;
    height: 80%;
    display: flex;
  }
`;

const ImageContainer = styled.div`
  width: 90px;
  height: 90px;
  position: relative;
`

const ButtonContainer = styled.div`
  width: 190px;
  height: 34px;

  @media (max-width: 600px) {
    width: 170px;
    height: 28px;
  }

  @media (max-width: 450px) {
    width: 165px;
    height: 31px;
  }

  @media (max-width: 392px) {
    width: 150px;
    height: 28px;
  }

  margin-top: 10px;
  font-size: 14px;
  font-weight: 700;
`;

const MetaContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default ChallengeItem;
