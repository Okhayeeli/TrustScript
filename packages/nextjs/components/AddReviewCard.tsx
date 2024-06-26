import { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

interface AddReviewCardProps {
  productName: string;
  productImage: string;
  id: bigint;
}

export const AddReviewCard: FC<AddReviewCardProps> = ({ productName, productImage, id }) => {
  const router = useRouter();
  const [review, setReview] = useState<string>();
  const { writeContractAsync: writeTrustScriptShop } = useScaffoldWriteContract("TrustScriptShop");

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReview(e.target.value);
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl m-4 rounded-box">
      <div className="flex flex-col md:flex-row items-center p-4">
        <div className="flex-shrink-1">
          <Image
            src={productImage}
            alt={productName}
            width={100}
            height={100}
            objectFit="cover"
            className="rounded-xl mt-5"
          />
        </div>
        <div className="flex flex-col flex-grow justify-center ml-4">
          <h2 className="card-title text-xl font-semibold mb-1">{productName}</h2>
          <p className="mb-2">Your review:</p>
          <div className="flex items-center w-full">
            <input
              type="text"
              className="input input-bordered flex-grow mr-2"
              placeholder="Write your review here!"
              value={review}
              onChange={handleReviewChange}
            />
            <br />
            <button
              className="btn btn-primary"
              onClick={async () => {
                try {
                  await writeTrustScriptShop({
                    functionName: "reviewProduct",
                    args: [id, review],
                  });
                  router.push("/viewReview");
                } catch (error) {
                  console.error("Error reviewing the product", error);
                }
              }}
            >
              Attest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
