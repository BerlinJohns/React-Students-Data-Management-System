import React,{useState,useEffect} from 'react';
import './Appbar.css'
import useAuth from './useAuth';


import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { useContext } from 'react';

import axios from './api/axios';

const URL="/add/admin/";




export default function AddAdmin() {
  const [name,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [confirmationPassword,setConfirmationPassword]=useState("");
  const  [message,setMessage]=useState("");
  const [open, setOpen] = useState(false);
  const [theme,setTheme]=useState("");
 
 
  
 useEffect(()=>{
    setUsername("")
    setPassword("")
    setConfirmationPassword("")
 },[message])

 


  const handleSubmit= async (e)=>{
    e.preventDefault();
    try{
      const response=await axios.post(URL,JSON.stringify({username:name,password:password}),
      {
        headers:{"Content-Type":"application/json"},
      }
      );
      console.log(response)
    if(response?.status === 201){
       setTheme("success")
       setMessage("New Admin Added!") 
       
      }
      
      
    }
    
    
    catch(err){
      
        if(err.response?.status === 500){
            setTheme("error")
            setMessage("No server Response")
       }else if(name=== "" || password ==="" || confirmationPassword ===""){
          setTheme("error")
          setMessage("Fill the missed Text Fields")
       }else if(password !== confirmationPassword){
        setTheme("error")
        setMessage("Re-Typed Password is  Not Match")
       }else if(err.response?.status === 406) {
        setTheme("error")
        setMessage("The Username Already Exist!")
       }else {
        setTheme("error")
        setMessage("Connection Refused")
       }
  }
       
}
const handleClick = () => () => {
  
  setOpen(true);
};

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};

  return (
    <Container sx={{
       
       
      borderStyle:"solid",
      borderColor:"red",
      borderRadius:3,
      marginY:8,
      width:{
        md:"60vw"
      },
      padding:9
      
      
  }}>
     

     <Box 
      sx={{
        
        display: 'flex',
        flexDirection:"column",
        alignItems: 'center',
        justifyContent: 'center' ,
      }}
      >
      
      <form onSubmit={handleSubmit}>
     
       <h1 className='l-heading '>Add Admin </h1>
       
       <TextField 
          variant='outlined'
          label="UserName" 
          margin="normal"
          autoFocus
          fullWidth
          value={name}
          onChange={(e)=>setUsername(e.target.value)}
     
      />
      
      
      <TextField 
        variant='outlined'
        label="Password" 
        type="password"
        margin="normal"
        fullWidth
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />  
        <br/>
        <TextField 
       
        variant='outlined'
        label="Re Enter the Password" 
        type="password"
        margin="normal"
        fullWidth
        value={ confirmationPassword}
        onChange={(e)=>setConfirmationPassword(e.target.value)}

        />
       
      <div className='flex'>
      <Button type="submit"
        color='error'
        className='btn'
        size="medium"
        variant="contained"
        onClick={handleClick()}
       
       sx={{
        width:90,
        margin:3,
        
        
       
    }}>
        Add 
      </Button>
      {message &&
        <Snackbar open={open} 
        autoHideDuration={1000} 
        onClose={handleClose}
        anchorOrigin={{ vertical:"bottom", horizontal:'center' }}
        
       >
        <Alert onClose={handleClose} severity={theme} sx={{ width: '100%' }}>
          {message}
        </Alert>
       
      </Snackbar>
    }
    
      </div>

      </form>  
      </Box> 

  </Container>
  )

}

