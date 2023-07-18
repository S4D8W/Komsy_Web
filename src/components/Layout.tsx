import  { ReactNode } from 'react';
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
         
          <div className="col-lg-3 col-md-4 ">
            <Sidebar />
          </div>
            
           <main className='main col-lg-6 col-md-8'>{children}</main>
          
      
        </div>
      
      </div>
     
    </div>
  );
}

export default Layout;


