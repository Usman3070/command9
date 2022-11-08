import { Button } from "react-bootstrap";
import { Typography, Container, CardMedia, Grid } from "@mui/material";
import "./Footer.css";

function Footer() {
  return (
    <div className='footer-main'>
      <Grid position='relative' className='footer-2'>
        <img src='/images/logo1.png' />
        <Container
          sx={{
            marginTop: "25px",
            marginBottom: "30px",
            width: { xl: "60%", lg: "60%", md: "70%", sm: "80%", xs: "100%" },
          }}
        >
          <Typography variant='p'>
            BloxBytes is a synonym for and brings in more and more recognition.
            Every business strives to distinguish itself from competitors by
            offering innovative services or products which distinguish it from
            peers. More than that, BloxBytes is a source of inspiration,
            motivation, and information on how to differentiate your projects
            through Smart Blockchain Development Techniques. BloxBytes is
            synonomous with credibility and increased recognition of your
            project.
          </Typography>
        </Container>
      </Grid>
      <Grid
        container
        lg={12}
        md={12}
        sm={12}
        spacing={6}
        className='footer-bootum'
      >
        <Grid item lg={3} md={6} xs={12}>
          <div className='footer3' style={{ margin: "auto" }}>
            <h5 className='footer4'>Email Address</h5>
            <input
              className='footer5'
              type=' text'
              placeholder='Enter Email Address '
              style={{ fontSize: "16px" }}
            />
            <h6 className='fff'>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate.
            </h6>
            <Button className='nav-btn footer7'>Get Started</Button>
            <div className='footer6'>
              <img className='footer77' src='/images/image35.png'></img>
              <img className='footer77' src='/images/image36.png'></img>
              <img className='footer77' src='/images/instagram.png'></img>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={6} xs={12} className='footer9'>
          <h4 className=' list1'>Our Services</h4>
          <ul className='   ul'>
            <li>
              <h6 className='  foo'>NFT</h6>
            </li>
            <li>
              <h6 className='foo'>Small Contracts</h6>
            </li>
            <li>
              <h6 className='foo'>Crypto Wallet</h6>
            </li>
            <li>
              <h6 className='foo'>Marketplaces</h6>
            </li>
            <li>
              <h6 className='foo'>Tokenization</h6>
            </li>
            <li>
              <h6 className='foo'>Metaverse</h6>
            </li>
            <li>
              <h6 className='foo'>DEX</h6>
            </li>
            <li>
              <h6 className='foo'>DAPP</h6>
            </li>
          </ul>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <h4 className='d-flex justify-content-center  footer9'>Locations</h4>
          <div className='footer10'>
            <div className='foote'>
              <img className='foote1' src='/images/location.png'></img>
              <h4>Sales Office</h4>
            </div>
            <h6>
              122 South Michigan Avenue, Suite 1390, Chicago, IL 60603 USA
            </h6>
          </div>
          <div className='footer10'>
            <div className='foote'>
              <img className='foote1' src='/images/location.png'></img>
              <h4>Head Office</h4>
            </div>
            <h6 className='location'>
              98/4 Baber Block, Garden Town, Lahore Pakistan
            </h6>
          </div>
          <div className='footer10'>
            <div className='foote'>
              <img className='foote1' src='/images/location.png'></img>
              <h4>Development Office</h4>
            </div>
            <h6 className='location'>
              #37 C Baber Block, Garden Town, Lahore Pakistan
            </h6>
          </div>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <h4 className='footer13'>Contact Us</h4>
          <div className='footer14'>
            <img className='footer18' src='/images/Icon.png'></img>
            <h5 className='footer19'>USA</h5>
          </div>
          <h6 className='footer20'>+1 231 580 8240</h6>
          <div className='footer15'>
            <img className='footer21' src='/images/Icon.png'></img>
            <h5 className='footer22'>Pak</h5>
          </div>
          <h6 className='footer20'>+92 423 591 1685</h6>

          <div className='footer15'>
            <img className='footer21' src='/images/vector.png'></img>
            <h5 className='footer22'>Email</h5>
          </div>
          <h6 className='footer20'>info@bloxbytes.com</h6>
          <h6 className='footer20'>sales@bloxbytes.com</h6>
        </Grid>
      </Grid>
    </div>
  );
}
export default Footer;
