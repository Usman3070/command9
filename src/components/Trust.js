import { Typography, Container, CardMedia, Grid, Box } from "@mui/material";
import "./Trust.css";
function NewTrusted(props) {
  return (
    <>
      <Grid className='trusted-main'>
        <Grid container lg={12} md={12} sm={12} spacing={6}>
          <Grid item lg={6} md={6} xs={12}>
            <img
              src={props.image}
              width='100%'
              // container
              // lg={6}
              // md={6}
              // sm={12}
              // sx={{
              //   width: { xs: "300px", sm: "400px", md: "500px", lg: "650px" },
              //   height: { xs: "420px", sm: "550px", md: "700px", lg: "1000px" },
              //   margin: "auto",
              // }}
              className='trusted1'
            />
          </Grid>

          <Grid item lg={6} md={6} xs={12}>
            <Typography
              color='white'
              sx={{
                marginTop: "18%",
                fontSize: {
                  xl: "34px",
                  lg: "34px",
                  md: "26px",
                  sm: "22px",
                  xs: "18px",
                },
                textAlign: "center",
              }}
            >
              {props.title}
            </Typography>
            <Typography
              color='white'
              sx={{
                fontSize: {
                  xl: "42px",
                  lg: "42px",
                  md: "34px",
                  sm: "24px",
                  xs: "20px",
                  fontWeight: "bold",
                },
                textAlign: "center",
              }}
            >
              {props.subtitle}
            </Typography>
            <Typography
              color='white'
              variant='p'
              paragraph
              sx={{ textAlign: "center" }}
            >
              {props.desc1}
            </Typography>
            <ul style={{ listStyleType: "none" }}>
              {props.question1 && (
                <li>
                  <Grid className='trusted-list'>
                    <img src='/images/arrow.png' className='trusted-list1' />

                    <Typography color='white' variant='p' paragraph>
                      {props.question1}
                    </Typography>
                  </Grid>
                </li>
              )}
              {props.question2 && (
                <li>
                  <Grid className='trusted-list'>
                    <img src='/images/arrow.png' className='trusted-list1' />

                    <Typography color='white' variant='p' paragraph>
                      {props.question2}
                    </Typography>
                  </Grid>
                </li>
              )}
              {props.question3 && (
                <li>
                  <Grid className='trusted-list'>
                    <img
                      src='/images/arrow.png'
                      // sx={{ width: "34px", height: "15px" }}
                      className='trusted-list1'
                    />

                    <Typography color='white' variant='p' paragraph>
                      {props.question3}
                    </Typography>
                  </Grid>
                </li>
              )}
            </ul>
            <Typography color='white' variant='p' paragraph>
              {props.desc2}
            </Typography>
            <Grid container lg={12} md={12} sm={12} spacing={6}>
              <Grid item lg={6} md={6} xs={12}>
                <ul style={{ listStyleType: "none" }}>
                  {props.list1 && (
                    <li>
                      <Grid className='trusted-list'>
                        <img
                          src='/images/arrow.png'
                          className='trusted-list1'
                        />

                        <Typography color='white' variant='p' paragraph>
                          {props.list1}
                        </Typography>
                      </Grid>
                    </li>
                  )}
                  {props.list2 && (
                    <li>
                      <Grid className='trusted-list'>
                        <img
                          src='/images/arrow.png'
                          className='trusted-list1'
                        />

                        <Typography color='white' variant='p' paragraph>
                          {props.list2}
                        </Typography>
                      </Grid>
                    </li>
                  )}
                  {props.list3 && (
                    <li>
                      <Grid className='trusted-list'>
                        <img
                          src='/images/arrow.png'
                          className='trusted-list1'
                        />

                        <Typography color='white' variant='p' paragraph>
                          {props.list3}
                        </Typography>
                      </Grid>
                    </li>
                  )}
                </ul>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                xs={12}
                sx={{
                  marginTop: { lg: "0", md: "0", sm: "-9%", xs: "-13%" },
                }}
              >
                <ul style={{ listStyleType: "none" }}>
                  {props.list3 && (
                    <li>
                      <Grid className='trusted-list'>
                        <img
                          src='/images/arrow.png'
                          className='trusted-list1'
                        />

                        <Typography color='white' variant='p' paragraph>
                          {props.list4}
                        </Typography>
                      </Grid>
                    </li>
                  )}
                  {props.list5 && (
                    <li>
                      <Grid className='trusted-list'>
                        <img
                          src='/images/arrow.png'
                          className='trusted-list1'
                        />

                        <Typography color='white' variant='p' paragraph>
                          {props.list5}
                        </Typography>
                      </Grid>
                    </li>
                  )}
                  {props.list6 && (
                    <li>
                      <Grid className='trusted-list'>
                        <img
                          src='/images/arrow.png'
                          className='trusted-list1'
                        />

                        <Typography color='white' variant='p' paragraph>
                          {props.list6}
                        </Typography>
                      </Grid>
                    </li>
                  )}
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default NewTrusted;
