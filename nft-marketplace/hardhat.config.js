require("@nomiclabs/hardhat-waffle");

const fs = require("fs")
const privateKey = fs.readFileSync(".key").toString()
const projectId = "2b8374f43cc74e8585822995149a51e0"

module.exports = {
  // Configure different networks
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: 'https://polygon-mumbai.infura.io/v3/${projectId}',
      accounts: [privateKey]
    },
    mainnet: {
      url: 'https://polygon-mainnet.infura.io/v3/${projectId}',
      accounts: [privateKey]
    },
  },
  solidity: "0.8.4",
};
