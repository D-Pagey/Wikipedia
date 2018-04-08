import React from 'react';

import './Articles.css';

function Articles(props) {

    const { searchResults } = props;

    if (searchResults.length > 0) {
        return (
            <main className='articles-container'>
                <div className='articles'>
                    <h3 className='article-header'>{searchResults[0].title}</h3>
                    <a href='#' className='article-link'>
                    <p className='article-snippet'>{searchResults[0].snippet}</p></a>
                </div>
            </main>
        )
      } else {

        return (
            <main className='articles-container'>
                <div className='articles'>
                    <h3 className='article-header'>Test</h3>
                    <a href='#' className='article-link'>
                    <p className='article-snippet'>Test(s) or TEST may refer to: 
                    Test (assessment), an assessment intended to measure the 
                    respondents' knowledge or other abilities List of tests</p></a>
                </div>
            </main>
        )

      }

    
}

export default Articles;