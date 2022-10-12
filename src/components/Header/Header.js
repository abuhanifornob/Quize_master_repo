import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className='navigation-bar'>
            <div className='nav-logo'>
                <h3><span className='quiz-name'>Quiz</span><span className='logo-m'>M</span>aster</h3>
            </div>
            <nav className='nav-item'>
                <Link className='nav-link' to="/">Quiz Topices</Link>
                <Link className='nav-link' to="/statistical">Statistical</Link>
                <Link className='nav-link' to="/blog">Blog</Link>
                <Link className='nav-link' to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;