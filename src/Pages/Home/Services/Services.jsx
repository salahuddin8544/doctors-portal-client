import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {
    const seviceData = [
        {
          id:'1',
          name:"Fluoride Treatment",
          description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
          icon: fluoride
        },
        {
          id:'2',
          name:"Cavity Filling",
          description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
          icon: cavity
        },
        {
          id:'3',
          description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
          icon: whitening
        },
    ]
    return (
        <div>
              <div className='text-center '>
                <h4 className='text-4xl font-bold text-secondary'>Our Services</h4>
                <h1 className='text-4xl md:text-5xl my-4'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 my-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                seviceData.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
}
            </div>
        </div>
    );
};

export default Services;