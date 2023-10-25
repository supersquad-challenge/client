import dotenv from 'dotenv'
import { Signer, ethers } from 'ethers';
import { Ethereum } from '../../../@types/ethereum';
import Contract from '@/json/USDTContractABI.json';

type Props = {
  to: string;
  value: number;
  signer: Signer | undefined;
  lib: any;
}

const transferUSDT = async({ to, value, signer, lib }: Props) => {
    
  const USDTContract = new ethers.Contract(
    '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    JSON.stringify(Contract),
    signer
  )

  console.log("to", to)
  console.log(USDTContract)

  const tx = await USDTContract.transfer(to, value * 1000000); 
 
  console.log(tx)
  if (tx !== undefined && tx.hash.length !== 0) {
    return true;
  }
  return false;
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

const transfer = async ({ to, value, signer, lib }: Props) => {
  const chainIdRes =  await changeChain();

  console.log("chainIdRes", chainIdRes)
  if (!chainIdRes) {
    return {
      status: false,
      code: 1,
      msg: 'need to add chainId'
    };
  }

  const res = await transferUSDT({to, value, signer, lib  });

  console.log(res)
  if (res) {
    return {
      status: true,
      code: 0,
      msg: 'transaction success'
    };
  }
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