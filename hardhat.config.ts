import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    localhost: {
      url: "http://localhost:8545",
      /*
        notice no env vars here? it will just use account 0 of the hardhat node to deploy
        (you can put in a mnemonic here to set the deployer locally)
      */
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/a4905e3b34cc498aa5a839bbcf49b8f2`,
      accounts: [`0x13133c59f5879073e62eb6844f91cdd716e29ac5eb89136df08a720bd3b73699`],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  // mocha options can be set here
  mocha: {
    // timeout: "300s",
  },
};

export default config;