import React, { useState, useEffect } from 'react'; // React ve hook'ları içe aktarır
import { useWallet } from "@solana/wallet-adapter-react"; // Solana wallet adapter hook'unu içe aktarır
import { ItemList } from "@components/home/item-list"; // NFT öğelerini listelemek için özel komponenti içe aktarır
import { ItemData } from "@components/home/item"; // NFT öğe veri tipini tanımlayan komponenti içe aktarır
import { toast } from "react-hot-toast"; // Kullanıcıya bildirim göstermek için kütüphaneyi içe aktarır

// NFT içeriğini gösteren ana React komponenti
export function HatiraNFTContent() {
  const { publicKey } = useWallet(); // Kullanıcının cüzdan adresini çeker
  const [data, setData] = useState<Array<ItemData>>([]); // NFT verilerini saklamak için state
  const [loading, setLoading] = useState(false); // Yüklenme durumunu kontrol etmek için state

  // Solana ağının API adresi
  const url = `https://devnet.helius-rpc.com/?api-key=d145928e-576f-4ce7-9742-447246556b53`

  // Cüzdan sahibinin NFT'lerini getiren fonksiyon
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
          ownerAddress: publicKey, // Cüzdan adresi
          page: 1, // Sayfa numarası, 1'den başlar
          limit: 1000, // Bir seferde alınacak maksimum NFT sayısı
        },
      }),
    });
    const { result } = await response.json();
    setData(result.items); // Alınan NFT'leri state'e ata
  };

  // Cüzdan adresi değiştiğinde NFT'leri tekrar getir
  useEffect(() => {
    if (publicKey) getAssetsByOwner();
  }, [publicKey]);

  // Yüklenme durumunu göster
  if (loading) {
    return <p className="text-center p-4">Loading Your Souvenir NFTs...</p>;
  }

  // Cüzdan bağlanmadıysa kullanıcıyı bilgilendir
  if (!publicKey) {
    return (
      <div className="text-center p-4">
        Please Connect Your Wallet to See Your Souvenir NFTs.
      </div>
    );
  }

  // Cüzdan bağlıysa ve NFT'ler yüklendiyse, NFT listesini göster
  // NFT'leri listelemek için ItemList komponentini kullan
  return (
    <div className="grid grid-cols-1">
      <ItemList items={data} /> 
    </div>
  );
}
