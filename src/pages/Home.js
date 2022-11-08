import React from "react";
import Services from "../components/Services";
import Carousel from "../components/Carousel";
import NavBar from "../components/Navbar";
import "../components/Nav.css";
import HeroSection from "../components/HeroSection";
import HomeCarousel from "../components/HomeCarousel";
import Industries from "../components/Industries";
import Trust from "../components/Trust";
import BlockchainIndustries from "../components/BlockchainIndustries";
import Help from "../components/Help";
import FAQ from "../components/FAQ";
import Media from "../components/Media";
import Meeting from "../components/Meeting";
import Footer from "../components/Footer";
import Rights from "../components/Rights";
const Home = () => {
  return (
    <div>
      <div className='home-main-new'>
        <NavBar image='/images/logo1.png' btnTitle='Schedule a Meeting' />
        <HeroSection
          title='Trusted & Transparent'
          subtitle='Blockchain Consulting'
          desc='Our blockchain consulting services will help you leverage the potential of blockchain & gain intuitive insights on your projects. From project kickoff to selecting the right protocol, our team of blockchain experts turns your ideas into practical applications with the power of blockchain.'
          image='/images/Layer2.png'
        />
      </div>
      <div style={{ backgroundColor: "#550754" }}>
        <HomeCarousel />
      </div>
      <Services />
      <div
        style={{
          background:
            " linear-gradient(65.68deg,#260226  8.79%,  #000618 89.13%)",
          height: "800px",
        }}
        className='carouselMedia'
      >
        <Carousel />
      </div>
      <Industries />
      <Trust
        image='/images/Frame48.png'
        title='Trusted & Transparent'
        subtitle='Blockchain Consulting
Partner'
        desc1='Our blockchain consultants unlock the value of shared data by removing intermediaries, automating processes, and creating trust and transparency. Capturing that value requires business model innovation, operational efficiency, social impact, and risk management. For an organisation to seize the opportunity of leveraging blockchain technology, just ask the following questions:'
        question1='Do we need to create our own blockchain solution or solutions or connect with someone who understands blockchain development?'
        question2='Even if we have our own solution, will it require an ecosystem of other participants to succeed? If that is the case, then how do we ensure that enough value is being shared to make the journey self-funding for everyone?'
        question='What steps do we need to take to build and launch our own solution? What tech stack is needed? What important features are critical for scaling and what should be our go-to-market strategy?'
        desc2='BloxBytes not only helps organizations to provide answers to these questions but also supports them through the complete journey. We do this by distilling that journey into the following steps:'
        list1='Assessment/ discovery workshops'
        list2='Enabling immutability'
        list3='Creative sprints'
        list4='Proof of blockchain concept development'
        list5='Automated scrutiny'
        list6='Cryptography security'
      />
      <BlockchainIndustries />
      <Help />
      <FAQ />
      <Media />'
      <Meeting />
      <Footer />
      <Rights />
    </div>
  );
};

export default Home;
