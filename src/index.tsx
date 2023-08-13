/*
  Application Entry Point
  This module serves as the entry point of the application where the root component (App) is rendered within the ReactDOM.

  The module includes:
  - Importing of required modules and components.
  - Use of `ReactDOM.createRoot` to render the root component using Concurrent Mode.
  - Wrapping the root component with the `ThemeProvider` and `AuthProvider` to provide theme and authentication context.
  - Optional use of `React.StrictMode` to highlight potential issues during development.
  - Calling the `reportWebVitals` function to measure performance metrics (if needed).
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './hooks/theme';
import { AuthProvider } from './hooks/auth';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
