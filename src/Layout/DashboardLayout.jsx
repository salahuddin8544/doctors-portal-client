import React, { useContext } from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import { authContext } from '../Context/AuthProvider';

const DashboardLayout = () => {
    const {user} = useContext(authContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to='/dashboard'>My Appoinment</Link></li>
                        {
                        isAdmin &&
                        <>
                        
                    <li><Link to='/dashboard/allusers'>All Users</Link></li>
                    <li><Link to='/dashboard/addDoctor'>Add a doctor</Link></li>
                    <li><Link to='/dashboard/manageDoctors'>Manage doctors</Link></li>
                        </>
                    }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;