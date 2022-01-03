import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';

const Navbar = () => {
    const changeActive = (page) => {
        const elems = document.getElementsByTagName('li');
        for(let i = 0; i < elems.length; i++){
            elems[i].classList.remove('active');
        }
        document.getElementById(page).classList.add('active');
    }

    return (
        <nav>
            <ul>
                <li className='active' onClick={() => {changeActive('home')}} id='home'><Link className='link' to='/'><h1>Home</h1></Link></li>
                <li onClick={() => {changeActive('contact')}} id='contact'><Link className='link' to='/contact'><h1>Contact</h1></Link></li>
                <li onClick={() => {changeActive('about')}} id='about'><Link className='link' to='/about'><h1>About</h1></Link></li>
                <li onClick={() => {changeActive('products')}} id='products'><Link className='link' to='/products'><h1>Products</h1></Link></li>
            </ul>
            <img src={logo} alt="logo" />
        </nav>
    )
}

export default Navbar
