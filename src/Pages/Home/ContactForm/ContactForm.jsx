import React from 'react';

import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const ContactForm = () => {
    return (
        <div className='py-3 md:py-6'
        style={
            {background:`url(${appointment})`}
        }
        >
            <div className='text-center my-6'>
                <h2 className='text-xl text-primary font-bold'>Contact Us</h2>
                <p className='text-2xl md:text-3xl text-base'>Stay connected with us</p>
            </div>
            <div className='w-3/4 md:w-1/2 mx-auto'>
                <div className="form-control">
                <input type="text" placeholder="Email address" className="input input-bordered" />
                </div>
                <div className="form-control">
                <input type="text" placeholder="Subjects" className="input input-bordered my-4" />
                </div>
                <div className="form-control">
                    <textarea className="textarea textarea-bordered" placeholder='Your Message' id="" cols="20" rows="5"></textarea>
                </div>
                  <div className='text-center my-6'>
                  <PrimaryButton></PrimaryButton>
                  </div>
            </div>
        </div>
    );
};

export default ContactForm;