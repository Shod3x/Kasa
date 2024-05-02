import React from 'react'
import './LogementCard.scss'
import { Link } from 'react-router-dom';

function LogementCard({ logement }) {
    return (

        <div className="logement-card">
            <Link to={`/logement/${logement.id}`}>
                <div className='container'>
                    <img src={logement.cover} alt={logement.title} className="image" />
                    <h3>{logement.title}</h3>
                </div>
            </Link>
        </div>
    )
}

export default LogementCard;