import React from 'react';
import './movies.css';

import { Link } from "react-router-dom";
import Movie from '../Movie';




const Movies = (props) => {

  const { movies } = props;

  return (

    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 g-4">

        {movies.length ? (
          movies.map((movie) => <Link to={movie.imdbID}><Movie key={movie.imdbID} {...movie} /></Link>)
        ) : (
          <h4>Nothing found</h4>
        )}


      </div>
    </div>

  );


};

export default Movies;
