require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/X2zKqxSCQ_XCa4m0kUF9cxiKL_x-b3w6',
      accounts: [process.env.PRIVATE_KEY],
    },
    amoy: {
      url: 'https://polygon-amoy.g.alchemy.com/v2/ZJJZ8JNzxwXtd2MTdHzlcnVVzWF_iQdC',
      accounts: [process.env.PRIVATE_KEY],
    },
  }
};
