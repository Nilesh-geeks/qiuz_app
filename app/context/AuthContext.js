"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const generateRandomUsername = () => {
    return `User${Math.floor(Math.random() * 1000)}`; // Generates a random username
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
            setIsAuthenticated(true);
        }
    }, []);

    const login = (username) => {
        localStorage.setItem('username', username);
        setUsername(username);
        setIsAuthenticated(true);
    };

    const signup = (username) => {
        localStorage.setItem('username', username);
        setUsername(username);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('username');
        const newUsername = generateRandomUsername();
        setUsername(newUsername); // Set a new random username
        setIsAuthenticated(false);
        // Optionally, save the new username to localStorage
        localStorage.setItem('username', newUsername);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, username, login, logout, signup }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

