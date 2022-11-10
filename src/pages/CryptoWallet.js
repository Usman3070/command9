import React from "react";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/Navbar";
import "../components/Nav.css";
import Trust from "../components/Trust";
import LabWallet from "../components/LabWallet";
import Development from "../components/Development";
import WorkWithMob from "../components/WorkWithMob";
import WorkWith from "../components/WorkWith";
import { Typography } from "@mui/material";
import FAQ from "../components/FAQ";
import Meeting from "../components/Meeting";
import Footer from "../components/Footer";
const CryptoWallet = () => {
  return (
    <div>
      <div className='home-main-new'>
        <NavBar image='/images/logo1.png' />
        <HeroSection
          title='Crypto Wallet'
          subtitle='Development Services'
          desc='The term “non-fungible token” refers to a token that is not fungible. It’s usually programmed in the same way as cryptocurrencies like Bitcoin or Ethereum, but that’s where the similarities end. Cryptocurrencies and physical money are both “fungible,” meaning they may be traded or exchanged for one another.
          '
          image='/images/Asset11.png'
        />
      </div>
      <Trust
        image='/images/cryptoIMG.png'
        title='Crypto Wallets'
        subtitle='What Are Blockchain & Crypto Wallets?'
        desc1='Crypto wallets are typically used to transfer digital transactions or cryptocurrencies between users on a specific blockchain network and activate blockchain smart contracts. It alsoprovides access to the owner’s digital transaction history and account balance.'
        desc2='A blockchain wallet acts as their blockchain ID and account. The crypto wallet has a public and private key used to process transaction information. These keys connect to the blockchain and allow users to send transactions (cryptocurrencies) to trigger smart contracts. Transactions on the blockchain are not possible without the use of a wallet.'
        desc3='With the advent of the blockchain, digital currency transactions are becoming more and more useful and accessible. Due to the large number of cryptocurrencies created in recent years, the need for robust token management solutions is increasing. By developing a custom crypto wallet, we can provide bespoke solutions so that users can trade on both mobile devices and the web. Are you working on your blockchain project and need to develop a cryptocurrency wallet? Let us help you learn how this can benefit your business!'
      />
      <LabWallet />
      <Development
        title='Crypto Wallets'
        subtitle='How can crypto wallets benefit your business?'
        Sec1Title='
          Integrity And Stability'
        Sec1Desc='Blockchain is a relatively dependable system due to its distributed nature. All wallet nodes disseminate and verify the same data, ensuring that it cannot be lost, corrupted, or tampered with. As a result, it’s extremely unlikely that a transaction will fail or be duplicated. This improves transaction validity and reliability, as well as builds trust in the blockchain.'
        Sec2Title='High Security And Encryption'
        Sec2Desc='Due to the use of cryptography, crypto wallets provide a high level of security. All of the information on the wallet is encrypted and is only accessible to the wallet’s owner. A wallet cannot be readily compromised due to additional layers of protection such as two-factor authentication and multi-signature. As a result, they are more secure than other digital payment methods.'
        Sec3Title='Ease Of Use'
        Sec3Desc='A blockchain wallet is extremely convenient, despite its high levels of security. Installing and using the application is relatively simple for users. Depending on the wallet you wish to create, it may be able to store different sorts of data (cryptocurrencies or ordinary data transfers) at the same time. You could also use a dedicated, stand-alone system that only accepts one sort of transaction.'
        Sec4Title='Easy Transfer And Low Fees'
        Sec4Desc='Wallets do away with the need for middlemen in transactions. This allows users to conduct cross-border transactions in real-time. Furthermore, transaction costs are considerably lowered or even eliminated when using a wallet. The result is increased user satisfaction and participation on the platform.'
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
          title1='Looking For Wallet Development Services?'
          desc1='Get in touch with us to discuss your project needs and plan the'
          desc2='development of your wallet together!'
          title2='Cmd9 Lab'
          subtitle2='Why Work With
CMD9 Lab?'
          help1='We have smart contract development expertise'
          help2='We have dedicated in-house smart contract developers'
          help3='We are a trusted smart contract development partner'
          help4='We provide 24/7 support and maintenance of smart contract development'
          help5='We have a very solid smart contract development portfolio'
          help6='We have innovative smart contract developers and researchers'
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
          title1='Looking For Wallet Development Services?'
          desc1='Get in touch with us to discuss your project needs and plan the'
          desc2='development of your wallet together!'
          title2='Cmd9 Lab'
          subtitle2='Why Work With
CMD9 Lab?'
          help1='We have smart contract development expertise'
          help2='We have dedicated in-house smart contract developers'
          help3='We are a trusted smart contract development partner'
          help4='We provide 24/7 support and maintenance of smart contract development'
          help5='We have a very solid smart contract development portfolio'
          help6='We have innovative smart contract developers and researchers'
        />
      </Typography>
      <FAQ />
      <Meeting />
      <Footer />
    </div>
  );
};

export default CryptoWallet;
