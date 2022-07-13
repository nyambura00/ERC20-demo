// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Token.sol";

contract TokenFactory is Ownable {
    address[] public Tokens;
    uint256 public TokenCount;

    constructor() Ownable() {
        TokenCount = 0;
    }

    function createToken(
        uint256 _initialSupply,
        string calldata _name,
        string calldata _symbol) external onlyOwner() returns (address){
            Token newToken = (new Token(_initialSupply,_name, _symbol));
            Tokens.push(address(newToken));
            TokenCount++;
            newToken.transferOwnership(msg.sender);
            newToken.transfer(msg.sender, _initialSupply);
            return address(newToken);
        }

    function totalTokenCount() public view returns (uint256) {
        return TokenCount;
    }
    
    function getTokenAddress(uint256 _index) public view returns (address) {
        return Tokens[_index];
    }
}