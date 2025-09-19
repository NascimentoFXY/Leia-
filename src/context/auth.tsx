
import React, { useState, useEffect, createContext, use } from "react";

interface User{
    id: string,
    name:string,
    password: string,
    email: string,
}
interface AuthContextData {
    user: User | null;
    loading: boolean;
    isAuthenticated: boolean;
    signIn: (data: any) => Promise<void>;
    signOut: () => Promise<void>;
  };

export const AuthContext = createContext<AuthContextData | null>(null);

export default function AuthProvider({children}: {children: React.ReactNode}){
    const [user, setUser]= useState(null)
    return(
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}