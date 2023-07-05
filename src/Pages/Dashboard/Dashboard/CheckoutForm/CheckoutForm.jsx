import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({booking}) => {
  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const {email,patient,name,price,_id} = booking;
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://dorctors-portal-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json",
      authorization: `bearer ${localStorage.getItem('acceToeken')}`
    },

      body: JSON.stringify({price}),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      console.log('[error]', error.message);
      setCardError(error.message)
    } else {
      setCardError('');
      setProcessing(true)
    }
    setSuccess('')
    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name:name,
            email:email
          },
        },
      },
    );

    if(confirmError){
      setCardError(confirmError.message);
      return
    }
    if(paymentIntent.status === 'succeeded'){
      
      const payment = {
        price,
        transactionId: transactionId.id,
        email,
        bookingId :_id

      }
      fetch('https://dorctors-portal-server.vercel.app/payments',{
        method: 'POST',
        headers:{
          'content-type': 'application/json',
          authorization: `bearer ${localStorage.getItem('acceToken')}`
        },
        body: JSON.stringify(payment)
        
      })
      .then(res=>res.json())
      .then(data =>{
        console.log(data);
        if(data.insertedId){
          setSuccess(`Your payment ${paymentIntent.status}`)
          setTransactionId(paymentIntent.id)
        }
      })
    }
    setProcessing(false)
  }
  return (
    <div className='w-96 my-6'>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-sm my-2' type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      <div>
      <p
      style={{color:'red'}}
      className='text-red-400'>{cardError}</p>
        
            {
              success &&
              <div>
                <p
                style={{color: 'green'}}
                className='text-green-500'>{success}</p>
                <p 
                style={{color: 'muted'}}
                className='text-bold'>Your Transaction ID: {transactionId}</p>
              </div>
            }
      </div>
    </div>
  );
};

export default CheckoutForm;