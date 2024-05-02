import React from 'react'
import "./Banner.scss"

function Banner() {
    return (
        <div className='bannerimg'>
            <img src="paysage1.png" alt="image d'un paysage en bord de mer" />
            <div className="text-overlay">Chez vous, partout et ailleurs</div>
        </div>
    )
}

export default Banner

