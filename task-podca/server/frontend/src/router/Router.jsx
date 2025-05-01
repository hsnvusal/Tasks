import React from 'react'
import { Routes, Route } from 'react-router'
import Layout from '../components/layout/Layout'
import Home from '../components/Home/Home'
import Admin from '../pages/Admin/Admin'
import AddProduct from '../pages/Admin/AddProduct'
import EditProduct from '../pages/Admin/EditProduct'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>

            <Route path='/' element={<Home/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>
            <Route path='/admin/add' element={<AddProduct/>}></Route>
            <Route path='/admin/edit/:id' element={<EditProduct/>}></Route>
            </Route>
        </Routes>
    )
}


export default Router