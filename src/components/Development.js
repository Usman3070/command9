import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./Development.css";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "transparent",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#7B142D" : "#7B142D",
  },
}));
const Development = () => {
  return (
    <div className='bgMain'>
      <Typography sx={{ color: "#fff", textAlign: "center" }}>
        MONETISE BY DEVELOPING
      </Typography>
      <Typography sx={{ color: "#fff", textAlign: "center" }} variant='h5'>
        Cmd9 Lab NFT Marketplace Development Services
      </Typography>
      <Container>
        <Grid container xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
            <Typography sx={{}}>
              <Typography
                sx={{
                  color: "#fff",
                  marginBottom: "3px",
                }}
              >
                NFT Marketplace Development
              </Typography>
              <BorderLinearProgress variant='determinate' value={30} />
              <Typography sx={{ color: "#fff", marginTop: "3px" }}>
                Your NFT marketplace will be user-friendly, intuitive, and
                dependable thanks to our mix of NFT and eCommerce expertise.
                Allow us to build your profitable NFT marketplace so you can
                start reaping the benefits right away.
              </Typography>
            </Typography>
          </Grid>
          <Grid item xl={4} lg={4}>
            <img src='/images/development.png' />
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
            <Typography>
              <Typography sx={{ color: "#fff" }}>
                NFT Marketplace Development
              </Typography>
              <Typography sx={{ color: "#fff" }}>
                Your NFT marketplace will be user-friendly, intuitive, and
                dependable thanks to our mix of NFT and eCommerce expertise.
                Allow us to build your profitable NFT marketplace so you can
                start reaping the benefits right away.
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Development;
