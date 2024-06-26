"use client";

import { ProductCard } from "../components/ProductCard";
import { TSTBalance } from "../components/TSTBalance";
import type { NextPage } from "next";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { data: allProducts, isLoading: isProductsLoading } = useScaffoldReadContract({
    contractName: "TrustScriptShop",
    functionName: "getAllProducts",
  });

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        {isProductsLoading ? (
          <span className="loading loading-spinner"></span>
        ) : (
          <div className="container mx-auto p-4 flex flex-col items-center">
            <h1 className="text-5xl font-bold italic text-center mb-4 mt-3">Trust Products</h1>
            <TSTBalance />
            <div className="flex flex-wrap justify-center gap-4">
              {allProducts?.map(item => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
