import { format } from "date-fns";
import { useContext } from "react";
import { authContext } from "../../../Context/AuthProvider";
import { toast } from "react-hot-toast";


const BookingAppoinment = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name: treatmentName, slots, price } = treatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(authContext)
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const slot = form.slot.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appoinmentDate: date,
            patient: name,
            treatement: treatmentName,
            slot,
            email,
            phone,
            price
        }
        console.log(booking);
        fetch('https://dorctors-portal-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('booking Confirmed')
                    refetch()
                }
                else {
                    toast.error(data.message)
                }
            })

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <h3 className="text-2xl text-bold">{treatmentName}</h3>
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking}>
                        <input type="text" value={date} placeholder="Type here" className="input input-bordered w-full mt-2" />
                        <select name="slot" className="select select-bordered w-full mt-2">

                            {
                                slots.map((slot, index) =>
                                    <option
                                        key={index}
                                        value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name="name" disabled defaultValue={user?.displayName} type="text" placeholder="Your name" className="input input-bordered w-full mt-2" />
                        <input name="email" disabled defaultValue={user?.email} type="text" placeholder="Your email" className="input input-bordered w-full mt-2" />
                        <input name="phone" type="text" placeholder="Your Phone" className="input input-bordered w-full mt-2" />
                        <br />
                        <input type="submit" value="Submit" className="btn btn-accent w-full mt-2" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingAppoinment;