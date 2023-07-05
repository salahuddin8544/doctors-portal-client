import React from 'react';
import { DayPicker } from 'react-day-picker';

import bgChair from "../../../../src/assets/images/chair.png"
const AppoinmentBanner = ({selectedDate,setSelected}) => {
    return (
        <div className="hero">
        <div className="hero-content flex-col h-full lg:flex-row-reverse" style={{backgroundColor: 'rgba(255, 255, 255, 0.90)'}}>
            <img src={bgChair} className="lg:w-1/2 rounded-lg shadow-2xl" />
            <div>
            <DayPicker 
            mode='single'
            selected={selectedDate}
            onSelect={setSelected}
            />
            </div>
        </div>
        </div>
    );
};

export default AppoinmentBanner;