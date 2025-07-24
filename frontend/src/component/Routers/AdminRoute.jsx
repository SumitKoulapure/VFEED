import React from 'react'
import { Route,Routes } from 'react-router-dom'

import Admin from '../../AdminComponent/Admin/Admin'
import CreateRestaurantForm from '../../AdminComponent/CreateRestaurantForm/CreateRestaurantForm'

const AdminRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={true?<CreateRestaurantForm/>:<Admin/>} >
        </Route>
      </Routes>
    </div>
  )
}

export default AdminRoute
