import React from "react";
import "./Help.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Container, Grid, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
const Help = () => {
  const helps = [
    { detail: "MVP Development Consultancy" },
    { detail: "Blockchain technology design, development, and support" },
    { detail: "Whitepaper Composition" },
    { detail: "Private and permissioned blockchain development" },
    { detail: "Flowcharting and Logical Consultation" },
    { detail: "Flowcharting and Logical Consultation" },
    { detail: "MVP and POC development on Test net" },
    { detail: "Create multilateral consortium networks" },
    { detail: "System development with hybrid components" },
    { detail: "Integrating blockchain to optimise existing systems" },
    { detail: "Smart contracts development" },
    { detail: "System migration to blockchain-based infrastructure" },
    { detail: "Public blockchain network development and integration" },
    { detail: "Integration of permissionless blockchain networks" },
    { detail: "Permissionless yet permissioned blockchain solutions" },
    { detail: "Integration of permissionless blockchain networks" },
    { detail: "Blockchain technology design, development, and support" },
    { detail: "Proof of Concept and MVP design and development workshop" },
  ];
  return (
    <div className='mainContainer' style={{ paddingBottom: "120px" }}>
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#fff",
          textAlign: "center",
          paddingTop: "4%",
        }}
      >
        CMD9 Lab
      </Typography>
      <Typography
        sx={{
          color: "#fff",
          textAlign: "center",
          marginTop: "10px",
          marginBottom: "5%",
        }}
        variant='h5'
      >
        How Can CMD9 Lab Help?
      </Typography>
      <Container>
        <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={4}>
          <Grid item container xl={6} lg={6} md={6} sm={12} xs={12}>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "bold",
                marginBottom: "5%",
              }}
            >
              For Startups
            </Typography>
            {helps.slice(0, 10).map((help, index) => (
              <Grid
                items
                xl={12}
                lg={12}
                md={12}
                sx={{ paddingRight: "1%", paddingLeft: "1%" }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    borderBottom: "1px solid grey",
                    alignItems: "center",
                    padding: "10px",
                  }}
                >
                  <Typography>
                    <NavigateNextIcon sx={{ color: "#fff" }} />
                  </Typography>
                  <Typography sx={{ color: "#fff" }}>{help.detail}</Typography>
                </Typography>
              </Grid>
            ))}
          </Grid>
          {/* <Typography
            sx={{
              color: "#fff",
              fontWeight: "bold",
              marginBottom: "5%",
            }}
          >
            For Startups
          </Typography> */}
          <Grid item container xl={6} lg={6} md={6} sm={12} xs={12}>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "bold",
                marginBottom: "5%",
              }}
            >
              For Startups
            </Typography>
            {helps
              .slice(0)
              .reverse()
              .slice(0, 8)
              .map((help, index) => (
                <Grid
                  items
                  xl={12}
                  lg={12}
                  md={12}
                  sx={{ paddingRight: "1%", paddingLeft: "1%" }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      borderBottom: "1px solid grey",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <Typography>
                      <NavigateNextIcon sx={{ color: "#fff" }} />
                    </Typography>
                    <Typography sx={{ color: "#fff" }}>
                      {help.detail}
                    </Typography>
                  </Typography>
                </Grid>
              ))}
          </Grid>
          {/* <Divider sx={{ background: "#fff" }} /> */}
        </Grid>
      </Container>
    </div>
  );
};

export default Help;
