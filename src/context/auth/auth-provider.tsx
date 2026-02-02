import { createContext, useReducer, useEffect, useState, type ReactNode } from "react";
import { authReducer } from "./auth-reducer";
import type { AuthContextType } from "./auth.types";
import { getCookie } from "../../utils/cookies";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        token: null,
        isAuthenticated: false
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = getCookie('authToken');
        if (token) {
            dispatch({ type: 'RESTORE_TOKEN', payload: token });
        }
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <AuthContext.Provider value={{ state, dispatch }}>
        {children}
    </AuthContext.Provider>;
}