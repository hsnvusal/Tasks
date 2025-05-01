import React, { useEffect } from "react";
import Header from "../Header";
import styles from "./Home.module.css";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/reducers/productSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { items: products, status } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status === "loading") return <p>Yüklənir...</p>;
  if (status === "failed") return <p>Xəta baş verdi!</p>;
  return (


    
    <div>
      <div className={styles.home}>
        <div className={styles.home_text}>
          <h1>24/7 Customer Support</h1>
          <div className={styles.navbar_buttons}>
            <a href="#" className={classNames(styles.btn, styles.second)}>
              Download
            </a>
            <a href="#" className={classNames(styles.btn, styles.first)}>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.host}>
          <div className={styles.host_text}>
            <h1>Different hosting platforms to suit every need!</h1>
          </div>
          <div className={styles.host_cards}>
            <div className={styles.host_card}>
              <i class="fa-solid fa-paper-plane"></i>
              <h2>Shared Hosting</h2>
              <p>Plans start at $3.99/month</p>
              <a href="#" className={classNames(styles.btn, styles.second)}>
                Download
              </a>
            </div>
            <div className={styles.host_card}>
              <i class="fa-solid fa-paper-plane"></i>
              <h2>Shared Hosting</h2>
              <p>Plans start at $3.99/month</p>
              <a href="#" className={classNames(styles.btn, styles.second)}>
                Download
              </a>
            </div>
            <div className={styles.host_card}>
              <i class="fa-solid fa-paper-plane"></i>
              <h2>Shared Hosting</h2>
              <p>Plans start at $3.99/month</p>
              <a href="#" className={classNames(styles.btn, styles.second)}>
                Download
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.clients}>
        <div className="container">
          <div className={styles.clients_body}>
            <h1>Satisfied Clients</h1>
            <p> We are rated 4.99 / 5.00 (based on 4443 Reviews)</p>
            <a href="#" className={classNames(styles.btn, styles.second)}>
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.productWrapper}>
          {products.map((item) => (
            <div key={item._id} className={styles.card}>
              <div className={styles.icon}>
                <img src={`../../../public/${item.image}`} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
