import React from 'react';
import './includes/Portfolio.css';
import WebPages from './WebPages';

const Portfolio = () => {
  return (
    <div id='portfolio'>
        <h1>Portfolio</h1>
        <ul className='webpages'>
            <WebPages />
        </ul>
    </div>
  )
}

export default Portfolio