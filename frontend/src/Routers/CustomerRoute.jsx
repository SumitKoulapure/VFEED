import React from 'react'
import RestaurantDetails from '../component/Restaurant/RestaurantDetails'
import { Navbar } from '../component/Navbar/Navbar'
import Home from '../component/Home/Home'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Cart from '../component/Cart/Cart'
import Profile from '../component/Profile/Profile'

import { Auth } from '../component/Auth/Auth';

export const CustomerRoute = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/:register" element={<Home />} />
        <Route path="/restaurant/:city/:title/:id" element={<RestaurantDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-profile/*" element={<Profile />} />

      </Routes>
      <Auth />
    </div>
  )
}

// /my-profile/orders/
// import React from 'react'
// import RestaurantDetails from '../component/Restaurant/RestaurantDetails'
// import { Navbar } from '../component/Navbar/Navbar'
// import Home from '../component/Home/Home'
// import { Routes, Route } from 'react-router-dom'
// import Cart from '../component/Cart/Cart'
// import Profile from '../component/Profile/Profile'
// import { Auth } from '../component/Auth/Auth';

// export const CustomerRoute = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />

//         {/* ✅ Dummy routes for modal */}
//         <Route path="/account/login" element={<></>} />
//         <Route path="/account/register" element={<></>} />

//         <Route path="/restaurant/:city/:title/:id" element={<RestaurantDetails />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/my-profile/*" element={<Profile />} />
//       </Routes>

//       {/* Auth modal must always render */}
//       <Auth />
//     </div>
//   )
// }
