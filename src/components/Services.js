import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import useStyles from "../style";
const Services = () => {
  const services = [
    {
      image: "/images/Image1.png",
      title: "Smart Contracts",
      subtitle:
        "We provide all types of smart contracts that ensure the integrity of multi-party agreements and…",
    },
    {
      image: "/images/Image2.png",
      title: "Crypto Wallets",
      subtitle:
        "We offer white label crypto wallets with a variety of add-ons. Be it a backend service or a secure…",
    },
    {
      image: "/images/Image3.png",
      title: "DAPP",
      subtitle:
        "DApps are made up of several interconnected smart contracts that are linked together by business…",
    },
    {
      image: "/images/Image4.png",
      title: "NFT",
      subtitle:
        "An NFT or ‘Non-Fungible Token’ is a type of cryptographic token that usually employs Blockchain…",
    },
    {
      image: "/images/Image5.png",
      title: "Metaverse",
      subtitle:
        "Metaverse worlds differ from traditional games because what happens there leaves an im...",
    },
    {
      image: "/images/Image6.png",
      title: "DEX",
      subtitle:
        "A DEX or ‘Decentralised Exchange’ offers peer-to-peer trading so that come with more security, privacy, ….",
    },
    {
      image: "/images/Image7.png",
      title: "Marketplaces",
      subtitle:
        "Blockchain Marketplaces are platforms which offer transparent, and fraud-free transactions, add an...",
    },
    {
      image: "/images/Image8.png",
      title: "Tokenization",
      subtitle:
        "From tokenising your company shares to tokenising your idea, we can help you set up your Smart...",
    },
  ];
  const classes = useStyles();
  return (
    <Typography className={`${classes.backgroundIMG} main_container`}>
      <Typography sx={{ color: "#fff" }}>Our Services</Typography>
      <Typography sx={{ color: "#fff", marginTop: "10px" }} variant='h4'>
        Our Blockchain Consulting Services
      </Typography>
      <Container sx={{ padding: "10px" }}>
        <Typography sx={{ color: "#fff", marginBottom: "30px" }}>
          We believe that we will do our best to be a trusted technology partner
          by providing innovative blockchain solutions with exceptional quality
          and a refined user experience to transform your centralized project to
          a decentralized one for fast, transparent connections straight to your
          end customers.
        </Typography>

        {/* CARD */}
      </Container>
      <Container>
        <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={4}>
          {services.map((service, index) => (
            <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
              <Card
                sx={{
                  minWidth: 275,
                  backgroundColor: "transparent",
                  // border: "1px solid #241179",
                  // height: "400px",
                  // borderRadius: "20px",
                  border: "none",
                  boxShadow: "none",
                  margin: { lg: "none", md: "none", sm: "auto", xs: "auto" },
                }}
                className='card'
              >
                <div className='bgCard' style={{ position: "relative" }}>
                  <CardMedia
                    image={service.image}
                    sx={{
                      height: "89.4px",
                      width: "89.4px",
                      position: "absolute",
                      top: "2%",
                      left: "37%",
                    }}
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "#fff",
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "60%",
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography sx={{ color: "#fff" }}>
                      {service.subtitle}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' sx={{ margin: "auto" }}>
                      Learn More
                    </Button>
                  </CardActions>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Typography>
  );
};

export default Services;
