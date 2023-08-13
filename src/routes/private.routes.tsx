/*
  AppRoutes Component
  This component defines the main routing structure of the application using React Router.

  The component includes:
  - Usage of the `useAuth` hook to access user authentication status.
  - Usage of `useLocation` and `useNavigate` from React Router to handle navigation.
  - An `useEffect` to automatically redirect logged-in users from the root path ("/") to the "/products" path.
  - Rendering of the `Layout` component as a wrapper for the routing structure.
  - Usage of the `Routes` and `Route` components to define specific routes and their associated components.

  Example Usage:
  Include the `AppRoutes` component in your main application entry point to establish the application's routing structure.
*/

import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Layout from "../layout/Layout";
import { useAuth } from '../hooks/auth';

import Products from "../pages/products/Products";

export const PrivateRoutes: React.FC = () => {
    const { logged } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if(logged && location.pathname === "/"){
            navigate("/products")
        } 
    }, [logged, location]);

    return (
        <Layout>
            <Routes>
                <Route path="/products" element={<Products />} />
            </Routes>
        </Layout>
    );
};