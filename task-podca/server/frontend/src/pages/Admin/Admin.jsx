import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProducts } from "../../redux/reducers/productSlice";
import styles from "./Admin.module.css";
import { useNavigate } from "react-router";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleDelete = async (id) => {
    dispatch(deleteProducts(id));
  };
  const handleAdd = () => {
    navigate("/admin/add");
  };

  return (
    <div className={styles.adminContainer}>
      <div className={styles.header}>
        <h2>Admin Panel - Məhsullar</h2>
        <button className={styles.addBtn} onClick={handleAdd}>
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
              <p>{item.description}</p>
              <img src={`../../../public/${item.image}`} alt={item.title} />
              <button
                className={styles.deleteBtn}
                onClick={() => handleDelete(item._id)}
              >
                Sil
              </button>
              <button onClick={() => navigate(`/admin/edit/${item._id}`)}>
                Redaktə Et
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin;
