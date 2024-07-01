import React from 'react';
import { Navigate } from "react-router-dom";
import storageHandler from "../Components/Helper/storageHandler";

const UnAuth = ({children}) => {
    const authData=storageHandler.getLocalData();
    if(!authData?.email){
        return<>{children}</>
    }
    else{
        return<Navigate to="/about" replace/>
    }
}
 

export default UnAuth;

