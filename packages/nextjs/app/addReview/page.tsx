"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { AddReviewCard } from "~~/components/AddReviewCard";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

const AddReview: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const { data: eventsBuyWithETH } = useScaffoldEventHistory({
    contractName: "TrustScriptShop",
    eventName: "BuyProductWithETH",
    fromBlock: 0n,
    watch: true,
  });

  const filteredEvents = eventsBuyWithETH?.filter(event => event.args.buyerAddress === connectedAddress);
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="container mx-auto p-4 flex flex-col items-center">
          <h1 className="text-5xl font-bold italic text-center mb-4 mt-3">Review Your Purchases</h1>
          {!eventsBuyWithETH || eventsBuyWithETH.length === 0 || !filteredEvents?.length ? (
            <h2 className="text-xl font-bold text-center mb-4 mt-3">No purchases available</h2>
          ) : (
            filteredEvents?.map((event, index) => {
              return (
                <AddReviewCard
                  key={index}
                  productName={event.args.product?.name || "---"}
                  productImage={`/merch/${event.args.product?.name}.png`}
                  id={event.args.product?.id || 1n}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default AddReview;
