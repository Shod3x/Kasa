import React, { useState } from 'react';

import "../logement-detail/LogementDetail.scss";

export default function Carousel({ logement }) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const flecheRight = <img className='right' src="../fleche-vers-le-bas.png" alt="" />
    const flecheLeft = <img className='left' src="../fleche-vers-le-bas.png" alt="" />

    const handleNextImage = () => {
        setCurrentImageIndex((nextIndex) => (nextIndex + 1) % logement.pictures.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1));
    };

    return (
        <div className="image-container">
            <img className='imgslot' src={logement.pictures[currentImageIndex]} alt="" />
            <button className="prev" onClick={handlePrevImage}>{flecheLeft}</button>
            <button className="next" onClick={handleNextImage}>{flecheRight}</button>
        </div>
    )
}