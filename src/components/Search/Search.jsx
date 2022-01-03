import React, { useState } from 'react';
import './search.css';

const Search = (props) => {

  const {
    searchMovie = Function.prototype,
  } = props;

  const [search, setSearch] = useState('');

  const handleKey = (e) => {
      if(e.key === 'Enter'){
        searchMovie(search)
        console.log('TEST')
    } 
  } 

//   const handleKey = (e) => {

//     searchMovie(search)

//   }
// }

return (

  <input
    className="form-control me-2 mb-2"
    name="search"
    type="search"
    placeholder="Search"
    aria-label="Search"
    value={search}
    onChange={(e)=> setSearch(e.target.value)}
    // onChange={(e) => { handleKey }}
  onKeyDown={handleKey}
  />

);
};

export default Search;
