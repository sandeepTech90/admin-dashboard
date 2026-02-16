// src/components/ProtectedRoute.tsx
// import { useContext } from 'react';
// import { AuthContext } from '../context/auth/auth-provider';
// import { Navigate, Outlet } from 'react-router-dom';

import { Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    // const { state } = useContext(AuthContext) || {};
    
    // if (!state?.isAuthenticated) {
    //     return <Navigate to="/login" />;
    // }
    
    return <Outlet />;
};