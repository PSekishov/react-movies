import React, { useEffect, useState } from 'react';
import './singlePage.css';

import { useParams, Link } from 'react-router-dom';

const SinglePage = () => {

  // console.log(useParams());
  const { id } = useParams();
  const [move, setMove] = useState(null);
  // http://www.omdbapi.com/?apikey=5636f588&i=tt1490017&plot=full

  useEffect(() => {
    async function fetchData() {
      let data = await fetch(`http://www.omdbapi.com/?apikey=5636f588&i=${id}&plot=full`);
      data = await data.json();
      console.log(data)
      setMove(data);
    }
    fetchData();
  }, [id]);

  // console.log(move)

  return (

    <div className="container">
      <Link to="/">
        <button type="button" className="btn btn-light">To Back</button>
      </Link>
      <hr />
      <div className="row">
        {
          move && (
            <>
              <div className="col-md-4">
                <img src={move.Poster} />
              </div>

              <div className="col-md-8">
                <p>Title: {move.Title}</p>
                <p>Genre: {move.Genre}</p>
                <p>Actors: {move.Actors}</p>
                <p>Writer: {move.Writer}</p>
                <p>Language: {move.Language}</p>
                <p>Released: {move.Released}</p>
                <p>DVD: {move.DVD}</p>
                <p>Country: {move.Country}</p>
                <p>Runtime: {move.Runtime}</p>
                <p>Description: {move.Plot}</p>
                <p>Year: {move.Year}</p>
              </div>
            </>
          )
        }



      </div>
    </div>

  );

};

export default SinglePage;