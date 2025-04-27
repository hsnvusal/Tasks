import React from 'react'
import { Routes, Route } from 'react-router'
import Layout from '../components/layout/Layout'
import Home from '../pages/home/Home'
import AdminPanel from '../redux/AdminPanel'

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/admin' element={<AdminPanel/>}/>
        </Route>
    </Routes>
  )
}

export default Router