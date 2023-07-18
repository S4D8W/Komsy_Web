import { BrowserRouter, Routes, Route, } from "react-router-dom";
import {RequireAuth} from 'react-auth-kit'
import Login from '../components/account/login';
import Home from '../components/home/home';
import SignUp from '../components/account/SignUp';
import Dashboard from '../components/dashboard/Dashboard';

function AppRouter() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/Signup'} element={<SignUp/>}/>
        
        
        <Route path={'/Dashboard'} element={
          <RequireAuth loginPath={'/login'}>
            <Dashboard/>
          </RequireAuth>
        }/>


        </Routes>
      </BrowserRouter>
        );
    }

export default AppRouter;