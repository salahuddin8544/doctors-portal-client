import React from 'react';
import clock from "../../../../../src/assets/icons/clock.svg";
import map from "../../../../assets/icons/marker.svg"
import phone from "../../../../assets/icons/phone.svg"
import InofCard from './InofCard';
const InfoCards = () => {
    const cardData = [
        {
            id:"1",
            name:"Openings Hours",
            description:"Open 9:00 am to 5:00 pm",
            icon:clock,
            bgClass:"bg-gradient-to-r from-primary to-secondary text-light"
        },
        {
            id:"2",
            name:"Visit Our location",
            description:"Brklyn, NY 10036, United States",
            icon:map,
            bgClass:"bg-acen"
        },
        {
            id:"3",
            name:"Contact Us Now",
            description:"+000 123 456789",
            icon:phone,
            bgClass:"bg-gradient-to-r from-primary to-secondary text-light",
        },
    ]
    return (
        <div className='grid grid-col md:grid-cols-2 gap-6 my-9 lg:grid-cols-3'>
          
            {
                cardData.map(card=> <InofCard
                key={card.id}
                card={card}
                ></InofCard>)
            }
        </div>
    );
};

export default InfoCards;