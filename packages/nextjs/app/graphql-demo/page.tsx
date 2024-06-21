"use client";

import { gql, useQuery } from "@apollo/client";
import { NextPage } from "next";

const GraphQLDemo: NextPage = () => {
  const GET_PRODUCT_REVIEW_ATTESTATION = gql`
    query Attestations($where: AttestationWhereInput) {
      attestations(where: $where) {
        id
        decodedDataJson
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_PRODUCT_REVIEW_ATTESTATION, {
    variables: {
      where: {
        recipient: {
          equals: "0xd435E23e9A15909CA72B62461975e40Bfc24F38d",
        },
        schemaId: {
          equals: "0x9f6f2eb2bddf3726a58b6254b697ab24b3527fdaabc01a65765ede0d10ddabc7",
        },
      },
    },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  data && console.log(data);
  const sampleProductReviewAttestation = JSON.parse(data?.attestations[2]["decodedDataJson"]);

  return (
    <>
      <div className="text-center mt-8 bg-secondary p-10">
        GraphQL Demo
        <div className="text-center mt-8 bg-secondary p-3">
          ProductId: <span>{sampleProductReviewAttestation[0].value.value.toString()}</span>
        </div>
        <div className="text-center mt-8 bg-secondary p-3">
          Buyer Address: From field &quot;buyerAddress&quot; in Product Review Attestation
        </div>
        <div className="text-center mt-8 bg-secondary p-3">
          Review: <span>{sampleProductReviewAttestation[1].value.value}</span>
        </div>
      </div>
    </>
  );
};

export default GraphQLDemo;
