import React, { useEffect, useState } from "react";
import axios from "axios";
import Arrival from "./Arrivals";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Category from "./Category";
import DealOfTheWeek from "./DealOfTheWeek";
import BestSellers from "./BestSellers";
import LatestBlogs from "./LatestBlogs";

function App() {
  const [arrival, setArrival] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const getData = (category = "all") => {
    setSelectedCategory(category);

    let url =
      category === "all"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${category}`;

    axios.get(url).then((res) => {
      setArrival(res.data);
    });
  };

  useEffect(() => {
    getData("all");
  }, []);

  return (
    <div className="nav">
      <Navbar />
      <Hero />
      <Category />

      <div className="container">
        <div style={{ padding: "20px" }}>
          <div className="category-buttons">
            <button
              className={selectedCategory === "all" ? "active" : ""}
              onClick={() => getData("all")}
            >
              All
            </button>
            <button
              className={selectedCategory === "men's clothing" ? "active" : ""}
              onClick={() => getData("men's clothing")}
            >
              Men's
            </button>
            <button
              className={
                selectedCategory === "women's clothing" ? "active" : ""
              }
              onClick={() => getData("women's clothing")}
            >
              Women's
            </button>
            <button
              className={selectedCategory === "jewelery" ? "active" : ""}
              onClick={() => getData("jewelery")}
            >
              Accessories
            </button>
            <button
              className={selectedCategory === "electronics" ? "active" : ""}
              onClick={() => getData("electronics")}
            >
              Electronics
            </button>
          </div>
          <Arrival arrivals={arrival} />
        </div>
      </div>
      <DealOfTheWeek />
      <BestSellers />

      <LatestBlogs />
    </div>
  );
}

export default App;
