"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import styled from 'styled-components';
import { getUserStatus } from '@/lib/api/user/getUserStatus';
import { UserStatus } from '@/types/user/User';
import { colors } from '@/styles/color';
import { getTotalStatus } from '@/lib/api/user/getTotalStatus';
import { TotalStatus } from '@/types/user/User';
import { SingleChallenges } from '@/types/challenge/Challenge';
import { getSingleChallenge } from '@/lib/api/axios/challenge/getSingleChallenge';

const page = () => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();
  const current = params.get('state');
  const userChallengeId = pathname.split('/')[4];
  const [challengeId, setChallengeId] = useState<string>('');
  const [myStatus, setMyStatus] = useState<UserStatus | undefined>(undefined);
  const [totalStatus, setTotalStatus] = useState<TotalStatus | undefined>(undefined);
  const [challengeInfo, setChallengeInfo] = useState<SingleChallenges | undefined>(undefined)
  const [pageState, setPageState] = useState<boolean | null>(current === "my" ? true : false);
  const bodyRef = useRef(null);

  const fetchMyStatus = async() => {
    const res = await getUserStatus({ userChallengeId });
    console.log(res);
    setMyStatus(res.myStatus);
    setChallengeId(res.myStatus.challengeId);
  }

  const fetchTotalStatus = async() => {
    const res = await getTotalStatus({ userChallengeId });
    console.log(res);
    setTotalStatus(res.totalStatus);
  }

  const fetchChallengeInfo = async() => {
    const res = await getSingleChallenge({ challengeId });
    console.log(res);
    setChallengeInfo(res.challengeInfo);
  }

  useEffect(() => {
    if (bodyRef.current === null) {
      fetchMyStatus();
    }

    if (current === 'my' && !myStatus) {
      fetchMyStatus();
    } else if (current === 'total' && !totalStatus) {
      fetchTotalStatus();
    } else if (current === 'about' && !challengeInfo) {
      fetchChallengeInfo();
    }
  }, [current])
  
  return (
    <PageContainer>
      <ImageContainer>
        <Image
          src={'/default/diet_thumbnail.svg'}
          alt='challenge thumbnail'
          fill
          style={{
              objectFit: "cover"
            }}
          priority={true}

        />
      </ImageContainer>
        <NavContainer>
          <NavItem
            onClick={() => {
              const query = "my"
              setPageState(true);
              router.push(`${pathname}?state=${query}`)
            }}
            display={current === "my" ? "block" : "none"}
            animation={'appearLeft'}
          >
            My
          </NavItem>
          <NavItem
            onClick={() => {
              const query = "total"
              setPageState(pageState)
              router.push(`${pathname}?state=${query}`)
            }}
            display={current === "total" ? "block" : "none"}
            animation={pageState ? 'appearRight' : 'appearLeft' }
          >
            Total
          </NavItem>
          <NavItem
            onClick={() => {
              const query = "about"
              setPageState(false);
              router.push(`${pathname}?state=${query}`);
            }}
            display={current === "about" ? "block" : "none"}
            animation={'appearRight'}
          >
            About
          </NavItem>
        </NavContainer>
        {current === 'my' && myStatus && (
          <PageInner>
            <PageTitle>
                My Status
            </PageTitle>
          </PageInner>
        )}

          
    </PageContainer>
  )
}

const PageContainer = styled.main`
  width: 100%;
  height: auto;
  margin-bottom: 120px;
  position: relative;
`

const PageTitle = styled.div`
  @media (max-width: 600px) {
    font-size: 35px;
    margin-bottom: 15px;
  }
  @media (max-width: 450px) {
    font-size: 30px;
    margin-bottom: 11px;
  }
  @media (max-width: 390px) {
    font-size: 25px;
    margin-bottom: 10px;
  }
  font-weight: 800;
  color: ${colors.black};
`

const PageInner = styled.section`
  width: 90%;
  margin: 25px auto 0 auto;
  display: flex;
  flex-direction: column;
`

const ImageContainer = styled.section`
  width: 100%;
  height: 240px;
  position: relative;

  @media (max-width: 450px) {
    height: 220px;
  }
  @media (max-width: 370px) {
    height: 200px;
  }
`

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 45px;
`

const NavItem = styled.div<{display: string, animation: string}>`
  position: relative;
  width: 50%;
  min-width: 120px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #6F7789;

    &:hover {
    cursor: pointer;
  }
  
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    border: 2px solid #000000;
    border-radius: 2px;
    z-index: 9;
    display: ${(props) => props.display};
    animation-name: ${(props) => props.animation};
    animation-duration: .3s;
    animation-fill-mode: forwards;

    @keyframes appearRight {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0%);
      }
    }

    @keyframes appearLeft {
       0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
`

const BodyContainer = styled.section`
  width: 100%;
  margin: 10px auto 10px auto;
  display: grid;
  grid: '. .';
`

  
export default page