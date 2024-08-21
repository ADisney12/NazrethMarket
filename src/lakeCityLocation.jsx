import React from 'react';
import PageBar from './PageBar.jsx';
import FrontImg from "./Photos/2024-07-10.jpg";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { keyframes } from '@mui/system';


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

export default function LakeCityLocation() {
  return (
    <div>
      <PageBar />
      <Box
        sx={{
          position: 'relative',
          width: '100vw', // Make the width the same as the screen
          height: '100vh', // Fixed height for vertical cropping
          overflow: 'hidden', // Hide overflow
        }}
      >
        <Box
          component="img"
          src={FrontImg}
          alt="Lake City"
          sx={{
            width: '100%',
            height: '80%',
            objectFit: 'cover',
            animation: `${fadeInFromRight} 2s forwards`, // Apply fade-in animation
            opacity: 0, // Start with opacity 0
          }}
        />
        <Typography
          variant="h2"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: "60px",
            height: "11vh",
            fontFamily: "Caveat",
            paddingLeft: "3%",
            color: 'black',
            position: 'absolute',
            top: '50%',
            left: '10%',
            width: "40%",
            paddingTop: "5vh",
            transform: 'translateX(-50%)',
            animation: `${fadeInFromRight} 2s forwards`, // Apply fade-in animation to text
            opacity: 0, // Start with opacity 0
          }}
        >
          The Newer, Better Nazareth Market is now open
        </Typography>
      </Box>
      <Box sx={{textAlign:"center"}}>
        <Typography variant="h1" sx={{fontFamily:"satisfy"}}>
          Improved Interior
        </Typography>
      </Box>
    </div>
  );
}
