//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract OnchainShop {
	address public immutable sellerAddress; // 0xe84680C37f320c56d9F26E549155D33Bd412e7E3
	uint256 public numberOfProducts;

	struct Product {
		bytes32 productId; // 0x3100000000000000000000000000000000000000000000000000000000000000
		string productName;
		uint256 price;
	}

	mapping(bytes32 => bool) public productMapping;
	Product[] public productArray;
	mapping(bytes32 => Product) public products;

	mapping(address => bool) public allowedAttesters;

	constructor(address _sellerAddress) {
		sellerAddress = _sellerAddress;
	}

	function addProduct(Product memory _product) public {
		require(!productMapping[_product.productId], "Existed productId");

		productMapping[_product.productId] = true;
		productArray.push(_product);
		products[_product.productId] = _product;
		numberOfProducts++;
	}

	function buyProduct(bytes32 productId) public payable {
		uint256 price = products[productId].price;
		require(msg.value == price, "Unequal value sent and price");

		if (!allowedAttesters[msg.sender]) {
			allowedAttesters[msg.sender] = true;
		}

		(bool sent, ) = sellerAddress.call{ value: price }("");
		require(sent, "Failed to send Ether");
	}

	function getAllProducts() public view returns (Product[] memory) {
		if (numberOfProducts == 0) {
			return new Product[](0);
		}

		Product[] memory allProducts = new Product[](numberOfProducts);
		for (uint i = 0; i < numberOfProducts; i++) {
			allProducts[i] = productArray[i];
		}
		return allProducts;
	}
}
