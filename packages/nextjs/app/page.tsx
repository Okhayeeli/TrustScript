"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  // const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("ProductReviewAttestation");
  const { data: products, isLoading: isProductsLoading } = useScaffoldReadContract({
    contractName: "OnchainShop",
    functionName: "getAllProducts",
  });

  console.log(products);

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <div className="block text-4xl font-bold">
              <div className="inline-block relative w-10 h-10 align-bottom mr-2">
                <Image alt="Base logo" className="cursor-pointer" fill src="/Base_Symbol_Blue.svg" />
              </div>
              Scaffold-Base
            </div>
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
          <p className="text-center text-lg">
            Get started by editing{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/nextjs/app/page.tsx
            </code>
          </p>
          <p className="text-center text-lg">
            Edit your smart contract{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              YourContract.sol
            </code>{" "}
            in{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/hardhat/contracts
            </code>
          </p>
        </div>

        {isProductsLoading ? (
          <span className="loading loading-spinner"></span>
        ) : (
          <div className="container mx-auto p-4">
            <h1 className="text-5xl font-bold italic mb-4 text-center mb-4 mt-3">Menu</h1>
            <div className="flex flex-wrap justify-center gap-6">
              {products?.map(item => (
                <div className="card w-96 h-auto bg-base-100 shadow-xl" key={item.productId}>
                  <div className="flex items-center justify-center px-2 pt-2">
                    {/* <Image
                            src={image}
                            alt={name}
                            width={200}
                            height={180}
                            className="rounded-xl mt-5" /> */}
                  </div>
                  <div className="card-footer mt-auto flex flex-col items-center">
                    <div className="card-body flex-grow flex flex-col items-center text-center">
                      <h2 className="card-title">{item.productName}</h2>
                      <p>ABC123 ABC123</p>
                    </div>
                    <p className="font-bold mb-2 text-xl">{item.price.toString()} wei</p>
                    <div className="card-actions mb-5">
                      <button className="btn btn-primary">Buy</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
