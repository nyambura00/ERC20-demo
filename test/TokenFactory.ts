import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("TokenFactory", () => {
  async function setupContracts() {
    const [owner, otherAccounts] = await ethers.getSigners();

    const tokenFactoryContract = await ethers.getContractFactory("TokenFactory");

    const tokenFactory = await tokenFactoryContract.deploy();

    return {tokenFactory, owner, otherAccounts};
  }

  describe("Deployment", ()=> {
    it("TokenCount should be 0 after deploy", async () => {
      const {tokenFactory} = await setupContracts();
      expect(await tokenFactory.totalTokenCount()).to.equal(ethers.BigNumber.from(0));
    })
  })

  describe("Create token", ()=> {
    it("Should deploy an ERC20 Token", async () => {
      const {tokenFactory, owner} = await setupContracts();

      await tokenFactory
      .connect(owner)
      .createToken(ethers.utils.parseUnits("10000"), "TestToken", "TTT");

      var tokenAddress = await tokenFactory.getTokenAddress(0);
      var token = await ethers.getContractAt("Token", tokenAddress);

      expect(await token.balanceOf(owner.address)).to.equal(ethers.utils.parseUnits("10000"));
    })
  })
})