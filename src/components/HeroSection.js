import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import "./Nav.css";
const HeroSection = (props) => {
  return (
    <Grid
      container
      xl={12}
      lg={12}
      md={12}
      sm={12}
      xs={12}
      spacing={4}
      // sx={{ margin: "auto" }}
    >
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Box sx={{ marginTop: "50px", marginLeft: "16%" }}>
          <Typography variant='h5' color='white'>
            {props.title}
          </Typography>
          <Typography
            color='white'
            sx={{ fontSize: "42px", fontWeight: "bold" }}
          >
            {props.subtitle}
          </Typography>
          <Typography variant='p' color='white' paragraph>
            {props.desc}
          </Typography>
          <Button className='nav-btn' sx={{ color: "#fff" }}>
            Get Started
          </Button>
        </Box>
      </Grid>

      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <CardMedia
          image={props.image}
          sx={{
            width: { xs: "250px", sm: "200px", md: "200px", lg: "420px" },
            height: { xs: "250px", sm: "200px", md: "300px", lg: "420px" },
            margin: "auto",
            marginBottom: "50px !important",
            marginTop: "30px !important",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
