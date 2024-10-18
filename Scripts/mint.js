// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const hre = require("hardhat");
async function main() {
  // CraftNft contract address
  const deployedContractAddress = "0x56DbC9DD0F204ad429F38426DF52c78d1fcC02e5";
  const CraftNftContract = await hre.ethers.getContractAt("CraftNft", deployedContractAddress);

  const ipfsLinks = [
    "ipfs://QmQ9UnLsB4Jxct12hzZC85aynns3qtEVSvqk6fyMVhRW7N/p1_img1.json",
    "ipfs://QmYxuQPDruN2UiFWCDkaDVTPbqsRtkF9u64SD5xgWX6WTa/p1_img1.json",
    "ipfs://Qma6MLCB26AcHiB18q7B4pBuXt9rQtbGPMnhFVocGN96wX/p1_img1.json",
    "ipfs://QmfY9heudXW4JzkqgPcUiF9x9fWDDMJfTmHi1QQ4ZLBGwx/p1_img1.json",
    "ipfs://QmULb8wXAXirVz9T3WEx8z1seiyUBq9bf3JwMjYGHzrhEn/p1_img1.json"
  ];

  // Descriptions for each NFT
  const metadataDescriptions = [
    "Generate an image depicting a cozy campsite under a star-studded sky in the wilderness, with the Milky Way clearly visible",
    "Generate an image of city skyline at night, with a large illuminated and a river sparkling below",
    "Generate an image of a child flying a kite in a park with other kids playing in the background ",
    "Generate an image of an underwater metropolis with bubble domes, inhabited by merfolk and sea creatures",
    "Generate an image of nature reserve showing an elephant, zebra, and lion made of origami paper that have come to life"
  ];
  // Mint the tokens with the metadata
  const mintTransaction = await CraftNftContract.mintWithMetadata(
    "0xEbD04f411D295086497E4686b15D7c9d87ad434D", // wallet address
    5,
    ipfsLinks,
    metadataDescriptions
  );
}
