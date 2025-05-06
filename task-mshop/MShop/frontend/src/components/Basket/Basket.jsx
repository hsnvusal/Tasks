import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./Basket.Module.css";
import {
    removeFromBasket,
    clearBasket,
  } from "../../redux/reducers/basketSlice";
const Basket = () => {

    const basketItems = useSelector((state) =>state.basket.items);
    const dispatch = useDispatch();

  return (
    <div>
      <h2>Səbət</h2>
      {basketItems.length === 0 ? (
        <p>Səbət boşdur.</p>
      ) : (
        <div className={styles.product_cards} >
        {basketItems.map((item) => (
          <div className={styles.product_card}>
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <h3>{item.price}</h3>
            <button className={styles.product_card_button} onClick={() => dispatch(removeFromBasket(item._id))}>
                Sil
              </button>
          </div>
        ))}
      </div>
      )}

      
      {basketItems.length > 0 && (
        <button className={styles.product_card_button} onClick={() => dispatch(clearBasket())}>Səbəti təmizlə</button>
      )}
    </div>
  )
}

export default Basket