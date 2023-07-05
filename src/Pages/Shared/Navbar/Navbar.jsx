import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../Context/AuthProvider";

const Navbar = () => {
  const{user,logOut} = useContext(authContext)
  const handleDashboard =()=>{
    logOut()
    .then(()=>{})
    .catch(err=>console.log(err))
  }
    const menuItem = <React.Fragment>
        <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/appointment">Appointment</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
           {
           user?.uid?
        <>
           <Link className="nav-link" to={'/dashboard'}>Dashboard</Link>
           <button onClick={handleDashboard}>Sign Out</button>
        </>
           :
           <Link className="nav-link" to="login">Login</Link>
          }
        </li>
    </React.Fragment>
    return (
       <div>
         <div className="navbar">
  <div className="navbar-start w-full">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItem}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {menuItem}
    </ul>
  </div>
  {
    user &&
    <label  htmlFor="dashboard-drawer" tabIndex={1} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  }
</div>
       </div>
    );
};

export default Navbar;