import React from 'react';
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";
import {RequireAuth} from 'react-auth-kit'
import App from '../App';
import Login from '../components/account/login';

// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Login from './pages/Login';

// function AppRouter() {
//   return (
//     <Router>
//       <Switch>
//         {/* <Route path="/" exact component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//         <Route path="/login" component={Login} /> */}
//       </Switch>
//     </Router>
//   );
// }

function AppRouter() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/'} element={
          <RequireAuth loginPath={'/login'}>
            <App/>
          </RequireAuth>
        }/>
        </Routes>
      </BrowserRouter>
        );
    }

export default AppRouter;