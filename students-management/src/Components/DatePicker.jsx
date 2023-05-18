import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


export default function DatePicker() {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    
    
    <LocalizationProvider dateAdapter={AdapterDayjs} >
     
     <DesktopDatePicker
       label="Date of Birth"
       inputFormat="DD/MM/YYYY"
       value={value}
       onChange={handleChange}
       renderInput={(params) => <TextField {...params} />}
       
     />

  
 </LocalizationProvider>
   
  );
}
