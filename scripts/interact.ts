import { ethers, network, upgrades } from "hardhat";
import Env from "dotenv";
import hre from "hardhat";
import "@openzeppelin/hardhat-upgrades";
import { Perper } from "../typechain/perper";


async function main() {
    const Token = await hre.ethers.getContractFactory("Perper");
    const contractAddress = "0x50B4f2fEa06C861fbf08fe876DE76F55C26DB036";
    const contract = await Token.attach(contractAddress);

    //list roles generated keccak256
    const proxyOwner = await contract.PROXYOWNER_ROLE();
    const blocklister = await contract.BLOCKLISTER_ROLE();
    const pause = await contract.PAUSER_ROLE();
    const unpauser = await contract.UNPAUSER_ROLE();
    const minter = await contract.MINTER_ROLE();
    const blocked = await contract.BLOCKED_ROLE();
    const rescuer = await contract.RESCUER_ROLE();
    const burner = await contract.BURNER_ROLE();

    console.log("PROXYOWNER_ROLE " + proxyOwner);
    console.log("BLOCKLISTER_ROLE " + blocklister);
    console.log("PAUSER_ROLE " + pause);
    console.log("UNPAUSER_ROLE " + unpauser);
    console.log("MINTER_ROLE " + minter);
    console.log("BLOCKED_ROLE " + blocked);
    console.log("RESCUER_ROLE " + rescuer);
    console.log("BURNER_ROLE " + burner);

    //check if address has a role
    const hasRole = await contract.hasRole("0x12c33894578cccde1cfba3a09dfca3798b2e7f412b01fe0b5c778d03c687dfbe","0x2C2b3a7656c8823782306b4cf7564DE7ED2eA6a8");
    console.log(hasRole);

    //await contract.mint("0x2C2b3a7656c8823782306b4cf7564DE7ED2eA6a8",1000000000);

    const totalSupply = await contract.totalSupply();
    console.log("Total Supply: " + totalSupply);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  