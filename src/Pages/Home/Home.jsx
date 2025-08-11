import React, { useEffect, useRef, useState } from "react";

import Layout from "../../components/Layout/Layout";

import background from "../../assets/images/background.jpg"; // if used later
import Category from "../../components/category/Category";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import { MdOutlineSavings, MdOutlinePayments } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

import style from "./Home.module.css";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import BestDeal from "../../components/Bestdeal/BestDeal";
import Blog from "../../components/Blog/Blog";
function Home() {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category-list")
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (catname) => {
    navigate(`/product/${catname}`);
  };



  return (
    <Layout>
      <div className={style.main}>
        <div className="container">
          <div className={style.hero}>
            {/* Left: Categories */}
            <div className={style.left}>
              <h3>Top Categories</h3>
              {category.map((item, index) => (
                <p
                  key={index}
                  onClick={() => handleClick(item)}
                  style={{ cursor: "pointer" }}
                >
                  {item}
                </p>
              ))}
            </div>

            {/* Center: Hero Content */}
            <div className={style.center}>
              <div className={style.content}>
                <h1>Biggest sale of the year!</h1>
                <p>Flat 30% off on women's fashion</p>
                <button onClick={() => handleClick("womens-dresses")}>Shop Now</button>
              </div>
            </div>

            {/* Right Top: Cell Phones */}
            <div className={style.rightup}>
              <div className={style.rcontent}>
                <h3>Cell Phones</h3>
                <p>Trade in and save – limited edition</p>
                <button className="primary" onClick={() => handleClick("smartphones")}>Shop Now</button>
              </div>
            </div>

            {/* Right Bottom: Fragrances */}
            <div className={style.rightdown}>
              <div className={style.rcontent}>
                <h3>Fragrances</h3>
                <p>Quality and modern ceramic pots</p>
                <button className="primary" onClick={() => handleClick("fragrances")}>Shop Now</button>
              </div>
            </div>

            {/* Bottom: Features */}
            <div className={style.bottom}>
              <div className={style.delivery}>
                <TbTruckDelivery className={style.icon} />
                <div className={style.dcontent}>
                  <p>Free Delivery</p>
                  <p>From $59.99</p>
                </div>
              </div>

              <div className={style.delivery}>
                <TbTruckReturn className={style.icon} />
                <div className={style.dcontent}>
                  <p>Free Return</p>
                  <p>365 days</p>
                </div>
              </div>

              <div className={style.delivery}>
                <MdOutlineSavings className={style.icon} />
                <div className={style.dcontent}>
                  <p>Big Savings</p>
                  <p>From $29.99</p>
                </div>
              </div>

              <div className={style.delivery}>
                <BiSupport className={style.icon} />
                <div className={style.dcontent}>
                  <p>Support 24/7</p>
                  <p>Online 24 hours</p>
                </div>
              </div>

              <div className={style.delivery}>
                <MdOutlinePayments className={style.icon} />
                <div className={style.dcontent}>
                  <p>Payment Methods</p>
                  <p>Secure Payments</p>
                </div>
              </div>
            </div>
          </div>      
        </div>
         <Card/>
         <BestDeal/>
         <Blog/>
      </div>
    </Layout>
  );
}

export default Home;
