import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter, Route, Routes } from "react-router-dom";
import MoviesDetails from './components/MovieDetails';
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter />);

function AppRouter() {
    const telegramDataMarker = "#tgWebAppData";
    if (window.location.href.includes(telegramDataMarker)) {
        window.location.href = window.location.href.split(telegramDataMarker)[0];
    }

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/:id" element={<MoviesDetails />} />
            </Routes>
        </HashRouter>
    );
}

