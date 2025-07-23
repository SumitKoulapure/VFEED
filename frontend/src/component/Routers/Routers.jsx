import React from 'react'
import { Routes } from 'react-router-dom';
import AdminRoute from './AdminRoute';

const Routers = () => {
  return (
   <Routes>
    <Route path="/admin/restaurants/*" element={<AdminRoute />} />
     <Route path="/*" element={<CustomerRoute />} />

  
   </Routes>
  )
}

export default Routers
