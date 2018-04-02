import React from 'react';

import './Search.css';

function Search() {
    return (
        <div className='search-container'>
            <input type='text' className='input' placeholder='Search for an article...' />
            <button className='search-button'>Search</button>
            <button className='random-button'>Random Article</button>
        </div>
    )
}

export default Search;