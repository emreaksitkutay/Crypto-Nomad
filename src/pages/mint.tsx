import React, { useState } from 'react';

const MintNFT = () => {
  const [amount, setAmount] = useState(1); // Mint edilecek NFT miktarını tutan state

  const handleMint = (e) => {
    e.preventDefault();
    // Burada mint işlemi için gereken kodu ekleyebilirsiniz.
    alert(`Minting ${amount} NFT(s)`);
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
        <button type="submit" className="mint-button">Mint NFT</button>

      </form>
    </div>
    


  );
};

export default MintNFT;
