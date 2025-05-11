import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProduct } from '../../redux/reducers/productSlice';
import styles from "./Admin.module.css"
import { useNavigate } from "react-router";


const Admin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {items:products} = useSelector((state)=>state.products);

    useEffect(()=>{
        dispatch(getProduct())  
    },[])
    const handleDelete = async (id) => {
        dispatch(deleteProduct(id))
    };

    const Add = () => {
        navigate("/admin/add")
    }

    console.log(products);
    
  return (
    <div className={styles.adminContainer}>
        <div className={styles.header}>
            <h2>Admin Panel - Məhsullar</h2>
            <button className={styles.addBtn} onClick={Add}>+ Məhsul Əlavə et</button>
        </div>
        <div className="container">
            <div className={styles.cardContainer}>
                <div className={styles.admin_cards}>
                    {products.map((item)=> {
                        return(
                        <div key={item._id} className={styles.admin_card}>
                            <img src={item.image} alt="" />
                            <div className={styles.admin_card_text}>
                                <h4>${item.price}</h4>
                                <h2>{item.title}</h2>
                                <button className={styles.deleteBtn} onClick={()=>handleDelete(item._id)}>Sil</button>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin