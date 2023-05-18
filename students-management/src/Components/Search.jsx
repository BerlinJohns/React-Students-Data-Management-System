import React from 'react';

import './Search.css';
import useFetch from './Hook/Fetch';
import dp from './defaultdp.png'

import { Button, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


//This Moudles for Table creation

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';






function Search({students,setSearchResults}) {
  const handleSubmit=(e)=>e.preventDefault()
  const handleSearchChange=(e)=>{
    if(!e.target.value) return setSearchResults(students)
    const resultArray=students.filter(students=>students.name.includes(e.target.value) || students.body.includes(e.target.value))
  setSearchResults(resultArray)
  }

  
  // const { data, loading, error } = useFetch(`/student_info?search=${sname}`);
  return (
    <>
    <Container>
      <h2 className='search-heading'>-- Search Students Data-- </h2>
      <input onSubmit={handleSubmit}   className='search-bar' type="text" placeholder='search...' autoFocus
      onChange={handleSearchChange} />
      <Button variant="contained" type='submit'>Search</Button>
    </Container>
    
    
     
      
    
    
    

    


    
    </>
  )
}

export default Search