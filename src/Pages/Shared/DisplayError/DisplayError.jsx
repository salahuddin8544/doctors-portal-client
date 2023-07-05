import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router';
import { authContext } from '../../../Context/AuthProvider';

const DisplayError = () => {
    const{user,logOut} = useContext(authContext)
    const navitage = useNavigate()
  const handleDashboard =()=>{
    navitage('/')
    logOut()
    .then(()=>{})
    .catch(err=>console.log(err))
  }
    const error = useRouteError();
    return (
        <div className='text-center my-6'> 
           <p className="text-red-500">Some thing went wrong!</p>
           <p className="text-red-400">{error.message}</p>
           <p className="text-3xl">Please <button className='btn btn-sm' onClick={handleDashboard}>Sign Out</button> safety and go to back! </p>
        </div>
    );
};

export default DisplayError;