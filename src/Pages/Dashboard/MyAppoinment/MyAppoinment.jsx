import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { authContext } from '../../../Context/AuthProvider';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const MyAppoinment = () => {
    const {user} = useContext(authContext)
    const url = `https://dorctors-portal-server.vercel.app/bookings?email=${user?.email}`
    const{data:bookings=[] ,isLoading} = useQuery({
        queryKey:['bookings',user.email],
        queryFn: async ()=>{
            const res = await fetch(url,{
                headers:{
                        authorization:`bearer ${localStorage.getItem('acceToken')}`
                     }
            })
            const data = await res.json();
            return data
        }
       
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className="overflow-x-auto">
            <h3 className="text-3xl mb-6">My Appoinment</h3>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Treatment</th>
                        <th>Time</th>
                        <th>Date</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                            bookings.map((booking,i)=> <tr
                            key={i}
                            >
                        <td>{i}</td>
                        <td>{booking.patient}</td>
                        <td>{booking.treatement}</td>
                        <td>{booking.slot}</td>
                        <td>{booking.appoinmentDate}</td>
                        <td>{
                            booking?.price && !booking.paid && <Link
                            to={`/dashboard/payment/${booking._id}`}
                            >
                                <button
                                className='btn btn-sm'
                                >Pay</button>
                            </Link>

                            }
                            {
                                booking?.price && booking.paid && <span>Paid</span>
                            }
                            </td>
                            </tr>)
                        }
                </tbody>
            </table>
        </div>
    );
};

export default MyAppoinment;