import React, { useEffect, useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from './Carousel.jsx';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Box, Divider } from '@mui/material';
import img from "./Photos/Screenshot 2024-04-27 at 10.12.09 PM.png";
import img2 from "./Photos/2024-07-10 (1).jpg";
import tibs from "./Photos/2023-09-19.jpg";
import siga1 from './Photos/20200215_125205.jpg';
import siga2 from './Photos/20230908_142410.jpg';
import siga3 from './Photos/unnamed.jpeg';
import { AppBar } from '@mui/material';
import './App.css'; // Ensure you have this import for CSS
import PageBar from './PageBar.jsx';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const cuisineSection = document.getElementById('cuisine');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust threshold as needed
      }
    );

    if (cuisineSection) {
      observer.observe(cuisineSection);
    }

    return () => observer.disconnect();
  }, []);

  const GoToOriginal = () => {
    navigate('/Martin Luther King Way');
  };

  const GoToLakeCity = () => {
    navigate('/Lake City');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', width: '100%' }}>
     <PageBar/>

      <Box style={{ width: '100%', overflow: 'hidden', height: '80vh' }}>
        
        {/* <Carousel style={{ width: '100%' }} /> */}
      </Box>

      <Box sx={{ backgroundColor: "#FFEBBC", width: "100%", padding: "5vh 0" }}>
        <Typography variant='h3' sx={{ textAlign: 'center', fontSize: '4vw', fontFamily: "Satisfy", paddingBottom: "3vh", color: "#C69209" }}>
          We're Expanding!
        </Typography>
        <Typography variant='h5' sx={{ textAlign: "center", fontSize: '2.5vw', fontFamily: "Caveat", height: "10vh", color: "#8B6B07" }}>
          A new Nazareth Market location will be opening on <a href="https://www.google.com/maps/search/?api=1&query=12322+Lake+City+Way+NE%2C+Seattle" target="_blank" rel="noopener noreferrer" style={{color: "#C69209", textDecoration: "none"}}>12322 Lake City Way NE, Seattle</a> 
        </Typography>
        <Button variant="outlined" sx={{left:"80%", backgroundColor:"white", borderColor:"#F7B60B", color:"#C69209", fontSize:"30px"}}>Learn More</Button>
      </Box>

      <Divider orientation='horizontal' />

      <Box sx={{ width: "100%", padding: "5vh 0", textAlign: "center", borderRadius: "8px", backgroundColor: "#FFFFFF", marginBottom: "0px" }}>
        <Box sx={{ width: "50%", marginLeft: "17%", marginTop: "10%", marginBottom: "10%", border: "2px solid #F7B60B", height: "auto", padding: "7%" }}>
          <Typography variant='h1' sx={{ fontFamily: "Satisfy", color: "#F7B60B", marginBottom: "10%" }}>About Us</Typography>
          <Typography variant='h3' sx={{ fontFamily: "Caveat", color: "#8B6B07" }}>
            We're an Ethiopian grocery store that caters to the needs of our local people. As an Ethiopian-owned business, we value our culture and stay true our roots by continuing to serve our cuisine to Seattle.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra ligula id ligula dignissim, non ullamcorper dui aliquet. Donec nec mi id libero aliquet fermentum. Nulla facilisi. Quisque vitae nunc at quam tempor tempor. Aliquam erat volutpat. Vestibulum viverra libero a augue volutpat bibendum.
          </Typography>
        </Box>
      </Box>

      <Box id="cuisine" sx={{backgroundAttachment:"fixed"}}>
        <img src={tibs} alt="Tibs" style={{backgroundAttachment:"fixed", opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease-in-out' }} />
        <img src={siga1} alt="Siga1" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease-in-out' }} />
        <img src={siga2} alt="Siga2" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease-in-out' }} />
        <img src={siga3} alt="Siga3" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease-in-out' }} />
        <div className="center-text">
          <Typography variant="h1" sx={{ fontFamily: "Satisfy", color: "#F7B60B" }}>Our Cuisine</Typography>
          <Typography variant="h4" sx={{ fontFamily: "Caveat", color: "#8B6B07" }}>
            Nazreth Market is home to some of the best Ethiopian food in Seattle. We serve fresh kitfo and tasty Tibs in an environment that reminds you of home.
          </Typography>
        </div>
      </Box>

      <Divider orientation='horizontal' borderColor="#C69209" />

      <Box sx={{ backgroundColor: "#FEEDD2", width: "100%", padding: "5vh 0", textAlign: 'center' }}>
        <Typography variant='h1' sx={{ fontFamily: "Caveat", marginBottom: '5vh', color: "#C69209" }}>Locations</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '2vw', flexWrap: 'wrap' }}>
          <Card onClick={GoToOriginal} sx={{
            marginTop: "6vh",
            width: '35%',
            backgroundColor: '#FFFFFF',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#F7B60B',
              color: '#FFFFFF',
              transition: 'background 0.5s ease-in-out, color 0.5s ease-in-out'
            }
          }}>
            <CardMedia
              component="img"
              image={img}
              alt="Nazareth Market"
              sx={{ width: '96%', height: 'auto', marginLeft: "2%", borderRadius: "5px", marginTop: "2%" }}
            />
            <CardContent>
              <Typography fontFamily="Satisfy" variant="h1" sx={{ marginBottom: '1vh', color: "#C69209" }}>South Seattle</Typography>
              <Typography variant="h4" sx={{ textAlign: 'center', marginTop: "5px", color: "#8B6B07" }}>
                5418 Martin Luther King Jr Way S, Seattle, WA 98118
              </Typography>
            </CardContent>
          </Card>

          <Card onClick={GoToLakeCity} sx={{
            marginTop: "6vh",
            width: '35%',
            backgroundColor: '#FFFFFF',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#F7B60B',
              color: '#FFFFFF',
              transition: 'background 0.5s ease-in-out, color 0.5s ease-in-out'
            }
          }}>
            <CardMedia
              component="img"
              image={img2}
              alt="Nazareth Market"
              sx={{ width: '96%', height: 'auto', marginLeft: "2%", marginTop: "2%" }}
            />
            <CardContent>
              <Typography fontFamily="Satisfy" variant="h1" sx={{ marginBottom: '1vh', color: "#C69209" }}>North Seattle</Typography>
              <Typography variant="h4" sx={{ textAlign: 'center', color: "#8B6B07" }}>
                12322 Lake City Way NE, Seattle, WA 98125
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Box 
        sx={{ 
          backgroundColor: '#C69209', // Darker shade of the original #F7B60B
          width: "100%",
          minHeight: "20vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: "2rem",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `repeating-linear-gradient(
              45deg,
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0.1) 10px,
              transparent 10px,
              transparent 20px
            )`,
            zIndex: 1
          }
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            marginBottom: "2rem",
            zIndex: 2,
            flexWrap: "wrap",
            gap: "2rem"
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  color: "white",
                  fontFamily: "Caveat",
                  fontWeight: "bold"
                }}
              >
                Contact Us
              </Typography>
              <Typography 
                sx={{ 
                  color: "white",
                  fontFamily: "Caveat"
                }}
              >
                Phone: (206) 555-0123
              </Typography>
              <Typography 
                sx={{ 
                  color: "white",
                  fontFamily: "Caveat"
                }}
              >
                Email: info@nazarethmarket.com
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography 
          variant="h6" 
          sx={{ 
            color: "white",
            fontFamily: "Caveat",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
            borderTop: "1px solid rgba(255, 255, 255, 0.3)",
            paddingTop: "1rem",
            width: "100%"
          }}
        >
          © 2024 Nazareth Market. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
}

export default App;
