// AuthContext.js
import React, { createContext, useState, useContext,useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [login, setLogin] = useState(() => {
        return JSON.parse(localStorage.getItem("loginstate")) || false;
    });
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("cart")) || [];
    });
    // useEffect(() => {
    //     localStorage.setItem("cart", JSON.stringify(cart));
    // }, [cart]);

    const addToCart = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart)); 
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId); 
        setCart(updatedCart); // Update state
        localStorage.setItem("cart", JSON.stringify(updatedCart)); 
    };

    return (
        <AuthContext.Provider value={{ login, setLogin, cart, addToCart, removeFromCart,setCart }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
