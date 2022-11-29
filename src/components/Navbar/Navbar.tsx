import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <NavLink to='/' className='nav-link'>Home</NavLink>
            <NavLink to='/about-us' className='nav-link'>About us</NavLink>
            <NavLink to='/contacts' className='nav-link'>Contacts</NavLink>
        </nav>
    );
};

export default Navbar;