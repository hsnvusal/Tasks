import React, { useEffect } from 'react';
import Top_nav from './Top_nav';
import Navbar from './Navbar';
import Home_page from './Home_page';
import './App.css';
import ProductGrid from './ProductGrid';
import InputSection from './InputSection';
import FeaturedProduct from './FeaturedProduct';
import AboutUs from './AboutUs';
import Team from './Team';
import SummerSale from './SummerSale';
import ServicesSection from './ServicesSection';
import TestimonialSection from './TestimonialSection';
import BlogPosts from './BlogPosts';
import ContactForm from './ContactForm';

const App = () => {
  useEffect(() => {
    const topInfo = document.querySelector('.top_nav');
    const navbar = document.querySelector('.nav_container');

    const handleScroll = () => {
      if (window.scrollY > 50) {
        topInfo?.classList.add('hide-top-info');
        navbar?.classList.add('fixed-navbar');
        document.body.classList.add('fixed-active'); // içerik için boşluk bırak
      } else {
        topInfo?.classList.remove('hide-top-info');
        navbar?.classList.remove('fixed-navbar');
        document.body.classList.remove('fixed-active');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Top_nav />
      <Navbar />
      <Home_page />
    
      <ProductGrid/>
      <InputSection/>
      <FeaturedProduct/>
      <AboutUs/>
      <Team/>      
      <SummerSale/>
      <ServicesSection/>
      <TestimonialSection/>
      <BlogPosts/>
      <ContactForm/>

      

    </>
  );
};

export default App;
