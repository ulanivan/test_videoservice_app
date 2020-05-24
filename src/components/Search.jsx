import React, { useContext } from "react";
import {Context} from "../context";

export const Search = () => {
    const { filterMovies } = useContext(Context);

    const findMovie = (e) => {
        filterMovies(e.target.value)
    }
    return (
        <div className="search d-flex">
            <input onChange={findMovie} placeholder={'Поиск...'} type="text" className="search_input"/>
            <button className="search_button ml-3 rub18">Найти</button>
        </div>
    );
};
