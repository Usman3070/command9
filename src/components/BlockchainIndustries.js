import { Typography, Container, CardMedia, Grid } from "@mui/material";
import "./BlockchainIndustries.css";
import { Button } from "react-bootstrap";
function NewGetStarted() {
  return (
    <>
      <Grid className='get-main'>
        <Grid container>
          <Container position='relative'>
            <Typography color='white' variant='h6' align='center'>
              Blockchain Industries
            </Typography>
            <Typography color='white' variant='h3' align='center'>
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
