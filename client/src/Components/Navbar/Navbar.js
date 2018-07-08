import React from 'react';
import './Navbar.css';

const Navbar = (props) => (
    <div className = 'navbar-container'>
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand">"News"</a>
            <ul className="navbar-nav mr-auto">
                <li className='nav-item' onClick= {props.handleSaved}>Saved Stories</li>
                <li className='nav-item' onClick= {props.handleScrape}>Scrape New Stories</li>
            </ul>
        </nav>
    </div>
);

export default Navbar;