
import * as React  from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EngineeringIcon from '@mui/icons-material/Engineering';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';


import {Link,Outlet} from "react-router-dom";


import AddStudent from './AddStudent';

import StudentInfo from './StudentInfo';
import { Search } from '@mui/icons-material';

const drawerWidth = 240;


export default function ClippedDrawer() {
  
  const subTreeColor="pink";
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            
              <ListItem  disablePadding>
              <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    multiSelect
                    sx={{ height:"auto", flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                    > 
                         
                        <TreeItem nodeId="1"  label="Students Attendence Info"
                         sx={{color:"white",
                             backgroundColor:"black"
                             }}>
                           <TreeItem nodeId="2" label="100% Attendence" sx={{color:"pink"}} />
                           <TreeItem nodeId="3" label="Good" sx={{color:"pink"}}/>
                           <TreeItem nodeId="4" label="Least" />
                           <TreeItem nodeId="5" label="Penality" />
                           <TreeItem nodeId="6" label="Repeate" />
                       </TreeItem>
                      <TreeItem nodeId="7" label="Students Data" 
                      sx={{color:"white",
                      backgroundColor:"black"
                      }} >
                      <TreeItem nodeId="8" label="Computer Application" >
                           <TreeItem nodeId="9" label="UG" >
                                <TreeItem nodeId="10" label="1st BCA" />
                                <TreeItem nodeId="11" label="2nd BCA" />
                                <TreeItem nodeId="12" label="3rd BCA" />
                           </TreeItem>
                           <TreeItem nodeId="13" label="PG" >
                                <TreeItem nodeId="14" label="1st MCA" />
                                <Link style={{textDecoration:"none"}} to={`/home/students/MCA`}>
                               
                                <TreeItem nodeId="15" label="2nd MCA" />
                                </Link>
                           </TreeItem>
                           <TreeItem nodeId="16" label="M.Phil." />
                      </TreeItem>
                      <TreeItem nodeId="17" label="Computer Science" >
                      <TreeItem nodeId="18" label="UG" >
                                <TreeItem nodeId="19" label="1st Year" />
                                <TreeItem nodeId="20" label="2nd Year" />
                                <TreeItem nodeId="21" label="3rd Year" />
                           </TreeItem>
                           <TreeItem nodeId="22" label="PG" >
                                <TreeItem nodeId="23" label="1st Year" />
                                <TreeItem nodeId="24" label="2nd Year" />
                           </TreeItem>
                           <TreeItem nodeId="25" label="M.Phil." />
                        </TreeItem>
                        <TreeItem nodeId="26" label="Chemistry" >
                      <TreeItem nodeId="27" label="UG" >
                                <TreeItem nodeId="28" label="1st Year" />
                                <TreeItem nodeId="29" label="2nd Year" />
                                <TreeItem nodeId="30" label="3rd Year" />
                           </TreeItem>
                           <TreeItem nodeId="31" label="PG" >
                                <TreeItem nodeId="32" label="1st Year" />
                                <TreeItem nodeId="33" label="2nd Year" />
                           </TreeItem>
                           <TreeItem nodeId="34" label="M.Phil." />
                        </TreeItem>

                          <TreeItem nodeId="35" label="Mathematics">
                          <TreeItem nodeId="36" label="UG" >
                                <TreeItem nodeId="37" label="1st Year" />
                                <TreeItem nodeId="38" label="2nd Year" />
                                <TreeItem nodeId="39" label="3rd Year" />
                           </TreeItem>
                           <TreeItem nodeId="40" label="PG" >
                                <TreeItem nodeId="41" label="1st Year" />
                                <TreeItem nodeId="42" label="2nd Year" />
                           </TreeItem>
                           <TreeItem nodeId="43" label="M.Phil." />
                          </TreeItem>
                          <TreeItem nodeId="44" label="Zoology">
                          <TreeItem nodeId="45" label="UG" >
                                <TreeItem nodeId="46" label="1st Year" />
                                <TreeItem nodeId="47" label="2nd Year" />
                                <TreeItem nodeId="48" label="3rd Year" />
                           </TreeItem>
                           <TreeItem nodeId="49" label="PG" >
                                <TreeItem nodeId="50" label="1st Year" />
                                <TreeItem nodeId="51" label="2nd Year" />
                           </TreeItem>
                           <TreeItem nodeId="52" label="M.Phil." />
                          </TreeItem>
                          <TreeItem nodeId="53" label="Physical Education">
                          <TreeItem nodeId="54" label="UG" >
                                <TreeItem nodeId="55" label="1st Year" />
                                <TreeItem nodeId="56" label="2nd Year" />
                                <TreeItem nodeId="57" label="3rd Year" />
                           </TreeItem>
                           
                          </TreeItem>
                       
                      </TreeItem>
                     
                      
                       
                       
                </TreeView>
              </ListItem>
           
          </List>
          <Divider />
         
          <List>
          <ListItem disablePadding>
                 <ListItemButton>
                   <ListItemIcon>
                   <Search/>
                   </ListItemIcon>
                   <Link style={{textDecoration:"none"}} to={`/home/Search`}>
                     <ListItemText primary={"Search Student"}/>
                   </Link> 
                 </ListItemButton>    
            </ListItem>
            <ListItem disablePadding>
                 <ListItemButton>
                   <ListItemIcon>
                   <PersonAddAltIcon />
                   </ListItemIcon>
                   <Link style={{textDecoration:"none"}} to={`/home/addstudents`}>
                     <ListItemText primary={"Add Student"}/>
                   </Link>   
                 </ListItemButton> 
            </ListItem>
            <ListItem disablePadding>
                 <ListItemButton>
                   <ListItemIcon>
                   <EngineeringIcon/>
                   </ListItemIcon>
                   <Link style={{textDecoration:"none"}} to={`/home/addAdmin`}>
                     <ListItemText primary={"Add New Admin"}/>
                   </Link> 
                   
                  
                 </ListItemButton> 
                 
            </ListItem>
           
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3}}>
        <Toolbar />
        {/* Here add componetns */}
        
       
      </Box>
      <Outlet/>
    </Box>
  );
}
