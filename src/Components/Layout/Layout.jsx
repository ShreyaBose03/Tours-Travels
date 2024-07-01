import { Outlet, useNavigate } from "react-router-dom";
import Header from "../NavigationBar/Header";
import AuthHeader from "../NavigationBar/AuthHeader";
import storageHandler from "../Helper/storageHandler";
import { useEffect, useState } from "react";

const Layout = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getUser();
    }, [])
    
    const getUser = () => {
        const authData = storageHandler.getLocalData();
        setUser(authData);
    }

    const logout = () => {
        storageHandler.removeLocalData("client");
        setUser(null);
        navigate("/login")
    }

    return (
        <>
        
            {user ? <AuthHeader user={user} logout={logout} /> : <Header />}
             <Outlet context={setUser}/>
        </>
    )
}

export default Layout;