import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const Layout = () => {
  return (
    <div className='wrapper_main'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout;

