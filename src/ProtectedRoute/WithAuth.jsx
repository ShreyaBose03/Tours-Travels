// import { Navigate } from "react-router-dom";
// import storageHandler from "../Components/Helper/storageHandler";

// const  = ({ children }) => {
//     const authData = storageHandler.getLocalData();
//     if (authData?.email) {
//         return <>{children}</>
//     } else {
//         return <Navigate to="/login" replace />
//     }
// }

// export default WithAuth;

 import React from 'react';
import { Navigate } from "react-router-dom";
import storageHandler from "../Components/Helper/storageHandler";

const WithAuth = ({children}) => {
    const authData=storageHandler.getLocalData();
    if(authData?.email){
        return<>{children}</>
    }
    else{
        return<Navigate to="/login" replace/>
    }
}
 

export default WithAuth;

