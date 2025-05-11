import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import home from "../../assets/home.jpg";
import mission from "../../assets/mission.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/reducers/productSlice";
import { addToBasket } from "../../redux/reducers/basketSlice";
import teamImg1 from "../../assets/team1.jpg"
import teamImg2 from "../../assets/team2.jpg"
import teamImg3 from "../../assets/team3.jpg"

const Home = () => {
  const dispatch = useDispatch();
  const { items: products, status } = useSelector((state) => state.products);
  const [searchText, setSearchText] = useState("");
  const [sorted, setSorted] = useState("default");
  const basketItems = useSelector((state) => state.basket.items);
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
  if (status === "failed") return <p>Xeta bas verdi...</p>;
  return (
    <div>
      <div className={styles.home}>
        <img src={home} alt="" />
        <div className={styles.home_body}>
          <p>Fixed-Height Slider</p>
          <h1>Excellent bouquets for you</h1>
        </div>
      </div>
      <div className="container">
        <div className={styles.mission}>
          <div className={styles.mission_text}>
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore
              dicunt an, ea civibus.
            </p>
            <p>
              <a href="#">Read More</a>
            </p>
          </div>
          <div className={styles.mission_img}>
            <img src={mission} alt="" />
          </div>
        </div>
      </div>

      <div className={styles.pricing}>
        <div className="container">
          <div className={styles.pricing_body}>
            <div className={styles.pricing_body_title}>
              <p>Devoted to wonderful beauty</p>
              <h1>Flowers Pricing</h1>
            </div>
            <div className={styles.filtered}>
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button onClick={() => setSorted("asc")}>ASC</button>
              <button onClick={() => setSorted("desc")}>DESC</button>
              <button onClick={() => setSorted("default")}>DEFAULT</button>
            </div>
            <div className={styles.pricing_body_cards}>
              {filteredData.slice(0, 6).map((item) => {
                const inBasket = basketItems.find((x) => x._id === item._id);
                return (
                  <div className={styles.pricing_body_card}>
                    <img src={item.image} alt="" />
                    <h2>{item.title}</h2>
                    <h2>${item.price}</h2>
                    <button
                      onClick={() => dispatch(addToBasket(item))}
                      disabled={inBasket}
                    >
                      {inBasket ? "Elave Edilib" : "Baskete Elave Et"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="container">
          <div className={styles.events}>
            <div className={styles.events_text}>
              <p>Devoted to wonderful beauty</p>
              <h1>Events Pricing</h1>
            </div>
            <div className={styles.events_cards}>
              <div className={styles.events_card}>
                <div className={styles.events_card_body}>
                  <h3>
                    <span>$16</span> per table
                  </h3>
                  <h2>Birthday Events</h2>
                  <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                  <p>
                    <a href="#">Shop Now</a>
                  </p>
                </div>
              </div>
              <div className={styles.events_card}>
                <div className={styles.events_card_body}>
                  <h3>
                    <span>$16</span> per table
                  </h3>
                  <h2>Birthday Events</h2>
                  <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                  <p>
                    <a href="#">Shop Now</a>
                  </p>
                </div>
              </div>
              <div className={styles.events_card}>
                <div className={styles.events_card_body}>
                  <h3>
                    <span>$16</span> per table
                  </h3>
                  <h2>Birthday Events</h2>
                  <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                  <p>
                    <a href="#">Shop Now</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.team}>
          <div className={styles.team_title}>
            <p>Contacts</p>
            <h1>Our Team</h1>
          </div>
          <div className={styles.team_cards}>
            <div className={styles.team_card}>
              <img src={teamImg1} alt="" />
              <h2>Velva Kopf</h2>
              <p>Biologist</p>
            </div>
            <div className={styles.team_card}>
              <img src={teamImg2} alt="" />
              <h2>Velva Kopf</h2>
              <p>Biologist</p>
            </div>
            <div className={styles.team_card}>
              <img src={teamImg3} alt="" />
              <h2>Velva Kopf</h2>
              <p>Biologist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
