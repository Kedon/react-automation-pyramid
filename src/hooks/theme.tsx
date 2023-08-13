/*
  Theme Context
  This module defines a theme context using React's Context API. It enables components to manage and toggle between different application themes.

  The context includes:
  - `ThemeContext` createContext: A context object that provides access to theme-related functions and state.
  - `ThemeProvider` component: A provider component that wraps the application and manages the current theme state.
    - Uses `useState` to manage the theme based on localStorage.
    - Defines `toggleTheme` function to switch between light and dark themes.
  - `useTheme` hook: A custom hook that allows components to access the theme context.

  Example Usage:
  Wrap your application with the `ThemeProvider` component to enable theme management across the app.
  Use the `useTheme` hook in components to access theme functions and state.
*/

import React, { createContext, useState, useContext } from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface IThemeContext {
    toggleTheme(): void;
    theme: ITheme;
}

export interface ITheme {
    title: string;

    colors: {
        primary: string;
        secondary: string;
        tertiary: string;

        white: string;
        black: string;
        gray: string;

        success: string;
        info: string;
        system: string;
        warning: string;
        danger: string;
    }
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<ITheme>(() => {
        const themeSaved = localStorage.getItem('@automation-pyramid:theme');

        if(themeSaved) {
            return JSON.parse(themeSaved);
        }else{
            return light;
        }
    });

    const toggleTheme = () => {
        if(theme.title === 'dark'){
            setTheme(light);
            localStorage.setItem('@automation-pyramid:theme', JSON.stringify(light));
        }else{
            setTheme(dark);
            localStorage.setItem('@automation-pyramid:theme', JSON.stringify(dark));
        }
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme(): IThemeContext {
    const context = useContext(ThemeContext);

    return context;
}


export { ThemeProvider, useTheme };
