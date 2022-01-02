import React from 'react';
import logo from '../Images/logo.png';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li className='active'><h1>Home</h1></li>
                <li><h1>Contact</h1></li>
                <li><h1>About</h1></li>
                <li><h1>Products</h1></li>
            </ul>
            <img src={logo} alt="logo" />
        </nav>
    )
}

export default Navbar
