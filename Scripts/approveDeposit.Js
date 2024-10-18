// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const hre = require("hardhat");
const fxRootABI = require("../fxRootContractABI.json");
const CraftNftArtifact = require("../artifacts/contracts/CraftNft.sol/CraftNft.json");

const CraftNftAddress = "0x56DbC9DD0F204ad429F38426DF52c78d1fcC02e5"; 
const CraftNftABI = CraftNftArtifact.abi;
const fxERC20RootContract = "0x3658ccFDE5e9629b0805EB06AaCFc42416850961";
const userWallet = "0x59f30181FAfB9E48624166C62941DAF61c34635e"; 

async function main() {

    const CraftNftContract = await hre.ethers.getContractAt(CraftNftABI, CraftNftAddress);
    const fxERC20Root = await hre.ethers.getContractAt(fxRootABI, fxERC20RootContract);

    const approvalTransaction = await CraftNftContract.approve(fxERC20RootContract, 2);
    await approvalTransaction.wait();

    console.log('Token approval successful');

    const depositTransaction = await fxERC20Root.deposit(CraftNftAddress, userWallet, 2, "0x6556");
    await depositTransaction.wait();

    console.log("Tokens have been deposited successfully");
  
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
