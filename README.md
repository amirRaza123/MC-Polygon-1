# Polygon POS

This project implements the CraftNft smart contract and includes various scripts for deploying, minting, and managing NFTs on the Ethereum blockchain.

## Description

The Polyproof Project 1 is centered around the CraftNft contract, which allows users to mint and manage non-fungible tokens (NFTs) on the Ethereum network. This project serves as an example of how to create and interact with NFTs using Solidity and various JavaScript scripts.

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- Hardhat
- Metamask Wallet for deploying to testnets
- Access to the Sepolia and Amoy test network

### Installation

1. Clone the repository into Gitpod:
   ```bash
   git clone https://github.com/Metacrafters/fxPortalStarter.git
   ```

2. Install dependencies:
   ```bash
   npm i
   ```

### Executing Scripts

You can use the following scripts to interact with the CraftNft contract:

- **deploy.js**: Deploys the CraftNft contract to the blockchain.
- **mint.js**: Mints a new NFT using the deployed CraftNft contract.
- **approveDeposit.js**: Approves the transfer of tokens from Sepolia to Amoy.
- **getBalance.js**: Retrieves the balance of a specific address.

#### Example Usage

1. **Deploy the Contract**:
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

2. **Mint an NFT**:
   ```bash
   npx hardhat run scripts/mint.js --network sepolia
   ```

3. **Approve Deposit**:
   ```bash
   npx hardhat run scripts/approveDeposit.js --network sepolia
   ```

4. **Get Balance**:
   ```bash
   npx hardhat run scripts/getBalance.js --network amoy
   ```

### Hardhat Configuration

The Hardhat configuration is set up in `hardhat.config.js`. Make sure to configure your network settings and wallet private key for deployment.

## CraftNft Contract

Here’s a brief overview of the CraftNft contract:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CraftNft is ERC721A, Ownable {
    // Mapping
    mapping(uint256 => string) private _ipfsLinks;
    mapping(uint256 => string) private _tokenDescriptions;

    constructor() ERC721A("CraftNft", "CFT") {}

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "Token does not exist");
        return _ipfsLinks[tokenId];
    }

    function mintWithMetadata(
        address receiver, 
        uint256 qty, 
        string[] memory uris, 
        string[] memory descriptions
    ) public onlyOwner {
        require(qty == uris.length && qty == descriptions.length, "Mismatched input lengths");
        uint256 firstTokenId = _nextTokenId();

        for (uint256 i = 0; i < qty; i++) {
            _ipfsLinks[firstTokenId + i] = uris[i];
            _tokenDescriptions[firstTokenId + i] = descriptions[i];
        }

        _mint(receiver, qty);
    }

    function promptDescription(uint256 tokenId) public view returns (string memory) {
        require(_exists(tokenId), "Token does not exist");
        return _tokenDescriptions[tokenId];
    }
}
```

### Authors

Amir Raza
