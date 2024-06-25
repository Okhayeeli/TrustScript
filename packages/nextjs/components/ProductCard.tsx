import { FC } from "react";
import Image from "next/image";
import { formatEther } from "viem";
import { useDeployedContractInfo, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

interface Product {
  id: bigint;
  name: string;
  priceInETH: bigint;
  priceInToken: bigint;
}

export const ProductCard: FC<{ product: Product }> = ({ product }) => {
  const { data: trustScriptShopContractData } = useDeployedContractInfo("TrustScriptShop");
  const { writeContractAsync: writeTrustScriptShop } = useScaffoldWriteContract("TrustScriptShop");
  const { writeContractAsync: writeTrustScriptToken } = useScaffoldWriteContract("TrustScriptToken");

  return (
    <div className="card w-80 h-auto bg-base-100 shadow-xl m-4 rounded-lg overflow-hidden">
      <div className="flex items-center justify-center px-2 pt-2">
        <div className="relative w-48 h-48 mb-6">
          <Image
            src={`/merch/${product.name}.png`}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-xl mt-5"
          />
        </div>
      </div>
      <div className="card-body flex flex-col items-center text-center p-4">
        <h2 className="card-title text-2xl font-semibold mb-4">{product.name}</h2>
        <div className="flex flex-col items-center mb-1 space-y-4 w-full">
          <div className="flex items-center justify-between w-full px-14">
            <p className="text-l">{formatEther(product.priceInETH)} ETH</p>
            <button
              className="btn btn-primary ml-4 px-7"
              onClick={async () => {
                try {
                  await writeTrustScriptShop({
                    functionName: "buyProductWithETH",
                    args: [product.id],
                    value: product.priceInETH,
                  });
                } catch (error) {
                  console.error("Error buying item with ETH", error);
                }
              }}
            >
              Buy
            </button>
          </div>

          <div className="flex items-center justify-between w-full px-14">
            <p className="text-l">{formatEther(product.priceInToken)} TST</p>
            <button
              className="btn btn-primary ml-4 px-5"
              onClick={async () => {
                try {
                  await writeTrustScriptToken({
                    functionName: "approve",
                    args: [trustScriptShopContractData?.address, product.priceInToken],
                  });
                } catch (err) {
                  console.error("Error calling approve function");
                }
              }}
            >
              Approve
            </button>

            <button
              className="btn btn-primary ml-4 px-5"
              onClick={async () => {
                try {
                  await writeTrustScriptShop({
                    functionName: "buyProductWithToken",
                    args: [product.id, product.priceInToken],
                  });
                } catch (error) {
                  console.error("Error buying item with ETH", error);
                }
              }}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
