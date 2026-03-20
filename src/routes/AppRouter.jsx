import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ClientsPage from '../pages/ClientsPage';
import ClientDetailPage from '../pages/ClientDetailPage';
import NotFoundPage from '../pages/NotFoundPage';
import { ROUTE } from '../constants/routes';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTE.HOME} element={<Navigate to={ROUTE.CLIENTS} replace />} />

                <Route path={ROUTE.CLIENTS} element={<ClientsPage />} />

                <Route path={`${ROUTE.CLIENTS}/:id`} element={<ClientDetailPage />} />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;