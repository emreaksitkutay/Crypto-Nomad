import React from "react";

export type ItemData = {
  collectionAddress: string;
  collectionName: string;
  imageUrl: string;
  name: string;
  tokenAddress: string;
  traits: Array<{ trait_type: string; value: string }>;
  content : any
  info : any
};

type Props = {
  data: ItemData;
};

export function Item({ data }: Props) {

  const name = data.content?.metadata?.name;
  const collection = data.collectionName;
  const imgUrl = data.content?.links?.image;

  return (
    <div className="h-80 card shadow-xl bg-neutral text-neutral-content">
      {imgUrl && (
        <figure className="relative h-80">
          <img
            className="h-100 w-96 aspect-square	"
            src={imgUrl}
            alt={`Picture of ${name}`}
          />
        </figure>
      )}
      <div className="card-body p-4 items-center text-center">
        <h2 className="card-title m-0">{name}</h2>
        {collection && <p>{collection}</p>}
      </div>
    </div>
  );
}
