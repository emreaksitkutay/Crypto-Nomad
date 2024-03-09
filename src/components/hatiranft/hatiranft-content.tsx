import React, { useState, useEffect } from 'react';
import { useWallet } from "@solana/wallet-adapter-react";
import { ItemList } from "@components/home/item-list";
import { ItemData } from "@components/home/item";
import { toast } from "react-hot-toast";

export function HatiraNFTContent() {
  const { publicKey } = useWallet();
  const [data, setData] = useState<Array<ItemData>>([]);
  const [loading, setLoading] = useState(false);

  const url = `https://mainnet.helius-rpc.com/?api-key=3cf5e69c-399d-4e51-bb7f-f3d8b3d662ed`

  const getAssetsByOwner = async () => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 'a',
        method: 'getAssetsByOwner',
        params: {
          ownerAddress: publicKey,
          page: 1, // Starts at 1
          limit: 1000,
        },
      }),
    });
    const { result } = await response.json();
    // console.log(result);
    
    // console.log(result.items.length);
    

    setData(result.items)
  };

  React.useEffect(() => {
    if (publicKey) getAssetsByOwner()
  }, [publicKey])

  if (loading) {
    return <p className="text-center p-4">Loading Your Souvenir NFTs...</p>;
  }

  if (!publicKey) {
    return (
      <div className="text-center p-4">
        Please Connect Your Wallet to See Your Souvenir NFTs.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1">
      <ItemList items={data} />
    </div>
  );
}
