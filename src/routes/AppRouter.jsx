import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ClientsPage from '../pages/ClientPage';
import ClientDetailPage from '../pages/ClientDetailPage';
import NotFoundPage from '../pages/NotFoundPage';
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/clients" replace />} />

                <Route path="/clients" element={<ClientsPage />} />

                <Route path="/clients/:id" element={<ClientDetailPage />} />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;