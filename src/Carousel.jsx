import React from "react";
import Slider from "react-slick";
import img from "./Photos/aisle.jpg";
import img2 from "./Photos/2022-05-05.jpg";
import img3 from "./Photos/unnamed.jpeg";
import PlaceIcon from '@mui/icons-material/Place';
import { keyframes } from '@mui/system';

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

function Fade() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplaySpeed: 2000,
    arrows: true,
  };

  const slideStyle = {
    position: 'relative',
    animation: `${slideInFromRight} 2s forwards`,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div style={{ ...slideStyle, fontFamily: "Satisfy",  animation: `${slideInFromRight} 2s forwards` }}>
          <img src={img} style={{ width: "100%", height: "auto",  animation: `${slideInFromRight} 2s forwards` }} alt="Slide 1" />
          <div className="banner" style={{ position: 'absolute',  animation: `${slideInFromRight} 2s forwards`, top: '45%', left: '30%', borderRadius: "60px", transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(255, 255, 255, 0.8)', color: 'black', padding: '20px', fontSize: '4vh' }}>
            <p style={{ fontFamily: "Caveat", borderRadius: "40px" }}>Visit our new and improved location</p>
          </div>
        </div>
        <div style={slideStyle}>
          <img src={img2} style={{ width: "100%", marginTop: "-20vh" }} alt="Slide 2" />
          <div className="banner" style={{ position: 'absolute', top: '55%', left: '30%', borderRadius: "50px", transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(255, 255, 255, 0.8)', color: 'black', padding: '20px', fontSize: '4vh' }}>
            <p style={{ fontFamily: "Caveat", borderRadius: "40px" }}>5418 Martin Luther King Jr Way S, Seattle <PlaceIcon sx={{ fontSize: "40px" }} /></p>
          </div>
        </div>
        <div style={slideStyle}>
          <img src={img3} style={{ width: "100%" }} alt="Slide 3" />
          <div className="banner" style={{ position: 'absolute', top: '45%', left: '30%', borderRadius: "60px", transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(255, 255, 255, 0.8)', color: 'black', padding: '20px', fontSize: '4vh' }}>
            <p style={{ fontFamily: "Caveat" }}>Fresh meat Thursdays and Saturdays!</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Fade;
