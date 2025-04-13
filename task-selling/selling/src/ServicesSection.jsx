import React from 'react';
import styles from './ServicesSection.module.css';
import { FaChartPie, FaTimes, FaPalette, FaCheck, FaBriefcase, FaCloud } from 'react-icons/fa';

const services = [
  { icon: <FaChartPie />, title: 'Business Consulting' },
  { icon: <FaTimes />, title: 'Market Analysis' },
  { icon: <FaPalette />, title: 'User Monitoring' },
  { icon: <FaCheck />, title: 'Seller Consulting' },
  { icon: <FaBriefcase />, title: 'Financial Investment' },
  { icon: <FaCloud />, title: 'Financial Management' },
];

const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
      <p className={styles.subHeading}>OUR SERVICES</p>
      <h2 className={styles.heading}>We Offer Services</h2>
      <div className={styles.cardsContainer}>
        {services.map((service, index) => (
           <div key={index} className={styles.card}>
           <div className={styles.cardContent}>
             <div className={styles.icon}>{service.icon}</div>
             <div className={styles.textContent}>
               <h3 className={styles.title}>{service.title}</h3>
               <p className={styles.desc}>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />
                 Perferendis quis molestiae vitae eligendi at.
               </p>
               <a href="#" className={styles.learnMore}>Learn More</a>
             </div>
           </div>
         </div>
         

        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
