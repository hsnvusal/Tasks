import React from 'react';
import styles from './InputSection.module.css';

const InputSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <h2 className={styles.title}>Get notified on each updates.</h2>
        <div className={styles.form}>
          <input
            type="email"
            placeholder="Enter your email address"
            className={styles.input}
          />
          <button className={styles.button}>SUBSCRIBE</button>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Fugiat commodi veniam doloremque ducimus tempora.
        </p>
      </div>
    </div>
  );
};

export default InputSection;
