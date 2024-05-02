import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar'>
            <div>
                <img src="/logo.png" alt="logo de kasa" />
            </div>
            <ol>
                <Link to={`/`}>
                    Accueil
                </Link>
                <Link to={`/about`}>
                    A propos
                </Link>
            </ol>
        </nav>
    )
}

export default Navbar
