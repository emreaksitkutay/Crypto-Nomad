import React, { useState } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "@components/layout/header";
import { PageContainer } from "@components/layout/page-container";
import { MintNFTContent } from "@components/mintnft/mintnft-content"; // Bu yeni bir komponent olacak
import { DrawerContainer } from "@components/layout/drawer-container";
import { Menu } from "@components/layout/menu";
import { Footer } from "@components/layout/footer";

const MintNFT = () => {
  const [amount, setAmount] = useState(1); // Mint edilecek NFT miktarını tutan state
  const router = useRouter(); // Next.js router hook'u

  const handleMint = (e) => {
    e.preventDefault();
    alert(`Minting ${amount} NFT(s)`);
    // Burada mint işlemi için gereken kodu ekleyebilirsiniz.
  };

  // Go back fonksiyonu
  const handleGoBack = () => {
    router.back(); // Bir önceki sayfaya döner
  };

  return (
    <div className="mint-container">
      <form onSubmit={handleMint} className="mint-form">
        <div className="form-field">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
            max="10"
            step="1"
          />
        </div>
        <div className="form-buttons">
          <button type="submit" className="mint-button">Mint NFT</button>
<button
  type="button"
  onClick={handleGoBack}
  style={{
    backgroundColor: '#f0f0f0', 
    color: '#333', 
    padding: '10px', 
    margin: '5px', 
    border: '1px solid #ddd', 
    borderRadius: '5px',
    cursor: 'pointer'
  }}
>
  Go Back
</button>

        </div>
      </form>
    </div>
  );
};

export default MintNFT;
