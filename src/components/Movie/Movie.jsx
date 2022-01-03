import React from 'react';
import './movie.css';

const Movie = (props) => {

  const {
    Title: title,
    Genre: genre,
    Actors: actors,
    Writer: writer,
    Language: language,
    Released: released,
    Poster: poster,
    DVD: dvd,
    Country: country,
    Runtime: runtime,
    Plot: plot,
    Year: year,
    imdbID: id,
    Type: type
  } = props;


  return (

    <div className="shadow card group-cards">
      {
        poster === 'N/A'
          ? <img src={`https://images.unsplash.com/photo-1554496398-1c4db5e7bed3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80`} className="card-img-top" alt={title} />
          : <img src={poster} className="card-img-top" alt={title} />
      }
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="d-flex justify-content-between">
          <span className="card-text">{type}</span>
          <span className="card-text">{year}</span>
        </div>
      </div>
    </div>
  );
};

export default Movie;
