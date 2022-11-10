import React from "react";
import Business from "../components/Business";
import Development from "../components/Development";
import HeroSection from "../components/HeroSection";
import "../components/Nav.css";
import NavBar from "../components/Navbar";
import Trust from "../components/Trust";
import WorkWith from "../components/WorkWith";
import FAQ from "../components/FAQ";
import Meeting from "../components/Meeting";
import Footer from "../components/Footer";
import { Typography } from "@mui/material";
import WorkWithMob from "../components/WorkWithMob";
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
      <Development
        title='MONETISE BY DEVELOPING'
        subtitle='Cmd9 Lab NFT Marketplace
Development Services'
        Sec1Title='NFT Marketplace Development'
        Sec1Desc='Your NFT marketplace will be user-friendly, intuitive, and dependable thanks to our mix of NFT and eCommerce expertise. Allow us to build your profitable NFT marketplace so you can start reaping the benefits right away.'
        Sec2Title='Intellectual Property Tokenization'
        Sec2Desc='We use our NFT and blockchain experience to ensure that intellectual property management systems run smoothly and asset tokenization logic and execution are perfect. You can use these systems in your own business or sell them to others.'
        Sec3Title='NFT Smart Contract Development And Audit'
        Sec3Desc="We provide NFT smart contract development and auditing services to assure the smart contracts' error-free operation and seamless automation in NFT transactions. "
        Sec4Title='NFT Marketplace Support And Maintenance'
        Sec4Desc='We constantly monitor, manage, and provide assistance for third-party upgrades, and new OS versions, and ensure that nodes are always available.'
      />
      <Typography
        sx={{
          display: {
            xl: "block",
            lg: "block",
            md: "block",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <WorkWith
          title1='Looking For NFT Development Services?'
          desc1='With our next-generation NFT Development Services, we can turn'
          desc2='With our next-generation NFT Development Services, we can turn
          your '
          title2='Cmd9 Lab'
          subtitle2='Why Work With
CMD9 Lab?'
          help1='We have a staff of highly qualified and experienced blockchain professionals who are well-versed in a variety of blockchain protocols and NFT standards.'
          help2='Our NFT marketplace development firm is experienced with a variety of blockchain systems, including Ethereum, EOS, Stellar, Tezos, and others.'
          help3='By signing an NDA, we guarantee that we will never share any information about your project.'
          help4='To ensure on-time delivery of continually tested NFTs, our team uses an agile development strategy.'
        />
      </Typography>
      <Typography
        sx={{
          display: {
            xl: "none",
            lg: "none",
            md: "none",
            sm: "block",
            xs: "block",
          },
        }}
      >
        <WorkWithMob
          title1='Looking For NFT Development Services?'
          desc1='With our next-generation NFT Development Services, we can turn'
          desc2='With our next-generation NFT Development Services, we can turn
          your '
          title2='Cmd9 Lab'
          subtitle2='Why Work With
CMD9 Lab?'
          help1='We have a staff of highly qualified and experienced blockchain professionals who are well-versed in a variety of blockchain protocols and NFT standards.'
          help2='Our NFT marketplace development firm is experienced with a variety of blockchain systems, including Ethereum, EOS, Stellar, Tezos, and others.'
          help3='By signing an NDA, we guarantee that we will never share any information about your project.'
          help4='To ensure on-time delivery of continually tested NFTs, our team uses an agile development strategy.'
        />
      </Typography>
      <FAQ />
      <Meeting />
      <Footer />
    </div>
  );
};

export default NFTMarketPlace;
