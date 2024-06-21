//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import { IEAS, AttestationRequest, AttestationRequestData } from "@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol";
import { NO_EXPIRATION_TIME, EMPTY_UID } from "@ethereum-attestation-service/eas-contracts/contracts/Common.sol";

error InvalidEAS();

struct ProductReview {
	uint256 productId;
	address buyerAddress;
	string review;
}

/// @title ProductReviewAttester
/// @notice Ethereum Attestation Service - Example
contract ProductReviewAttester {
	// The address of the global EAS contract.
	IEAS public immutable _eas;
	bytes32 public immutable _productReviewSchema;
	address public immutable _sellerAddress;

	/// @notice Creates a new ProductReviewAttester instance.
	/// @param eas The address of the global EAS contract.
	constructor(IEAS eas, bytes32 productReviewSchema, address sellerAddress) {
		if (address(eas) == address(0)) {
			revert InvalidEAS();
		}

		_eas = eas;
		_productReviewSchema = productReviewSchema;
		_sellerAddress = sellerAddress;
	}

	/// @notice Attests to a schema that receives a uint256 parameter.
	/// @param productReview The ProductReview value to pass to to the resolver.
	/// @return uid The UID of the new attestation.
	function attestProductReview(
		ProductReview memory productReview
	) external returns (bytes32 uid) {
		// return
		// 	_eas.attest(
		// 		AttestationRequest({
		// 			schema: _productReviewSchema,
		// 			data: AttestationRequestData({
		// 				recipient: _sellerAddress, // No recipient
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

		return (
			0x3100000000000000000000000000000000000000000000000000000000000000
		);
	}
}
