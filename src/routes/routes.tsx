import React, { useEffect } from "react";
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import { AppRoutes } from "./private.routes";
import Auth from './public.routes';
import { useAuth } from '../hooks/auth';


const Routes: React.FC = () => {
    const { logged } = useAuth();


    return (
        <BrowserRouter>
            { logged ? 
                <AppRoutes /> : 
                <Auth  /> 
            }
        </BrowserRouter>
    );
};

export default Routes;