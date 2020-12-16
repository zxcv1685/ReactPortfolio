import React from 'react';
import { Link } from 'react-router-dom';

function Header({color}){
    return (
        <header id="header" className={color}>
            <div className="site"><Link to="/site">site</Link></div>
            <div className="logo"><Link to="/">1RROCK</Link></div>
            <div className="nav">
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/reference">Reference</Link></li>
                    <li><Link to="/script">Script</Link></li>
                    <li><Link to="/animation">Animation</Link></li>
                    <li><Link to="/site">Site</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;