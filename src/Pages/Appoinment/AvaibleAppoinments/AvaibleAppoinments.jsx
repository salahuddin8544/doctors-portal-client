import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import SingleAppoinment from './SingleAppoinment';
import BookingAppoinment from '../BookginAppoinment/BookingAppoinment';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvaibleAppoinments = ({selectedDate}) => {
    const [treatment,setTreatment] = useState(null);
    const date = format(selectedDate,'PP')
    const {data:appointmentOption= [],  refetch,isLoading } = useQuery({
        queryKey: ['appointmentOption'],
        queryFn: () =>
          fetch(`https://dorctors-portal-server.vercel.app/appointmentOption?date=${date}`).then(
            (res) => res.json(),
          ),
      })
      if(isLoading){
        return <Loading></Loading>
      }
    
    return (
        <div className='my-16'>
           <p className='font-bold text-primary text-center'>You have selected {format(selectedDate,'PP')}</p>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                appointmentOption.map(appoinment=> <SingleAppoinment
                key={appoinment.id}
                appoinment={appoinment}
                setTreatment={setTreatment}
                ></SingleAppoinment>)
            }
           </div>
           { treatment &&
            <BookingAppoinment
            refetch={refetch}
            treatment={treatment}
            selectedDate={selectedDate}
            setTreatment={setTreatment}
            ></BookingAppoinment>
           }
        </div>
    );
};

export default AvaibleAppoinments;