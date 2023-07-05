import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import Loading from '../../../Shared/Loading/Loading';

const Payment = () => {
    const publish_Key = import.meta.env.VITE_STRIPE_PUBLISH_KEY;
    const stripePromise = loadStripe(publish_Key);
    const bookings = useLoaderData()
    const navigation = useNavigation();
    
    if(navigation.state === 'loading') {
        return <Loading></Loading>
    }
    const { treatement, price, appoinmentDate, slot } = bookings
    return (
        <div>
            <h3 className='text-3xl'>Payment for {treatement}</h3>
            <p className='text-xl'>Please pay <strong>${price}</strong> for your appoinment on {appoinmentDate} at {slot}</p>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    booking={bookings}
                    ></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;