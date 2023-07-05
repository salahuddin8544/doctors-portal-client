import { useQuery } from '@tanstack/react-query';
import React from 'react';
// import 'dotenv/config'
// require('dotenv').config()
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';

const AdDoctor = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    
    const navigate = useNavigate()
    const apiKey= import.meta.env.VITE_SOME_KEY;
    
    console.log(apiKey);
    const{data: specialties,isLoading}= useQuery({
        queryKey:'specialty',
        queryFn:async ()=>{
            const res = await fetch('https://dorctors-portal-server.vercel.app/appointmentSpecialty')
            const data = res.json()
            return data
        }
    })
    if(isLoading){
        return  <Loading></Loading>
    }

    const handleDoctor = data => {
        const image = data.image[0];
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${apiKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(imgData=>{
            if(imgData.success){
                imgData.data.url
                console.log(imgData.data.url);
                const docrots= {
                    name: data.name,
                    specialty: data.specialty,
                    email: data.email,
                    image: imgData.data.url

                }
                // save doctors to database
                fetch('https://dorctors-portal-server.vercel.app/doctors', {
                    method: 'POST',
                    headers:{
                        'content-type': 'application/json',
                        authorization:`bearer ${localStorage.getItem('acceToken')}`
                     
                    },
                    body: JSON.stringify(docrots)
                })
                .then(res=>res.json())
                .then(result => {
                    console.log(result);
                    toast.success(`${result.name} doctor added successfully`);
                    navigate('/dashboard/manageDoctors')
                })
            }
        })
    }

    return (
        <div>
            <h3 className="text-4xl my-6">Add a Doctor</h3>
            <form onSubmit={handleSubmit(handleDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input className="input input-bordered w-full max-w-xs" type="text"
                        {...register("name",
                            { required: 'Please enter a your name' }
                        )}
                    />
                    {errors.name && <p role="alert">{errors.name?.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input className="input input-bordered w-full max-w-xs" type="email"
                        {...register("email", { required: "Email Address is required" })}

                    />
                    {errors.email && <p role="alert">{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register("specialty")} className="select input-bordered w-full max-w-xs">
                        {
                            specialties.map(specialty=>
                              
                                <option
                                key={specialty._id}
                                value={specialty.name}
                                >{specialty.name}</option>
                            )
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input className="input input-bordered w-full max-w-xs" type="file"
                        {...register("image", { required: "Select a image" })}

                    />
                    {errors.image && <p role="alert">{errors.image?.message}</p>}
                </div>
                <input type="submit" value='Add a Doctor' className="btn btn-accent mt-6 input input-bordered w-full max-w-xs" />

            </form>
        </div>
    );
};

export default AdDoctor;