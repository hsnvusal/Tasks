import React from 'react';
import styles from './BlogPosts.module.css';

const posts = [
  {
    image: 'https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    author: 'Ham Brook',
    date: 'Jan 18, 2019',
    category: 'News',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.',
  },
  {
    image: 'https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    author: 'James Phelps',
    date: 'Jan 18, 2019',
    category: 'News',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.',
  },
  {
    image: 'https://preview.colorlib.com/theme/selling/images/model_5_bg.jpg',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    author: 'James Phelps',
    date: 'Jan 18, 2019',
    category: 'News',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.',
  },
];

const BlogPosts = () => {
  return (
    <section className={styles.blogSection}>
      <p className={styles.subHeading}>BLOG</p>
      <h2 className={styles.heading}>Blog Posts</h2>
      <div className={styles.cardContainer}>
        {posts.map((post, index) => (
          <div key={index} className={styles.card}>
            <img src={post.image} alt="Blog" className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{post.title}</h3>
            <div className={styles.cardMeta}>
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span className={styles.category}>{post.category}</span>
            </div>
            <p className={styles.cardText}>{post.text}</p>
            <a href="#" className={styles.readMore}>Continue Reading...</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;
