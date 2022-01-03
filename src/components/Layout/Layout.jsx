import React from 'react';
import './layout.css';

import { Outlet } from "react-router-dom";

import Header from '../Header';
import Footer from '../Footer';

const Layout = () => {
  return (
    <>

      <header className="header">
        <Header />
      </header>

      <div className="context">
        <Outlet />    
      </div>

      <footer className="footer">
        <Footer />
      </footer>
      
    </>
  );
};

export default Layout;
