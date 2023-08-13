/*
  Routes Component
  This component defines the main routing structure of the application using React Router.

  The component includes:
  - Usage of the `useAuth` hook to access user authentication status.
  - Conditional rendering of `PrivateRoutes` when the user is logged in and `PublicRoutes` when not logged in.
  - Wrapping the routing structure with `BrowserRouter` to enable routing functionality.

  Example Usage:
  Include the `Routes` component in your main application entry point to establish the application's routing structure based on user authentication status.
*/

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "./private.routes";
import PublicRoutes from './public.routes';
import { useAuth } from '../hooks/auth';


const Routes: React.FC = () => {
    const { logged } = useAuth();


    return (
        <BrowserRouter>
            { logged ? 
                <PrivateRoutes /> : 
                <PublicRoutes  /> 
            }
        </BrowserRouter>
    );
};

export default Routes;