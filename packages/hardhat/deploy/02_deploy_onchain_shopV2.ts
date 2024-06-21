import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployOnchainShopV2: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("OnchainShopV2", {
    from: deployer,
    // Contract constructor arguments
    args: ["0xe84680C37f320c56d9F26E549155D33Bd412e7E3"],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  //Add 6 products
  const onchainShop = await hre.ethers.getContract<Contract>("OnchainShopV2", deployer);

  const productNames = ["Coin Cap", "Bitcoin Hoodie", "Brian Beanie", "Onchain Pin", "Coinbrew", "T-shirt"];

  for (let i = 0; i <= 5; i++) {
    const product = {
      productId: hre.ethers.encodeBytes32String(`Product${i}`),
      productName: productNames[i],
      price: hre.ethers.parseEther((0.01 * i).toString()),
    };

    console.log(`Adding product ${i}`);
    await onchainShop.addProduct(product);
  }
};

export default deployOnchainShopV2;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployOnchainShopV2.tags = ["V2"];
