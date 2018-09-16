import React from 'react';

import './Articles.css';

function Article({article}) {
  return (
    <li className='articles' key={article.pageid}>
      <h3 className='article-header'>{article.title}</h3>
      <a
      href={`https://en.wikipedia.org/?curid=${article.pageid}`}
      className='article-link'
      target='_blank'
      rel='noopener noreferrer'>
      <p className='article-snippet'>
      {article.snippet.replace(/<\/?[^>]+>/gi, '')}
      </p></a>
  </li>);
}

function ArticleList({articles}) {
  const articleItems = articles.map((article) => 
    <Article article={article} key={article.pageid} />);

  return (
    <ul className='article-container'>
      {articleItems}
    </ul>
  );
}

ArticleList.defaultProps = {
  articles: []
}

export default ArticleList;
