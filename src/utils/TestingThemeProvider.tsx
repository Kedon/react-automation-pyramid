import React from "react";
import { ThemeProvider } from "styled-components";
import light from '../styles/themes/light';

export default function TestingThemeProvider({ children }: any) {
    return (
        <ThemeProvider theme={light}>
            {children}
        </ThemeProvider>
    );
}