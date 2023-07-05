import { useEffect, useState } from "react";


const useToken = (email) => {
   const [token,setToken] = useState('')
    useEffect(()=>{
        if(email){
            fetch(`https://dorctors-portal-server.vercel.app/jwt?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.acceToken){
                localStorage.setItem('acceToken', data.acceToken)
                setToken(data.acceToken)
            }
        })
        }
    },[email])
    return[token]
};

export default useToken;