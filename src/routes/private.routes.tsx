import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Layout from "../layout/Layout";
import { useAuth } from '../hooks/auth';

import Products from "../pages/products/Products";

export const AppRoutes: React.FC = () => {
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
                <Route path="/pricing" element={<div>Pricing</div>} />
            </Routes>
        </Layout>
    );
};