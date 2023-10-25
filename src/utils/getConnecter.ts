import { InjectedConnector } from "@web3-react/injected-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [
    5, // Goerli Testnet
    11155111, // Sepolia Testnet
    137,
  ]
})