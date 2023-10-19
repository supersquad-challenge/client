"use client"
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { FiChevronLeft } from 'react-icons/fi';
import styled from 'styled-components';
import Image from 'next/image';
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { ethers } from 'ethers'
import CommonError from '@/components/common/error/CommonError';
import Check from '@/components/animation/Check/Check';
import { setAddress } from '@/lib/api/axios/user/setAddress';
import { AuthContext } from '@/context/auth';

async function getWeb3ModalInstance() {
  const web3Modal = new Web3Modal({
    cacheProvider: false,
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          alchemy: process.env.NEXT_PUBLIC_WALLET_API_KEY
        },
      },
    },
  })
  return web3Modal
}

const WalletConnect = () => {
  const router = useRouter();
  const [account, setAccount] = useState<string>('');
  const [showSucces, setShowSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const { userId } = useContext(AuthContext);
  
  async function connectMetaMask() {
    try {
      const web3Modal = await getWeb3ModalInstance()
      const connection = await web3Modal.connect()
      const provider = new ethers.BrowserProvider(connection)
      const accounts = await provider.listAccounts()
      if (accounts[0].address !== undefined) {
        setShowSuccess(true);
        setAccount(accounts[0].address);
        localStorage.setItem('isWalletConnected', 'true');
        localStorage.setItem('walletAddress', accounts[0].address);
        if (userId) {
          const res = await setAddress({
            userInfoId: userId,
            address: accounts[0].address
          });
          console.log(res);
        }
        setTimeout(() => {
          router.back();
        }, 4000)
      }
    } catch (err) {
      console.log('error:', err)
      setIsError(true);
    }
  }

  return (
    <main>
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
          onClick={() => connectMetaMask()}
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
        <WalletContainer>
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
      {showSucces && (
        <SuccessContainer>
          <Check />
          <SuccessMsg>
            Successfully Connected
          </SuccessMsg>
          <Address>
            {account}
          </Address>
        </SuccessContainer>
      )}
    </main>
)}

const HeaderContainer = styled.header`
  width: 90%;
  height: auto;
  margin: 10px auto;
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
  margin-top: 40px;
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