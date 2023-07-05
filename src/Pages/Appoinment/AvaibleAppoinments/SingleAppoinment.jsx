import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const SingleAppoinment = ({appoinment,setTreatment}) => {
    const {slots, name,price} = appoinment
    return (
        <div className='card shadow-xl text-center'>
            <h2 className='text-3xl text-primary mb-3'>{name}</h2>
            <p className='font-bold'>{slots.length > 0 ? slots[0]:'Try another day'}</p>
            <p>{slots.length} {slots.length < 1 ? 'space':'spaces'}</p>
            
            <p className=' py-6'> Price:{price}</p>
        <label htmlFor="booking-modal"
        disabled={slots.length === 0}
        onClick={()=> setTreatment(appoinment)}
        className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Book Appoinment</label>
        </div>
    );
};

export default SingleAppoinment;