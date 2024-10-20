// utils/web3.js
import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && window.ethereum) {
  // In the browser and MetaMask is running
  web3 = new Web3(window.ethereum);
} else {
  // On the server *OR* MetaMask is not running
  const provider = new Web3.providers.HttpProvider(
    `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
  );
  web3 = new Web3(provider);
}

export default web3;
