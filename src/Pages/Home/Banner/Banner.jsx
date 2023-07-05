import React from 'react';
import imgChair from "../../../../src/assets//images/chair.png"
import bgChair from "../../../../src/assets//images/chair.png"
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
const Banner = () => {
    return (
        <div className="hero" style={{backgroundImage:`url(${bgChair})`}}>
        <div className="hero-content flex-col h-full lg:flex-row-reverse" style={{backgroundColor: 'rgba(255, 255, 255, 0.90)'}}>
            <img src={imgChair} className="lg:w-1/2 rounded-lg shadow-2xl" />
            <div>
            <h1 className="text-5xl my-6 font-bold">Your New Smile Start here</h1>
           <PrimaryButton></PrimaryButton>
            </div>
        </div>
        </div>
    );
};

export default Banner;