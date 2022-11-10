import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const Business = () => {
  const businesses = [
    {
      logo: "/images/bill.png",
      title: "Smart Contract Design And Development",
      desc: "Our solution ensures the error-free creation, execution, and management of smart contracts on compatible blockchains with comprehensible and enforceable digital contracts.",
    },
    {
      img: "/images/goldCoin.png",
      logo: "/images/Data.png",
      title: "Smart Contracts For Digital Wallets",
      desc: "We develop digital wallets with smart contracts so that companies can make reliable and fast transactions without relying on third parties. These multi-signature digital wallets work with smart contracts to enhance the secure storage and exchange of digital assets.",
    },
    {
      logo: "/images/payment.png",
      title: "Ethereum & Hyperledger Smart Contract Development",
      desc: "We are developing Ethereum-based ERC20 and ERC721 token contracts written in Solidity for use cases such as stablecoin and healthcare wallets. We also offer Hyperledger smart contract development for the financial sector, healthcare, retail, automotive and other industries.",
    },
    {
      img: "/images/masterCard.png",
      logo: "/images/watch.png",
      title: "Smart Contract For DEX",
      desc: "Build a smart contract-based decentralized exchange using Ethereum, EOS and more. This allows exchanges operating in distributed ecosystems to protect the confidentiality of end-user data, private keys, digital assets, business logic, and data maintenance.",
    },
    {
      logo: "/images/transportation.png",
      title: "Smart Contract For Decentralized Applications",
      desc: "Develop dApps with smart contracts that encode business logic and allow direct dialogue between two trading parties or trading parties. Our smart contracts seamlessly meet business goals and efficiently solve complex operational complexity.",
    },
    {
      img: "/images/bitcoin.png",
      logo: "/images/ownership.png",
      title: "Enable Fractional Ownership",
      desc: "Even average income earners might benefit from fractional ownership of assets thanks to NFTs. The sale of shares in an asset to numerous persons is known as fractional ownership. Income sharing, priority access, and usage rights are all shared equally among the shareholders.",
    },
  ];
  return (
    <div
      style={{
        backgroundColor: "#111",
        paddingBottom: "80px",
        paddingTop: "80px",
      }}
    >
      <Typography
        sx={{ color: "#fff", textAlign: "center", marginBottom: "20px" }}
      >
        Cmd9 Lab Wallet
      </Typography>
      <Typography
        variant='h5'
        sx={{ color: "#fff", textAlign: "center", marginBottom: "20px" }}
      >
        CMD9 Lab Wallet Development Services
      </Typography>
      <Grid xl={12} lg={12} md={12} sm={12} xs={12} container>
        {businesses.map((business, index) => (
          <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
            <Card
              sx={
                index === 0
                  ? {
                      width: "100%",
                      height: "400px",
                      backgroundColor: "#142B7B",
                    }
                  : index === 1
                  ? {
                      width: "100%",
                      height: "400px",
                      backgroundImage: "url(/images/goldCoins.png)",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }
                  : index === 2
                  ? {
                      width: "100%",
                      height: "400px",
                      backgroundColor: "#157B7B",
                    }
                  : index === 3
                  ? {
                      width: "100%",
                      height: "400px",
                      backgroundImage: "url(/images/masterCard.png)",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }
                  : index === 4
                  ? {
                      width: "100%",
                      height: "400px",
                      backgroundColor: "#3B147B",
                    }
                  : {
                      width: "100%",
                      height: "400px",
                      backgroundImage: "url(/images/bitcoin.png)",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }
              }
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "14%",
                }}
              >
                <img src={business.logo} />
              </div>
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  sx={{ color: "#fff", textAlign: "center" }}
                >
                  {business.title}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ color: "#fff", textAlign: "center" }}
                >
                  {business.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Business;
