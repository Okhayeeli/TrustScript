import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployTrustScriptShop: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
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

  const trustScriptToken = await hre.ethers.getContract<Contract>("TrustScriptToken", deployer);
  const trustScriptTokenAddress = await trustScriptToken.getAddress();

  const trustScriptProductReviewAttester = await hre.ethers.getContract<Contract>(
    "TrustScriptProductReviewAttester",
    deployer,
  );
  const trustScriptProductReviewAttesterAddress = await trustScriptProductReviewAttester.getAddress();

  await deploy("TrustScriptShop", {
    from: deployer,
    // Contract constructor arguments
    args: [
      "0x1Db9A0a2eD105aBf4862337084C907f5763aD491",
      trustScriptTokenAddress,
      trustScriptProductReviewAttesterAddress,
    ],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });
};

export default deployTrustScriptShop;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployTrustScriptShop.tags = ["TrustScriptShop"];
