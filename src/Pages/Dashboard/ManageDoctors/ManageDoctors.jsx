import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { authContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const ManageDoctors = () => {
    const { user } = useContext(authContext)
    const [deletingDoctor,setDeletingDoctor] = useState(null);
    console.log(deletingDoctor);
    const { data: docrots,isLoading ,refetch} = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://dorctors-portal-server.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('acceTken')}`
                    }
                })
                const data = await res.json();
                return data
            }
            catch (err) {
                console.log(err);
            }
        }
    })
    const HandleDeletingDoctor = (modalData) => {
        fetch(`https://dorctors-portal-server.vercel.app/doctors/admin/${modalData._id}`,{
            method: 'DELETE',
            headers:{
                authorization: `Bearer ${localStorage.getItem('acceToken')}`
            }
        })
        .then(response =>response.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                refetch()
            }
        })
    }
    const closeModal = () => {
        setDeletingDoctor(null);
    }
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='my-6'>
            <h3 className="text-3xl">Manage Doctors</h3>
            </div>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Specialty</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        docrots?.map((doctor, i) => <tr
                            key={i}
                        >
                            <td>{i + 1}</td>
                            <td>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={doctor.image} />
                                    </div>
                                </div>
                            </td>
                            
                            <td>{doctor.name}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.specialty}</td>
                            <td>{user?.role !== 'admin' && <label htmlFor="confirmation-modal" className='bgn btn-sm btn-error' onClick={() => setDeletingDoctor(doctor)}>Delete</label>}</td>
                        </tr>)
                    }
                </tbody>
            </table>
            {
                deletingDoctor &&
                <ConfirmationModal
                title={'Are you sure you want to delete'}
                message={`if you delete ${deletingDoctor.name} It cannot be undone`}
                modalData={deletingDoctor}
                successAction={HandleDeletingDoctor}
                closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;