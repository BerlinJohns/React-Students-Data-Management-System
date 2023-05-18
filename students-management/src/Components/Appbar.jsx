import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Logo from './logo.png';
import './Appbar.css';
import ClippedDrawer from './Drawer';


export default function ElevateAppBar() {
  
  return (
    <header sx={{display:'flex'}}>
      <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <img src={Logo} className="logo" alt='college logo' />
            
              <h5 className='heading'>NMCC Admin DashBoard</h5>
              
           
          </Toolbar>
        </AppBar>
     
      <Toolbar />
      <Container sx={{
        
      }}>
            
           <ClippedDrawer/>
          
          
          

        
      </Container>
    </header>
  );
}
