import { Typography, Container, CardMedia, Grid, Box } from "@mui/material";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./FAQ.css";

function NewFAQ() {
  return (
    <>
      <Grid className='faq-main' sx={{ paddingTop: "5%" }}>
        <Typography
          color='white'
          align='center'
          sx={{
            fontSize: {
              xl: "32px",
              lg: "32px",
              md: "26px",
              sm: "22px",
              xs: "16px",
            },
          }}
        >
          FAQ’s
        </Typography>
        <Typography
          color='white'
          align='center'
          sx={{
            paddingTop: "1%",
            marginBottom: "2%",
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
          Frequently Asked Questions
        </Typography>
        <Grid container lg={12} md={12} sm={12} spacing={6}>
          <Grid item lg={6} md={8} xs={12}>
            <CardMedia
              image='/images/Asset1.png'
              sx={{
                width: { xs: "250px", sm: "350px", md: "400px", lg: "450px" },
                height: { xs: "250px", sm: "350px", md: "400px", lg: "450px" },
                margin: "auto",
              }}
              className='asset2'
            />
          </Grid>
          <Grid item lg={6} md={8} xs={12}>
            <Accordion
              className='accordian'
              style={{ background: "rgba(0,0,0,0.5)", color: "#fff" }}
              expanded={true}
            >
              <AccordionSummary
                className='faq2'
                expandIcon={<ExpandMoreIcon style={{ color: "#ffffff" }} />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography>
                  How can blockchain unleash the potential of your business?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Blockchain systems help increase the trust of a particular
                  system by eliminating the need for a third-party platform to
                  complete the business process. This helps to strengthen the
                  corporate structure and increase its sustainability.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className='accordian'
              style={{ background: "rgba(0,0,0,0.5)", color: "#fff" }}
              expanded={true}
            >
              <AccordionSummary
                className='faq2'
                expandIcon={<ExpandMoreIcon style={{ color: "#ffffff" }} />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography>
                  How can blockchain unleash the potential of your business?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Blockchain systems help increase the trust of a particular
                  system by eliminating the need for a third-party platform to
                  complete the business process. This helps to strengthen the
                  corporate structure and increase its sustainability.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className='accordian'
              style={{ background: "rgba(0,0,0,0.5)", color: "#fff" }}
            >
              <AccordionSummary
                className='faq2'
                expandIcon={<ExpandMoreIcon style={{ color: "#ffffff" }} />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography>
                  How can blockchain unleash the potential of your business?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Blockchain systems help increase the trust of a particular
                  system by eliminating the need for a third-party platform to
                  complete the business process. This helps to strengthen the
                  corporate structure and increase its sustainability.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className='accordian'
              style={{ background: "rgba(0,0,0,0.5)", color: "#fff" }}
            >
              <AccordionSummary
                className='faq2'
                expandIcon={<ExpandMoreIcon style={{ color: "#ffffff" }} />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography>
                  How can blockchain unleash the potential of your business?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Blockchain systems help increase the trust of a particular
                  system by eliminating the need for a third-party platform to
                  complete the business process. This helps to strengthen the
                  corporate structure and increase its sustainability.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className='accordian'
              style={{ background: "rgba(0,0,0,0.5)", color: "#fff" }}
            >
              <AccordionSummary
                className='faq2'
                expandIcon={<ExpandMoreIcon style={{ color: "#ffffff" }} />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography>
                  How can blockchain unleash the potential of your business?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Blockchain systems help increase the trust of a particular
                  system by eliminating the need for a third-party platform to
                  complete the business process. This helps to strengthen the
                  corporate structure and increase its sustainability.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className='accordian'
              style={{ background: "rgba(0,0,0,0.5)", color: "#fff" }}
            >
              <AccordionSummary
                className='faq2'
                expandIcon={<ExpandMoreIcon style={{ color: "#ffffff" }} />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography>
                  How can blockchain unleash the potential of your business?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Blockchain systems help increase the trust of a particular
                  system by eliminating the need for a third-party platform to
                  complete the business process. This helps to strengthen the
                  corporate structure and increase its sustainability.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className='accordian'
              style={{ background: "rgba(0,0,0,0.5)", color: "#fff" }}
            >
              <AccordionSummary
                className='faq2'
                expandIcon={<ExpandMoreIcon style={{ color: "#ffffff" }} />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography>
                  How can blockchain unleash the potential of your business?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Blockchain systems help increase the trust of a particular
                  system by eliminating the need for a third-party platform to
                  complete the business process. This helps to strengthen the
                  corporate structure and increase its sustainability.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default NewFAQ;
