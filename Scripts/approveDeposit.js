// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const hre = require("hardhat");
const fxRootABI = require("../fxRootContractABI.json");
const CraftNftArtifact = require("../artifacts/contracts/CraftNft.sol/CraftNft.json");

const CraftNftAddress = "0x07cfAa9A6612cbA01c721f6125CB7F52F5Fe9B37"; 
const CraftNftABI = CraftNftArtifact.abi;
const fxERC20RootContract = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const userWallet = "0x59f30181FAfB9E48624166C62941DAF61c34635e"; 

async function main() {

    const CraftNftContract = await hre.ethers.getContractAt(CraftNftABI, CraftNftAddress);
    const fxERC20Root = await hre.ethers.getContractAt(fxRootABI, fxERC20RootContract);

    const approvalTransaction = await CraftNftContract.approve(fxERC20RootContract, 2);
    await approvalTransaction.wait();

    console.log('Approval Confirmed');

    const depositTransaction = await fxERC20Root.deposit(CraftNftAddress, userWallet, 2, "0x6556");
    await depositTransaction.wait();

    console.log("Tokens deposited successfully");
  
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
