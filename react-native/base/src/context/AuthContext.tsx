import { useEffect, useState, type PropsWithChildren } from 'react';
import { AuthStatus, type AuthStatus as AuthStatusType, type User } from './auth.types';
import { AuthContext } from './auth.context';

export const AuthProvider = ({children}: PropsWithChildren) => {
    const [status, setStatus] = useState<AuthStatusType>(AuthStatus.checking);
    const [user, setUser] = useState<User>();
    
    useEffect(()=>{
        setTimeout(()=>{
            setStatus(AuthStatus.unauthenticated);
        },1500);
    }, []);

    const loginWithEmailPassword = (email:string)=>{
        setUser({
            name:'Fernando Herrera',
            email: email,
        });
        setStatus(AuthStatus.authenticated);
    };

    const logout = () =>{
        setUser(undefined);
        setStatus(AuthStatus.unauthenticated)
    };

    return(
        <AuthContext.Provider
            value={{
                status: status,
                user:user,

                isChecking:status === AuthStatus.checking,
                isAuthenticated: status === AuthStatus.authenticated,

                loginWithEmailPassword,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};