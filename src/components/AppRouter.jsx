import React, { useContext } from 'react'
import Error from '../pages/Error';
import { Route, Routes } from "react-router-dom"
import { privateRoutes, publicRoutes } from '../router';
import Login from '../pages/Login';
import { AuthContext } from '../context';
import Loader from './UI/loader/Loader';


const AppRouter = () => {
    const {isAuth, isLoading}=useContext(AuthContext)
    
    if (isLoading){
        return <Loader/>
    }

    return (
        isAuth
        ?<Routes>
        {privateRoutes.map(route =>
            <Route
                Component={route.component}
                path={route.path}
                exact={route.exact}
                key={route.path}
            />
        )}

        <Route path="*" element={<Error />} />
    </Routes>
        : <Routes>
        {publicRoutes.map(route =>
            <Route
                Component={route.component}
                path={route.path}
                exact={route.exact}
                key={route.path}
            />
        )}

        <Route path="*" element={<Login/>} />
    </Routes>
        
    )
}

export default AppRouter