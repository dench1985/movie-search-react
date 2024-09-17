import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import MoviesDetails from './components/MovieDetails';
import Favorites from './components/Favorites';
import "./style.css"

const GITHUB_NAME = "/movie-search-react/"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<HashRouter>
  
    <Routes path = {GITHUB_NAME}>
      <Route path="/" element={<App/>} />
      <Route  path="/:id" element={<MoviesDetails/>} />
    </Routes>
  
</HashRouter>
  
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//   <BrowserRouter >
//     <Routes path = {GITHUB_NAME}>
//       <Route path="/" element={<App/>} />
//       <Route  path="/:id" element={<MoviesDetails/>} />
//     </Routes>
//   </BrowserRouter>
// );

