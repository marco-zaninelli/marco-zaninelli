import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext({
    themeMode: 'light',

});

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Initialize the theme based on system preference
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            setIsDarkMode(mediaQuery.matches);

            // Handle system theme changes
            const handleChange = (e) => setIsDarkMode(e.matches);
            mediaQuery.addEventListener('change', handleChange);

            // Cleanup listener on component unmount
            return () => {
                mediaQuery.removeEventListener('change', handleChange);
            };
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
