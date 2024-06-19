/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    OnchainShop: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_sellerAddress",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "productId",
                  type: "bytes32",
                },
                {
                  internalType: "string",
                  name: "productName",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "price",
                  type: "uint256",
                },
              ],
              internalType: "struct OnchainShop.Product",
              name: "_product",
              type: "tuple",
            },
          ],
          name: "addProduct",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "productId",
              type: "bytes32",
            },
          ],
          name: "buyProduct",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "getAllProducts",
          outputs: [
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "productId",
                  type: "bytes32",
                },
                {
                  internalType: "string",
                  name: "productName",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "price",
                  type: "uint256",
                },
              ],
              internalType: "struct OnchainShop.Product[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "numberOfProducts",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "productArray",
          outputs: [
            {
              internalType: "bytes32",
              name: "productId",
              type: "bytes32",
            },
            {
              internalType: "string",
              name: "productName",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "price",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          name: "productMapping",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          name: "products",
          outputs: [
            {
              internalType: "bytes32",
              name: "productId",
              type: "bytes32",
            },
            {
              internalType: "string",
              name: "productName",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "price",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "sellerAddress",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
  84532: {
    OnchainShop: {
      address: "0x2Fa1b80Db2e8f6EfF8B3229dbFc9d1395f998F5f",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_sellerAddress",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "productId",
                  type: "bytes32",
                },
                {
                  internalType: "string",
                  name: "productName",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "price",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "quantity",
                  type: "uint256",
                },
              ],
              internalType: "struct OnchainShop.Product",
              name: "_product",
              type: "tuple",
            },
          ],
          name: "addProduct",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "productId",
              type: "bytes32",
            },
          ],
          name: "buyProduct",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          name: "products",
          outputs: [
            {
              internalType: "bytes32",
              name: "productId",
              type: "bytes32",
            },
            {
              internalType: "string",
              name: "productName",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "price",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "quantity",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "sellerAddress",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    ProductReviewAttestation: {
      address: "0x57158c971c8C146F3ed93F695a3c3b0B95052c55",
      abi: [
        {
          inputs: [
            {
              internalType: "contract IEAS",
              name: "eas",
              type: "address",
            },
            {
              internalType: "address",
              name: "_sellerAddress",
              type: "address",
            },
            {
              internalType: "address",
              name: "_easAddress",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidEAS",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "bool",
              name: "success",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "Response",
          type: "event",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "productId",
                  type: "bytes32",
                },
                {
                  internalType: "string",
                  name: "review",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "liked",
                  type: "bool",
                },
              ],
              internalType: "struct ProductReviewAttestation.ProductReview",
              name: "_productReview",
              type: "tuple",
            },
          ],
          name: "attestProductReview",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "easAddress",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "sellerAddress",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
