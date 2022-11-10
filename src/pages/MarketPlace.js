import React from "react";
import ChallengesInBlockchain from "../components/ChallengesInBlockchain";
import Development from "../components/Development";
import HeroSection from "../components/HeroSection";
import "../components/Nav.css";
import NavBar from "../components/Navbar";
import Trust from "../components/Trust";
const MarketPlace = () => {
  return (
    <div>
      <div className='home-main-new'>
        <NavBar image='/images/logo1.png' btnTitle='Schedule a Meeting' />
        <HeroSection
          title='We Explore The True'
          subtitle='Power Of Blockchain'
          desc='Because the technology is changing so rapidly, validating and certifying the usage of Blockchain technology is fraught with difficulties. Testing teams additionally require Specialized Testing Capabilities, such as Smart Contract Testing and Peer/Node Testing, in addition to standard testing and validation like as Functional Testing, Non-Functional Testing, Performance Testing, Security Testing, and Integration Testing. The following are some of the most common issues encountered when testing Blockchain applications:'
          image='/images/Layer2.png'
        />
      </div>
      <Trust
        image='/images/MrktplcTrust.png'
        title='Business To Grow'
        subtitle='How our Blockchain App QA
        and Testing Service helps
        Business to grow?'
        list1='Improve quality, reliability and performance.'
        list2='Increase customer satisfaction.'
        list3='Increase business and partner confidence.'
        list4='Reduce development costs.'
        list5='Accelerate time-to-market.'
        list6='Spend less time fixing bugs after delivery.'
        list7='Assure “fit for purpose”.'
      />
      <ChallengesInBlockchain />
      <Development
        S1list1='Requirement Engineering Understand Blockchain'
        S1list2='Architecture and Solution'
        S1list3='Design Full Test Strategy'
        title='Testing Techniques'
        subtitle='Our Speicalized Testing
        Techniques'
        Sec1Title='NFT Marketplace Development'
        Sec2Title='NFT Marketplace Development'
        Sec3Title='NFT Marketplace Development'
        Sec4Title='NFT Marketplace Development'
        S2list1='Test Cases Creation'
        S2list2=''
        S2list3=''
        S2list4=''
      />
    </div>
  );
};

export default MarketPlace;
