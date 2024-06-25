import { FC } from "react";
import { formatEther } from "viem";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export const TSTBalance: FC = () => {
  const { address: connectedAddress } = useAccount();
  const { data: tokenBalance, isLoading: isTokenBalanceLoading } = useScaffoldReadContract({
    contractName: "TrustScriptToken",
    functionName: "balanceOf",
    args: [connectedAddress],
  });

  return (
    <div className="container mx-auto p-4">
      {isTokenBalanceLoading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <h2 className="text-xl font-bold text-center mb-4 mt-3">
          Your token Balance: {formatEther(tokenBalance || BigInt(0))} TST
        </h2>
      )}
    </div>
  );
};
