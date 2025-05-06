import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { deleteProduct, getProduct } from '../redux/reducers/productSlice';
import styles from "./Admin.module.css"

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
  return (
    <div className={styles.adminContainer}>
      <div className={styles.header}>
        <h2>Admin Panel - Məhsullar</h2>
        <button className={styles.addBtn} onClick={Add}>
          + Məhsul Əlavə Et
        </button>
      </div>

      {status === "loading" ? (
        <p>Yüklənir...</p>
      ) : (
        <div className={styles.cardWrapper}>
          {products.map((item) => (
            <div key={item._id} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <img src={item.image} alt={item.title} />
              <button
                className={styles.deleteBtn}
                onClick={() => handleDelete(item._id)}
              >
                Sil
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Admin