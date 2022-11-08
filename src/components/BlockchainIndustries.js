import { Typography, Container, CardMedia, Grid } from "@mui/material";
import "./BlockchainIndustries.css";
import { Button } from "react-bootstrap";
function NewGetStarted() {
  return (
    <>
      <Grid className='get-main'>
        <Grid container>
          <Container position='relative'>
            <Typography
              color='white'
              variant='h6'
              align='center'
              sx={{
                fontSize: {
                  xl: "34px",
                  lg: "34px",
                  md: "24px",
                  sm: "20px",
                  xs: "18px",
                },
              }}
            >
              Blockchain Industries
            </Typography>
            <Typography
              color='white'
              align='center'
              sx={{
                fontWeight: "bold",
                fontSize: {
                  xl: "42px",
                  lg: "42px",
                  md: "38px",
                  sm: "30px",
                  xs: "19px",
                },
              }}
            >
              Why Industries Use Blockchain
            </Typography>
            <Typography
              color='white'
              variant='p'
              align='center'
              className='get-main1'
              paragraph
            >
              Explore how industries are using blockchain to increase trust,
              security, transparency, and the
              <br /> traceability of data across a business network — and
              deliver cost savings.
            </Typography>
            <Button className='nav-btn h-ss1'>Get Started</Button>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
export default NewGetStarted;
