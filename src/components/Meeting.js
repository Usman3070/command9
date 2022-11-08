import { Grid, CardMedia, Typography, Container } from "@mui/material";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Meeting.css";

function Meeting() {
  const [date, onChange] = useState(new Date());
  var month = date.getUTCMonth() + 1; //months from 1-12
  var day = date.getUTCDate();
  var year = date.getUTCFullYear();
  var newdate = year + "/" + month + "/" + day;
  console.log(newdate);
  return (
    <Grid className='calander-main' align='center' justify='center'>
      <Grid container lg={12} md={12} sm={12} spacing={6}>
        <Grid item lg={6} md={12} xs={12}>
          <Grid className='calander-1'>
            <Typography variant='h4' color='white'>
              Let's talk about project
            </Typography>
            <Typography variant='h4' color='white'>
              Schedule Meeting
            </Typography>
            <Calendar className='calan3' onChange={onChange} value={date} />
          </Grid>
        </Grid>

        <Grid item lg={6} md={6} xs={12}>
          <Typography color='white'>CMD9 Lab</Typography>
          <Typography
            color='white'
            variant='h5'
            sx={{ fontWeight: "bold", marginBottom: "20px" }}
          >
            Contact Us
          </Typography>
          <Container>
            <Grid className='contact-form-final'>
              <Grid className='contact-form1' container spacing={2}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <div className='input-icons first-field'>
                    <i className='fa fa-user icon'></i>
                    <input
                      type='text'
                      className='input-field1 icon-name'
                      placeholder='First Name'
                    />
                  </div>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <div className='input-icons'>
                    <i className='fa fa-envelope icon'></i>
                    <input
                      type='text'
                      className='input-field12 icon-name'
                      placeholder='Email Address'
                    />
                  </div>
                </Grid>
              </Grid>
              <Grid className='contact-form2'>
                <Grid className='calander-grid' lg={12} md={12} sm={12} xs={12}>
                  <div className='input-icons'>
                    <i className='fa fa-calendar icon textfield1'></i>
                    <input
                      type='text'
                      className='input-field2 icon-email'
                      placeholder='Discord'
                      value={date}
                    />
                  </div>
                </Grid>
              </Grid>
              <Grid className='contact-form3'>
                <Grid className='massege-grid' lg={12} md={12} sm={12} xs={12}>
                  <div className='input-icons'>
                    <i className=' fa fa-envelope icon textfield'></i>
                    <textarea
                      className='input-message icon-message'
                      rows='10'
                      placeholder='Detail Message'
                    />
                  </div>
                </Grid>
              </Grid>
              <Button className='nav-btn submit-btn12'>Submit</Button>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Meeting;
