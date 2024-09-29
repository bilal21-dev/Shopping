// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [login, setLogin] = useState(() => {
        return JSON.parse(localStorage.getItem("loginstate")) || false;
    });
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("cart")) || [];
    });
    const [profileItem, setProfileItem] = useState(() => {
        return JSON.parse(localStorage.getItem("profileItem")) || [];
    })
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    useEffect(() => {
        localStorage.setItem("profileItem", JSON.stringify(profileItem));
    }, [profileItem]);

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



    const addToProfile = (product) => {
        const updatedProfile = [...profileItem, product];
        setProfileItem(updatedProfile);
        localStorage.setItem("profileItem", JSON.stringify(updatedProfile));
    };
    const removeFromProfile = (productId) => {
        const updatedProfile = profileItem.filter(item => item.id !== productId);
        setProfileItem(updatedProfile); // Update state
        localStorage.setItem("profileItem", JSON.stringify(updatedProfile));
    };



    return (
        <AuthContext.Provider value={{ login, setLogin, cart, addToCart, removeFromCart, setCart, addToProfile, removeFromProfile, setProfileItem, profileItem }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
