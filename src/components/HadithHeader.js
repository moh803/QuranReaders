import React from 'react';
import {Link} from 'react-router-dom';
import '../components/header.css';
import Quran from '../pages/Quran';
import Hadith from '../pages/Hadith';
import Debate from '../pages/Debate';

export default function Header() {
    return (
        <div className="header">
            <header>
            <div className="logo">
                <h1>Quran<span className="logo-color">Readers</span></h1>
            </div>
            <nav>
                <ul className="nav__links">
                    
                    <Link to={"/"}><li>Home</li></Link>
                    <Link to={"/quran"}><li>Quran</li></Link>
                    <Link to={"/debate"}><li>Debate</li></Link>
                </ul>
            </nav>
        </header>
        </div>
    );
}
