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
