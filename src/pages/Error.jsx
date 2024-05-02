import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';
import '../styles/error.scss'


const Error = () => {
    return (
        <div>
            <Navbar />
            <li>
                <h1>404</h1>
            </li>
            <div className='nextTo'>
                <h3 className='middle'>
                    Oups! La Page que vous demandez n'existe pas.
                </h3>
            </div>
            <li className='back'>
                <Link to={`/`}>
                    Retourner sur la page d'accueil
                </Link>
            </li>
            <Footer />
        </div>
    );
};

export default Error;