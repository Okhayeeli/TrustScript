//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import { IEAS, AttestationRequest, AttestationRequestData } from "@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol";
import { NO_EXPIRATION_TIME, EMPTY_UID } from "@ethereum-attestation-service/eas-contracts/contracts/Common.sol";

struct ProductReview {
	uint256 productId;
	address buyerAddress;
	string review;
}

/// @title TrustScriptProductReviewAttester
/// @notice Ethereum Attestation Service - Example
contract TrustScriptProductReviewAttester {
	// The address of the global EAS contract.
	IEAS public immutable eas;
	bytes32 public immutable productReviewSchemaUID;

	error InvalidEAS();

	/// @notice Creates a new TrustScriptProductReviewAttester instance.
	/// @param easAddress The address of the global EAS contract.
	/// @param _productReviewSchemaUID The UID of the ProductReview schema.
	constructor(IEAS easAddress, bytes32 _productReviewSchemaUID) {
		if (address(easAddress) == address(0)) {
			revert InvalidEAS();
		}

		eas = easAddress;
		productReviewSchemaUID = _productReviewSchemaUID;
	}

	/// @notice Attests to a schema that receives a ProductReview parameter.
	/// @param productReview The ProductReview value to pass to to the resolver.
	/// @return attestationUID The UID of the new attestation.
	function attestProductReview(
		ProductReview memory productReview,
		address sellerAddress
	) external returns (bytes32 attestationUID) {
		// return
		// 	eas.attest(
		// 		AttestationRequest({
		// 			schema: productReviewSchemaUID,
		// 			data: AttestationRequestData({
		// 				recipient: sellerAddress,
		// 				expirationTime: NO_EXPIRATION_TIME, // No expiration time
		// 				revocable: true,
		// 				refUID: EMPTY_UID, // No references UI
		// 				data: abi.encode(
		// 					productReview.productId,
		// 					productReview.buyerAddress,
		// 					productReview.review
		// 				),
		// 				value: 0 // No value/ETH
		// 			})
		// 		})
		// 	);

		return
			0x3100000000000000000000000000000000000000000000000000000000000000;
	}
}
