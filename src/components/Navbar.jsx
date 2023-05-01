import React from 'react'
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="navItems">

            <div className="navbar-logo">
                <a href="/">TRIVIL <i className='fab fa-typo3'></i></a>
                
                <div className="button">

                </div>

            </div>
            <div className="navbar-items">
                <ul>
                    <li><a href="/" >Home</a></li>
                    <li><a href="/">Body</a></li>
                    <li><a href="/">Contact Us</a></li>

                </ul>
            </div>
            <div className="media">

                <li id='media-facebook'><i class="fa-brands fa-facebook-f" /></li>
                <li><i class="fa-brands fa-youtube" /></li>
                <li><i class="fa-brands fa-twitter" /></li>
            </div>
        </nav>
    )
}
