import { Grid, Typography } from "@mui/material";
import React from "react";

const Rights = () => {
  return (
    <div style={{ backgroundColor: "#761275", padding: "15px" }}>
      <Grid container lg={12} md={12} sm={12} xs={12} spacing={4}>
        <Grid item lg={8} md={8} sm={4} xs={4}>
          <Typography
            sx={{
              color: "#fff",
              marginLeft: "10%",
              fontSize: {
                xl: "14px",
                lg: "14px",
                md: "12px",
                sm: "10px",
                xs: "8px",
              },
            }}
          >
            All Rights Reserved © 2022 Bloxbytes
          </Typography>
        </Grid>
        <Grid item lg={2} md={2} sm={4} xs={4}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: {
                xl: "14px",
                lg: "14px",
                md: "12px",
                sm: "10px",
                xs: "8px",
              },
            }}
          >
            Privacy Policy
          </Typography>
        </Grid>
        <Grid item lg={2} md={2} sm={4} xs={4}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: {
                xl: "14px",
                lg: "14px",
                md: "12px",
                sm: "10px",
                xs: "8px",
              },
            }}
          >
            Term & Conditions
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Rights;
