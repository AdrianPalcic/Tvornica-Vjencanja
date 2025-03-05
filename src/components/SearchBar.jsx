import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {

    const [item, setItem] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        onSearch(item);
    }

    return (
        <form onSubmit={onSubmit}>
            <input className='search-bar'
                type='search'
                placeholder='Pretraži blogove'
                onChange={(e) => setItem(e.target.value)}
            ></input>
        </form>
    )
}

export default SearchBar