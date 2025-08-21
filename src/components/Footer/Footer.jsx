import React from 'react';
import { Link } from 'react-router-dom';
import style from './Footer.module.css';

function Footer() {
  const section1 = ['About Us', 'Careers', 'Blog', 'Press'];
  const section2 = ['Shop', 'Categories', 'Deals', 'New Arrivals'];
  const section3 = ['My Cart', 'Checkout', 'Wishlist', 'Orders'];
  const section4 = ['Help Center', 'Returns', 'Shipping Info', 'Contact Us'];

  return (
    <>
      <footer className={style.footer}>
        {/* Logo/Brand */}
        <div className={style.brand}>
          <Link to='/'><h1>Neo-Mart</h1></Link>
        </div>

        {/* Footer Links Section */}
        <div className={style.linkGroups}>
          <div className={style.linksfo}>
            <h4>Company</h4>
            {section1.map((item, index) => (
              <Link to='/' key={index}><span>{item}</span></Link>
            ))}
          </div>

          <div className={style.linksfo}>
            <h4>Explore</h4>
            {section2.map((item, index) => (
              <Link to='/shop' key={index}><span>{item}</span></Link>
            ))}
          </div>

          <div className={style.linksfo}>
            <h4>Account</h4>
            {section3.map((item, index) => (
              <Link to='/cart' key={index}><span>{item}</span></Link>
            ))}
          </div>

          <div className={style.linksfo}>
            <h4>Support</h4>
            {section4.map((item, index) => (
              <Link to='/contact' key={index}><span>{item}</span></Link>
            ))}
          </div>
        </div>
      </footer>

      <div className={style.copy}>
        <p>&copy; 2025 Neo-Mart. All rights reserved. Designed by Happy Kumar.</p>
      </div>
    </>
  );
}

export default Footer;
