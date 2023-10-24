import dotenv from 'dotenv'
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Signer, ethers } from 'ethers';
import { Ethereum } from '../../../@types/ethereum';

type Props = {
  to: string;
  value: number;
  signer: Signer | undefined;
}

const transferUSDT = async(address: string, amount: number, signer: Signer | undefined) => {
    const thirdwebSet: any = {
      clientId: `${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}`,
      secretKey: `${process.env.NEXT_PUBLIC_THIRDWEB_SECRET_ID}`,
    }
    

    console.log("signer", signer)
    if (signer) {
      const sdk = ThirdwebSDK.fromSigner(signer, thirdwebSet);
      const contract = await sdk.getContract("0xd43a2B06d23F820bf13f38C94Ea845011ef5e68a");
    
      // Address of the wallet you want to send the tokens to
      const toAddress = address;
      // The amount of tokens you want to send
      const res = await contract.erc20.transfer(toAddress, amount);
      console.log("tx usdt", res);
      if (!res || !res.receipt)
        return false;
    } else 
      return false;
    return true;
}



dotenv.config();
const changeChain = async() => {
  let res: string | undefined | null | any;
  const ethereum = window.ethereum as Ethereum | undefined;

  function handleChainChanged(chainId = '137') {
    window.location.reload();
  }

  if (ethereum) {
    const chainId = await ethereum.request({ method: 'eth_chainId' });
    console.log("chainID", chainId);
  }
  
  if (ethereum && ethereum.on) {
    ethereum.on('chainChanged', handleChainChanged);
  }

  if (ethereum) {
    res = await ethereum.request({ method: 'eth_chainId' });
    console.log(res, parseInt(res, 16))
  }

  if (res === undefined || res === null) {
    return false;
  }
  if (parseInt(res, 16) === parseInt('137')) {
    return true;
  }
  return false;
}

const transfer = async ({ to, value, signer }: Props) => {
  const chainIdRes =  await changeChain();

  console.log("chainIdRes", chainIdRes)
  if (!chainIdRes) {
    return {
      status: false,
      code: 1,
      msg: 'need to add chainId'
    };
  }

  const res = await transferUSDT(to, value, signer);

  if (res) {
    return {
      status: true,
      code: 0,
      msg: 'transaction success'
    };
  }
  console.log(res)
  // const ethereum = window.ethereum as MetaMaskInpageProvider | undefined;
  //   const result = convert(value / 10000, 'ether')
  //   console.log(result.wei.toString())
  //   console.log(value / 10000)
    
  // if (ethereum !== undefined) {
  //   const account = localStorage.getItem('walletAddress');
  //   console.log(account)
  //   console.log(value)
  //   if (account !== undefined) {
  //     const res = ethereum.request({
  //       method: 'eth_sendTransaction',
  //       params: [{
  //         from: account, 
  //         to: to,
  //         value: result.wei.toString(16),
  //         gasLimit: '0x5028',
  //         maxPriorityFeePerGas: parseInt('40', 16).toString(), 
  //         maxFeePerGas: parseInt('40', 16).toString(),
  //       }, 
  //       ],
  //     }).then((txHash) => {
  //       console.log(txHash)
  //       return true;
  //     })
  //   .catch((error) => {
  //     console.error(error)
  //     return false;
  //   });
  //     if (await res === true) {
  //       return {
  //         status: true,
  //         code: 0,
  //         msg: 'transaction success'
  //       };
  //     }
  //   }
  // }
  return {
    status: false,
    code: 2,
    msg: 'transaction failed'
  };
}

export default transfer