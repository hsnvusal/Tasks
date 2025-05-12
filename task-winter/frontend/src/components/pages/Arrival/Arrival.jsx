import React, { useEffect, useState } from "react";
import styles from "./Arrival.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../redux/reducers/productSlice";
import { addToBasket } from "../../../redux/reducers/basketSlice";
import { addToWishlist } from "../../../redux/reducers/wishlistSlice";

const Arrival = () => {
  const dispatch = useDispatch();
  const { items: products, status } = useSelector((state) => state.products);
  const [searchText, setSearchText] = useState("");
  const [sorted, setSorted] = useState("default");
  const basketItems = useSelector((state) => state.basket.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const filteredData =
    products &&
    products
      .filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      )
      .sort((a, b) => {
        if (sorted == "asc") return Number(a.price) - Number(b.price);
        if (sorted == "desc") return Number(b.price) - Number(a.price);
        return 0;
      });

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  if (status === "loading") return <p>Yuklenir</p>;
  if (status === "failed") return <p>Xeta var</p>;
  return (
    <div className={styles.arrival}>
      <div className="container">
        <div className={styles.arrival_title}>
          <h1>New Arrival</h1>
          <div className={styles.arrival_filter}>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={() => setSorted("asc")}>ASC</button>
            <button onClick={() => setSorted("desc")}>DESC</button>
            <button onClick={() => setSorted("default")}>DEFAULT</button>
          </div>
        </div>
      </div>
      <div className={styles.arrival_cards}>
        {filteredData.slice(0, 6).map((item) => {
          const inBasket = basketItems.find((x) => x._id === item._id);
          const inWishlist = wishlistItems.find((x) => x._id === item._id);
          return (
            <div className={styles.arrival_card}>
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>
              <h3>${item.price}</h3>
              <button
                onClick={() => dispatch(addToBasket(item))}
                disabled={inBasket}
              >
                {inBasket ? "Elave Edilib" : "Baskete Elave Et"}
              </button>
              <button
                onClick={() => dispatch(addToWishlist(item))}
                disabled={inWishlist}
              >
                {inWishlist ? "Elave Edilib" : "Wishliste Elave Et"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Arrival;
