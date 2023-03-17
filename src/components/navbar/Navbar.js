import React from 'react';
import Logo from '../../assets/images/logo.svg';

export default function Navbar() {
    return (
        <nav className="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0">
            <img src={Logo} alt="Website Logo" />
        </nav>
    )
}

