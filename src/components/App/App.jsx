import React from 'react';
import './app.css';


import { Routes, Route } from "react-router-dom";

import Layout from '../Layout';
import NoPage from '../NoPage';
// import HomePage from '../../pages/HomePage';
import SinglePage from '../../pages/SinglePage';
// import MoviesPage from '../../pages/MoviesPage';
import Main from '../Main';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        {/* <Route path="movies" element={<MoviesPage />} /> */}
        {/* <Route path="/:id" element={<SinglePage movies={movies} />} /> */}
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default App;
