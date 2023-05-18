
//Rout setup
import {Route,Routes,Router} from "react-router"
import {Link} from "react-router-dom"
import AddAdmin from "./Components/AddAdmin";
import AddStudent from "./Components/AddStudent";
import RequireAuth from "./Components/RequireAuth";
import { useState,useEffect } from 'react';
import {getStudens} from "./Components/api/axios";

import ElevateAppBar from './Components/Appbar' ;
import Drawer from './Components/Drawer';
import LoginPage from './Components/login';
import NotFound from "./Components/NotFound";
import StudentInfo from "./Components/StudentInfo";
import Search from "./Components/Search";
import {getStudents} from "./Components/api/axios";


function App() {
  
  return (
    <div className="App">
      
     <Routes>
     
       <Route path="/" element={<LoginPage/>} />
      <Route element={<RequireAuth/>}>
       <Route path="home" element={<ElevateAppBar/>} >
          <Route path="addAdmin" element={<AddAdmin/>} />
          <Route path="addstudents" element={<AddStudent/>} />
          <Route path="students/MCA" element={<StudentInfo/>} />
          <Route path="search" element={<Search />} />
       </Route>
       </Route> 
       {/* <Route path="*" element={<NotFound/>} /> */}
     </Routes>
     
      
    </div>
  );
}

export default App;
