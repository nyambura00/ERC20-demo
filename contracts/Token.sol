// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is Ownable, ERC20 {
    constructor(uint256 initialSupply, string memory name, string memory symbol) Ownable() ERC20(name, symbol) {
        _mint(msg.sender, initialSupply);
    }
}