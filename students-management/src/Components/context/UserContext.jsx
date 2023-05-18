import React, { createContext, useState } from 'react';
import { useEffect } from 'react';


export const UserContext=createContext();

export const UserProvider=(props)=>{
    const [token,setToken]=useState(localStorage.getItem("aswesomeLeadsToken"))
    useEffect(()=>{
       const fetUser = async ()=>{
        const requestOptions={
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization:"Bearer" +token,
            },
        };
        const response=await fetch("/".requestOptions);
        if (!response.ok){
            setToken(null);
        }
        localStorage.setItem("aswsomeLeadsToken",token);
       };
       fetUser();
        
    },[token])

     return(
        <UserContext.Provider value={[token,setToken]}>
            {props.children}
        </UserContext.Provider>
     )
   
}