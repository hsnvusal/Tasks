import React from 'react'
import Header from './header/Header'
import { Outlet } from 'react-router'
import Footer from './footer/Footer'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout