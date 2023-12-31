"use client"
import { getSingleChallenge } from '@/lib/api/querys/challenge/getSingleChallenge'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import { useQuery } from 'react-query';
import ChallengeMeta from '@/components/common/challenge/unregistered/ChallengeMeta';
import { thousandFormat } from '@/utils/moneyFormatUtils';
import ChallengeInfo from '@/components/common/challenge/unregistered/ChallengeInfo';
import FillButton from '@/components/base/button/FillButton';
import { convertIsoDateToReadable } from '@/utils/dateFormatUtils';
import { ParsedDesc, SingleChallenges } from '@/types/challenge/Challenge';
import Loading from '@/components/animation/Loading/Spinner/Loading';
import { WindowContext } from '@/context/window';
import PopupModal from '@/components/base/modal/PopupModal';
import CommonError from '@/components/common/error/CommonError';
import { AuthContext } from '@/context/auth';
import { useRouter } from 'next/navigation';
import { parseChallengeDesc } from '@/utils/parseDescUtils';
import ChallengeDesc from '../description/ChallengeDesc';
import { isValidUrl } from '@/utils/urlUtils';
import { getThumbnail } from '@/utils/proto.getThumbnail';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { injected } from '@/utils/getConnecter';

type Props = {
  id: string
}

const ChallengeDetail = ({ id }: Props) => {
  const { 
    statusCode, 
    loadingState, 
    handleStatusCode,
    handleLoadingState, 
    handleModalState } = useContext(WindowContext);
  const [isError, setIsError] = useState<boolean>(false);
  const { isLogin } = useContext(AuthContext);
  const router = useRouter();
  const { activate } = useWeb3React<Web3Provider>();

  const { data, error, isLoading } = useQuery({
    queryKey: [`singleChallenge-${id}`],
    queryFn: async() => {
      const res = await getSingleChallenge({ challengeId: id })
      const challenge: SingleChallenges = res.challengeInfo;
      return challenge;
    },
    staleTime: 5000,
    cacheTime: Infinity
  })

  useEffect(() => {
    if (statusCode === 409) {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
        handleStatusCode(undefined);
      }, 2500)
    }

    return () => {
      setIsError(false);
    }
  }, [statusCode])

   const handleActivate = () => {
    const _activate = async() => {
      await activate(injected)
    }
    _activate();
  }

  if (isLoading || data === undefined) {
    return <Loading />
  }

  if (!isLoading && (error
    || data === undefined)) {
    return <CommonError msg="Fetch failed" />;
  }

  const _desc = parseChallengeDesc(data.description);

  return (
    <div>
      <ImageContainer>
        <Image
          src={isValidUrl(data.challengeThumbnail)
            ? getThumbnail(data.challengeName)
            : getThumbnail(data.challengeName)}
          alt='challenge image'
          fill
          style={{
            objectFit: "cover"
          }}
          priority={true}
        />
      </ImageContainer>
      <ContentInner>
        <ChallengeMeta
          title={data.challengeName}
          participants={data.challengeParticipantsCount}
          deposit={thousandFormat(data.challengeTotalDeposit.toFixed(0))}
        />
        <InfoContainer>
          <ChallengeInfo
            title='Schedule'
            content={data.challengeStartsAt.length === 0 ? 'None' : `${convertIsoDateToReadable(data.challengeStartsAt)} - ${convertIsoDateToReadable(data.challengeEndsAt)}`}
            contentColor='#000000'
            direction='left'
            shadow='rb'
          />
          <ChallengeInfo
            title='How To'
            content='Take a picture'
            contentColor='#000000'
            direction='right'
            shadow='rb'
            />
          <ChallengeInfo
              title='Complete'
              content={data.challengeVerificationFrequency}
              contentColor='#000000'
              direction='left'
              shadow='rb'
            />
          <ChallengeInfo
            title='Crypto Yield +'
            content={`${data.cryptoYield}%`}
            contentColor='#8A01D7'
            direction='right'
            shadow='rb'
          />
        </InfoContainer>
        {_desc.map((el: ParsedDesc, idx: number) => {
          return (
            <ChallengeDesc
              key={idx}
              block={el}
            />
        )})}
        <ButtonContainer>
          <FillButton
            title='I am in!'
            fontSize={18}
            color='#ffffff'
            backgroundcolor='#000000'
            onClickHandler={() => {
              if (isLogin) {
                handleActivate();
                handleModalState('payments');
              } else {
                handleLoadingState(true);
                setTimeout(() => {
                  handleLoadingState(false);
                  router.push('/signup')
                }, 500);
              }
            }}
          />
        </ButtonContainer>
        {loadingState && (
          <Loading />
        )}
        {isError && statusCode === 409 && (
          <PopupModal
            title='Already Registered!'
          />
        )}
      </ContentInner>
    </div>
  )
}


const ImageContainer = styled.section`
  width: 100%;
  height: 300px;
  position: relative;
  @media (max-width: 450px) {
    height: 260px;
  }
  @media (max-width: 370px) {
    height: 220px;
  }
`

const ContentInner = styled.section`
  width: 90%;
  margin: 0 auto;
`

const InfoContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`

const ButtonContainer = styled.footer`
  max-width: 600px;
  font-weight: 500;
  height: 60px;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 20px;

  &:hover {
    cursor: pointer;
    border: 1px solid #000000;
  }
`

export default ChallengeDetail