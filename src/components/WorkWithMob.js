import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import React from "react";

const WorkWithMob = (props) => {
  return (
    <div
      style={{
        background: "linear-gradient(65.68deg, #260226 8.79%, #000618 89.13%)",
        paddingTop: "12%",
        paddingBottom: "8%",
      }}
    >
      <Typography
        sx={{
          height: "100%",
          background:
            "linear-gradient(92.23deg, rgba(40, 2, 40, 0.37) 3.17%, rgba(2, 16, 43, 0.38) 103.4%)",
          border: "1px solid #A020F0",
          borderRadius: "8px",
        }}
      >
        <Grid container xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid item sm={12} xs={12}>
            <Card
              className='CARD'
              sx={{
                maxWidth: 445,
                // background: "rgba(32, 2, 32, 0.01)",
                border: "1px solid #A020F0",
                // backdropFilter: "blur(15px) !important",
                backgroundColor: "rgba(0,0,0,.3)",
                backdropFilter: "blur(10px)",
                margin: "auto",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  sx={{ color: "#fff", fontWeight: "bold" }}
                >
                  {props.title2}
                </Typography>
                <Typography
                  variant='h5'
                  sx={{ color: "#fff", marginBottom: "30px" }}
                >
                  {props.subtitle2}
                </Typography>
                <ul style={{ listStyleType: "none" }}>
                  {props.help1 && (
                    <li>
                      <Grid className='trusted-list'>
                        <img
                          src='/images/arrow.png'
                          className='trusted-list1'
                        />

                        <Typography color='white' variant='p' paragraph>
                          {props.help1}
                        </Typography>
                      </Grid>
                    </li>
                  )}

                  {props.help2 && (
                    <li>
                      <Grid className='trusted-list'>
                        <img
                          src='/images/arrow.png'
                          className='trusted-list1'
                        />

                        <Typography color='white' variant='p' paragraph>
                          {props.help2}
                        </Typography>
                      </Grid>
                    </li>
                  )}

                  {props.help3 && (
                    <li>
                      <Grid className='trusted-list'>
                        <img
                          src='/images/arrow.png'
                          className='trusted-list1'
                        />

                        <Typography color='white' variant='p' paragraph>
                          {props.help3}
                        </Typography>
                      </Grid>
                    </li>
                  )}
                  {props.help4 && (
                    <li>
                      <Grid className='trusted-list'>
                        <img
                          src='/images/arrow.png'
                          className='trusted-list1'
                        />

                        <Typography color='white' variant='p' paragraph>
                          {props.help4}
                        </Typography>
                      </Grid>
                    </li>
                  )}
                  {props.help5 && (
                    <li>
                      <Grid className='trusted-list'>
                        <img
                          src='/images/arrow.png'
                          className='trusted-list1'
                        />

                        <Typography color='white' variant='p' paragraph>
                          {props.help5}
                        </Typography>
                      </Grid>
                    </li>
                  )}
                  {props.help6 && (
                    <li>
                      <Grid className='trusted-list'>
                        <img
                          src='/images/arrow.png'
                          className='trusted-list1'
                        />

                        <Typography color='white' variant='p' paragraph>
                          {props.help6}
                        </Typography>
                      </Grid>
                    </li>
                  )}
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={12} xs={12}>
            <Box sx={{ padding: "40px", textAlign: "center" }}>
              <Typography variant='h4' color='#fff'>
                {props.title1}
              </Typography>
              <Typography color='#fff' sx={{ marginTop: "10px" }}>
                {props.desc1} <br />
                {props.desc2}
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
          </Grid>
        </Grid>
      </Typography>
    </div>
  );
};

export default WorkWithMob;
