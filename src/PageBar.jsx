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
import logo from "./Photos/NazarethMarketlogo.png";

export default function PageBar({ mobile }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <List>
      {['Home', 'Menu'].map((text) => (
        <ListItem
          button
          component={Link}
          to={text === 'Home' ? '/' : `/${text.toLowerCase().replace(' ', '')}`}
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
      sx={{ color: 'black', boxShadow: '4px', height: mobile ? '5%' : '10%', backgroundColor: 'rgba(255, 255, 255, 0.6)', width: '100vw', borderColor: "yellow" }}
    >
      <Toolbar>
        {mobile && (
            <div style={{ width: "100%" }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <img src={logo} alt="Nazareth Market Logo" style={{ height: mobile ? '50px' : '100px', marginTop: '0vh' }} />
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon sx={{ fontSize: '2rem', color: '#F7B60B' }} />
              </IconButton>
            </div>
          </div>
        )}
       
        {!mobile && (
          <>
          <img src={logo} alt="Nazareth Market Logo" style={{ height: '100px', marginTop: '1.5vh', width: 'auto' }} />
            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  marginTop: '1.5vh',
                  marginRight: '2vw',
                  borderWidth: '1.5px',
                  height: '100%',
                  fontSize: { xs: '1.2vw', sm: '1.5vw' }, // Responsive font size
                  color: '#F7B60B',
                  borderColor: '#FFCD22',
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
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
                  marginRight: '2vw',
                  borderWidth: '1.5px',
                  marginTop: '1.5vh',
                  height: '100%',
                  fontSize: { xs: '1.2vw', sm: '1.5vw' }, // Responsive font size
                  color: '#F7B60B',
                  borderColor: '#FFCD22',
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  '&:hover': { backgroundColor: '#FFCD22', color: 'white' },
                }}
                component={Link}
                to="/menu"
              >
                Menu
              </Button>
            </div>
          </>
        )}
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </AppBar>
  );
}
