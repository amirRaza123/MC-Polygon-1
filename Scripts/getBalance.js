// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // CraftNft contract address
  const CraftNftAddress = "0x07cfAa9A6612cbA01c721f6125CB7F52F5Fe9B37";
  const CraftNftContract = await hre.ethers.getContractAt("CraftNft", CraftNftAddress);

  // Wallet to check the NFT balance
  const userAddress = "0x59f30181FAfB9E48624166C62941DAF61c34635e";

  // Retrieve the wallet's NFT balance
  const nftBalance = await CraftNftContract.balanceOf(userAddress);
  console.log(`The wallet address ${userAddress} holds ${nftBalance} NFTs.`);
}  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
