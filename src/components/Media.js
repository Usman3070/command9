import { CardMedia, Typography, Grid, Container } from "@mui/material";
import "./Media.css";
function NewBlog() {
  return (
    <>
      <Grid className='faq-main'>
        <Typography variant='h5' color='white' align='center'>
          Blog
        </Typography>
        <Typography variant='h3' color='white' align='center'>
          Latest News Feed
        </Typography>

        <Grid container lg={12} md={12} sm={12} spacing={6}>
          <Grid item lg={4} md={8} xs={12} className='blog-first-row'>
            <Container>
              <Grid className='blog3'>
                <Typography variant='h5' className='blog-23'>
                  Use Case & Top Challenges...
                </Typography>
              </Grid>
              <Grid className='blog4'>
                <Typography variant='h5' className='blog-22'>
                  Use Case & Top Challenges...
                </Typography>
              </Grid>
            </Container>
          </Grid>
          <Grid item lg={4} md={8} xs={12} className='blog-second-row'>
            <Grid className='blog5'>
              <Typography variant='h5' className='blog-22'>
                Use Case & Top Challenges...
              </Typography>
            </Grid>
            <Grid className='blog6'>
              <Typography variant='h5' className='blog-22'>
                Use Case & Top Challenges...
              </Typography>
            </Grid>
            <Grid className='blog7'>
              <Typography variant='h5' className='blog-22'>
                Use Case & Top Challenges...
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg={4} md={8} xs={12} className='blog-third-row'>
            <Grid className='blog8'>
              <Typography variant='h5' className='blog-22'>
                Use Case & Top Challenges...
              </Typography>
            </Grid>
            <Grid className='blog9'>
              <Typography variant='h5' className='blog-23'>
                Use Case & Top Challenges...
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default NewBlog;
