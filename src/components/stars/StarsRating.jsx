import React from 'react';
import "../collapse/Collapse.scss"

const StarRating = ({ rating }) => {

    const roundedRating = Math.round(rating);

    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < roundedRating) {
            stars.push(<i key={i} className="fas fa-star margRight"></i>);
        } else {
            stars.push(<i key={i} className="fas fa-star emptyStars margRight"></i>);
        }
    }

    return (
        <div className="star-rating">
            {stars}
        </div>
    );
};

export default StarRating;