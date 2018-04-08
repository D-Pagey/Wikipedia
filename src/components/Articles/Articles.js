import React, { Component } from 'react';

import './Articles.css';

class Articles extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let articleData;
        
        if (this.props.searchResults.length) {
            articleData = this.props.searchResults.map((obj) => (
            <div className='articles' key={obj.pageid}>
                <h3 className='article-header'>{obj.title}</h3>
                <a 
                href={`https://en.wikipedia.org/?curid=${obj.pageid}`} 
                className='article-link'
                target='_blank'>
                <p className='article-snippet'>{obj.snippet}</p></a>
            </div>
        ));
        } else {
          articleData = null;
        }

        return <main>{articleData}</main>;
      }
}

export default Articles;

