import React, { useState } from 'react';
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import classNames from "classnames";

type Props = {
  twitterHandle?: string;
  className?: string;
};

export function Menu({ twitterHandle, className }: Props) {
  const { connected } = useWallet();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const menuClasses = classNames("menu", className);

  const dropdownStyle: React.CSSProperties = {
    display: isDropdownOpen ? "block" : "none",
    position: "absolute",
    backgroundColor: "#f9f9f9",
    minWidth: "160px",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: 1,
    padding: "12px 16px",
    borderRadius: "4px",
    marginTop: "45px",
  };

  const linkStyle: React.CSSProperties = {
    color: "#333",
    textDecoration: "none",
    padding: "8px 12px",
    display: "block",
  };

  const buttonStyle: React.CSSProperties = hover ? {
    backgroundColor: "#ddd",
    color: "#333",
  } : {
    backgroundColor: "#f9f9f9", // Normal durumda buton arkaplan rengi
    color: "#333", // Normal durumda buton yazı rengi
  };

  return (
    <ul className={menuClasses}>
      {connected && (
        <>
          {twitterHandle && (
            <li className="rounded-box">
              <a
                href={`https://www.twitter.com/${twitterHandle}`}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost lg:btn mb-1 lg:mr-1 lg:mb-0"
                style={{ color: "#333" }}
              >
                @{twitterHandle}
              </a>
            </li>
          )}
          <li style={{ position: 'relative' }}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="btn-ghost lg:btn mb-1 lg:mr-1 lg:mb-0"
              style={buttonStyle}
            >
              Menu
            </button>
            <div style={dropdownStyle}>
              <li><a href="/hatiranft" style={linkStyle}>My Souvenir NFTs</a></li>
              <li><a href="/mint" style={linkStyle}>Mint Your Souvenir NFT</a></li>
            </div>
          </li>
        </>
      )}
      <WalletMultiButton className="btn" />
    </ul>
  );
}
