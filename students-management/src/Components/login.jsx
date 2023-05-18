import React,{useState,useContext,useEffect} from 'react';
import './Appbar.css'
import Logo from './logo.png'
import ClippedDrawer from './Drawer';


//react router dom
import { useLocation,Link,useNavigate } from 'react-router-dom';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';


// import axios from './api/axios';
import { UserContext } from './context/UserContext';
import useAuth from './useAuth';
import axios from './api/axios';

const LOGIN_URL="/login";





export default function LoginPage() {
  const {setAuth}=useAuth();
  const navigate=useNavigate()
  const location=useLocation()
  const from =location.state?.from?.pathname || "/home";
  const [name,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [errorMessage,setErrorMessage]=useState("");
  const [open, setOpen] = useState(false);
  const [transition, setTransition] =useState(undefined);
 
   
  useEffect(()=>{
    setErrorMessage('');
  },[name,password])
  
 const handleSubmit= async (e)=>{
  e.preventDefault();
  try{
    const response=await axios.post(LOGIN_URL,JSON.stringify(`grant_type=&username=${name}&password=${password}&scope=&client_id=&client_secret=`),
    {
      header:{"Content-Type":"application/x-www-form-urlencoded"},
    }
    );
    const accessToken=response?.data?.access_token;
    const tokenType=response?.data?.token_type;
    setAuth({name,password,accessToken});
   console.log(response)
    setUsername('');
    setPassword('');
    navigate(from,{replace:false});
  }catch(err){
     if(!err.response?.status === 500){
      setErrorMessage("No server Response")
     }else if(err.response?.status === 404){
      setErrorMessage("Invalid credentials")
     }else if(name=== "" || password ===""){
      setErrorMessage("Fill the Username and Password!")
     }else {
      setErrorMessage("Connection Refused!")
     }
  }
  // submiLogin();
  
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
        borderColor:"#1976D2",
        borderRadius:3,
        marginY:9,
        width:{
          md:"40vw"
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
        <form  onSubmit={handleSubmit}>
        <img src={Logo} className="login-logo" />
         <h1 className='l-heading '>Login</h1>
         <Box>
         <TextField 
            variant='outlined'
            label="UserName" 
            margin="normal"
            autoFocus
            value={name}
            onChange={(e)=>setUsername(e.target.value)}
          
            sx={{
          
            
            
            }}
       
        />
        </Box >
        <Box >
        <TextField 
          variant='outlined'
          label="Password" 
          type="password"
          margin="normal"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        
          sx={{
              
            
              
          }}
          />  
        </Box>
       
        <div className='flex'>
        <Button type="submit"
        onClick={handleClick()}
        className='btn'

         size="medium"
         variant="contained"
        
         
         sx={{
          width:90,
          margin:3,
         
          
         
      }}>
          {/* <Link style={{textDecoration:"none"}} to={`/home`}> */}
             LogIn
          {/* </Link> */}
        </Button>
       {errorMessage &&
        <Snackbar open={open} 
        autoHideDuration={1000} 
        onClose={handleClose}
        anchorOrigin={{ vertical:"bottom", horizontal:'center' }}
        
       >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
       
      </Snackbar>
    }

        
        </div>

        </form>  
        </Box> 

    </Container>
  )
}




