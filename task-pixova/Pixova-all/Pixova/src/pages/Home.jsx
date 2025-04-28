import React, { useEffect } from "react";
import styles from "./Home.module.css";
import percent from "../assets/percent.png";
import { useDispatch, useSelector } from "react-redux";
import { getProductThunk } from "../redux/reducers/CardSlice";
import TestimonialSlider from "./TestimonialSlider";
import Slider from "./Slider";
import teamCard1 from "../assets/teamCard1.jpg";
import teamCard2 from "../assets/teamCard2.jpg";
import teamCard3 from "../assets/teamCard3.jpg";
import teamCard4 from "../assets/teamCard4.jpg";

const Home = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.cards);
  useEffect(() => {
    dispatch(getProductThunk());
  }, []);

  if (status === "loading") return <p>Yüklənir...</p>;
  if (status === "failed") return <p>Xəta: {error}</p>;

  return (
    <div className={styles.home}>
      <div className={styles.lite}>
        <div className={styles.lite_body}>
          <h2>WELCOME TO PIXOVA LITE</h2>
          <h1>Free & Modern One-Page Parallax WordPress Theme</h1>
          <p>
            Your cool business headline here. You can even insert HTML here &
            images. Lorem ipsum dolor sit amet lorem dolor sit amet.
          </p>
          <div className={styles.lite_body_buttons}>
            <button>Learn More</button>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.nutshell}>
          <h1>We build solutions for your everyday problems.</h1>
          <p>This is what we do in a nutshell</p>
          <p>
            Creative ut tincidunt nibh, varius cursus nunc. Curabitur molestie,
            metus vel luctus euismod, mi libero laoreet odio, eu dapibus leo
            tortor sit amet purus. It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout.
          </p>
          <h4>
            Working with Pixova has been an experience for a lifetime. I
            strongly reccommend these guys for their awesome support. Erlich
            Bachman, Aviato
          </h4>
          <img src={percent} alt="" />
        </div>
      </div>
      <div className={styles.recentWork}>
        <div className="container">
          <h1>Recent Works</h1>
          <p>It's show and tell time.</p>
          <div className={styles.recentWork_cards}>
            <div className={styles.cards}>
              {data &&
                data.slice(0, 4).map((item) => (
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
      </div>

      <div className={styles.clients}>
        <div className="container">
          <h1>Some words from our clients</h1>
          <TestimonialSlider />
        </div>
      </div>
      <div className={styles.news}>
        <div className="container">
          <h1>Latest news</h1>
          <p>Straight from our blog</p>
          <Slider />
        </div>
      </div>
      <div className={styles.team}>
        <div className="container">
          <h1>The Team</h1>
          <p>Meet the people that made it all happen.</p>
          <div className={styles.team_cards}>
            <div className={styles.team_card}>
              <img src={teamCard1} alt="" />
              <h4>Angelina Doe</h4>
            </div>
            <div className={styles.team_card}>
              <img src={teamCard2} alt="" />
              <h4>John Doe</h4>
            </div>
            <div className={styles.team_card}>
              <img src={teamCard3} alt="" />
              <h4>Angelina Doe</h4>
            </div>
            <div className={styles.team_card}>
              <img src={teamCard4} alt="" />
              <h4>Angelina Doe</h4>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contact}>
        <div className="container">
          <h1>Contact us</h1>
          <p>And we'll reply in no time</p>
          <div className={styles.contact_card}>
            <div>
              <h4>Address</h4>
              <h5>Street 221B Baker Street</h5>
            </div>
            <div>
              <h4>Customer Support</h4>
              <h5>Phone: 0 332 548 954</h5>
              <h5>Email: contact@site.com</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
