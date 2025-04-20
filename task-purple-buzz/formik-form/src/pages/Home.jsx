import React, { useRef } from "react";
import "../pages/Home.css";
import ServicesCard1 from "../assets/services-card1.jpg";
import ServicesCard2 from "../assets/services-02.jpg";
import ServicesCard3 from "../assets/services-03.jpg";
import ServicesCard4 from "../assets/services-04.jpg";
import ServicesCard5 from "../assets/services-05.jpg";
import ServicesCard6 from "../assets/services-06.jpg";
import ServicesCard7 from "../assets/services-07.jpg";
import ServicesCard8 from "../assets/services-08.jpg";
import RecentCard1 from "../assets/recent-work-01.jpg";
import RecentCard2 from "../assets/recent-work-02.jpg";
import RecentCard3 from "../assets/recent-work-03.jpg";
import RecentCard4 from "../assets/recent-work-04.jpg";
import RecentCard5 from "../assets/recent-work-05.jpg";
import RecentCard6 from "../assets/recent-work-06.jpg";

const Home = () => {
  const slidesRef = useRef(null);
  const currentIndexRef = useRef(0);
  const totalSlides = 3;

  const showSlide = (index) => {
    if (!slidesRef.current) return;

    if (index >= totalSlides) currentIndexRef.current = 0;
    else if (index < 0) currentIndexRef.current = totalSlides - 1;
    else currentIndexRef.current = index;

    const offset = -currentIndexRef.current * 100;
    slidesRef.current.style.transform = `translateX(${offset}%)`;
  };

  const nextSlide = () => {
    showSlide(currentIndexRef.current + 1);
  };

  const prevSlide = () => {
    showSlide(currentIndexRef.current - 1);
  };

  return (
    <div className="all">
      <div className="home">
        <div className="container">
          <div className="slider">
            <div className="slides" id="slides" ref={slidesRef}>
              <div className="slide">
                <div className="caption">
                  <h2>Develop Strategies for your business</h2>
                  <p>
                    Purple Buzz is a corporate HTML template with Bootstrap 5
                    Beta 1. This CSS template is 100% free to download provided
                    by TemplateMo. Total 6 HTML pages included in this template.
                    Icon fonts by Boxicons. Photos are from Unsplash and Icons
                    8.
                  </p>
                  <button>Get Started</button>
                </div>
              </div>
              <div className="slide">
                <div className="caption">
                  <h2>Cupidatat non proident, sunt in culpa qui officia</h2>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
                  </p>
                  <button>Get Started</button>
                </div>
              </div>
              <div className="slide">
                <div className="caption">
                  <h2>HTML CSS Template with Bootstrap 5 Beta 1</h2>
                  <p>
                    You are not allowed to re-distribute this Purple Buzz HTML
                    template as a downloadable ZIP file on any kind of Free CSS
                    collection websites. This is strongly prohibited. Please
                    contact TemplateMo for more information.
                  </p>
                  <button>Get Started</button>
                </div>
              </div>
            </div>

            <div className="controls">
              <button className="control-btn" onClick={prevSlide}>
                ❮
              </button>
              <button className="control-btn" onClick={nextSlide}>
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="services">
          <div className="services-title">Services</div>
          <div className="services-body">
            <div className="services-body-icon">
              <i class="fa-solid fa-gift"></i>
            </div>
            <div className="services-body-text">
              <h2>Make Success for future</h2>
              <p>
                You are free to use this template for your commercial or
                business websites. You are not allowed to re-distribute this
                template ZIP file on any template collection websites. It is too
                easy to illegally copy and repost this template.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="categories">
        <div className="container">
          <div className="categories-items">
            <a href="#" className="firstItem">
              All
            </a>
            <a href="#" className="Item">
              Graphics
            </a>
            <a href="#" className="Item">
              UI/UX
            </a>
            <a href="#" className="Item">
              Branding
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cards">
          <div className="card">
            <a href="#">
              <div className="card-img">
                <img src={ServicesCard1} alt="" />
              </div>
              <div className="cards-text">
                <span>UI/UX design</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
              </div>
            </a>
          </div>
          <div className="card">
            <a href="#">
              <div className="card-img">
                <img src={ServicesCard2} alt="" />
              </div>
              <div className="cards-text">
                <span>Social Media</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
              </div>
            </a>
          </div>
          <div className="card">
            <a href="#">
              <div className="card-img">
                <img src={ServicesCard3} alt="" />
              </div>
              <div className="cards-text">
                <span>Marketing</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
              </div>
            </a>
          </div>
          <div className="card">
            <a href="#">
              <div className="card-img">
                <img src={ServicesCard4} alt="" />
              </div>
              <div className="cards-text">
                <span>Graphic</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
              </div>
            </a>
          </div>
          <div className="card">
            <a href="#">
              <div className="card-img">
                <img src={ServicesCard5} alt="" />
              </div>
              <div className="cards-text">
                <span>Digital Marketing</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
              </div>
            </a>
          </div>
          <div className="card">
            <a href="#">
              <div className="card-img">
                <img src={ServicesCard6} alt="" />
              </div>
              <div className="cards-text">
                <span>Market Research</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
              </div>
            </a>
          </div>
          <div className="card">
            <a href="#">
              <div className="card-img">
                <img src={ServicesCard7} alt="" />
              </div>
              <div className="cards-text">
                <span>Business</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
              </div>
            </a>
          </div>
          <div className="card">
            <a href="#">
              <div className="card-img">
                <img src={ServicesCard8} alt="" />
              </div>
              <div className="cards-text">
                <span>Branding</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="categories">
        <div className="container">
          <div className="great">
            <div className="great-icon">
              <i class="fa-solid fa-box-archive"></i>
            </div>
            <div className="great-text">
              <h2>Great transformations successful</h2>
              <p>Quis ipsum suspendisse ultrices gravida.</p>
            </div>
            <div className="great-button">
              <button>View Our Work</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="recent">
          <div className="recent-title">
            <h1>Recent Works</h1>
          </div>
          <div className="recent-cards">
            <div className="recent-card">
              <a href="#">
                <div className="recent-card-img">
                  <img src={RecentCard1} alt="" />
                </div>
                <div className="recent-card-text">
                  <h2>Social Media</h2>
                  <p>
                    Ullamco laboris nisi ut  aliquip ex
                  </p>
                </div>
              </a>
            </div>
            <div className="recent-card">
              <a href="#">
                <div className="recent-card-img">
                  <img src={RecentCard2} alt="" />
                </div>
                <div className="recent-card-text">
                  <h2>Web marketing</h2>
                  <p>
                    Ullamco laboris nisi ut  aliquip ex
                  </p>
                </div>
              </a>
            </div>
            <div className="recent-card">
              <a href="#">
                <div className="recent-card-img">
                  <img src={RecentCard3} alt="" />
                </div>
                <div className="recent-card-text">
                  <h2>R & D</h2>
                  <p>
                    Ullamco laboris nisi ut  aliquip ex
                  </p>
                </div>
              </a>
            </div>
            <div className="recent-card">
              <a href="#">
                <div className="recent-card-img">
                  <img src={RecentCard4} alt="" />
                </div>
                <div className="recent-card-text">
                  <h2>Public Relation</h2>
                  <p>
                    Ullamco laboris nisi ut  aliquip ex
                  </p>
                </div>
              </a>
            </div>
            <div className="recent-card">
              <a href="#">
                <div className="recent-card-img">
                  <img src={RecentCard5} alt="" />
                </div>
                <div className="recent-card-text">
                  <h2>Branding</h2>
                  <p>
                    Ullamco laboris nisi ut  aliquip ex
                  </p>
                </div>
              </a>
            </div>
            <div className="recent-card">
              <a href="#">
                <div className="recent-card-img">
                  <img src={RecentCard6} alt="" />
                </div>
                <div className="recent-card-text">
                  <h2>Creative Design </h2>
                  <p>
                    Ullamco laboris nisi ut  aliquip ex
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
