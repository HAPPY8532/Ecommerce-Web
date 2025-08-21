import React from 'react';
import style from './Contact.module.css';
import Layout from '../../components/Layout/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className='container'>
      <div className={style.contactContainer}>
        {/* Hero/Header Section */}
        <section className={style.heroSection}>
          <h1>Get in Touch with Neo-Mart</h1>
          <p>We’re here to help you 24/7. Reach out for support, feedback, or inquiries.</p>
        </section>

        {/* Contact Info Section */}
        <section className={style.infoSection}>
          <div className={style.infoBox}>
            <h3>📍 Address</h3>
            <p>Neo-Mart Pvt Ltd,<br />Sector 45, Gurgaon, Haryana, India</p>
          </div>

          <div className={style.infoBox}>
            <h3>📞 Phone</h3>
            <p>+91-9876543210</p>
          </div>

          <div className={style.infoBox}>
            <h3>📧 Email</h3>
            <p>support@neomart.in</p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className={style.formSection}>
          <h2>Send Us a Message</h2>
          <form className={style.contactForm}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
      </div>
    </Layout>
  );
};

export default Contact;
