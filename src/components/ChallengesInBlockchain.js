import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const ChallengesInBlockchain = () => {
  const challenges = [
    {
      logo: "/images/thumb.png",
      title: "Usage Of Best Practices",
      desc: "One of the main issues in the Blockchain area is a lack of expertise or experience in designing Blockchain applications. It is costly to acquire new skills or to comprehend best practises for implementing Blockchain applications.",
    },
    {
      logo: "/images/transfer.png",
      title: "Irreversible Transactions",
      desc: "Using Blockchain as a conventional wallet without the utmost care exposes companies and users to a significant asset risk. This is due to the irreversibility of Blockchain transactions. The most significant challenge in this space is the lack of controls to avoid redundancy and give additional safety.",
    },
    {
      logo: "/images/search.png",
      title: "Blockchain Testing Tools",
      desc: "When it comes to testing Blockchain-based applications/products, tools are everything when it comes to implementing Blockchain. You’re more likely to fail if you don’t have the necessary tools. Testing Blockchain applications necessitates a combination of tools, including a focus on Bitcoin and a variety of Etherium tools.",
    },
    {
      logo: "/images/blockchain.png",
      title: "Block And Chain Size",
      desc: "Testing for block size and chain size is equally important as conventional testing, tools, and best practises. Blockchain applications will fail if the block and chain sizes are not validated properly.",
    },
    {
      logo: "/images/analyze.png",
      title: "Standardization In Blockchain Testing",
      desc: "Not only is technological expertise required for Blockchain adoption, but so is legal expertise. Developers that lack the ability to conceive, standardise, and abstract complicated Blockchain concepts are prone to making mistakes.",
    },
    {
      logo: "/images/path.png",
      title: "Load And Performance",
      desc: "Failure to perform performance and load testing provides little or no information into how the Blockchain application operates in both production and under various workloads and network conditions.",
    },
    {
      logo: "/images/suboptimal.png",
      title: "Suboptimal Testing Strategy",
      desc: "Because testing is given less importance than programming, a Blockchain application development environment with few or no dedicated testers to discover and assess Blockchain products is created. The current testing technique is ineffective, resulting in inefficient Blockchain application testing, which is either repeated or not tested at all.",
    },
    {
      logo: "/images/blockchain2.png",
      title: "Load And Performance",
      desc: "Failure to perform performance and load testing provides little or no information into how the Blockchain application operates in both production and under various workloads and network conditions.",
    },
    {
      logo: "/images/insurance.png",
      title: "Security",
      desc: "Due to a lack of security testing, Blockchain applications that are vulnerable to attacks at the network, user, and mining levels are developed.",
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
        Important For Businesses
      </Typography>
      <Typography
        variant='h5'
        sx={{ color: "#fff", textAlign: "center", marginBottom: "20px" }}
      >
        Who Can Benefit From NFTs or Why are They Important For Businesses?
      </Typography>
      <Grid xl={12} lg={12} md={12} sm={12} xs={12} container>
        {challenges.map((challenge, index) => (
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
                      backgroundImage: "url(/images/crypto.png)",
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
                      backgroundImage: "url(/images/global.png)",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }
                  : index === 4
                  ? {
                      width: "100%",
                      height: "400px",
                      backgroundColor: "#3B147B",
                    }
                  : index === 5
                  ? {
                      width: "100%",
                      height: "400px",
                      backgroundImage: "url(/images/coms.png)",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }
                  : index === 6
                  ? {
                      width: "100%",
                      height: "400px",
                      backgroundColor: "#79147B",
                    }
                  : index === 7
                  ? {
                      width: "100%",
                      height: "400px",
                      backgroundImage: "url(/images/crypto.png)",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }
                  : {
                      width: "100%",
                      height: "400px",
                      backgroundColor: "#7B142D",
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
                <img
                  component='img'
                  src={challenge.logo}
                  // sx={{
                  //   width: "60.01px",
                  //   height: "56.79px",
                  //   margin: "auto",
                  //   marginTop: "14%",
                  // }}
                />
              </div>
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  sx={{ color: "#fff", textAlign: "center" }}
                >
                  {challenge.title}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ color: "#fff", textAlign: "center" }}
                >
                  {challenge.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ChallengesInBlockchain;
