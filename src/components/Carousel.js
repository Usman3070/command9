import "../App.css";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const images = [1, 2, 3, 4, 5];

function App() {
  //   const NextArrow = ({ onClick }) => {
  //     return (
  //       <div className='arrow next' onClick={onClick}>
  //         <FaArrowRight />
  //       </div>
  //     );
  //   };

  //   const PrevArrow = ({ onClick }) => {
  //     return (
  //       <div className='arrow prev' onClick={onClick}>
  //         <FaArrowLeft />
  //       </div>
  //     );
  //   };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    dots: true,
    arrows: false,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <div className='App' style={{ position: "relative" }}>
      <Typography
        sx={{ textAlign: "center", color: "#fff", paddingTop: "80px" }}
      >
        Client Testimonials
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "#fff",
          marginTop: "10px",
          marginBottom: "35px",
        }}
        variant='h3'
      >
        What Clients Say About Us
      </Typography>
      <Typography sx={{ textAlign: "center", color: "#fff" }}>
        We believe that we will do our best to be a trusted technology partner
        by providing innovative blockchain solutions with exceptional quality
        and a refined user experience to transform your centralized project to a
        decentralized one for fast, transparent connections straight to you r
        end customers.
      </Typography>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <Box
            sx={{ position: "relative" }}
            className={
              idx === imageIndex
                ? "slide activeSlide"
                : idx - 1 === imageIndex
                ? "slide"
                : "slide-back"
            }
          >
            <Card
              sx={{
                minWidth: 205,
                background: "rgba(184, 15, 186, 0.15)",
                height: "300px",
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 14, color: "#fff", textAlign: "center" }}
                  gutterBottom
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </Typography>
                {/* <CardMedia
                image='/images/client.png'
                sx={{
                  width: "89px",
                  height: "92px",
                  borderRadius: "45px",
                  position: "absolute",
                  bottom: "-12%",
                  left: "30%",
                  zIndex: "1",
                }}
              /> */}
              </CardContent>
            </Card>
            <img
              src='/images/client.png'
              style={{
                width: "89px",
                height: "92px",
                borderRadius: "45px",
                position: "absolute",
                bottom: "-12%",
                left: "30%",
              }}
            />
          </Box>

          //   <div
          //     className={
          //       idx === imageIndex
          //         ? "slide activeSlide"
          //         : idx + 1 === imageIndex
          //         ? "slide-back"
          //         : "slide"
          //     }
          //   >
          //     <img src={img} alt={img} />
          //   </div>
        ))}
        {/* <NextArrow /> */}
      </Slider>
      <Typography
        sx={{ color: "#fff", textAlign: "center", letterSpacing: "1.5px" }}
        variant='h5'
      >
        Henry Benjamin
      </Typography>
      <Typography sx={{ color: "#fff", textAlign: "center" }}>
        BlockChain Developer
      </Typography>
    </div>
  );
}

export default App;
