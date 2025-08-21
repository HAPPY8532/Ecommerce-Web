import React from 'react';
import style from './About.module.css'; // Use CSS Modules or switch to global CSS
import Layout from "../../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className='container'>
      <div className={style.aboutUs}>
        {/* Hero Section */}
        <section className={style.heroSection}>
          <h1>Welcome to Neo- <span>Mart</span> – Your Smart Shopping Destination</h1>
          <p>Discover convenience, quality, and unbeatable prices, all in one place.</p>
        </section>

        {/* Our Story */}
        <section className={style.ourStory}>
          <h2>Our Journey</h2>
          <p>
            Neo-Mart started with a simple idea – to make everyday shopping easier, faster, and smarter.
            Founded in 2023, Neo-Mart is a modern e-commerce platform that connects customers to a wide
            range of quality products at affordable prices — all from the comfort of their homes.
          </p>
          <p>
            What began as a small startup is now one of the fastest-growing online marketplaces, thanks to
            the trust and support of our amazing customers.
          </p>
        </section>

        {/* Mission, Vision, Values */}
        <section className={style.missionVision}>
          <h2>Our Mission</h2>
          <p>To provide a seamless, reliable, and enjoyable shopping experience for every customer.</p>

          <h2>Our Vision</h2>
          <p>To become a leading online marketplace in India and beyond, offering everything you need — when you need it.</p>

          <h2>Our Core Values</h2>
          <ul>
            <li>Customer Satisfaction</li>
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Fast Delivery</li>
            <li>Affordable Pricing</li>
          </ul>
        </section>

        {/* What We Offer */}
        <section className={style.whatWeOffer}>
          <h2>What We Offer</h2>
          <ul>
            <li>Groceries & Daily Essentials</li>
            <li>Fashion & Lifestyle</li>
            <li>Electronics & Gadgets</li>
            <li>Home & Kitchen</li>
            <li>Personal Care Items</li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section className={style.whyChooseUs}>
          <h2>Why Choose Neo-Mart?</h2>
          <ul>
            <li>✅ Wide Product Range</li>
            <li>✅ Trusted Sellers & Brands</li>
            <li>✅ Easy Returns & Replacements</li>
            <li>✅ Fast & Reliable Delivery</li>
            <li>✅ Safe and Secure Payments</li>
            <li>✅ 24/7 Customer Support</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className={style.ctaSection}>
          <h2>Want to experience hassle-free shopping?</h2>
          <button onClick={() => window.location.href = "/shop"}>Start Shopping Now</button>
        </section>

        {/* Footer */}
        <section className={style.contactInfo}>
          <h3>Contact Us</h3>
          <p>Email: support@neomart.in</p>
          <p>Phone: +91-9876543210</p>
          <p>Address: Neo-Mart Pvt Ltd, Sector 45, Gurgaon, Haryana, India</p>
          <div className={style.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a> | 
            <a href="https://instagram.com" target="_blank" rel="noreferrer"> Instagram</a> | 
            <a href="https://x.com" target="_blank" rel="noreferrer"> X (Twitter)</a>
          </div>
        </section>
      </div>
      </div>
    </Layout>
  );
};

export default About;
