import React, { useEffect, useState } from 'react';
import './main.css';

import Movies from '../Movies';
import Search from '../Search';
import Preloader from '../Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;


const Main = () => {


  const [movies, setMovies] = useState([]);
  const [isPreloader, setIsPreloader] = useState(true);

  // movies={movies} isPreloader={isPreloader} searchMovie={searchMovie}

  const searchMovie = (str) => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search)
        setIsPreloader(false)
      })
  }


  useEffect(() => {
    
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=donald`)
        .then(res => res.json())
        .then((data) => {
          setMovies(data.Search);
          setIsPreloader(false);
        })
  
  },[]);


  return (
    <> 
    <div className="container">
      <div className="row">
        <div className="col-md-12">
        <Search searchMovie={searchMovie}/>
        </div>
      </div>
    </div>
       
       {
         isPreloader ? <Preloader /> : <Movies movies={movies} />
       }
    </>
  );
};

export default Main;
