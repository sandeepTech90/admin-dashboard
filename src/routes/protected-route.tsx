// src/components/ProtectedRoute.tsx
import { useContext } from 'react';
import { AuthContext } from '../context/auth/auth-provider';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { state } = useContext(AuthContext) || {};
    
    if (!state?.isAuthenticated) {
        return <Navigate to="/login" />;
    }
    
    return <>{children}</>;
};