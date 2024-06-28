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

We would want Attestation to be done after Product has been recived hence the satisfaction of a buyer is fully earned , possible the attestion is given a period before the attester is verifed to be allowed to attest based on product delivery.
