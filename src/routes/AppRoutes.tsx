import React from 'react';
import { Route, Routes } from 'react-router';
import { Login } from '../pages/Login'
import { Homepage } from '../pages/Homepage';
import Invoices from '../pages/Invoices';
import Layout from '../SmartComponents/Layout/Layout';
import NotFound404 from '../pages/NotFound404';
import { Navigate } from 'react-router-dom';
import Register from '../pages/Register';

export const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path='invoices' element={<Invoices />} />

    </Route>
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />

    <Route path='/logout' element={<Navigate replace to={'/login'} />} />

    <Route path="*" element={<NotFound404 />} />

  </Routes>
);
