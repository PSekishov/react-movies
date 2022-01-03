import React from 'react';
import './footer.css';


const Footer = () => {
  
  return (

    <div className="container">
      <div className="row">
        <div className="col-md-12">
          
          <p className="footer-content">{new Date().getFullYear() === 2021 ? '2021' : '2021 - '+new Date().getFullYear() } &copy; Pavel Sekishov</p>
        </div>
      </div>
    </div>
    
  );
};

export default Footer;
