import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Divider, Card, CardMedia, CardContent } from '@mui/material';
import { keyframes } from '@mui/system';
import Carousel from './Carousel';
import PageBar from './PageBar';
import img from './Photos/Screenshot 2024-04-27 at 10.12.09 PM.png';
import img2 from './Photos/2024-07-10 (1).jpg';
import tibs from './Photos/2023-09-19.jpg';
import siga1 from './Photos/20200215_125205.jpg';
import siga2 from './Photos/20230908_142410.jpg';
import siga3 from './Photos/unnamed.jpeg';
import './App.css'; // Ensure you have this import for CSS

const fadeInFromRight = keyframes`
  0% {
    transform: translateX(30%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: .8;
  }
`;

function DesktopView({ GoToOriginal, GoToLakeCity }) {
  const [isVisible, setIsVisible] = useState(false);

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
        threshold: 0.5
      }
    );

    if (cuisineSection) {
      observer.observe(cuisineSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', width: '100%' }}>
      <PageBar />

      <Box style={{ width: '100%', overflow: 'hidden', height: '80vh', animation: `${fadeInFromRight} 2s forwards` }}>
        <Carousel style={{ width: '100%', animation: `${fadeInFromRight} 2s forwards` }} />
      </Box>

      <Box sx={{ backgroundColor: '#FFEBBC', width: '100%', padding: '5vh 0' }}>
        <Typography variant='h3' sx={{ textAlign: 'center', fontSize: '4vw', fontFamily: 'Satisfy', paddingBottom: '3vh' }}>
          We're Expanding!
        </Typography>
        <Typography variant='h5' sx={{ textAlign: 'center', fontSize: '2.5vw', fontFamily: 'Caveat', height: '10vh' }}>
          A new Nazareth Market location has opened
        </Typography>
        <Button variant='outlined' onClick={GoToLakeCity} sx={{ left: '80%', backgroundColor: 'white', borderColor: '#F7B60B', color: 'black', fontSize: '30px' }}>
          Learn More
        </Button>
      </Box>

      <Divider orientation='horizontal' />

      <Box sx={{ width: '100%', padding: '5vh 0', textAlign: 'center', borderRadius: '8px', backgroundColor: '#FFFFFF', marginBottom: '0px' }}>
        <Box sx={{ width: '50%', marginLeft: '17%', marginTop: '10%', marginBottom: '10%', border: '2px solid #F7B60B', height: 'auto', padding: '7%' }}>
          <Typography variant='h1' sx={{ fontFamily: 'Satisfy', color: '#F7B60B', marginBottom: '10%' }}>About Us</Typography>
          <Typography variant='h3' sx={{ fontFamily: 'Caveat' }}>
            We're an Ethiopian grocery store that caters to the needs of our local people. As an Ethiopian-owned business, we value our culture and stay true to it by continuing to serve our cuisine to Seattle.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra ligula id ligula dignissim, non ullamcorper dui aliquet. Donec nec mi id libero aliquet fermentum. Nulla facilisi. Quisque vitae nunc at quam tempor tempor. Aliquam erat volutpat. Vestibulum viverra libero a augue volutpat bibendum.
          </Typography>
        </Box>
      </Box>

      <Box id='cuisine'>
        <img src={tibs} alt='Tibs' style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease-in-out' }} />
        <img src={siga1} alt='Siga1' style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease-in-out' }} />
        <img src={siga2} alt='Siga2' style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease-in-out' }} />
        <img src={siga3} alt='Siga3' style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease-in-out' }} />
        <div className='center-text'>
          <Typography variant='h1' sx={{ fontFamily: 'Satisfy' }}>Our Cuisine</Typography>
          <Typography variant='h4' sx={{ fontFamily: 'Caveat' }}>
            Nazreth Market is home to some of the best Ethiopian food in Seattle. We serve fresh kitfo and tasty Tibs in an environment that reminds you of home.
          </Typography>
        </div>
      </Box>

      <Divider orientation='horizontal' borderColor='black' />

      <Box sx={{ backgroundColor: '#FEEDD2', width: '100%', padding: '5vh 0', textAlign: 'center' }}>
        <Typography variant='h1' sx={{ fontFamily: 'satisfy', marginBottom: '5vh' }}>Locations</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '2vw', flexWrap: 'wrap' }}>
          <Card onClick={GoToOriginal} sx={{
            marginTop: '6vh',
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
              component='img'
              image={img}
              alt='Nazareth Market'
              sx={{ width: '96%', height: 'auto', marginLeft: '2%', borderRadius: '5px', marginTop: '2%' }}
            />
            <CardContent>
              <Typography fontFamily='Satisfy' variant='h1' sx={{ marginBottom: '1vh' }}>South Seattle</Typography>
              <Typography variant='h4' sx={{ textAlign: 'center', marginTop: '5px' }}>
                5418 Martin Luther King Jr Way S, Seattle, WA 98118
              </Typography>
            </CardContent>
          </Card>

          <Card onClick={GoToLakeCity} sx={{
            marginTop: '6vh',
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
              component='img'
              image={img2}
              alt='Nazareth Market'
              sx={{ width: '96%', height: 'auto', marginLeft: '2%', marginTop: '2%' }}
            />
            <CardContent>
              <Typography fontFamily='Satisfy' variant='h1' sx={{ marginBottom: '1vh' }}>North Seattle</Typography>
              <Typography variant='h4' sx={{ textAlign: 'center' }}>
                12322 Lake City Way NE, Seattle, WA 98125
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </div>
  );
}

function MobileView({ GoToOriginal, GoToLakeCity }) {
  return (
    <div style={{ padding: '10px' }}>
      <PageBar />

      <Box style={{ width: '100%', overflow: 'hidden', height: '40vh', animation: `${fadeInFromRight} 2s forwards` }}>
        <Carousel style={{ width: '100%', animation: `${fadeInFromRight} 2s forwards` }} />
      </Box>

      <Box sx={{ backgroundColor: '#FFEBBC', width: '100%', padding: '2vh 0' }}>
        <Typography variant='h4' sx={{ textAlign: 'center', fontSize: '6vw', fontFamily: 'Satisfy', paddingBottom: '2vh' }}>
          We're Expanding!
        </Typography>
        <Typography variant='h6' sx={{ textAlign: 'center', fontSize: '4vw', fontFamily: 'Caveat', height: '5vh' }}>
          A new Nazareth Market location has opened
        </Typography>
        <Button variant='outlined' onClick={GoToLakeCity} sx={{ left: '25%', backgroundColor: 'white', borderColor: '#F7B60B', color: 'black', fontSize: '4vw' }}>
          Learn More
        </Button>
      </Box>

      <Divider orientation='horizontal' />

      <Box sx={{ width: '100%', padding: '2vh 0', textAlign: 'center', borderRadius: '8px', backgroundColor: '#FFFFFF', marginBottom: '0px' }}>
        <Box sx={{ width: '80%', marginLeft: '10%', marginTop: '10%', marginBottom: '10%', border: '2px solid #F7B60B', height: 'auto', padding: '5%' }}>
          <Typography variant='h4' sx={{ fontFamily: 'Satisfy', color: '#F7B60B', marginBottom: '10%' }}>About Us</Typography>
          <Typography variant='body1' sx={{ fontFamily: 'Caveat' }}>
            We're an Ethiopian grocery store that caters to the needs of our local people. As an Ethiopian-owned business, we value our culture and stay true to it by continuing to serve our cuisine to Seattle.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra ligula id ligula dignissim, non ullamcorper dui aliquet. Donec nec mi id libero aliquet fermentum. Nulla facilisi. Quisque vitae nunc at quam tempor tempor. Aliquam erat volutpat. Vestibulum viverra libero a augue volutpat bibendum.
          </Typography>
        </Box>
      </Box>

      <Box id='cuisine'>
        <img src={tibs} alt='Tibs' style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
        <img src={siga1} alt='Siga1' style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
        <img src={siga2} alt='Siga2' style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
        <img src={siga3} alt='Siga3' style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
        <div className='center-text'>
          <Typography variant='h4' sx={{ fontFamily: 'Satisfy' }}>Our Cuisine</Typography>
          <Typography variant='body1' sx={{ fontFamily: 'Caveat' }}>
            Nazreth Market is home to some of the best Ethiopian food in Seattle. We serve fresh kitfo and tasty Tibs in an environment that reminds you of home.
          </Typography>
        </div>
      </Box>

      <Divider orientation='horizontal' borderColor='black' />

      <Box sx={{ backgroundColor: '#FEEDD2', width: '100%', padding: '2vh 0', textAlign: 'center' }}>
        <Typography variant='h4' sx={{ fontFamily: 'Satisfy', marginBottom: '5vh' }}>Locations</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '2vw', flexWrap: 'wrap' }}>
          <Card onClick={GoToOriginal} sx={{
            marginTop: '6vh',
            width: '80%',
            backgroundColor: '#FFFFFF',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#F7B60B',
              color: '#FFFFFF',
              transition: 'background 0.5s ease-in-out, color 0.5s ease-in-out'
            }
          }}>
            <CardMedia
              component='img'
              image={img}
              alt='Nazareth Market'
              sx={{ width: '96%', height: 'auto', marginLeft: '2%', borderRadius: '5px', marginTop: '2%' }}
            />
            <CardContent>
              <Typography fontFamily='Satisfy' variant='h4' sx={{ marginBottom: '1vh' }}>South Seattle</Typography>
              <Typography variant='body2' sx={{ textAlign: 'center', marginTop: '5px' }}>
                5418 Martin Luther King Jr Way S, Seattle, WA 98118
              </Typography>
            </CardContent>
          </Card>

          <Card onClick={GoToLakeCity} sx={{
            marginTop: '6vh',
            width: '80%',
            backgroundColor: '#FFFFFF',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#F7B60B',
              color: '#FFFFFF',
              transition: 'background 0.5s ease-in-out, color 0.5s ease-in-out'
            }
          }}>
            <CardMedia
              component='img'
              image={img2}
              alt='Nazareth Market'
              sx={{ width: '96%', height: 'auto', marginLeft: '2%', marginTop: '2%' }}
            />
            <CardContent>
              <Typography fontFamily='Satisfy' variant='h4' sx={{ marginBottom: '1vh' }}>North Seattle</Typography>
              <Typography variant='body2' sx={{ textAlign: 'center' }}>
                12322 Lake City Way NE, Seattle, WA 98125
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </div>
  );
}

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const GoToOriginal = () => {
    navigate('/Martin Luther King Way');
  };

  const GoToLakeCity = () => {
    navigate('/Lake City');
  };

  return (
    <>
      {isMobile ? (
        <MobileView GoToOriginal={GoToOriginal} GoToLakeCity={GoToLakeCity} />
      ) : (
        <DesktopView GoToOriginal={GoToOriginal} GoToLakeCity={GoToLakeCity} />
      )}
    </>
  );
}

export default App;
