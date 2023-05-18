import React from 'react'

import dp from './defaultdp.png'

import { Button, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function serStudents(students) {
  return (
    <>
   <Box sx={{ flexGrow: 0,
                 marginY:8,
                 boxShadow:"1px 4px 11px gray",
                 padding:4,
                 borderRadius:8,
                 
      }}>
     
      <Grid container spacing={2} >
        <Grid item xs={6}>
        <img className='dp' src={dp} alt="studentPhoto" />
        </Grid>
        <Grid item xs={6}>
        <p className='label'>Name :<b className="name value">{studens.name}</b></p>

        <p className='label'>Register Number :<b className='reg-number value'>{students.class_number}</b></p>

        <p className='label'>Blood Group :<b className='blood-group value'>{students.blood_group}</b></p>

        <p className='label'>Parent's PhoneNumber :<b className='blood-group value'>{students.parents_phone_number}</b></p>

        <p className='label'>Gender :<b className='blood-group value'>{st.gender}</b></p>

        </Grid>
        <Grid item xs={6}> 
        <p className='label'>Date Of Birth :<b className='blood-group value'>{item.dob}</b></p>
        <p className='label'>Class No. <b className='blood-group value'>{item.class_number}</b></p>
        <p className='label'>Aadhar Number :<b className='blood-group value'>{item.aadhar_number}</b></p>
        <p className='label'>Course :<b className='blood-group value'>{item.course}</b></p>
        <p className='label'>Degree Name :<b className='blood-group value'>{item.degree_name}</b></p>
        <p className='label'> Email : <b className='blood-group value'> {item.e_mail}</b></p>
        <p className='label'>Phone No:<b className='blood-group value'>{item.phone_number}</b></p>
        
         
        </Grid>
        <Grid item xs={6}>
        <h1 className='address'><u>Address:</u></h1>

              <div className="address-container">
              <p className='label2'>S/O<b className='blood-group value'>{item.father_name}</b></p>
              <p className='label2'>D.No :<b className='blood-group value'>{item.door_number}</b></p>
              <p className='label2'>Place :<b className='blood-group value'>{item.place}</b></p>
              <p className='label2'>Post :<b className='blood-group value'>{item.post}</b></p>
              <p className='label2'>Pin-Code :<b className='blood-group value'>{item.pin_code}</b></p>

               </div>
        </Grid>
                           {                 /* 1   Internal Mark */                                   }
        <Grid item xs={12}>
           <h1 align="center" className='internal-heading'>Ⅰ Semester Internal Marks</h1>
          <TableContainer>
            <Table >
            <TableHead>
                    <TableRow>
                      <TableCell>Subjects</TableCell>
                      <TableCell align="center">Mathematical Foundations for Computer Science</TableCell>
                      <TableCell align="center">Computer Organization and Architecture</TableCell>
                      <TableCell align="center">Design and  Analysis of Algorithms Using C++</TableCell>
                      <TableCell align="center">Advanced Java Programming</TableCell>
                      <TableCell align="center">Object Oriented Analysis of Algorithms Using UML</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align='center'> 1st Internal Marks</TableCell>
                      <TableCell align='center'>10</TableCell>
                      <TableCell align='center'>7</TableCell>
                      <TableCell align='center'>3</TableCell>
                      <TableCell align='center'>8</TableCell>
                      <TableCell align='center'>11</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align='center'> 2nd Internal Marks</TableCell>
                      <TableCell align='center'>3</TableCell>
                      <TableCell align='center'>5</TableCell>
                      <TableCell align='center'>8</TableCell>
                      <TableCell align='center'>6</TableCell>
                      <TableCell align='center'>2</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align='center'> 3rd Internal Marks</TableCell>
                      <TableCell align='center'>3</TableCell>
                      <TableCell align='center'>5</TableCell>
                      <TableCell align='center'>8</TableCell>
                      <TableCell align='center'>6</TableCell>
                      <TableCell align='center'>2</TableCell>
                    </TableRow>
                    
                  </TableBody>
            </Table>
          </TableContainer>
        </Grid>

                  {/*                          2n Internal  Marks                                 */}

        <Grid item xs={12}>
           <h1 align="center" className='internal-heading'>Ⅱ Semester Internal Marks</h1>
          <TableContainer>
            <Table >
            <TableHead>
                    <TableRow>
                      <TableCell>Subjects</TableCell>
                      <TableCell align="center">Data Science & Analytics</TableCell>
                      <TableCell align="center">Image Processing using MatLab</TableCell>
                      <TableCell align="center">Compiler Designing</TableCell>
                      <TableCell align="center">Research Methodology</TableCell>
                      <TableCell align="center">Mobile Computing</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align='center'> 1st Internal Marks</TableCell>
                      <TableCell align='center'>10</TableCell>
                      <TableCell align='center'>7</TableCell>
                      <TableCell align='center'>3</TableCell>
                      <TableCell align='center'>8</TableCell>
                      <TableCell align='center'>11</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align='center'> 2nd Internal Marks</TableCell>
                      <TableCell align='center'>3</TableCell>
                      <TableCell align='center'>5</TableCell>
                      <TableCell align='center'>8</TableCell>
                      <TableCell align='center'>6</TableCell>
                      <TableCell align='center'>2</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align='center'> 3rd Internal Marks</TableCell>
                      <TableCell align='center'>3</TableCell>
                      <TableCell align='center'>5</TableCell>
                      <TableCell align='center'>8</TableCell>
                      <TableCell align='center'>6</TableCell>
                      <TableCell align='center'>2</TableCell>
                    </TableRow>

                   
                  </TableBody>
            </Table>
          </TableContainer>
        </Grid>


        {/* 
                                                3 rd internal */ 
                                                                                                    }
        <Grid item xs={12}>
           <h1 align="center" className='internal-heading'>Ⅲ Semester Internal Marks</h1>
          <TableContainer>
            <Table >
            <TableHead>
                    <TableRow>
                      <TableCell>Subjects</TableCell>
                      <TableCell align="center">Data Science & Analytics</TableCell>
                      <TableCell align="center">Image Processing using MatLab</TableCell>
                      <TableCell align="center">Compiler Designing</TableCell>
                      <TableCell align="center">Research Methodology</TableCell>
                      <TableCell align="center">Mobile Computing</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align='center'> 1st Internal Marks</TableCell>
                      <TableCell align='center'>10</TableCell>
                      <TableCell align='center'>7</TableCell>
                      <TableCell align='center'>3</TableCell>
                      <TableCell align='center'>8</TableCell>
                      <TableCell align='center'>11</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align='center'> 2nd Internal Marks</TableCell>
                      <TableCell align='center'>3</TableCell>
                      <TableCell align='center'>5</TableCell>
                      <TableCell align='center'>8</TableCell>
                      <TableCell align='center'>6</TableCell>
                      <TableCell align='center'>2</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align='center'> 3rd Internal Marks</TableCell>
                      <TableCell align='center'>-</TableCell>
                      <TableCell align='center'>-</TableCell>
                      <TableCell align='center'>-</TableCell>
                      <TableCell align='center'>-</TableCell>
                      <TableCell align='center'>-</TableCell>
                    </TableRow>
                    
                  </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        
      </Grid>
    
     
      
    </Box>
    
    

    


    
    </>
  )
}

export default serStudents