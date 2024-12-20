import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login from './Login';
import MovieList from './movies/MovieList';
import ShowMovie from './movies/ShowMovie';
import MyMovieList from './movies/MyMovieList';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/home" element={<MovieList/>} />
          <Route path="/home/details/:id" element={<ShowMovie/>} />
          <Route path="/home/bookmarks" element={<MyMovieList/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
