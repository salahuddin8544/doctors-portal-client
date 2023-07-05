import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AvaibleAppoinments from '../AvaibleAppoinments/AvaibleAppoinments';

const Appoinment = () => {
    const[selectedDate, setSelected] = useState(new Date)
    
    return (
        <div>
           <AppoinmentBanner
           selectedDate={selectedDate}
           setSelected={setSelected}
           ></AppoinmentBanner>
           <AvaibleAppoinments
           selectedDate={selectedDate}
           ></AvaibleAppoinments>
        </div>
    );
};

export default Appoinment;