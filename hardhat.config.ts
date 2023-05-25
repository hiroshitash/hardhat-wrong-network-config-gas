import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      gas: 5000
    },
    localhost: {
      gas: 5000
    },
  },
};

export default config;
