"use client";

import { NextPage } from "next";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const ProductReviews: NextPage = () => {
  const { data: allProductReviews, isLoading: isProductReviewsLoading } = useScaffoldReadContract({
    contractName: "TrustScriptShop",
    functionName: "getAllProductReviews",
  });

  if (isProductReviewsLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="flex flex-col py-8 px-4 lg:px-8 lg:py-12 justify-center items-center min-h-full">
      <h1 className="text-4xl font-bold mb-8">Product Reviews</h1>
      {allProductReviews && allProductReviews.length > 0 ? (
        allProductReviews.map((review, index) => (
          <div key={index} className="bg-base-100 shadow-xl rounded-box p-4 mb-4 w-full max-w-2xl">
            <h2 className="text-2xl font-semibold mb-2">Product ID: {review.productId.toString()}</h2>
            <p className="text-base mb-1">
              <span className="font-medium">{review.review}</span> said:
            </p>
            <p className="text-lg italic">{review.review}</p>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default ProductReviews;
