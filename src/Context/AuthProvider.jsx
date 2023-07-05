import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/Firebase.config';
export const authContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const[user,setUser] = useState('')
    const [loading,setLoading] = useState(true)
    const createUSer = (email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

const signIn =(email,password)=>{
    setLoading(true)
     return signInWithEmailAndPassword(auth, email, password)
}
const updateUser=(userInfo)=>{
   
    return updateProfile(auth.currentUser,userInfo)
}
const logOut =()=>{
    setLoading(true)
   return signOut(auth)
}
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false)
    });
    return ()=> unsubscribe();
},[])

    const value ={
        createUSer,
        signIn,
        user,
        logOut,
        updateUser,
        loading,
    }
    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;