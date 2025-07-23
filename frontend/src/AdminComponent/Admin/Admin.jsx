import React from 'react'
import AdminSideBar from './AdminSideBar'
import { Routes,Route } from 'react-router-dom';

import Orders from './../Orders/Orders';
import Menu from '@mui/material/Menu';
import foodCategory from './../FoodCategory/foodCategory';
import Ingredients from './../Ingredients/Ingredients';
import Events from './../Events/Events';

import RestaurantDetails from './RestaurantDetails';
import RestaurantDashboard from '../Dashboard/Dashboard';

const Admin = () => {
  const handleClose=()=>{

  }
  return (
    <div>
      <div className='lg:flex justify-between'>
        <div>
            <AdminSideBar  handleClose={handleClose}/>
        </div>
        <div className='lg:w-[80%]'>
          <Routes>
            <Route path="/" element={<RestaurantDashboard/>} />
             <Route path="/orders" element={<Orders/>} />
              <Route path="/menu" element={<Menu/>} />

               <Route path="/category" element={<foodCategory/>} />
                <Route path="/ingredients" element={<Ingredients/>} />
                 <Route path="/events" element={<Events/>} />
                  <Route path="/details" element={<RestaurantDetails/>} />
       

          </Routes>
            

        </div>
      </div>
    </div>
  )
}

export default Admin
