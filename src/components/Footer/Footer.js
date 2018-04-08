import React from 'react';

import './Footer.css';

function Footer(props) {
    return (
        <footer className={props.footerClass}>
            <p>Written and coded by <a 
            href="https://www.freecodecamp.org/d-pagey" 
            target="_blank" rel="noopener noreferrer" className="freecodecamp">
            Pagey</a></p>
        </footer>
    )
}

export default Footer;