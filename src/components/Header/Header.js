import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="Ema john Logo" />
            <div className='header-menu'>
                <li><a href="/order">order</a></li>
                <li><a href="/order Review">order Review</a></li>
                <li><a href="/manage Inventory">manage Inventory</a></li>
                <li><a href="/login">login</a></li>
            </div>
        </nav>

    );
};

export default Header;