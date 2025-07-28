import React from 'react';
import AdminSideBar from './AdminSideBar';
import { Routes, Route } from 'react-router-dom';

import Orders from '../Orders/Orders';
import MenuComponent from '../Menu/Menu'; // Renamed to avoid conflict
import Ingredients from '../Ingredients/Ingredients';
import RestaurantDetails from './RestaurantDetails';
import RestaurantDashboard from '../Dashboard/Dashboard';
import FoodCategory from '../FoodCategory/FoodCategory'; // Changed to PascalCase
import CreateMenuForm from '../Menu/CreateMenuForm';

const Admin = () => {
  const handleClose = () => {
    // Your handleClose logic
  };

  return (
    <div>
      <div className='lg:flex justify-between'>
        <div>
          <AdminSideBar handleClose={handleClose} />
        </div>
        <div className='lg:w-[80%]'>
          <Routes>
            <Route path="/" element={<RestaurantDashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/menu" element={<MenuComponent />} />
            <Route path="/category" element={<FoodCategory />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/details" element={<RestaurantDetails />} />
            <Route path="/add-menu" element={<CreateMenuForm />} />
            
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;