import React,{useState,useEffect} from 'react'

import axios from './api/axios';

import './Appbar.css' 

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material'; 
import Divider from '@mui/material/Divider';
import Alert from '@mui/material';

//Alert Components
import Snackbar from '@mui/material/Snackbar';


const REGISTER_URL="/student/create/";
const courses=[
  {
    value:'Computer Application',
    label:'Computer Application'
  },
  {
    value:'Computer Science',
    label:'Computer Science'
  },
  {
    value:'History',
    label:'History'
  },
  {
    value:'Mathematics',
    label:'Mathematics'
  },{
    value:'Physics',
    label:'Physics'
  },{
    value:'Chemistry',
    label:'Chemistry'
  },{
    value:'Botany',
    label:'Botany'
  },{
    value:'Economics',
    label:'Economics'
  },{
    value:'Tourism Management',
    label:'Tourism Management'
  },{
    value:'Tamil Literature',
    label:'Tamil Literature'
  },{
    value:'English Literature',
    label:'English Literature'
  },{
    value:'Commerce',
    label:'Commerce'
  },{
    value:'Physical Education',
    label:'Physical Education'
  }
]
const degrees=[
  {
    value:'UG.',
    label:'UG.'
  },
  {
    value:'PG.',
    label:'PG.'
  },{
    value:'M.Phil.',
    label:'M.Phil.'
  },{
    value:'Ph.D',
    label:'Ph.D'
  },
]
const genders = [
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'Female',
  },
  
];

const bloodgroups=[
  {
    value:"a+",
    label:"A+"
  },
  {
    value:"a-",
    label:"A-"
  }, {
    value:"b+",
    label:"B+"
  },
  {
    value:"b-",
    label:"B-"
  },
  {
    value:"ab+",
    label:"AB+"
  },
  {
    value:"ab-",
    label:"AB-"
  },
  {
    value:"o+",
    label:"O+"
  },
  {
    value:"o-",
    label:"O-"
  },
 

]

