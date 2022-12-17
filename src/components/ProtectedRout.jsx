import React from 'react'
import { Navigate } from "react-router-dom";

const ProtectedRout = ({children}) => {



    if (localStorage.getItem('token')) {
    return children
}
else{
 return (
     <Navigate to="/register"/>

  )
}




 
}

export default ProtectedRout