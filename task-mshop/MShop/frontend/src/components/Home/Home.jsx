import React, { useEffect } from "react";
import styles from "./Home.module.css";
import homeImg from "../../assets/home-img.webp";
import { useDispatch, useSelector } from "react-redux";
import card1 from "../../assets/card1.webp";
import card2 from "../../assets/card2.webp";
import card3 from "../../assets/card3.webp";
import card4 from "../../assets/card4.webp";
import menCard1 from "../../assets/men-card1.webp";
import menCard2 from "../../assets/men-card2.webp";
import menCard3 from "../../assets/men-card3.webp";
import menCard4 from "../../assets/men-card4.webp";
import { getProduct } from "../../redux/reducers/productSlice";
import { addToBasket } from "../../redux/reducers/basketSlice";
import { addToWishlist } from "../../redux/reducers/wishlistSlice";
const Home = () => {
  const dispatch = useDispatch();

  const { items: products, status } = useSelector((state) => state.products);
  const basketItems = useSelector((state) => state.basket.items);
  const wishlistItems = useSelector((state)=>state.wishlist.items)

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  if (status === "loading") return <p>Yuklenir...</p>;
  if (status === "failed") return <p>Xeta Bas verdi...</p>;
  return (
    <div>
      <div className={styles.home}>
        <div className={styles.home_body}>
          <div className={styles.home_body_img}>
            <img src={homeImg} alt="" />
          </div>
          <div className={styles.home_body_text}>
            <h3>
              <span>Flat</span>75%Off{" "}
            </h3>
            <h1>
              It’s Happening <br />
              this Season
            </h1>
            <button className={styles.primary_btn}>
              <a href="#">PURCHASE NOW</a>
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.categories}>
          <div className={styles.categories_text}>
            <h1>Shop for Different Categories</h1>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
          <div className={styles.categories_cards}>
            <div className={styles.categories_card_body3}>
              <div className={styles.categories_card_body1}>
                <div className={styles.categories_card_body2}>
                  <div className={styles.categories_card1}>
                    <img src={card1} alt="" />
                  </div>
                  <div className={styles.categories_card2}>
                    <img src={card2} alt="" />
                  </div>
                </div>

                <div className={styles.categories_card3}>
                  <img src={card3} alt="" />
                </div>
              </div>
              <div className={styles.categories_card4}>
                <img src={card4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.men_product}>
        <div className="container">
          <div className={styles.men_text}>
            <h1>New realeased Products for Men</h1>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
          <div className={styles.men_cards}>
            <div className={styles.men_card}>
              <img src={menCard1} alt="" />
              <h3>Long Sleeve shirt</h3>
              <p>$150.00</p>
            </div>
            <div className={styles.men_card}>
              <img src={menCard2} alt="" />
              <h3>Long Sleeve shirt</h3>
              <p>$150.00</p>
            </div>
            <div className={styles.men_card}>
              <img src={menCard3} alt="" />
              <h3>Long Sleeve shirt</h3>
              <p>$150.00</p>
            </div>
            <div className={styles.men_card}>
              <img src={menCard4} alt="" />
              <h3>Long Sleeve shirt</h3>
              <p>$150.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.women_proudct}>
          <div className={styles.women_proudct_text}>
            <h1>New realeased Products for Women</h1>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
          <div className={styles.women_proudct_cards}>
            {products.slice(0, 4).map((item) => {
              const inBasket = basketItems.find((x) => x._id === item._id);
              const inWishlist = wishlistItems.find((x) => x._id === item._id);
              return (
                <div className={styles.women_proudct_card} key={item._id}>
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                  <button
                    onClick={() => dispatch(addToBasket(item))}
                    disabled={inBasket}
                  >
                    {inBasket ? "Əlavə edilib" : "Baskete əlavə et"}
                  </button>
                  <button
                    onClick={() => dispatch(addToWishlist(item))}
                    disabled={inWishlist}
                  >
                    {inWishlist ? "Əlavə edilib" : "Wishliste əlavə et"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
