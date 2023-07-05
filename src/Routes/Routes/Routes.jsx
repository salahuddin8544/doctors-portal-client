import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Appoinment from "../../Pages/Appoinment/Appoinment/Appoinment";
import SignUp from "../../Pages/SignUp/SignUp";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyAppoinment from "../../Pages/Dashboard/MyAppoinment/MyAppoinment";
import AllUsers from "../../Pages/Dashboard/All Users/AllUsers";
import AdminRoute from "./AdminRoute/AdminRoute";
import AdDoctor from "../../Pages/Dashboard/AddDoctor/AdDoctor";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../../Pages/Dashboard/Dashboard/payment/Payment";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
const router =createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path: "/",
                element:<Home></Home>,
            },
            {
                path: "/login",
                element:<Login></Login>,
            },
            {
                path: "/signup",
                element:<SignUp></SignUp>
            },
            {
                path: "/appointment",
                element:<Appoinment></Appoinment>
            },
        ]
    },
    {
        path: '/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path: '/dashboard',
                element:<MyAppoinment></MyAppoinment>,
            },
            {
                path: '/dashboard/allusers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addDoctor',
                element:<AdminRoute><AdDoctor></AdDoctor></AdminRoute>
            },
            {
                path: '/dashboard/manageDoctors',
                element:<AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader:({params})=> fetch(`https://dorctors-portal-server.vercel.app/bookings/${params.id}`)

            }
        ]
    }
])
export default router;