import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Header } from "@components/layout/header";
import { PageContainer } from "@components/layout/page-container";
import { HatiraNFTContent } from "@components/hatiranft/hatiranft-content";
import { DrawerContainer } from "@components/layout/drawer-container";
import { Menu } from "@components/layout/menu";
import { Footer } from "@components/layout/footer";

const HatiraNFT: NextPage = () => {

  return (
    <>
      <Head>
        <title>Souvenir NFTs - Crypto Nomad</title>
        <meta
          name="description"
          content="Special Page for Souvenir NFTs"
        />
      </Head>
      <DrawerContainer>
        <PageContainer>
          <Header />
          <HatiraNFTContent /> {/* Özel içerik */}
          <Footer />
        </PageContainer>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <Menu className="p-4 w-80 bg-base-100 text-base-content" />
        </div>
      </DrawerContainer>
    </>
  );
};

export default HatiraNFT;