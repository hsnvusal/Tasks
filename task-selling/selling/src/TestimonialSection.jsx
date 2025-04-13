import React from 'react';
import styles from './TestimonialSection.module.css';

const TestimonialSection = () => {
  return (
    <section className={styles.testimonialSection}>
      <p className={styles.subheading}>PEOPLE SAYS</p>
      <h2 className={styles.heading}>Testimonials</h2>

      <img
        src="https://preview.colorlib.com/theme/selling/images/person_3.jpg.webp" 
        alt="John Smith"
        className={styles.avatar}
      />

      <p className={styles.quote}>
        “Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi
        minima fuga beatae illum eligendi incidunt consequatur. Amet dolores
        excepturi earum unde iusto.”
      </p>
      <p className={styles.author}>John Smith</p>
    </section>
  );
};

export default TestimonialSection;
