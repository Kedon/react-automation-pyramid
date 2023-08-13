/*
  Authentication Context
  This module defines an authentication context using React's Context API. It allows components to manage user authentication state, sign in, and sign out.

  The context includes:
  - `AuthContext` createContext: A context object that provides access to authentication-related functions and state.
  - `AuthProvider` component: A provider component that wraps the application and manages authentication state.
    - Uses `useState` to manage the logged-in state based on localStorage.
    - Defines `signIn` and `signOut` functions to handle user authentication.
  - `useAuth` hook: A custom hook that allows components to access the authentication context.

  Example Usage:
  Wrap your application with the `AuthProvider` component to enable authentication management across the app.
  Use the `useAuth` hook in components to access authentication functions and state.
*/

import React, { createContext, useState, useContext } from 'react';

interface IAuthContext {
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@automation-pyramid:logged');

        return !!isLogged;
    });

    const signIn = (email: string, password: string) => {
        if(email === 'admin@admin.com' && password === '123'){
            localStorage.setItem('@automation-pyramid:logged', 'true');
            setLogged(true);
        }else{
            alert('Invalid email or password!');
        }
    }

    const signOut = () => {
        localStorage.removeItem('@automation-pyramid:logged');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{logged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };