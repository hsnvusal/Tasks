import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../../redux/reducers/wishlistSlice';
import styles from "./Wishlist.Module.css";


const Wishlist = () => {
    const wishlistItems = useSelector((state)=>state.wishlist.items);
    const dispatch = useDispatch();
  return (
   <div>
         <h2>Wishlist</h2>
         {wishlistItems.length === 0 ? (
           <p>Wishlist boşdur.</p>
         ) : (
           <div className={styles.product_cards} >
           {wishlistItems.map((item) => (
             <div className={styles.product_card}>
               <img src={item.image} alt="" />
               <h3>{item.title}</h3>
               <h3>{item.price}</h3>
               <button className={styles.product_card_button} onClick={() => dispatch(removeFromWishlist(item._id))}>
                   Sil
                 </button>
             </div>
           ))}
         </div>
         )}
   
         
       </div>
  )
}

export default Wishlist