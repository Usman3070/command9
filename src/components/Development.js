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
const Development = (props) => {
  return (
    <div className='bgMain'>
      <Typography sx={{ color: "#fff", textAlign: "center" }}>
        {props.title}
      </Typography>
      <Typography
        sx={{ color: "#fff", textAlign: "center", marginBottom: "3%" }}
        variant='h5'
      >
        {props.subtitle}
      </Typography>
      <Container>
        <Grid container xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid xl={4} lg={4} md={4} item style={{ padding: "20px" }}>
            <Typography sx={{}}>
              <Typography
                sx={{
                  color: "#fff",
                  marginBottom: "3px",
                  letterSpacing: "2px",
                  fontWeight: "bold",
                }}
              >
                {props.Sec1Title}
              </Typography>
              <BorderLinearProgress variant='determinate' value={30} />
              <Typography sx={{ color: "#fff", marginTop: "3px" }}>
                {props.Sec1Desc}
              </Typography>
            </Typography>
            <Typography>
              <Typography
                sx={{
                  color: "#fff",
                  marginBottom: "3px",
                  letterSpacing: "2px",
                  fontWeight: "bold",
                  marginTop: "50%",
                }}
              >
                {props.Sec2Title}
              </Typography>
              <BorderLinearProgress variant='determinate' value={30} />

              <Typography sx={{ color: "#fff", marginTop: "3px" }}>
                {props.Sec2Desc}
              </Typography>
            </Typography>
          </Grid>

          <Grid xl={4} lg={4} md={4} item sx={{ marginTop: "10%" }}>
            <img width='100%' src='/images/development.png' />
          </Grid>
          <Grid xl={4} lg={4} md={4} item style={{ padding: "20px" }}>
            <Typography sx={{}}>
              <Typography
                sx={{
                  color: "#fff",
                  marginBottom: "3px",
                  letterSpacing: "2px",
                  fontWeight: "bold",
                }}
              >
                {props.Sec3Title}
              </Typography>
              <BorderLinearProgress variant='determinate' value={30} />
              <Typography sx={{ color: "#fff", marginTop: "3px" }}>
                {props.Sec3Desc}
              </Typography>
            </Typography>
            <Typography>
              <Typography
                sx={{
                  color: "#fff",
                  marginBottom: "3px",
                  letterSpacing: "2px",
                  fontWeight: "bold",
                  marginTop: "50%",
                }}
              >
                {props.Sec4Title}
              </Typography>
              <BorderLinearProgress variant='determinate' value={30} />
              <Typography sx={{ color: "#fff", marginTop: "3px" }}>
                {props.Sec4Desc}
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Development;
