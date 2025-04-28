import React, { useState } from "react";

const Slider = () => {
  const cards = [
    {
      id: 1,
      image: "https://picsum.photos/id/1018/400/300",
      date: "September 15, 2017",
      title: "Latest announcements",
      description: "Our latest free WordPress themes has launched on w.org.",
    },
    {
      id: 2,
      image: "https://picsum.photos/id/1015/400/300",
      date: "August 9, 2017",
      title: "Hello world!",
      description: "Welcome to colorlib.com. This is your first post. Edit or delete it, then start blogging!",
    },
    {
      id: 3,
      image: "https://picsum.photos/id/1019/400/300",
      date: "July 22, 2017",
      title: "New Features",
      description: "Check out the new features added in our latest release.",
    },
    {
        id: 2,
        image: "https://picsum.photos/id/1015/400/300",
        date: "August 9, 2017",
        title: "Hello world!",
        description: "Welcome to colorlib.com. This is your first post. Edit or delete it, then start blogging!",
      },
      {
        id: 1,
        image: "https://picsum.photos/id/1018/400/300",
        date: "September 15, 2017",
        title: "Latest announcements",
        description: "Our latest free WordPress themes has launched on w.org.",
      },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < cards.length - 2) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div style={{ width: "85%", margin: "50px auto", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          transform: `translateX(-${index * (100 / 2)}%)`,
          transition: "transform 0.5s ease",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              flex: "0 0 50%",
              boxSizing: "border-box",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={card.image}
              alt="card"
              style={{
                width: "100%",
                height: "450px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <p style={{ marginTop: "15px", color: "#f4a300", fontSize: "14px" }}>{card.date}</p>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", margin: "10px 0" }}>{card.title}</h3>
            <p style={{ color: "#555", fontSize: "14px" }}>{card.description}</p>
          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "#fff",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        &#8592;
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "#fff",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        &#8594;
      </button>
    </div>
  );
};

export default Slider;
