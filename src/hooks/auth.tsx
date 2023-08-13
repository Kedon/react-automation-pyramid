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