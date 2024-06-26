"use client";

import Image from "next/image";
import { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const ProductReviews: NextPage = () => {
  const { data: allProductReviews, isLoading: isProductReviewsLoading } = useScaffoldReadContract({
    contractName: "TrustScriptShop",
    functionName: "getAllProductReviews",
  });

  const { data: allProducts, isLoading: isProductsLoading } = useScaffoldReadContract({
    contractName: "TrustScriptShop",
    functionName: "getAllProducts",
  });

  const productReviewData: any = [];
  if (allProducts) {
    const mockProductIds = allProducts.map(item => item.id);
    if (allProductReviews) {
      allProductReviews.toReversed().forEach(item => {
        const _index = mockProductIds.indexOf(item.productId);
        console.log(_index);
        if (_index !== -1) {
          const productReviewsObject: any = {};
          productReviewsObject["review"] = item;
          productReviewsObject["product"] = allProducts[_index];
          productReviewData.push(productReviewsObject);
        }
      });
    }
  }

  if (isProductsLoading || isProductReviewsLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="container mx-auto p-4 flex flex-col items-center">
        <h1 className="text-5xl font-bold italic text-center mb-4 mt-3">Product Reviews</h1>
        {productReviewData && productReviewData.length > 0 ? (
          productReviewData.map((item: any, index: number) => (
            <div key={index} className="bg-base-100 shadow-xl rounded-box p-4 m-4 w-full max-w-2xl">
              <div className="flex justify-evenly">
                <div className="flex flex-col items-center">
                  <Image src={`/merch/${item.product.name}.png`} alt={item.product.name} width={60} height={60} />
                  <h2 className="text-2xl font-semibold">{item.product.name}</h2>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-gray-600 pr-1">
                    <Address address={item.review.buyerAddress} />
                  </span>
                  <span>
                    <strong>said:</strong> {item.review.review}
                  </span>
                  <a
                    href={`https://base-sepolia.easscan.org/attestation/view/${item.review.attestationUID}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-500 cursor-pointer"
                  >
                    🔍
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-xl font-bold text-center mb-4 mt-3">No reviews available</h2>
        )}
      </div>
    </div>
  );
};

export default ProductReviews;
