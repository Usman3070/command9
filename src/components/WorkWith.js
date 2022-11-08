import {
  Box,
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
import "./Nav.css";
import "./Trust.css";
const WorkWith = () => {
  return (
    <div
      style={{
        background: "linear-gradient(65.68deg, #260226 8.79%, #000618 89.13%)",
        paddingTop: "12%",
        paddingBottom: "8%",
      }}
    >
      <Container>
        {/* <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: "transparent",
                border: "1px solid #A020F0",
                backdropFilter: "blur(10.5px)",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  sx={{ color: "#fff", fontWeight: "bold" }}
                >
                  Cmd9 Lab
                </Typography>
                <Typography
                  variant='h5'
                  sx={{ color: "#fff", marginBottom: "30px" }}
                >
                  Why Work With CMD9 Lab?
                </Typography>
                <ul style={{ listStyleType: "none" }}>
                  <li>
                    <Grid className='trusted-list'>
                      <img src='/images/arrow.png' className='trusted-list1' />

                      <Typography color='white' variant='p' paragraph>
                        We have a staff of highly qualified and experienced
                        blockchain professionals who are well-versed in a
                        variety of blockchain protocols and NFT standards.
                      </Typography>
                    </Grid>
                  </li>

                  <li>
                    <Grid className='trusted-list'>
                      <img src='/images/arrow.png' className='trusted-list1' />

                      <Typography color='white' variant='p' paragraph>
                        Our NFT marketplace development firm is experienced with
                        a variety of blockchain systems, including Ethereum,
                        EOS, Stellar, Tezos, and others.
                      </Typography>
                    </Grid>
                  </li>

                  <li>
                    <Grid className='trusted-list'>
                      <img src='/images/arrow.png' className='trusted-list1' />

                      <Typography color='white' variant='p' paragraph>
                        By signing an NDA, we guarantee that we will never share
                        any information about your project.
                      </Typography>
                    </Grid>
                  </li>
                  <li>
                    <Grid className='trusted-list'>
                      <img src='/images/arrow.png' className='trusted-list1' />

                      <Typography color='white' variant='p' paragraph>
                        To ensure on-time delivery of continually tested NFTs,
                        our team uses an agile development strategy.
                      </Typography>
                    </Grid>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            sx={{
              background:
                "linear-gradient(92.23deg, rgba(40, 2, 40, 0.37) 3.17%, rgba(2, 16, 43, 0.38) 103.4%)",
              border: "1px solid #A020F0",
              height: "fit-content",
              alignSelf: "center",
            }}
          >
            <Typography variant='h4' color='#fff' textAlign='center'>
              Looking For NFT Development Services?
            </Typography>
            <Typography
              color='#fff'
              textAlign='center'
              sx={{ marginTop: "10px" }}
            >
              With our next-generation NFT Development Services, we can turn
              your next-generation company concepts into real-time applications.
              <Typography sx={{ margin: "auto" }}>
                <Button
                  sx={{
                    padding: "15px 25px",
                    background: "linear-gradient(to right, #6b147b, #4a1d92)",
                    color: "#fff",
                    fontWeight: "bold",
                    marginTop: "40px",
                  }}
                >
                  Get Started
                </Button>
              </Typography>
            </Typography>
          </Grid>
        </Grid> */}
        <Typography
          sx={{
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(92.23deg, rgba(40, 2, 40, 0.37) 3.17%, rgba(2, 16, 43, 0.38) 103.4%)",
            border: "1px solid #A020F0",
            borderRadius: "8px",
            // textAlign: "end",
            display: "flex",
            justifyContent: "flex-end",
            position: "relative",
          }}
        >
          <Box sx={{ padding: "40px", textAlign: "center" }}>
            <Typography variant='h4' color='#fff'>
              Looking For NFT Development
              <br /> Services?
            </Typography>
            <Typography color='#fff' sx={{ marginTop: "10px" }}>
              With our next-generation NFT Development Services, we can turn
              your <br /> next-generation company concepts into real-time
              applications.
              <Typography sx={{}}>
                <Button
                  sx={{
                    padding: "15px 25px",
                    background: "linear-gradient(to right, #6b147b, #4a1d92)",
                    color: "#fff",
                    fontWeight: "bold",
                    marginTop: "40px",
                  }}
                >
                  Get Started
                </Button>
              </Typography>
            </Typography>
          </Box>
          <Typography
            sx={{
              position: {
                xl: "absolute",
                lg: "absolute",
                md: "absolute",
                sm: "relative",
                xs: "relative",
              },
              top: "-40%",
              left: "0%",
            }}
          >
            <Card
              className='CARD'
              sx={{
                maxWidth: 445,
                // background: "rgba(32, 2, 32, 0.01)",
                border: "1px solid #A020F0",
                // backdropFilter: "blur(15px) !important",
                backgroundColor: "rgba(0,0,0,.3)",
                backdropFilter: "blur(10px)",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  sx={{ color: "#fff", fontWeight: "bold" }}
                >
                  Cmd9 Lab
                </Typography>
                <Typography
                  variant='h5'
                  sx={{ color: "#fff", marginBottom: "30px" }}
                >
                  Why Work With CMD9 Lab?
                </Typography>
                <ul style={{ listStyleType: "none" }}>
                  <li>
                    <Grid className='trusted-list'>
                      <img src='/images/arrow.png' className='trusted-list1' />

                      <Typography color='white' variant='p' paragraph>
                        We have a staff of highly qualified and experienced
                        blockchain professionals who are well-versed in a
                        variety of blockchain protocols and NFT standards.
                      </Typography>
                    </Grid>
                  </li>

                  <li>
                    <Grid className='trusted-list'>
                      <img src='/images/arrow.png' className='trusted-list1' />

                      <Typography color='white' variant='p' paragraph>
                        Our NFT marketplace development firm is experienced with
                        a variety of blockchain systems, including Ethereum,
                        EOS, Stellar, Tezos, and others.
                      </Typography>
                    </Grid>
                  </li>

                  <li>
                    <Grid className='trusted-list'>
                      <img src='/images/arrow.png' className='trusted-list1' />

                      <Typography color='white' variant='p' paragraph>
                        By signing an NDA, we guarantee that we will never share
                        any information about your project.
                      </Typography>
                    </Grid>
                  </li>
                  <li>
                    <Grid className='trusted-list'>
                      <img src='/images/arrow.png' className='trusted-list1' />

                      <Typography color='white' variant='p' paragraph>
                        To ensure on-time delivery of continually tested NFTs,
                        our team uses an agile development strategy.
                      </Typography>
                    </Grid>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Typography>
        </Typography>
      </Container>
    </div>
  );
};

export default WorkWith;
