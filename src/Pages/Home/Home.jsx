import React, { useEffect, useState } from "react";

import Layout from "../../components/Layout/Layout";

import background from "../../assets/images/background.jpg";
import Category from "../../components/category/Category";
import { TbTruckDelivery, TbTruckReturn } from 'react-icons/tb';
import { MdOutlineSavings, MdOutlinePayments } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';

import style from "./Home.module.css";
import axios from "axios";
function Home() {
  const [category, setCategory] = useState([]);

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

  return (
    <Layout>
      <div className={style.main}>
        <div className="container">
          <div className={style.hero}>
            <div className={style.left}>
              <h3>Top Categories</h3>
              {category.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <div className={style.center}>
              <div className={style.content}>
                <h1>Bigest sale of the year!</h1>
                <p>Flat 30% off on women fashion</p>
                <button>shop now</button>
              </div>
            </div>
            <div className={style.rightup}>
              <div className={style.rcontent}>
                <h3>cell phones</h3>
                <p>trade in and save limited edition</p>
                <button>shop now</button>
              </div>
            </div>
            <div className={style.rightdown}>
              <div className={style.rcontent}>
                <h3>fragrancies</h3>
                <p>quality and modern caramic pots</p>
                <button>shop now</button>
              </div>
            </div>
            <div className={style.bottom}>
              <div className={style.delivery}>
                <TbTruckDelivery  className={style.icon}/>
                <div className={style.dcontent}>
                  <p>free delivery</p>
                  <p>from $59.99</p>
                </div>
              </div>
              <div className={style.delivery}>
                <TbTruckReturn className={style.icon}/>
                <div className={style.dcontent}>
                  <p>free return</p>
                  <p>365 a day</p>
                </div>
              </div>
              <div className={style.delivery}>
                <MdOutlineSavings className={style.icon}/>
                <div className={style.dcontent}>
                  <p>big saving</p>
                  <p>from $29.99</p>
                </div>
              </div>
              <div className={style.delivery}>
                <BiSupport className={style.icon}/>
                <div className={style.dcontent}>
                  <p>support 24*7</p>
                  <p>online 24 hourse</p>
                </div>
              </div>
              <div className={style.delivery}>
                <MdOutlinePayments className={style.icon}/>
                <div className={style.dcontent}>
                  <p>payment method</p>
                  <p>secure payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
