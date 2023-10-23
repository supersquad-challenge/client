import dotenv from 'dotenv'
import { MetaMaskInpageProvider } from '@metamask/providers';
const convert = require('ethereum-unit-converter');

type Props = {
  to: string;
  value: number;
}

dotenv.config();

const transfer = async ({ to, value }: Props) => {
  const result = convert(value, 'ether')

  const ethereum = window.ethereum as MetaMaskInpageProvider | undefined;
  if (ethereum !== undefined) {
    const account = localStorage.getItem('walletAddress');
    if (account !== undefined) {
      const res = ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          from: account, 
          to: to,
          value: result.wei.toString(16),
          gasLimit: '0x5028',
          maxPriorityFeePerGas: '0x3b9aca00', 
          maxFeePerGas: '0x2540be400',
        },
        ],
      }).then((txHash) => {
        return true;
      })
    .catch((error) => {
      console.error(error)
      return false;
    });
      if (await res === true) 
        return true;
      return false;
    }
    return false;
  }
  return false;
}

export default transfer