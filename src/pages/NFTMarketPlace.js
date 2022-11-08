import React from "react";
import Business from "../components/Business";
import Development from "../components/Development";
import HeroSection from "../components/HeroSection";
import "../components/Nav.css";
import NavBar from "../components/Navbar";
import Trust from "../components/Trust";
const NFTMarketPlace = () => {
  return (
    <div>
      <div className='home-main-new'>
        <NavBar image='/images/logo1.png' />
        <HeroSection
          title='NFT Marketplace'
          subtitle='Development Services'
          desc='We can assist you in launching your own NFT marketplace. Our NFT marketplaces are feature-rich, decentralised, and allow for the tokenization of a wide range of assets, including artwork, gaming cards, software licenses, digital collectibles, and physical assets.'
          image='/images/Asset11.png'
        />
      </div>
      <Trust
        image='/images/Frame36.png'
        title='NFT Marketplace'
        subtitle='What is an NFT and How Does it Work in an NFT Marketplace?'
        desc1='The term “non-fungible token” refers to a token that is not fungible. It’s usually programmed in the same way as cryptocurrencies like Bitcoin or Ethereum, but that’s where the similarities end. Cryptocurrencies and physical money are both “fungible,” meaning they may be traded or exchanged for one another.'
        desc2='If changes must be made, the entire network must be modified. Our blockchain software development services assist clients in implementing customised decentralised solutions that eliminate paperwork, streamline data transactions without the involvement of an intermediary, reduce costs, and improve security.
'
      />
      <Business />
      <Development />
    </div>
  );
};

export default NFTMarketPlace;
