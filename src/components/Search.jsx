import React, { useContext, useState } from "react";
import { Context } from "../context";

export const Search = () => {
    const { filterMovies } = useContext(Context);
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        filterMovies(searchValue);
    }
    return (
        <form onSubmit={handleSubmit} className="search d-flex">
            <input placeholder={'Поиск...'}
                   type="text"
                   className="search_input"
                   onChange={(e) => setSearchValue(e.target.value)}
                   value={searchValue}
            />
            <button type="submit" className="search_button ml-3 rub18">Найти</button>
        </form>
    );
};
