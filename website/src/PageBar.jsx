import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';

export default function PageBar(){
    return(
        <AppBar variant="outlined" position="fixed" sx={{ color: 'black', boxShadow: "4px", height: '10%', backgroundColor: '#FFFFFF', width: '100vw' }}>
        <Toolbar>
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
        </Toolbar>
        </AppBar>
    )
}