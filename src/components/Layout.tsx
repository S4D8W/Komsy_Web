import React, { ReactNode } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../sass/Layout.scss';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className='bg-light bg-gradient vh-100'>
      <Header />
      <div className="container-fluid ">
        <div className="row p-2">
         
          <div className="col-lg-2 ">
            <Sidebar />
            </div>
            <div className="col-lg-10">
           <main>{children}</main>
          </div>
      
        </div>
      
      </div>
     
    </div>
  );
}

export default Layout;


