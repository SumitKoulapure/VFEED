import React from 'react'
import RestaurantDetails from '../component/Restaurant/RestaurantDetails'
import { Navbar } from '../component/Navbar/Navbar'
import Home from '../component/Home/Home'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Cart from '../component/Cart/Cart'
import Profile from '../component/Profile/Profile'

export const CustomerRoute = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/account/:register" element={<Home/>}/>
            <Route path="/restaurant/:city/:title/:id" elemen={<RestaurantDetails/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/my-profile/*" element={<Profile/>}/>

        </Routes>
    </div>
  )
}

// /my-profile/orders/
