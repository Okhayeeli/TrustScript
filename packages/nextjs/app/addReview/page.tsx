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
    // filters: { buyerAddress: connectedAddress },
  });

  const filteredEvents = eventsBuyWithETH?.filter(event => event.args.buyerAddress === connectedAddress);
  return (
    //    Struct in the Smart Contract:

    //    Product {
    // 		uint256 id;
    // 		string name;
    // 		uint256 priceInETH;
    // 		uint256 priceInToken;
    // 	  }

    //    Event ins the Smart Contract
    //    emit BuyProductWithETH(msg.sender, products[id]);
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="container mx-auto p-4">
          <h1 className="text-5xl font-bold italic text-center mb-4 mt3"> Review your purchase</h1>
          {!eventsBuyWithETH || eventsBuyWithETH.length === 0 ? (
            <h2 className="text-xl font-bold text-center mb-4 mt3">No purchases yet</h2>
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
