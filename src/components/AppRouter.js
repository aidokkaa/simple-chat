import React from 'react'
import { useContext } from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import { ConText } from '..';
import {privateRoutes, publicRoutes} from "../routes";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {useAuthState} from "react-firebase-hooks/auth";


const AppRouter = () => {
    const {auth}=useContext(ConText)
   const [user]= useAuthState(auth)

   console.log(auth)
   return user ? (
    <Routes>
        {privateRoutes.map(({path, Component}) => (
            <Route key={path} path={path} element={<Component/>} />
        ))}
        <Route path='*' element={<Navigate to={CHAT_ROUTE}  />} />
    </Routes>
) : (
    <Routes>
        {publicRoutes.map(({path, Component}) => (
            <Route key={path} path={path} element={Component} />
        ))}
        <Route path='*' element={<Navigate to={LOGIN_ROUTE} replace />} />
    </Routes>

)
       
};

export default AppRouter;


