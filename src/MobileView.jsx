import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Divider, Card, CardMedia, CardContent } from '@mui/material';
import { keyframes } from '@mui/system';
import PageBar from './PageBar';
import img from './Photos/og.png';
import img2 from './Photos/front.jpg';
import tibs from './Photos/2023-09-19.jpg';
import siga1 from './Photos/20200215_125205.jpg';
import siga2 from './Photos/20230908_142410.jpg';
import siga3 from './Photos/unnamed.jpeg';
import aisle from './Photos/aisle.jpg';

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

const slideUp = keyframes`
  from { transform: translateY(40px); opacity: 0; }
  to { transform: translateY(0px); opacity: 1; }
`;

const zoomIn = keyframes`
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

const flagWave = keyframes`
  0% { transform: rotate(-2deg) translateX(0); }
  50% { transform: rotate(2deg) translateX(10px); }
  100% { transform: rotate(-2deg) translateX(0); }
`;

function MobileView({ GoToOriginal, GoToLakeCity }) {
  const [isVisible, setIsVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [expansionVisible, setExpansionVisible] = useState(false);
  const [ingredientsVisible, setIngredientsVisible] = useState(false);
  const [locationsVisible, setLocationsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    // Hero section observer
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
        }
      },
      observerOptions
    );

    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroObserver.observe(heroSection);
    }

    // Expansion section observer
    const expansionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setExpansionVisible(true);
        }
      },
      observerOptions
    );

    const expansionSection = document.getElementById('expansion-section');
    if (expansionSection) {
      expansionObserver.observe(expansionSection);
    }

    // About section observer
    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
        }
      },
      observerOptions
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutObserver.observe(aboutSection);
    }

    // Ingredients section observer
    const ingredientsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIngredientsVisible(true);
        }
      },
      observerOptions
    );

    const ingredientsSection = document.getElementById('ingredients-section');
    if (ingredientsSection) {
      ingredientsObserver.observe(ingredientsSection);
    }

    // Cuisine section observer
    const cuisineObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      observerOptions
    );

    const cuisineSection = document.getElementById('cuisine');
    if (cuisineSection) {
      cuisineObserver.observe(cuisineSection);
    }

    // Locations section observer
    const locationsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLocationsVisible(true);
        }
      },
      observerOptions
    );

    const locationsSection = document.getElementById('locations-section');
    if (locationsSection) {
      locationsObserver.observe(locationsSection);
    }

    return () => {
      heroObserver.disconnect();
      expansionObserver.disconnect();
      aboutObserver.disconnect();
      ingredientsObserver.disconnect();
      cuisineObserver.disconnect();
      locationsObserver.disconnect();
    };
  }, []);

  return (
    <div style={{ padding: '0px', overflow: 'hidden' }}>
      <div style={{ marginTop: '0px' }}>
        <PageBar mobile={true} style={{ height: '80px' }}/>
      </div>

      {/* Hero Section */}
      <Box 
        id="hero-section"
        style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}
      >
        <Box 
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            animation: heroVisible ? `${slideUp} 2s forwards` : 'none',
          }}
        >
          <Box component="img" 
               src={img2} 
               alt="Nazareth Market" 
               sx={{
                 width: '100%',
                 height: '100%',
                 objectFit: 'cover',
               }} 
          />
          <Box 
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)',
            }}
          />
        </Box>
        
        {/* Main Title */}
        <Typography 
          variant="h2" 
          sx={{
            width:"54%",
            maxWidth: '350px',
            textAlign:"center",
            fontFamily: "Lobster",
            position: 'absolute',
            top: '60%',
            left: '23%',
            color: 'rgb(255, 255, 255)',
            textAlign: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '10px',
            borderRadius: '8px',
            fontSize: '1.5rem',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            border: '2px solid #F7B60B', 
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            zIndex: 1,
            animation: heroVisible ? `${slideUp} 1.5s ease-out 0.5s forwards` : 'none',
            opacity: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          Nazreth Market
        </Typography>
        
        {/* Subtitle */}
        <Typography 
          variant="h6" 
          sx={{
            fontFamily: 'Courier New',
            fontWeight: 'bold',
            position: 'absolute',
            top: '70%',
            left: '10%',
            width:"80%",
            color: 'rgb(255, 255, 255)',
            textAlign: 'center',
            fontSize: '1rem',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',
            zIndex: 2,
            animation: heroVisible ? `${slideUp} 1.5s ease-out 1s forwards` : 'none',
            opacity: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          Fresh Siga and 100% teff Injera
        </Typography>

        {/* Ethiopian Flag Decoration */}
        <Box
          sx={{
            position: 'absolute',
            top: '10px',
            left:"10%",
            width: '40px',
            height: '30px',
            background: 'linear-gradient(to bottom, #009A49 33%, #FEDD00 33% 66%, #EF3340 66%)',
            borderRadius: '4px',
            zIndex: 3,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
            opacity: 0,
            animation: heroVisible ? `${slideUp} 1s ease-out 1.5s forwards, ${flagWave} 3s ease-in-out infinite 2.5s` : 'none'
          }}
        />
      </Box>

      {/* Expansion Announcement */}
      {/* <Box 
        id="expansion-section"
        sx={{ 
          backgroundColor: '#FFEBBC', 
          width: '100%', 
          padding: '5vh 0', 
          marginBottom: '3vh',
          animation: expansionVisible ? `${slideUp} 1s ease-out` : 'none',
          opacity: expansionVisible ? 1 : 0
        }}
      >
        <Typography variant='h4' sx={{ textAlign: 'center', fontSize: '1.8rem', fontFamily: 'Satisfy', paddingBottom: '2vh', color: '#F7B60B' }}>
          We're Expanding!
        </Typography>
        <Typography variant='h6' sx={{ textAlign: 'center', fontSize: '1.2rem', fontFamily: 'Caveat', marginBottom: '2vh', padding: '0 20px' }}>
          A new Nazareth Market location has opened
        </Typography>
        <Button 
          variant='outlined' 
          onClick={GoToLakeCity} 
          sx={{ 
            display: 'block',
            margin: '0 auto',
            backgroundColor: 'white', 
            borderColor: '#F7B60B', 
            color: '#F7B60B', 
            fontSize: '1rem',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#F7B60B',
              color: 'white'
            }
          }}
        >
          Learn More
        </Button>
      </Box> */}

      {/* Decorative Divider */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '2vh 0',
        marginBottom: '3vh'
      }}>
        <Box sx={{ 
          width: '60px', 
          height: '3px', 
          backgroundColor: '#F7B60B', 
          borderRadius: '2px',
          margin: '0 10px'
        }} />
        <Box sx={{ 
          width: '8px', 
          height: '8px', 
          backgroundColor: '#F7B60B', 
          borderRadius: '50%',
          margin: '0 5px'
        }} />
        <Box sx={{ 
          width: '8px', 
          height: '8px', 
          backgroundColor: '#F7B60B', 
          borderRadius: '50%',
          margin: '0 5px'
        }} />
        <Box sx={{ 
          width: '8px', 
          height: '8px', 
          backgroundColor: '#F7B60B', 
          borderRadius: '50%',
          margin: '0 5px'
        }} />
        <Box sx={{ 
          width: '60px', 
          height: '3px', 
          backgroundColor: '#F7B60B', 
          borderRadius: '2px',
          margin: '0 10px'
        }} />
      </Box>

      {/* About Section */}
      <Box
        id="about"
        sx={{
          width: '100%',
          padding: '6vh 0',
          textAlign: 'center',
          borderRadius: '8px',
          backgroundColor: '#FFFFFF',
          marginBottom: '4vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'auto',
          animation: aboutVisible ? `${slideUp} 1s ease-out` : 'none',
          opacity: aboutVisible ? 1 : 0
        }}
      >
        <Box
          sx={{
            width: '90%',
            border: '3px solid #F7B60B',
            borderRadius: '15px',
            height: 'auto',
            padding: '6%',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 4px 20px rgba(247, 182, 11, 0.2)',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '20px',
              height: '20px',
              backgroundColor: '#F7B60B',
              borderRadius: '50%',
              zIndex: 1
            }
          }}
        >
          <Typography variant='h4' sx={{ fontFamily: 'Satisfy', color: '#F7B60B', marginBottom: '4vh', fontSize: '2rem' }}>
            About Us
          </Typography>
          <Typography variant='body1' sx={{ fontFamily: 'Caveat', fontSize: '1.1rem', lineHeight: '1.6' }}>
            We're an Ethiopian grocery store that caters to the needs of our local people. As an Ethiopian-owned business, we value our culture and stay true to it by continuing to serve our cuisine to Seattle.
            <br /><br />
            Our commitment to authenticity and quality has made us a beloved destination for Ethiopian food lovers throughout the Pacific Northwest.
          </Typography>
        </Box>
      </Box>

      {/* Decorative Spacer */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '3vh 0',
        marginBottom: '4vh'
      }}>
        <Box sx={{ 
          width: '40px', 
          height: '2px', 
          backgroundColor: '#F7B60B', 
          borderRadius: '1px'
        }} />
      </Box>

      {/* Fresh Ingredients Section */}
      <Box 
        id="ingredients-section"
        sx={{ 
          width: '100%', 
          padding: '6vh 0', 
          position: 'relative', 
          marginBottom: '4vh',
          overflow: 'hidden',
          minHeight: '60vh',
          animation: ingredientsVisible ? `${slideUp} 1s ease-out` : 'none',
          opacity: ingredientsVisible ? 1 : 0
        }}
      >
        <Box 
          component="img"
          src={aisle} 
          alt='Aisle at Nazreth Market' 
          sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1
          }} 
        />
        <Box sx={{ 
          width: '90%',
          margin: '0 auto',
          padding: '4vh 3vw',
          border: '2px solid #F7B60B',
          borderRadius: '15px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          position: 'relative',
          zIndex: 1,
          backdropFilter: 'blur(5px)'
        }}>
          <Typography variant='h4' sx={{ 
            fontFamily: 'Satisfy', 
            color: '#F7B60B',
            marginBottom: '3vh',
            textAlign: 'center',
            fontSize: '1.8rem'
          }}>
            Fresh Ingredients & Quality Products
          </Typography>
          <Typography variant='body1' sx={{ 
            fontFamily: 'Caveat',
            lineHeight: 1.6,
            color: '#333333',
            fontSize: '1.1rem',
            textAlign: 'center'
          }}>
            At Nazreth Market, we take pride in sourcing the finest Ethiopian ingredients. Our teff is imported directly from Ethiopia's highlands, ensuring authentic taste in every injera. We carefully select our spices and herbs, bringing you the true flavors of Ethiopian cuisine.
            <br /><br />
            From our freshly ground coffee beans to our hand-picked spices, every product in our store meets our high standards for quality and authenticity. We believe in supporting local farmers and maintaining the traditional methods that make Ethiopian cuisine special.
          </Typography>
        </Box>
      </Box>

      {/* Decorative Spacer */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '3vh 0',
        marginBottom: '4vh'
      }}>
        <Box sx={{ 
          width: '40px', 
          height: '2px', 
          backgroundColor: '#F7B60B', 
          borderRadius: '1px'
        }} />
      </Box>

      {/* Cuisine Section */}
      <Box id='cuisine' sx={{ position: 'relative', marginBottom: '6vh' }}>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '250px 250px',
          gap: '8px',
          padding: '10px',
          animation: isVisible ? `${zoomIn} 1s ease-out` : 'none',
          width: '100%',
          opacity: isVisible ? 1 : 0
        }}>
          <img src={tibs} alt='Tibs' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
          <img src={siga1} alt='Siga1' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
          <img src={siga2} alt='Siga2' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
          <img src={siga3} alt='Siga3' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
        </Box>
        
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          padding: '15px',
          borderRadius: '15px',
          textAlign: 'center',
          zIndex: 1,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          border: '2px solid #F7B60B',
          maxWidth: '80%'
        }}>
          <Typography variant='h5' sx={{ fontFamily: 'Satisfy', color: '#F7B60B', marginBottom: '1vh', fontSize: '1.4rem' }}>
            Our Cuisine
          </Typography>
          <Typography variant='body2' sx={{ fontFamily: 'Caveat', fontSize: '0.9rem', lineHeight: '1.4' }}>
            Nazreth Market is home to some of the best Ethiopian food in Seattle. We serve fresh kitfo and tasty Tibs in an environment that reminds you of home.
          </Typography>
        </Box>
      </Box>

      {/* Decorative Divider */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '2vh 0',
        marginBottom: '4vh'
      }}>
        <Box sx={{ 
          width: '50px', 
          height: '2px', 
          backgroundColor: '#F7B60B', 
          borderRadius: '1px',
          margin: '0 8px'
        }} />
        <Box sx={{ 
          width: '6px', 
          height: '6px', 
          backgroundColor: '#F7B60B', 
          borderRadius: '50%',
          margin: '0 4px'
        }} />
        <Box sx={{ 
          width: '6px', 
          height: '6px', 
          backgroundColor: '#F7B60B', 
          borderRadius: '50%',
          margin: '0 4px'
        }} />
        <Box sx={{ 
          width: '50px', 
          height: '2px', 
          backgroundColor: '#F7B60B', 
          borderRadius: '1px',
          margin: '0 8px'
        }} />
      </Box>

      {/* Locations Section */}
      <Box 
        id="locations-section"
        sx={{ 
          backgroundColor: '#FEEDD2', 
          width: '100%', 
          padding: '6vh 0', 
          textAlign: 'center', 
          marginBottom: '4vh',
          animation: locationsVisible ? `${slideUp} 1s ease-out` : 'none',
          opacity: locationsVisible ? 1 : 0
        }}
      >
        <Typography variant='h4' sx={{ fontFamily: 'Satisfy', marginBottom: '5vh', color: '#F7B60B', fontSize: '2rem' }}>
          Our Locations
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5vh' }}>
          <Card onClick={GoToOriginal} sx={{
            width: '90%',
            backgroundColor: '#FFFFFF',
            transition: 'all 0.3s ease-in-out',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              backgroundColor: '#F7B60B',
              color: '#FFFFFF',
              transform: 'translateY(-5px)',
              boxShadow: '0 8px 25px rgba(247, 182, 11, 0.3)'
            }
          }}>
            <CardMedia
              component='img'
              image={img}
              alt='Nazareth Market - South Seattle'
              sx={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <CardContent sx={{ padding: '20px' }}>
              <Typography fontFamily='Satisfy' variant='h5' sx={{ marginBottom: '2vh', color: 'inherit' }}>
                South Seattle
              </Typography>
              <Typography variant='body2' sx={{ textAlign: 'center', lineHeight: '1.4' }}>
                5418 Martin Luther King Jr Way S<br />
                Seattle, WA 98118
              </Typography>
            </CardContent>
          </Card>

          <Card onClick={GoToLakeCity} sx={{
            width: '90%',
            backgroundColor: '#FFFFFF',
            transition: 'all 0.3s ease-in-out',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              backgroundColor: '#F7B60B',
              color: '#FFFFFF',
              transform: 'translateY(-5px)',
              boxShadow: '0 8px 25px rgba(247, 182, 11, 0.3)'
            }
          }}>
            <CardMedia
              component='img'
              image={img2}
              alt='Nazareth Market - North Seattle'
              sx={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <CardContent sx={{ padding: '20px' }}>
              <Typography fontFamily='Satisfy' variant='h5' sx={{ marginBottom: '2vh', color: 'inherit' }}>
                North Seattle
              </Typography>
              <Typography variant='body2' sx={{ textAlign: 'center', lineHeight: '1.4' }}>
                12322 Lake City Way NE<br />
                Seattle, WA 98125
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Final Decorative Spacer */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '2vh 0',
        marginBottom: '2vh'
      }}>
        <Box sx={{ 
          width: '30px', 
          height: '2px', 
          backgroundColor: '#F7B60B', 
          borderRadius: '1px'
        }} />
      </Box>

      {/* Footer */}
      <Box 
        sx={{ 
          backgroundColor: '#C69209',
          width: "100%",
          minHeight: "25vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: "3rem 1rem",
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
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginBottom: "2rem",
            zIndex: 2,
            gap: "1rem"
          }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              color: "white",
              fontFamily: "Caveat",
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            Contact Us
          </Typography>
          <Typography 
            sx={{ 
              color: "white",
              fontFamily: "Caveat",
              textAlign: "center",
              fontSize: "1.5rem"
            }}
          >
            North Seattle Location: (206) 693-3189
          </Typography>
          <Typography 
            sx={{ 
              color: "white",
              fontFamily: "Caveat",
              textAlign: "center",
              fontSize: "1.5rem"
            }}
          >
            South Seattle Location: (206) 725-9161
          </Typography>
          {/* <Typography 
            sx={{ 
              color: "white",
              fontFamily: "Caveat",
              textAlign: "center",
              fontSize: "1.1rem"
            }}
          >
            Email: info@nazarethmarket.com
          </Typography> */}
        </Box>

        <Typography 
          variant="body2" 
          sx={{ 
            color: "white",
            fontFamily: "Caveat",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
            borderTop: "1px solid rgba(255, 255, 255, 0.3)",
            paddingTop: "1rem",
            width: "100%",
            fontSize: "1rem"
          }}
        >
          © 2024 Nazareth Market. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
}

export default MobileView; 