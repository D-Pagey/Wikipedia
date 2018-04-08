import React from 'react';

import './Articles.css';

function Articles(props) {
  let articleData;

    if (props.searchResults.length) {
        articleData = props.searchResults.map((obj) => (
            <div className='articles' key={obj.pageid}>
              <h3 className='article-header'>{obj.title}</h3>
              <a 
              href={`https://en.wikipedia.org/?curid=${obj.pageid}`} 
              className='article-link'
              target='_blank'
              rel='noopener noreferrer'>
              <p className='article-snippet'>
              {obj.snippet.replace(/<\/?[^>]+>/gi, '')}
              </p></a>
            </div>
        ));
        } else {
          articleData = null;
        }

        return <main>{articleData}</main>;
      }

export default Articles;

