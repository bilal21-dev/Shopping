// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [login, setLogin] = useState(() => {
        return JSON.parse(localStorage.getItem("loginstate")) || false;
    });
    return (
        <AuthContext.Provider value={{ login, setLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
