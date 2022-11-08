import { Typography, Container, CardMedia, Grid, Box } from "@mui/material";
import "./Industries.css";
function Industries() {
  return (
    <>
      <Grid
        lg={12}
        md={12}
        sm={12}
        spacing={4}
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          paddingTop: "100px",
        }}
        className='industries-main'
      >
        <Grid item lg={12} md={6} xs={12}>
          <Container position='relative'>
            <Box>
              <Typography
                style={{ color: "white" }}
                variant='h5'
                color='white'
                align='center'
              >
                Blockchain Industries
              </Typography>
              <Typography variant='h2' color='white' align='center'>
                Why Industries Use Blockchain
              </Typography>
              <Typography variant='h6' color='white' align='center' paragraph>
                Explore how industries are using blockchain to increase trust,
                security, transparency, and the traceability of data across a
                business network — and deliver cost savings.
              </Typography>
            </Box>
          </Container>
        </Grid>
        <Container>
          <Grid container lg={12} md={12} sm={12} className='indus-grid1'>
            <Grid
              item
              lg={5}
              md={6}
              xs={12}
              direction='column'
              alignItems='center'
              justifyContent='center'
              className='indus-grid1'
            >
              {/* First Div  */}
              <Grid>
                <Box
                  sx={{
                    width: "auto",
                    height: "auto",
                    padding: "15px",
                    border: "1px solid white",
                    borderRadius: "50px 5px",
                    marginBottom: "30px",
                    marginTop: "70px",
                  }}
                >
                  <Box sx={{ alignItems: "center" }}>
                    <CardMedia
                      image='/images/indus1.png'
                      sx={{
                        height: "65px",
                        width: "65px",
                        alignItems: "center",
                        marginRight: "15px",
                      }}
                      className='industries-div'
                    />
                    <Typography variant='h5' color='white' paragraph>
                      Benefits Of Blockchain For The Banking & Financial
                      Industry
                    </Typography>
                  </Box>
                  <Typography variant='p' color='white' paragraph>
                    Replacing conventional processes and paperwork with
                    blockchain eliminates friction and delays. It helps your
                    organization to increase operational efficiencies and grow
                    global trade, trade finance, clearing & settlement, consumer
                    banking, lending, and in most other cases where transactions
                    take place.
                  </Typography>
                </Box>
              </Grid>
              {/* Second Div  */}
              <Grid>
                <Box
                  sx={{
                    width: "auto",
                    height: "auto",
                    padding: "15px",
                    border: "1px solid white",
                    borderRadius: "50px 5px",
                    marginBottom: "30px",
                  }}
                >
                  <Box sx={{ alignItems: "center" }}>
                    <CardMedia
                      image='/images/indus2.png'
                      sx={{
                        height: "65px",
                        width: "65px",
                        alignItems: "center",
                        marginRight: "15px",
                      }}
                      className='industries-div'
                    />
                    <Typography variant='h5' color='white' paragraph>
                      Benefits Of Blockchain For The Banking & Financial
                      Industry
                    </Typography>
                  </Box>
                  <Typography variant='p' color='white' paragraph>
                    Replacing conventional processes and paperwork with
                    blockchain eliminates friction and delays. It helps your
                    organization to increase operational efficiencies and grow
                    global trade, trade finance, clearing & settlement, consumer
                    banking, lending, and in most other cases where transactions
                    take place.
                  </Typography>
                </Box>
              </Grid>
              {/* Third Div*/}
              <Grid>
                <Box
                  sx={{
                    width: "auto",
                    height: "auto",
                    padding: "15px",
                    border: "1px solid white",
                    borderRadius: "50px 5px",
                    marginBottom: "30px",
                  }}
                >
                  <Box sx={{ alignItems: "center" }}>
                    <CardMedia
                      image='/images/indus4.png'
                      sx={{
                        height: "65px",
                        width: "65px",
                        alignItems: "center",
                        marginRight: "15px",
                      }}
                      className='industries-div'
                    />
                    <Typography variant='h5' color='white' paragraph>
                      Benefits Of Blockchain For The Banking & Financial
                      Industry
                    </Typography>
                  </Box>
                  <Typography variant='p' color='white' paragraph>
                    Replacing conventional processes and paperwork with
                    blockchain eliminates friction and delays. It helps your
                    organization to increase operational efficiencies and grow
                    global trade, trade finance, clearing & settlement, consumer
                    banking, lending, and in most other cases where transactions
                    take place.
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid item lg={2} md={6} xs={12}>
              <CardMedia
                image='/images/Frame18.png'
                sx={{ width: "15px", height: "90%", borderRadius: "10px" }}
                className='indus-center-img'
              />
            </Grid>

            {/* Fourth Div  */}
            <Grid
              item
              lg={5}
              md={6}
              xs={12}
              sx={{
                marginTop: {
                  xl: "15%",
                  lg: "15%",
                  md: "15%",
                  sm: "0%",
                  xs: "0%",
                },
              }}
            >
              <Grid>
                <Box
                  sx={{
                    width: "auto",
                    height: "auto",
                    padding: "15px",
                    border: "1px solid white",
                    borderRadius: "50px 5px",
                    marginBottom: "30px",
                  }}
                >
                  <Box sx={{ alignItems: "center" }}>
                    <CardMedia
                      image='/images/indus3.png'
                      sx={{
                        height: "65px",
                        width: "65px",
                        alignItems: "center",
                        marginRight: "15px",
                      }}
                      className='industries-div'
                    />
                    <Typography variant='h5' color='white' paragraph>
                      Benefits Of Blockchain For The Banking & Financial
                      Industrys
                    </Typography>
                  </Box>
                  <Typography variant='p' color='white' paragraph>
                    Replacing conventional processes and paperwork with
                    blockchain eliminates friction and delays. It helps your
                    organization to increase operational efficiencies and grow
                    global trade, trade finance, clearing & settlement, consumer
                    banking, lending, and in most other cases where transactions
                    take place.
                  </Typography>
                </Box>
              </Grid>
              {/* Fifth Div  */}
              <Grid>
                <Box
                  sx={{
                    width: "auto",
                    height: "auto",
                    padding: "15px",
                    border: "1px solid white",
                    borderRadius: "50px 5px",
                    marginBottom: "30px",
                  }}
                >
                  <Box sx={{ alignItems: "center" }}>
                    <CardMedia
                      image='/images/indus5.png'
                      sx={{
                        height: "65px",
                        width: "65px",
                        alignItems: "center",
                        marginRight: "15px",
                      }}
                      className='industries-div'
                    />
                    <Typography
                      variant='h5'
                      color='white'
                      sx={{ marginTop: "19px", paddingLeft: "20px !important" }}
                      paragraph
                    >
                      Benefits Of Blockchain For The Banking & Financial
                      Industrys
                    </Typography>
                  </Box>
                  <Typography variant='p' color='white' paragraph>
                    Replacing conventional processes and paperwork with
                    blockchain eliminates friction and delays. It helps your
                    organization to increase operational efficiencies and grow
                    global trade, trade finance, clearing & settlement, consumer
                    banking, lending, and in most other cases where transactions
                    take place.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}
export default Industries;
