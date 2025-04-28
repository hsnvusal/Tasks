import React from 'react'
import { Routes, Route } from 'react-router'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home'

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}>
            </Route>
        </Route>
    </Routes>
  )
}

export default Router