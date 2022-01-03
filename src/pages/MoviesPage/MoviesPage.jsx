// import React from 'react';
import './moviesPage.css';

import Movies from '../../components/Movies';


const MoviesPage = () => {

  return (

    <div className="container">
      <div className="row">
        <div className="col-md-12">

            <h3>Movies Pages</h3>

            <hr />

           <Movies />

        </div>
      </div>
    </div>

  );
};

export default MoviesPage;
