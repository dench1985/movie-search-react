import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesDetails from './components/MovieDetails';
import Favorites from './components/Favorites';
import "./style.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter >
    <Routes>
      <Route path="/" element={<App/>} />
      <Route  path="/:id" element={<MoviesDetails/>} />
    </Routes>
  </BrowserRouter>
);



