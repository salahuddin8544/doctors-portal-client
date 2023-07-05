import React from 'react';
import treatment from '../../../../assets/images/treatment.png'
import PrimaryButton from '../../../../Components/PrimaryButton/PrimaryButton';
const Care = () => {
    return (
        <div className='grid grid-cols-1 my-16 gap-4 md:grid-cols-2 justify-center items-center'>
        
           <img className='w-full md:w-3/4 rounded' src={treatment} alt="" />
            <div className=''>
                <h2 className='text-4xl md:text-5xl'>Exceptional Dental Care, on Your Terms</h2>
                <p className='my-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
               <PrimaryButton></PrimaryButton>
            </div>
        </div>
    );
};

export default Care;