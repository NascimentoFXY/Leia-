
import React, { useState, useEffect, createContext, use, useContext } from "react";

interface User {
    id: string,
    name: string,
    password: string,
    email: string,
}
interface AuthContextData {
    user: User | null;
    // loading: boolean;
    isAuthenticated: boolean;
    authUser: (value: boolean) => void
    // signIn: (data: any) => Promise<void>;
    // signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextData | null>(null);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState(null)
    const [authenticaded, setAuthenticaded] = useState(false)
    const authUser = (value: boolean) => {
        setAuthenticaded(value)
    }

    return (
        <AuthContext.Provider value={{ user: user, isAuthenticated: authenticaded, authUser }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext);
