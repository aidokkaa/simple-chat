import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import NavBar from './components/NavBar'
import AppRouter from './components/AppRouter';
import './App.css'
import { useContext } from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import { ConText } from './index';
import Loader from './components/Loader';
import Chat from './components/Chat'

export default function App (){

  const {auth}=useContext(ConText)
  const [user,loading,error]= useAuthState(auth)

  if(loading){
    return <Loader/>
  }

  return(
    <>
    <BrowserRouter>
       <NavBar></NavBar>
       <AppRouter/>
       {/* <Chat></Chat> */}
    </BrowserRouter>
    </>
  )
}

