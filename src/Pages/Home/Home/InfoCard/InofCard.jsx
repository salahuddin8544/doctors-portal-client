import React from 'react';

const InofCard = ({ card }) => {
    const { name, description, bgClass } = card;
    return (
        <div className={`card w-96 ${bgClass}  shadow-xl `}>
        <div className="card-body text-base">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
};

export default InofCard;