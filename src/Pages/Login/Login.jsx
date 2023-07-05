import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/AuthProvider";
import useToken from "../../Hooks/useToken";
import { toast } from "react-hot-toast";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const {signIn}= useContext(authContext)
    const [loginError,setLoginError] = useState('')
    const { register,formState: { errors }, handleSubmit } = useForm()
    const [loginUserEmail,setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)
    if(token){
        toast.success('Login Successfully')
        navigate(from,{replace: true})
    }
    const handleLogin = (data) => {
        setLoginError('')
    signIn(data.email, data.password)
    .then(result=> {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email)
        
    })
    .catch(err => {
        setLoginError(err.message)})
  }

    return (
        <div className=" flex items-center justify-center"> 
      <div className="text-center card shadow-lg">
      <h3 className="text-xl">Login</h3>
      <form onSubmit={handleSubmit((handleLogin))}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input className="input input-bordered w-full max-w-xs" type="email"  {...register("email", { required: 'Email is required' })} />
                    {errors.email && <p role="alert" className="text-red-600">{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input className="input input-bordered w-full" type="password"  {...register("password",  { required: 'Password si required', minLength: {value:6, message: 'Must be at least 6 characters'} 
                })}/>
                    {errors.password && <p role="alert" className="text-red-600">{errors.password?.message}</p>}
                    <label className="label">
                    <Link>Forget password</Link>
                    </label>
                </div>
                <input type="submit" value='Login' className="btn btn-accent mt-6 input input-bordered w-full max-w-xs" />
                <div>
                    {
                        loginError &&  <p className="text-red-600">Email or Password wrong</p>
                    }
                </div>
            </form>
            <p className="text-sm">New to Doctors portal? <Link to={'/signup'} className="text-primary">Create new account</Link></p>
      </div>
        </div>
    );
};

export default Login;