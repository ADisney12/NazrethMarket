import React, { useState, useEffect } from 'react';
import { Box, Typography, Divider, Paper } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageBar from './PageBar';

const menuItems = {
  'Beef': [
    {
      name: 'Awaze Tibs',
      description: 'Sautéed meat (beef or lamb) with onions, peppers, and spices, served with a side of injera.',
      price: '$23'
    },
    {
      name: 'Chekena Tibs',
      description: 'Sautéed meat (beef or lamb) with onions, peppers, and spices, served with a side of injera.',
      price: '$12'
    },
    {
      name: 'Goden Tibs',
      description: 'Sautéed meat (beef or lamb) with onions, peppers, and spices, served with a side of injera.',
      price: '$14'
    },
    {
      name: 'Gas Light Tibs',
      description: 'Sautéed meat (beef or lamb) with onions, peppers, and spices, served with a side of injera.',
      price: '$13'
    },
    {
        name: 'Ketfo',
        description: 'Ethiopian-style minced beef tartare, seasoned with spices and clarified butter.',
        price: '$24'
      },
      {
        name: 'Kurt',
        description: 'Dried and spiced meat, often served as a snack or appetizer.',
        price: '$20'
      }
  ],
  'Lamb': [
    {
      name: 'lamb Chops',
      description: 'Traditional Ethiopian sourdough flatbread with a unique, slightly spongy texture.',
      price: '$13'
    },
    {
      name: 'lamb Tibs',
      description: 'Traditional Ethiopian sourdough flatbread with a unique, slightly spongy texture.',
      price: '$12'
    },
    {
      name: 'lamb kelele',
      description: 'Traditional Ethiopian sourdough flatbread with a unique, slightly spongy texture.',
      price: '$15'
    },
    {
      name: 'lamb Tibs',
      description: 'Traditional Ethiopian sourdough flatbread with a unique, slightly spongy texture.',
      price: '$13'
    },
  ]
};

function MenuSection({ title, items, isMobile }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography 
        variant={isMobile ? "h3" : "h2"} 
        sx={{ 
          fontFamily: 'Satisfy',
          color: '#C69209',
          textAlign: 'center',
          mb: 2,
          fontSize: isMobile ? '2rem' : '3rem',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100px',
            height: '2px',
            backgroundColor: '#C69209'
          }
        }}
      >
        {title}
      </Typography>
      
      {items.map((item, index) => (
        <Box 
          key={index} 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            mb: 3,
            mx: isMobile ? 2 : 10,
            p: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '8px',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 1 }}>
            <Typography 
              variant={isMobile ? "h5" : "h4"}
              sx={{ 
                fontFamily: 'Satisfy',
                color: '#C69209',
                fontWeight: 'bold'
              }}
            >
              {item.name}
            </Typography>
            <Typography 
              variant={isMobile ? "h6" : "h5"}
              sx={{ 
                fontFamily: 'Caveat',
                color: '#C69209',
                fontWeight: 'bold'
              }}
            >
              {item.price}
            </Typography>
          </Box>
          <Typography 
            variant="body1"
            sx={{ 
              fontFamily: 'Caveat',
              color: '#8B6B07',
              fontSize: isMobile ? '1.1rem' : '1.3rem'
            }}
          >
            {item.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

function DesktopMenu() {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      backgroundColor: '#FFEBBC',
      paddingTop: '10vh',
      pb: 4
    }}>
      <PageBar mobile={false} />
      
      <Box sx={{ 
        maxWidth: '1000px', 
        margin: '0 auto', 
        padding: '2rem',
      }}>
        <Typography 
          variant="h1" 
          sx={{ 
            fontFamily: 'Satisfy',
            color: '#C69209',
            textAlign: 'center',
            mb: 1,
            fontSize: '4.5rem'
          }}
        >
          Our Menu
        </Typography>
        
        <Typography 
          variant="h5" 
          sx={{ 
            fontFamily: 'Caveat',
            color: '#8B6B07',
            textAlign: 'center',
            mb: 6,
            fontSize: '2rem'
          }}
        >
          Discover the authentic flavors of Ethiopia
        </Typography>

        <Paper 
          elevation={3}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            p: 4,
            borderRadius: '16px'
          }}
        >
          {Object.entries(menuItems).map(([category, items]) => (
            <MenuSection key={category} title={category} items={items} isMobile={false} />
          ))}
        </Paper>
      </Box>
    </Box>
  );
}

function MobileMenu() {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      backgroundColor: '#FFEBBC',
      paddingTop: '10vh',
      pb: 4
    }}>
      <PageBar mobile={true} />
      
      <Box sx={{ 
        padding: '1rem',
      }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontFamily: 'Satisfy',
            color: '#C69209',
            textAlign: 'center',
            mb: 1,
            fontSize: '2.5rem'
          }}
        >
          Our Menu
        </Typography>
        
        <Typography 
          variant="h6" 
          sx={{ 
            fontFamily: 'Caveat',
            color: '#8B6B07',
            textAlign: 'center',
            mb: 4,
            fontSize: '1.5rem'
          }}
        >
          Discover the authentic flavors of Ethiopia
        </Typography>

        <Paper 
          elevation={3}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            p: 2,
            borderRadius: '16px'
          }}
        >
          {Object.entries(menuItems).map(([category, items]) => (
            <MenuSection key={category} title={category} items={items} isMobile={true} />
          ))}
        </Paper>
      </Box>
    </Box>
  );
}

export default function Menu() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </>
  );
}
