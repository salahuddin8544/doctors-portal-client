import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section className="hero my-24" 
        style={{background: `url(${appointment})`}}
        >
        <div className="hero-content p-0 flex-col lg:flex-row">
          <img src={doctor} className="hidden lg:block lg:w-1/2 h-1/2 -mt-32 rounded-lg" />
          <div className='p-4'>
            <h1 className="text-xl text-primary font-bold">Appoinment</h1>
            <p className="py-6 text-base">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
           <PrimaryButton></PrimaryButton>
          </div>
        </div>
      </section>
    );
};

export default MakeAppointment;