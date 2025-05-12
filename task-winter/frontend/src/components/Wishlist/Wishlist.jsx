import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Basket/Basket.module.css"; 
import {
  removeFromWishlist,
  clearWishlist,
} from "../../redux/reducers/wishlistSlice";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div className={styles.containerBasket}>
      <h2>İstək Siyahısı</h2>

      {wishlistItems.length === 0 ? (
        <p>
          İstək siyahısı boşdur.
          <a href="/">Məhsullara bax</a>
        </p>
      ) : (
        <div className={styles.product_cards}>
          {wishlistItems.map((item) => (
            <div key={item._id} className={styles.product_card}>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <h4>${item.price}</h4>
              <button
                className={styles.product_card_button}
                onClick={() => dispatch(removeFromWishlist(item._id))}
              >
                Sil
              </button>
            </div>
          ))}
        </div>
      )}

      {wishlistItems.length > 0 && (
        <button
          className={styles.product_card_button}
          onClick={() => dispatch(clearWishlist())}
        >
          Siyahını Təmizlə
        </button>
      )}
    </div>
  );
};

export default Wishlist;
