import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Layout from "../components/Layout";
import About from "../pages/About";
import Work from "../pages/Work";
import Pricing from "../pages/Pricing";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
