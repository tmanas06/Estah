'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('forest'); // Default to forest

    useEffect(() => {
        // Check local storage for theme preference
        const savedTheme = localStorage.getItem('estah-theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        // Update data-theme on document element
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('estah-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'forest' ? 'ocean' : 'forest');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
