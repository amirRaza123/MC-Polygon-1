// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const hre = require("hardhat");

async function main() {
  // Deploy the CustomToken contract
  const tokenInstance = await hre.ethers.deployContract("CraftNft");
  console.log("CraftNft (CFT) successfully deployed at address:", tokenInstance.target); // Correct way to fetch the contract address
}

main().catch((error) => {
  console.error("An error occurred during deployment:", error);
  process.exitCode = 1;
});

