import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Divider, Card, CardMedia, CardContent } from '@mui/material';
import { keyframes } from '@mui/system';
import Carousel from './Carousel';
import PageBar from './PageBar';
import img from './Photos/og.png';
import img2 from './Photos/front.jpg';
import tibs from './Photos/2023-09-19.jpg';
import siga1 from './Photos/20200215_125205.jpg';
import siga2 from './Photos/20230908_142410.jpg';
import siga3 from './Photos/unnamed.jpeg';
import aisle from './Photos/aisle.jpg';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const zoomIn = keyframes`
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

const fadeInFromRight = keyframes`
  0% {
    transform: translateX(30%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const flagWave = keyframes`
  0% { transform: rotate(-2deg) translateX(0); }
  50% { transform: rotate(2deg) translateX(10px); }
  100% { transform: rotate(-2deg) translateX(0); }
`;

const swirlRotate = keyframes`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
`;

const sparkleTwinkle = keyframes`
  0%, 100% { opacity: 0.7; transform: scale(1);}
  50% { opacity: 1; transform: scale(1.2);}
`;

const floatUpDown = keyframes`
  0%, 100% { transform: translateY(0);}
  50% { transform: translateY(-15px);}
`;

function DesktopView({ GoToOriginal, GoToLakeCity }) {
  const [isVisible, setIsVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  

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

  useEffect(() => {
    const aboutSection = document.getElementById('about');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
    );

    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', width: '100%' }}>
      <Box style={{ position: 'relative' }}>
        <PageBar mobile={false} />
      </Box>

    <Box style={{ position: 'relative', width: '100%', animation: {/*}`${fadeInFromRight} 2s forwards` */}}}>
          <Box 
            sx={{
              border: '10px solid #F7B60B', // Frame color and thickness
              borderRadius: '15px', // Rounded corners for the frame
              overflow: 'hidden', // Ensures the image fits within the frame
              //boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)', // Shadow for depth
              animation: `${fadeInFromRight} 2s forwards`,
            }}
          >
            <Box 
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden', // Ensures the gradient overlay fits within the box
              }}
            >
              <Box component="img" 
                   src={img2} 
                   alt="Lake City" 
                   sx={{
                     width: '100%',
                     height: '100%',
                     objectFit: 'cover', // Ensures the image covers the box without distortion
                   }} 
              />
              <Box 
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1.5) 100%)', // Fade out gradient
                }}
              />
            </Box>
          </Box>
          <Typography 
            variant="h1" 
            sx={{
              fontFamily: "Lobster",
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'rgb(255, 255, 255)',
              textAlign: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark semi-transparent background for contrast
              padding: '20px',
              borderRadius: '12px',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '9rem' },
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Adding text shadow for depth
              border: '2px solid #F7B60B', // Adding a border for emphasis
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' // Adding shadow for a floating effect
            }}
          >
            Nazreth Market
          </Typography>
          <Typography 
            variant="h2" 
            sx={{
              fontFamily: 'Courier New',
              fontWeight: 'bold',
              position: 'absolute',
              top: '60%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'rgb(255, 255, 255)',
              textAlign: 'center',
        
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)', // Adding text shadow for depth
              boxShadow: ' 20px 20px 20px rgba(0, 0, 0, 0.5)' // Adding shadow for a floating effect
            }}
          >
            Fresh Siga and 100% teff Injera
          </Typography>
            {/* Cool Graphics: Ethiopian flag ribbon (always visible) */}
            <Box
              sx={{
                position: 'absolute',
                top: '20px',
                right: '40px',
                width: '60px',
                height: '45px',
                background: 'linear-gradient(to bottom, #009A49 33%, #FEDD00 33% 66%, #EF3340 66%)',
                borderRadius: '6px',
                animation: `${flagWave} 3s ease-in-out infinite`,
                zIndex: 3,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
              }}
            />
            
            {/* Decorative swirls */}
            <Box
              sx={{
                position: 'absolute',
                top: '80px',
                left: '30px',
                width: '30px',
                height: '30px',
                background: 'radial-gradient(circle, #F7B60B 30%, transparent 70%)',
                borderRadius: '50%',
                animation: `${swirlRotate} 8s linear infinite`,
                zIndex: 2
              }}
            />
            
            <Box
              sx={{
                position: 'absolute',
                bottom: '100px',
                right: '50px',
                width: '20px',
                height: '20px',
                background: 'radial-gradient(circle, #F7B60B 40%, transparent 60%)',
                borderRadius: '50%',
                animation: `${sparkleTwinkle} 4s ease-in-out infinite`,
                zIndex: 2
              }}
            />
            
            <Box
              sx={{
                position: 'absolute',
                top: '150px',
                right: '120px',
                width: '15px',
                height: '15px',
                background: 'radial-gradient(circle, #F7B60B 50%, transparent 50%)',
                borderRadius: '50%',
                animation: `${sparkleTwinkle} 6s ease-in-out infinite 1s`,
                zIndex: 2
              }}
            />
        </Box>

        {/* Expansion Announcement Section */}
        <Box sx={{ backgroundColor: '#FFEBBC', width: '100%', padding: '5vh 0', textAlign: 'center' }}>
          <Typography variant='h2' sx={{ fontFamily: 'Satisfy', fontSize: '3rem', marginBottom: '2vh', color: '#F7B60B' }}>
            We're Expanding!
          </Typography>
          <Typography variant='h4' sx={{ fontFamily: 'Caveat', fontSize: '1.8rem', marginBottom: '3vh' }}>
            A new Nazareth Market location has opened
          </Typography>
          <Button 
            variant='outlined' 
            onClick={GoToLakeCity} 
            sx={{ 
              fontSize: '1.2rem',
              padding: '12px 30px',
              borderColor: '#F7B60B',
              color: '#F7B60B',
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: '#F7B60B',
                color: 'white'
              }
            }}
          >
            Learn More
          </Button>
        </Box>

        <Divider orientation='horizontal' />

        {/* About Section */}
        <Box
          id="about"
          sx={{
            width: '100%',
            padding: '8vh 0',
            textAlign: 'center',
            backgroundColor: '#FFFFFF',
            animation: aboutVisible ? `${slideUp} 1s ease-out` : 'none'
          }}
        >
          <Box
            sx={{
              width: '80%',
              margin: '0 auto',
              border: '4px solid #F7B60B',
              borderRadius: '20px',
              padding: '4%',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 8px 32px rgba(247, 182, 11, 0.3)'
            }}
          >
            <Typography variant='h2' sx={{ fontFamily: 'Satisfy', color: '#F7B60B', marginBottom: '4vh', fontSize: '3rem' }}>
              About Us
            </Typography>
            <Typography variant='h4' sx={{ fontFamily: 'Caveat', fontSize: '1.8rem', lineHeight: '1.8' }}>
              We're an Ethiopian grocery store that caters to the needs of our local people. As an Ethiopian-owned business, we value our culture and stay true to it by continuing to serve our cuisine to Seattle.
              <br /><br />
              Our commitment to authenticity and quality has made us a beloved destination for Ethiopian food lovers throughout the Pacific Northwest.
            </Typography>
          </Box>
        </Box>

        <Divider orientation='horizontal' />
        <Box sx={{ 
        width: '100%', 
        padding: '5vh 0', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative', 
        marginBottom: '0px',
        overflow: 'hidden',
        height: '100vh' // Set full viewport height
      }}>
        <img src={aisle} alt='Aisle at Nazreth Market' style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }} />
        <Box sx={{ 
          width: '50%',
          padding: '4vh 2vw',
          border: '2px solid #F7B60B',
          borderRadius: '15px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          position: 'relative',
          zIndex: 1,
          paddingBottom:"10%",
          marginLeft: '5%'
        }}>
          <Typography variant='h2' sx={{ 
            fontFamily: 'Satisfy', 
            color: '#F7B60B',
            marginBottom: '3vh'
          }}>
            Fresh Ingredients & Quality Products
          </Typography>
          <Typography variant='h4' sx={{ 
            fontFamily: 'Caveat',
            lineHeight: 1.6,
            color: '#333333'
          }}>
            At Nazreth Market, we take pride in sourcing the finest Ethiopian ingredients. Our teff is imported directly from Ethiopia's highlands, ensuring authentic taste in every injera. We carefully select our spices and herbs, bringing you the true flavors of Ethiopian cuisine.
            <br /><br />
            From our freshly ground coffee beans to our hand-picked spices, every product in our store meets our high standards for quality and authenticity. We believe in supporting local farmers and maintaining the traditional methods that make Ethiopian cuisine special.
          </Typography>
        </Box>
        <svg viewBox="0 0 1440 320" style={{ position: 'absolute', bottom: "4%",   marginLeft: '5%', width: '50%', zIndex: 1 }}>
          <path fill="#F7B60B" fillOpacity="1" d="M0,128L30,144C60,160,120,192,180,202.7C240,213,300,203,360,186.7C420,171,480,149,540,144C600,139,660,149,720,160C780,171,840,181,900,186.7C960,192,1020,192,1080,186.7C1140,181,1200,171,1260,160C1320,149,1380,139,1410,134.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
      </Box>
      
        <Box id='cuisine'>
          <img
            src={tibs}
            alt="Tibs"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              animation: `${floatUpDown} 7s ease-in-out infinite`,
            }}
          />
          <img 
            src={siga1} 
            alt='Siga1' 
            style={{ 
              opacity: isVisible ? 1 : 0, 
              transition: 'opacity 1s ease-in-out',
              animation: `${swirlRotate} 10s linear infinite`
            }} 
          />
          <img 
            src={siga2} 
            alt='Siga2' 
            style={{ 
              opacity: isVisible ? 1 : 0, 
              transition: 'opacity 1s ease-in-out',
              animation: `${sparkleTwinkle} 5s ease-in-out infinite`
            }} 
          />
          <img 
            src={siga3} 
            alt='Siga3' 
            style={{ 
              opacity: isVisible ? 1 : 0, 
              transition: 'opacity 1s ease-in-out',
              animation: `${fadeInFromRight} 8s ease-in-out infinite`
            }} 
          />
          <div className='center-text'>
            <Typography variant='h1' sx={{ fontFamily: 'Satisfy',color:"#F7B60B" }}>Our Cuisine</Typography>
            <Typography variant='h4' sx={{ fontFamily: 'Caveat' }}>
              Nazreth Market is home to some of the best Ethiopian food in Seattle. We serve fresh kitfo and tasty Tibs in an environment that reminds you of home.
            </Typography>
          </div>
        </Box>

        <Divider orientation='horizontal' borderColor='black' />

        <Box sx={{ backgroundColor: '#ffe2c2', width: '100%', padding: '5vh 0', textAlign: 'center' }}>
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
        <Box 
          sx={{ 
            backgroundColor: '#C69209', // Darker shade of the original #F7B60B
            width: "98%",
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
                 variant="h5" 
                  sx={{ 
                    color: "white",
                    fontFamily: "Caveat"
                  }}
                >
                  Phone: (206) 555-0123
                </Typography>
                <Typography 
                  variant="h5" 
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
            variant="h5" 
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

export default DesktopView; 