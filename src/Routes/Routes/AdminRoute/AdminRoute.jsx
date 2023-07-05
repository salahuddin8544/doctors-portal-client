import React, { useContext } from 'react';
import useAdmin from '../../../Hooks/useAdmin';
import { authContext } from '../../../Context/AuthProvider';
import Loading from '../../../Pages/Shared/Loading/Loading';

const AdminRoute = ({children}) => {
    const {user} = useContext(authContext)
    const [isAdmin,isAdminLoadin] = useAdmin(user?.email)
    if(isAdminLoadin){
        <Loading></Loading>

    }
    if(user && isAdmin){
        return children
    }
};

export default AdminRoute;