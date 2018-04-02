import React from 'react';

import './Search.css';

function Search(props) {

    const { userQuery, search } = props;

    return (
        <div className='search-container'>
            <input type='text' className='input' onChange={userQuery}
            placeholder='Search for an article...' />
            <button className='search-button' onClick={search}>Search</button>
            <a href='https://en.wikipedia.org/wiki/Special:Random' target='_blank' 
            rel='noopener noreferrer'><button className='random-button'>
            Random Article</button></a>
        </div>
    )
}

export default Search;