import React, { useEffect, useState } from 'react';
import './header.css';

import { Link } from "react-router-dom";




const Header = () => {

 
return (
  <div className="container">
    <div className="row">
      <div className="col-md-12">

        <nav className="navbar navbar-light bg-light">
          <Link to='/' className="navbar-brand">
            <img src='./logo192.png' alt="movie" width="30" height="30" className="d-inline-block align-text-top" />&nbsp;
            Movies React App
          </Link>

         
        </nav>

      </div>
    </div>
  </div>
);
};

export default Header;
