import React from 'react';
import './Navbar.css';

const Nav = (props) => (
    <div>
        <nav className="navbar navbar-expand-lg">
  <a className="navbar-brand">"News"</a>
  <ul className = "navbar-nav mr-auto">
    <li className = 'nav-item' onClick = "">Saved Stories</li>
    <li className = 'nav-item' onClick = "">Scrape New Stories</li>
  </ul>
</nav>
    </div>
);

export default Navbar;