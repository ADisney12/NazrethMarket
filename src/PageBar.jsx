import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

export default function PageBar({ mobile }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <List>
      {['Home', 'Locations', 'Menu', 'Contact Us'].map((text) => (
        <ListItem
          button
          component={Link}
          to={`/${text.toLowerCase().replace(' ', '')}`}
          key={text}
          onClick={toggleDrawer(false)}
        >
          <ListItemText primary={text} />
        </ListItem>
      ))}
      <Divider />
    </List>
  );

  return (
    <AppBar
      variant="outlined"
      position="fixed"
      sx={{ color: 'black', boxShadow: '4px', height: '10%', backgroundColor: '#FFFFFF', width: '100vw' }}
    >
      <Toolbar>
        {mobile && (
            <div style={{ width: "100%" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginTop: '1.5vh', fontSize: '2vw' }}>
              Nazareth Market
            </Typography>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ marginLeft: '90%' }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        )}
       
        {!mobile && (
          <>
           <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginTop: '1.5vh', fontSize: '2vw' }}>
          Nazareth Market
        </Typography>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                marginTop: '1.5vh',
                marginRight: '2vw',
                borderWidth: '1.5px',
                height: '100%',
                fontSize: '1vw',
                color: '#F7B60B',
                borderColor: '#FFCD22',
                backgroundColor: 'white',
                '&:hover': { backgroundColor: '#FFCD22', color: 'white' },
              }}
              component={Link}
              to="/"
            >
              Home
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                marginTop: '1.5vh',
                marginRight: '2vw',
                borderWidth: '1.5px',
                height: '100%',
                fontSize: '1vw',
                color: '#F7B60B',
                borderColor: '#FFCD22',
                backgroundColor: 'white',
                '&:hover': { backgroundColor: '#FFCD22', color: 'white' },
              }}
              component={Link}
              to="/locations"
            >
              Locations
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                marginRight: '2vw',
                borderWidth: '1.5px',
                marginTop: '1.5vh',
                height: '100%',
                fontSize: '1vw',
                color: '#F7B60B',
                borderColor: '#FFCD22',
                backgroundColor: 'white',
                '&:hover': { backgroundColor: '#FFCD22', color: 'white' },
              }}
              component={Link}
              to="/menu"
            >
              Menu
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                marginRight: '2vw',
                marginTop: '1.5vh',
                height: '100%',
                fontSize: '1vw',
                borderWidth: '1.5px',
                color: '#F7B60B',
                borderColor: '#FFCD22',
                backgroundColor: 'white',
                '&:hover': { backgroundColor: '#FFCD22', color: 'white' },
              }}
              component={Link}
              to="/contact"
            >
              Contact Us
            </Button>
          </>
        )}
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </AppBar>
  );
}
