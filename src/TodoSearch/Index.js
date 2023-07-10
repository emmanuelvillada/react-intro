import React from 'react';
import { TodoContext } from '../TodoContext/Index';
import './Todosearch.css';

function TodoSearch() {
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext);

    return (
        <input
            placeholder="Dormir"
            className="TodoSearch"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { TodoSearch };