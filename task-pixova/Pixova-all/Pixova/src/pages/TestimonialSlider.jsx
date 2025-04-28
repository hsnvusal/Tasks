import React, { useState } from "react";

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      text: "Working with Pixova has been an experience for a lifetime. I strongly recommend these guys for their.",
      name: "JOHN DOE",
    },
    {
      id: 2,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      text: "Absolutely amazing experience. Great communication and delivery. Highly recommended!",
      name: "JANE DOE",
    },
    {
      id: 3,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      text: "They are professionals! Helped my business grow significantly with their strategies.",
      name: "MICHAEL SMITH",
    },
  ];

  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    } else if (touchEndX - touchStartX > 50) {
      prevSlide();
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px 20px",
        maxWidth: "800px",
        margin: "0 auto",
        position: "relative",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <p style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
        We don't like to brag, others do it for us.
      </p>

      <img
        src={testimonials[index].image}
        alt="avatar"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "20px",
        }}
      />
      <p style={{ fontSize: "16px", color: "#444", padding: "0 20px" }}>
        {testimonials[index].text}
      </p>
      <p
        style={{
          marginTop: "10px",
          color: "#f4a300",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        {testimonials[index].name}
      </p>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={prevSlide}
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            padding: "10px",
            marginRight: "10px",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            padding: "10px",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
