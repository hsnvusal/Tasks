import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import welcomeImg from "../../assets/welcome-img.webp";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/reducers/productSlice";
import { addToBasket } from "../../redux/reducers/basketSlice";
import newsCard1 from "../../assets/news-card1.webp";
import galleryCard1 from "../../assets/gallery-img1.webp";

const Home = () => {
  const dispatch = useDispatch();

  const { items: products, status } = useSelector((state) => state.products);
  const basketItems = useSelector((state) => state.basket.items);

  const [searchText, setSearchText] = useState("");
  const [sorted, setSorted] = useState("default");

  const filteredData =
    products &&
    products
      .filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      )
      .sort((a, b) => {
        if (sorted == "asc") return Number(a.price) - Number(b.price);
        if (sorted == "desc") return Number(b.price) - Number(a.price);
        return 0;
      });

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  if (status === "loading") return <p>Yuklenir...</p>;
  if (status === "failed") return <p>Xeta Bas verdi...</p>;
  return (
    <div>
      <div className={styles.home}>
        <div className="container">
          <div className={styles.home_body}>
            <div className={styles.home_body_text}>
              <h1>Welcome To EatWell</h1>
              <p>Come and eat well with our delicious & healthy foods.</p>
              <p>
                <a href="#">RESERVATION</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.welcome}>
          <div className={styles.welcome_text}>
            <h2>OUR STORY</h2>
            <h1>Welcome</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <p>
              <a href="#">Learn More About US</a>
            </p>
          </div>
          <div className={styles.welcome_img}>
            <img src={welcomeImg} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.summer}>
        <div className="container">
          <div className={styles.summer_text}>
            <h2>OUR OFFERS</h2>
            <h1>Our Offer This Summer</h1>
            <p>
              Far far away, behind the word mountains, far from the countries{" "}
              <br /> Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className={styles.filtered}>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={() => setSorted("asc")}>ASC</button>
            <button onClick={() => setSorted("desc")}>DESC</button>
            <button onClick={() => setSorted("default")}>Default</button>
          </div>
          <div className={styles.summer_cards}>
            {filteredData.slice(0, 6).map((item) => {
              const inBasket = basketItems.find((x) => x._id === item._id);
              return (
                <div className={styles.summer_card}>
                  <img src={item.image} alt="" />
                  <div className={styles.summer_card_text}>
                    <h4>${item.price}</h4>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>
                      <a href="#">Order Now!</a>
                    </p>
                    <button
                      onClick={() => dispatch(addToBasket(item))}
                      disabled={inBasket}
                    >
                      {inBasket ? "Əlavə edilib" : "Baskete əlavə et"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.summer_text}>
          <h2>OUR OFFERS</h2>
          <h1>News</h1>
          <p>
            Far far away, behind the word mountains, far from the countries{" "}
            <br /> Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className={styles.summer_cards}>
          <div className={styles.summer_card}>
            <img src={newsCard1} alt="" />
            <div className={styles.summer_card_text}>
              <h2>We Have Dilecious Food</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p>
                <a href="#">Order Now!</a>
              </p>
            </div>
          </div>
          <div className={styles.summer_card}>
            <img src={newsCard1} alt="" />
            <div className={styles.summer_card_text}>
              <h2>We Have Dilecious Food</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p>
                <a href="#">Order Now!</a>
              </p>
            </div>
          </div>
          <div className={styles.summer_card}>
            <img src={newsCard1} alt="" />
            <div className={styles.summer_card_text}>
              <h2>We Have Dilecious Food</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p>
                <a href="#">Order Now!</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.gallery}>
          <div className={styles.summer_text}>
            <h1>Gallery</h1>
            <p>
              Far far away, behind the word mountains, far from the countries{" "}
              <br /> Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className={styles.gallery_cards}>
            <img src={galleryCard1} alt="" />
            <img src={galleryCard1} alt="" />
            <img src={galleryCard1} alt="" />
            <img src={galleryCard1} alt="" />
            <img src={galleryCard1} alt="" />
            <img src={galleryCard1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
