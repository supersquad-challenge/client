"use client"
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { FiChevronLeft } from 'react-icons/fi';
import styled from 'styled-components';
import Image from 'next/image';
import CommonError from '@/components/common/error/CommonError';
import Check from '@/components/animation/Check/Check';
import { setAddress } from '@/lib/api/axios/user/setAddress';
import { AuthContext } from '@/context/auth';
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers'
import { injected } from '@/utils/getConnecter';


const WalletConnect = () => {
  const router = useRouter();
  const [userAddress, setUserAddress] = useState<string>('');
  const [isMount, setIsMount] = useState<boolean>(false);
  const [showSucces, setShowSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const { open } = useWeb3Modal();
  const { account, activate, library, active } = useWeb3React<Web3Provider>();
  const clientRef = useRef(null);
  const { userId } = useContext(AuthContext);

  const handleActivate = () => {
    const _activate = async() => {
      await activate(injected)
      setShowSuccess(true);
      if (account !== null && account !== undefined)
        await handleSetAddress(account)
    }
    _activate();
  }
  
  async function connectWeb3Wallet() {
    await open();
  }

  const handleSetAddress = async(account: string | null) => {
    if (account !== null) {
      setUserAddress(account);
      localStorage.setItem('isWalletConnected', 'true');
      localStorage.setItem('walletAddress', account);
      if (userId) {
        const res = await setAddress({
          userInfoId: userId,
          address: account
        });
      }
    }
  }

  useEffect(() => {
    setIsMount(true);

    if (clientRef !== null) {
      if (account !== undefined) {
        handleSetAddress(account);
      } else return ;
    }
    
    return () => {
      setShowSuccess(false);
      setIsMount(false);
    }
  }, [account])

  return (
    <main>
      {isMount && (
        <>
        <HeaderContainer>
          <ButtonContainer
            onClick={() => router.back()}
            >
            <FiChevronLeft
              color="#000000"
              size="24"
            />
          </ButtonContainer>      
        </HeaderContainer>
        <BodyContainer>
          <BodyTitle>
            Connect Wallet
          </BodyTitle>
          <WalletContainer
            onClick={() => handleActivate()}
          >
            <Image
              src="/assets/metamask.svg"
              alt="connect metamask"
              width={100}
              height={50}
              style={{
                width: "100%",
                height: "50px"
              }}
            />
          </WalletContainer>
          <WalletContainer
            onClick={() => connectWeb3Wallet()}
          >
            <Image
              src="/assets/walletconnect.svg"
              alt="connect wallet connect"
              width={100}
              height={50}
              style={{
                width: "100%",
                height: "50px"
              }}
            />
          </WalletContainer>
        </BodyContainer>
        {isError && (
          <CommonError
          msg='Metamask connect failed'
          />
        )}
        {(showSucces || active) && (
          <SuccessContainer>
            <Check />
            <SuccessMsg>
              Successfully Connected
            </SuccessMsg>
            <Address>
              {account || userAddress}
            </Address>
          </SuccessContainer>
          )}
        </>
        )}
    </main>
)}

const HeaderContainer = styled.header`
  width: 90%;
  height: auto;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ButtonContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  transition: all .2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: #cccccc;
  }
`

const BodyContainer = styled.section`
  width: 90%;
  margin: 0 auto;
`

const BodyTitle = styled.div`
  margin-top: 20px;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 50px;
`

const WalletContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10px;

  &:hover {
    cursor: pointer;
  }
`

const SuccessContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 40px auto 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const SuccessMsg = styled.div`
  margin-top: 15px;
  font-size: 17px;
  font-weight: 500;
`

const Address = styled.div`
  margin-top: 10px;
  font-size: 15px;
  font-weight: 400;
`


export default WalletConnect

