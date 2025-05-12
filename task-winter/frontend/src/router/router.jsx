import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from '../components/Layout/Layout'
import Home from '../components/Home/Home'
import Basket from '../components/Basket/Basket'
import Admin from '../components/Admin/Admin'
import AddProduct from '../components/Admin/AddProduct'
import Wishlist from '../components/Wishlist/Wishlist'

const router = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/basket' element={<Basket/>}></Route>
            <Route path='/wishlist' element={<Wishlist/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>
            <Route path='/admin/add' element={<AddProduct/>}></Route>
        </Route>
    </Routes>
  )
}

export default router