import React from 'react';
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";
import {RequireAuth} from 'react-auth-kit'
import App from '../App';
import Login from '../components/account/login';
import Home from '../components/home/home';


function AppRouter() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/login'} element={<Login/>}/>
        {/* <Route path={'/'} element={
          <RequireAuth loginPath={'/login'}>
            <Home/>
          </RequireAuth>
        }/> */}
        </Routes>
      </BrowserRouter>
        );
    }

export default AppRouter;