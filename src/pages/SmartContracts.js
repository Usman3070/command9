import React from "react";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/Navbar";
import "../components/Nav.css";
import Trust from "../components/Trust";
import Business from "../components/Business";
import Development from "../components/Development";
import WorkWith from "../components/WorkWith";
import Meeting from "../components/Meeting";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
const SmartContracts = () => {
  return (
    <div>
      <div className='home-main-new'>
        <NavBar image='/images/logo1.png' />
        <HeroSection
          title='Smart Contracts'
          subtitle='Development Services'
          desc='Smart contracts are Blockchain-encoded virtual contracts. A smart contract is made up of a series of self-executing tasks. It can automatically keep track of an agreement’s terms and enable every step toward its fulfilment. A smart contract that is hosted on the Blockchain cannot be altered or interfered with by any party, including the two agreement holders.'
          image='/images/Layer2.png'
        />
        <Trust
          image='/images/Frame37.png'
          title='Smart Contracts'
          subtitle='What Are Smart Contracts?'
          desc1='Smart contracts are Blockchain-encoded virtual contracts. It is made up of a series of self-executing tasks. It can automatically keep track of an agreement’s terms and enable every step toward its fulfilment. A smart contract that is hosted on the Blockchain cannot be altered or interfered with by any party, including the two agreement holders.'
          desc2='If changes must be made, the entire network must be modified. Our blockchain software development services assist clients in implementing customised decentralised solutions that eliminate paperwork, streamline data transactions without the involvement of an intermediary, reduce costs, and improve security.
        '
        />
        <Business />
        <Development
          title='Blockchain Industries'
          subtitle='Cmd9 Lab Smart Contract
        Development Services'
          Sec1Title='Smart Contract Design And Development'
          Sec1Desc='Our solution ensures the error-free creation, execution, and management of smart contracts on compatible blockchains with comprehensible and enforceable digital contracts.'
          Sec2Title='Smart Contract
        For DEX'
          Sec2Desc='Build a smart contract-based decentralized exchange using Ethereum, EOS and more. This allows exchanges operating in distributed ecosystems to protect the confidentiality of end-user data, private keys, digital assets, business logic, and data maintenance.'
          Sec3Title='Smart Contracts For
        Digital Wallets'
          Sec3Desc='We develop digital wallets with smart contracts so that companies can make reliable and fast transactions without relying on third parties. These multi-signature digital wallets work with smart contracts to enhance the secure storage and exchange of digital assets.'
          Sec4Title='Smart Contract For Decentralized
        Applications'
          Sec4Desc='Develop dApps with smart contracts that encode business logic and allow direct dialogue between two trading parties or trading parties. Our smart contracts seamlessly meet business goals and efficiently solve complex operational complexity.'
        />
        <WorkWith />
        <FAQ />
        <Meeting />
        <Footer />
      </div>
    </div>
  );
};

export default SmartContracts;