function AddStudent() {
  
  const [valerror,SetValErrors]=useState(false);
  const [gender,SetGender]=useState('');
  const [blood,SetBloodGroup]=useState('');
  const [course,SetCourses]=useState('');
  const [degree,SetDegree]=useState('');
  const [name,setName]=useState('');
  const [dob,setDOB]=useState('');
  const [regNum,setRegNum]=useState('');
  const [classnum,setClassNum]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [parPhone,setpaPhone]=useState('');
  const [fathername,setFathename]=useState('');
  const [dnum,setDnumber]=useState('');
  const [native,setNative]=useState('');
  const [post,setPost]=useState('');
  const [pincode,setPincode]=useState('');
  const [aathar,setAathar]=useState('');
  const  [message,setMessage]=useState("");
  const [open, setOpen] = useState(false);
  const [theme,setTheme]=useState(""); 
  const genderSelect=(event)=>{
    SetGender(event.target.value);
  };
  useEffect(()=>{
    SetGender('') 
    SetBloodGroup('')
    SetCourses('')
    SetDegree('')
    setpaPhone('')
    setFathename('')
    setAathar('')
    setPincode('')
    setNative('')
    setPost('')
    setDOB('')
    setClassNum('')
    setEmail('')
    setPhone('')
    setDnumber('')
    setName('')
    setRegNum('')
    

    
  },[message])
  const bloodGroupSelect=(event)=>{
    SetBloodGroup(event.target.value);
  };
  const courseSelect=(event)=>{
    SetCourses(event.target.value);
  }
  const degreeSelect=(event)=>{
    SetDegree(event.target.value);
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
     const response=await axios.post(REGISTER_URL,JSON.stringify(
      {name:name,
      gender:gender,
      blood_group:blood,
      course:course,
      degree_name:degree,
      dob:dob,
      register_number:regNum,
      class_number:classnum,
      e_mail:email,
      year:new Date().getFullYear(),
      phone_number:phone,
      parents_phone_number:parPhone,
      aadhar_number:aathar,
      father_name:fathername,
      door_number:dnum,
      place:native,
      post:post,
      pin_code:pincode,
 }),{
  headers:{"Content-Type":"application/json"},
 });
 console.log(response)
 if(response?.status===201){
  setTheme("success")
  setMessage("Data Added SuccessFully!")
 }
    }
    catch(err){
        if(err.response?.status ===500){
          setTheme("error")
          setMessage("No server Response")
        }else if(name === "" || gender === "" || blood === "" || course === "" || degree === "" || dob === "" || regNum === "" || classnum === "" || email === "" ||  phone === "" || parPhone === "" || aathar === "" || fathername === "" || dnum === "" || native === "" || post === "" || pincode === ""){
          setTheme("error")
          setMessage("Fill the Missed Fields")
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
    <>
      
    <Container maxWidth="xl"
     sx={{
      borderStyle:"solid",
      borderColor:"#1976D2",
      borderRadius:3,
      marginY:6,
      boxShadow: 20 ,     
   }}
    >
        
       <Typography variant="h4"
       className="l-heading"
      sx={{
        marginY:4
      }}
       >
      -- Add Students --
       </Typography>
       

        <form noValidate autoComplete='off' onSubmit={handleSubmit}  >
                
                <TextField  fullWidth 
                onChange={(e)=>setName(e.target.value)}
                required
                name='name'
                color="success" 
                id="standard-basic" 
                label="Student Name" 
                variant="outlined"
                margin="normal"
                value={name}
                
                
               
               
               
                
                // error={valerror}
                sx={{
                  width:750
                }} />
               

         <TextField
         
         color="success" 
          id="outlined-select-currency"
          required
          select
          label="Gender"
          value={gender}
          margin="normal"
          onChange={genderSelect}
          sx={{
            width:180
          }}
          
        >
           {genders.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
         
        </TextField>
        <TextField
         color="success" 
          id="outlined-select-currency"
          required
          select
          label="Blood Group"
          value={blood}
          margin="normal"
         
          onChange={bloodGroupSelect}
          sx={{
            width:180,
            marginX:5
          }}
        >
           {bloodgroups.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
         
        </TextField>
        

        <TextField
         color="success" 
          id="outlined-select-currency"
          select
          label="Course"
          value={course}
          margin="normal"
          required
        
          onChange={courseSelect}
          sx={{
            width:250,
           
          }}
        >
           {courses.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
         
        </TextField>

        <TextField
         color="success" 
          id="outlined-select-currency"
          select
          label="Degree"
          value={degree}
          margin="normal"
          required
         
          onChange={degreeSelect}
          sx={{
            width:300,
            marginRight:3
           
          }}
        >
           {degrees.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
         
        </TextField>

                <TextField required fullWidth 
                color="success" 
                id="standard-basic" 
                label="Date of Birth" 
                variant="outlined"
                margin="normal"
                value={dob}
                onChange={(e)=>setDOB(e.target.value)}
                
               
                sx={{
                  width:300,
                  marginLeft:8
                }} 
                

                />

               <TextField required fullWidth 
               
                color="success" 
                id="standard-basic" 
                label="Register Number" 
                variant="outlined"
                margin="normal"
                value={regNum}
                onChange={(e)=>setRegNum(e.target.value)}
                
                sx={{
                  width:300,
                  
                }}
                
                 />

               <TextField required fullWidth 
                color="success" 
                id="standard-basic" 
                label="Class Number" 
                variant="outlined"
                margin="normal" 
                value={classnum}
                onChange={(e)=>setClassNum(e.target.value)}
               
               
                

                
                sx={{
                  width:300,
                  marginLeft:11
                }}/>

                <TextField required fullWidth 
                color="success" 
                id="standard-basic" 
                label="Email Address" 
                variant="outlined"
                margin="normal"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                sx={{
                  width:300,

                }} />

                <TextField required fullWidth  
                color="success" 
                id="standard-basic" 
                label="Phone Number" 
                variant="outlined"
                margin="normal"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
               
               
                sx={{
                  width:300,
                  marginLeft:11
                }} />

              <TextField required fullWidth 
                color="success" 
                id="standard-basic" 
                label="Parent's Phone Number" 
                variant="outlined"
                margin="normal"
                value={parPhone}
                onChange={(e)=>setpaPhone(e.target.value)}
               
               
                sx={{
                 width:300
                }} /> 
                <TextField required fullWidth 
                color="success" 
                id="standard-basic" 
                label="Aadhar Number" 
                variant="outlined"
                margin="normal"
                value={aathar}
                onChange={(e)=>setAathar(e.target.value)}
               
               
                sx={{
                  width:300,
                  marginLeft:11
                }} /> 
                
                

                
            <Divider/>
    {/*------------------------------------------Address Section ----------------------------------------------------------------*/}
                <Typography variant='h5'
                sx={{
                  marginY:3
                }}>
                    Address
                </Typography>
                <TextField required fullWidth 
                color="success" 
                id="standard-basic" 
                label="Father's Name" 
                variant="outlined"
                margin="normal"
                value={fathername}
                onChange={(e)=>setFathename(e.target.value)}
               

                sx={{
                  width:500,
                  marginLeft:4
                  
                }} />
                <TextField required fullWidth 
                color="success" 
                id="standard-basic" 
                label="Door Number" 
                variant="outlined"
                margin="normal"
                value={dnum}
                onChange={(e)=>setDnumber(e.target.value)}
               
                sx={{
                  width:500,
                  marginLeft:4
                  
                }} />
                <TextField required fullWidth 
                color="success" 
                id="standard-basic" 
                label="Place" 
                variant="outlined"
                margin="normal"
                helperText="*Native Place"
                value={native}
                onChange={(e)=>setNative(e.target.value)}

               
               
                sx={{
                  width:500,
                  marginLeft:4
                  
                }} />
                <TextField required fullWidth 
                color="success" 
                id="standard-basic" 
                label="Post" 
                variant="outlined"
                margin="normal"
                value={post}
                onChange={(e)=>setPost(e.target.value)}
                sx={{
                  width:500,
                  marginLeft:4
                  
                }} />

                <TextField required fullWidth 
                color="success" 
                id="standard-basic" 
                label="Pin-Code" 
                variant="outlined"
                margin="normal"
                value={pincode}
                onChange={(e)=>setPincode(e.target.value)}
               
                sx={{
                  width:500,
                  marginLeft:4
                  
                }} />
            
            <div className='flex'>
           <Button type="submit"
       
              size="medium"
              variant="contained"
              onClick={handleClick()} 
              sx={{
                width:90,
                margin:3,  
            }}>
              Register
            </Button>
            
        </div>
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
        </form>
        

    </Container>
      
    </>
    
  )
}

export default AddStudent