import React, { useState } from 'react';
import { Context } from "./context";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useRoutes } from './routes';
import './styles/App.scss';
import { movieItems, channelItems, genreItems } from './fakeData';

export default () => {
    const [movies, setMovies] = useState(movieItems);
    const filterMovies = (query) => {
        const film = movies.find(item => item.name.toLowerCase() === query.toLowerCase());
        return film ? setMovies([].concat(film)) : setMovies(movieItems);
    };
    const routes = useRoutes();
    return (
        <Context.Provider value={{ movies, genreItems, channelItems, filterMovies }}>
            <Router>
                <div className="App">
                    <Header />
                    { routes }
                    <Footer />
                </div>
            </Router>
        </Context.Provider>
    );
}
