import { createContext, useReducer, type ReactNode } from "react";
import { authReducer } from "./auth-reducer";
import type { AuthContextType } from "./auth.types";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    });

    return <AuthContext.Provider value={{ state, dispatch }}>
        {children}
    </AuthContext.Provider>;
}