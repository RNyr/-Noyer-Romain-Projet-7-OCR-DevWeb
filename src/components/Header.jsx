import React from 'react';
import { Link } from "react-router-dom"
import LogoHeader from "../assets/logoheader.png"
import "../styles/components/header.css"


const Header = () => {
    return (
        <header>
            <Link to="/">
            <img src={LogoHeader} alt="logo" />
            </Link>
            <nav>
                <Link to="/" className='navigation'>Accueil</Link>
                <Link to="/about" className='navigation'>A Propos</Link>
            </nav>
        </header>
    );
};

export default Header;