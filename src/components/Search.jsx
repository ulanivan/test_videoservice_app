import React, { useContext, useState } from "react";
import {Context} from "../context";

export const Search = () => {
    const { filterMovies } = useContext(Context);
    const [searchValue, setSearchValue] = useState('');

    const findMovie = (e) => {
        if (e.keyCode === 13) {
            filterMovies(searchValue);
        }
    }
    return (
        <div className="search d-flex">
            <input onKeyDown={findMovie}
                   placeholder={'Поиск...'}
                   type="text"
                   className="search_input"
                   onChange={(e) => setSearchValue(e.target.value)}
                   value={searchValue}
            />
            <button onClick={() => filterMovies(searchValue)} className="search_button ml-3 rub18">Найти</button>
        </div>
    );
};
