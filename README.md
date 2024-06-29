# TrustShop

## The problem it solves

TrustShop tackles online marketplace woes: lack of trust, low-quality reviews, and unclear transactions. By rewarding honest reviews with TST tokens on the blockchain, TrustShop incentivizes user participation, promotes product quality, and fosters a secure and transparent shopping experience.

## Technologies we used

- Ethereum
- BASE
- Solidity
- Next.js
- Hardhat
- Scaffold-Base
- EAS

## How to use it

- Enter the app and add connect your wallet.
- Make sure you have enough ETH to purchase.
- Once you have bought and paid, you will directed to Review Purchases page, where you drop your review and attest.

## Our contracts

1. TrustScriptShop contract:

   1. An onchain shop built on base for sellers to sell product and get paid via ETH.
   2. What is unique is that as buyer make a purchase they are redirected to attest what is being bought.
   3. Buyers are immediatedly credited with TST token as a thank you for attesting a product bought.

2. TrustScriptProductReviewAttester contract:

   1. Handles the submission of the review.
   2. Stores attestation as Attestation UID which can be view on base-sepolia.easscan.org.

3. TrustScriptToken contract:

   1. Store of the Token that is being minted after a buyer successfully attest their review.

## Future use-case implementation

We would want Attestation to be done after Product has been received hence the satisfaction of a buyer is fully earned, possible the attestion is given a period before the attester is verified to be allowed to attest based on product delivery.

## Run the project locally

1. Clone this repo & install dependencies

```
git clone https://github.com/Okhayeeli/TrustScript.git
cd TrustScript
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contracts:

```
yarn deploy
```

This command deploys the smart contracts to the local network. The contracts are located in `packages/hardhat/contracts`. The `yarn deploy` command uses the deploy scripts located in `packages/hardhat/deploy` to deploy the contracts to the network. For the app to work locally you have to allow `TrustScriptShop` to be a minter from `TrustScriptToken` contract, you can do so by calling the `allowMinter` function in the later contract.

Note: When running locally, you should hard-code a bytes32 returned value in attestProductReview within TrustScriptProductReviewAttester because eas.attest does not function locally. For example: return 0x0d455486a3dadeacfba5f340fe5bf84d1f6678b2e2af53536acc8a4274626f82;

4. On a third terminal, start the NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with the smart contracts directly by using the `Debug Contracts` page, you have to uncomment the page in `Header.tsx` component in `packages/nextjs/components`. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.
