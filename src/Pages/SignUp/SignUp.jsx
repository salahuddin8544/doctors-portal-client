import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import useToken from '../../Hooks/useToken';
const SignUp = () => {
    const [signUpError,setSignUpError] =useState('');
    const {register,handleSubmit,formState: { errors },} = useForm()
    const {createUSer,updateUser} = useContext(authContext)
    const [createUserEmail,setCreateUserEmail] = useState('')
    const [token] = useToken(createUserEmail)
    const navigate = useNavigate()
    if(token){
        navigate('/')
    }
    const handleSignUp=(data)=>{
        setSignUpError('')
        createUSer(data.email,data.password)
        .then(result=>{
            const user = result.user;
            toast('User created successfully')
            const userInfo={
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{
                saveUser(data.name, data.email)
            })
            .catch(err=> console.log(err))
        })
        .catch(errors=> {
            setSignUpError(errors.message)
            console.log(errors)})
    }
    const saveUser =(name,email)=>{
        const user = {name:name, email:email}
        fetch('https://dorctors-portal-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
           setCreateUserEmail(email)
        })
        .catch(err=>console.log(err));
}
    return (
        <div className=" flex items-center justify-center"> 
        <div className="text-center card shadow-lg">
        <h3 className="text-xl">SignUp</h3>
        <form onSubmit={handleSubmit(handleSignUp)}>
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
                          <span className="label-text">Password</span>
                      </label>
                      <input 
                       {...register('password', { required:'Password is required',
                        minLength:{value:6, message: 'Please enter 6 characters'},
                        pattern: {value:/(?=.*[!#$%&?])(?=.*[0-9])(?=.*[A-Z])/, message:'Password must be strength'}
                    }
                       )} 
                      className="input input-bordered w-full max-w-xs"  />
                        {errors.password && <p role="alert">{errors.password?.message}</p>}
                  </div>
                  <input type="submit" value='Sign Up' className="btn btn-accent mt-6 input input-bordered w-full max-w-xs" />
                  {
                    signUpError && <p>{signUpError}</p>
                  }
              </form>
              <p className="text-sm">Already have an account? <Link to={'/login'} className="text-primary">Login</Link></p>
              <div className="divider">OR</div>
              <button className="btn btn-outline w-full">CONTINUE TO GOOGLE</button>
        </div>
          </div>
    );
};

export default SignUp;