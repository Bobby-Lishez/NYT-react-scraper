import React from 'react';
import './Navbar.css';

const Navbar = (props) => (
    <div className = 'navbar-container'>
        <nav className="navbar navbar-expand-lg">
            <div className="navbar-brand">"News"</div>
            <ul className="navbar-nav mr-auto">
                <li> <button className='nav-item btn-primary' onClick= {props.handleSaved}>Saved Stories</button></li>
                <li> <button className='nav-item btn-warning' onClick= {props.handleScrape}>Scrape New Stories</button></li>
            </ul>
        </nav>
    </div>
);

export default Navbar;