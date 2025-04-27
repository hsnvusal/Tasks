import React, { useEffect } from "react";
import styles from "./Home.module.css";
import madewellIimg from "../../assets/home-page-img1.webp";
import { useDispatch, useSelector } from "react-redux";
import { getProductThunk } from "../../redux/reducers/productSlice";
import jacket from "../../assets/jacket-img.webp"
import jacket2 from "../../assets/jacket2-img.webp"

const Home = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProductThunk());
  }, []);

  if (status === "loading") return <p>Yüklənir...</p>;
  if (status === "failed") return <p>Xəta: {error}</p>;

  return (
    <div className="all">
      <div className="container">
        <div className={styles.madewell}>
          <div className={styles.madewell_text}>
            <h1>MADEWELL</h1>
            <p>Summer Collection</p>
            <a href="#">
              <strong>1,499$</strong>
              <del>1,999$</del>
            </a>
            <div className={styles.madewell_buttons}>
              <button className={styles.first_button}>SHOP NOW</button>
              <button className={styles.second_button}>SHOP NOW</button>
            </div>
          </div>
          <div className={styles.madewell_img}>
            <img src={madewellIimg} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className={styles.cards}>
          {data &&
            data.slice(0, 6).map((item) => (
              <div key={item.id} className={styles.card}>
                <img src={item.image} alt="" />
                <h2>{item.title}</h2>
                <p>Summer Collection</p>
                <strong>{item.price} $</strong>
              </div>
            ))}
        </div>
      </div>
      <div className="container">
        <div className={styles.jacket}>
            <div className={styles.jacket_img}>
                <img src={jacket} alt="" />
            </div>
            <div className={styles.jacket_text}>
                <p>#NEW SUMMER COLLECTION 2019</p>
                <h1>JACKET</h1>
                <button>SHOP NOW</button>
            </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.collections}>
            <h1>COLLECTIONS</h1>
            <div className={styles.cards}>
          {data &&
            data.slice(0, 3).map((item) => (
              <div key={item.id} className={styles.card}>
                <img src={item.image} alt="" />
                <h2>{item.title}</h2>
                <p>Summer Collection</p>
                <strong>{item.price} $</strong>
              </div>
            ))}
        </div>
        </div>
      </div>
      <div className="container" >
        <div className={styles.jacket}>
            <div className={styles.jacket_img}>
                <img src={jacket2} style={{height:"75%"}} alt="" />
            </div>
            <div className={styles.jacket_text} style={{alignItems:"center"}} >
                <p>#NEW SUMMER COLLECTION 2019</p>
                <h1>NEW DENIM COAT</h1>
                <button>SHOP NOW</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
