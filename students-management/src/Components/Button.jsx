import React from 'react';
import Button from '@mui/material/Button';

function Button() {
  return (
    <>
    <Button type="submit"
        
        className='btn'

         size="medium"
         variant="contained"
        
         
         sx={{
          width:90,
          margin:3,
         
          
         
      }}>
          LogIn  
        </Button></>
  )
}

export default Button