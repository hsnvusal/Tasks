import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./Basket.module.css"
import { clearBasket, decrement, increment, removeFromBasket } from '../../redux/reducers/basketSlice';

const Basket = () => {
    const basketItems = useSelector((state)=>state.basket.items);
    const dispatch = useDispatch();
  return (
    <div className={styles.containerBasket}>
        <h2>Səbət</h2>
        {basketItems.length ===0 ? (
            <p>Səbət Boşdur.</p>
        ):(
            <div className={styles.product_cards}>
                {basketItems.map((item)=>(
                    <div className={styles.product_card}>
                        <img src={item.image} alt="" />
                        <h3>{item.title}</h3>
                        <h3>{item.price}</h3>
                        <button onClick={()=>dispatch(decrement(item._id))}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={()=>dispatch(increment(item._id))}>+</button>
                        <button className={styles.product_card_button} onClick={()=>dispatch(removeFromBasket(item._id))}>Sil</button>

                    </div>
                ))}
            </div>
        )}
        {basketItems.length > 0 && (
            <button className={styles.product_card_button} onClick={()=>dispatch(clearBasket())}>Səbəbi Təmizlə</button>
        )}
    </div>
  )
}

export default Basket