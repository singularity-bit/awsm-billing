import React from 'react';
import { Route, Routes } from 'react-router';
import { Login } from '../pages/Login'
import { Homepage } from '../pages/Homepage';
import Invoices from '../pages/Invoices';
import Layout from '../SmartComponents/Layout/Layout';
import NotFound404 from '../pages/NotFound404';

export const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path='invoices' element={<Invoices />} />
      <Route path="*" element={<NotFound404 />} />

    </Route>
    <Route path='/login' element={<Login />} />


  </Routes>
);
