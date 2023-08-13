import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
    }
    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }
    button {
        cursor: pointer;
    }
`;