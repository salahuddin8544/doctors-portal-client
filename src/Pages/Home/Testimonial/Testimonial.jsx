import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people1.png'
import people3 from '../../../assets/images/people3.png'
import SingleTestimonial from './SingleTestimonial';
const Testimonial = () => {
    const testitmonialData = [
        {
            id: 1,
            name: 'John doe',
            location: 'California',
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people1
        },
        {
            id: 2,
            name: 'Winson Herry',
            location: 'California',
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people2
        },
        {
            id: 1,
            name:'John Smith',
            location: 'California',
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people3
        },
    ]
    return (
        <section>
            <div  className='flex justify-between items-center' >
                <div>
                    <h2 className='text-xl font-bold text-primary'>Testimonial</h2>
                    <p className='text-4xl'>What Our Patients Says</p>
                </div>
                <div>
                <img className='w-32' src={quote} alt="" />
                </div>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                testitmonialData.map(singleReview=> <SingleTestimonial
                key={singleReview.id}
                singleReview={singleReview}
                ></SingleTestimonial>)
            }
            </div>
        </section>
    );
};

export default Testimonial;