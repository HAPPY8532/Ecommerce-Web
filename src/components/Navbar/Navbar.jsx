import React, { useEffect, useState } from "react";

import style from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import axios from "axios";

function Navbar() {
  const [isopen, setisopen] = useState(false);
  const [isdown, setisdown] = useState(false);

  const ToggelBtn = () => {
    setisopen(!isopen);
  };
  const open = () => {
    setisdown(!isdown);
  };

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

  const navigate = useNavigate();

  const handleClick = (catname) => {
    navigate(`../product/${catname}`);
    setisdown(false);
  };

  return (
    <>
      <div className={style.head}>
        <div className="container">
          <nav>
            <div>
              <Link className={`${style.navlink} ${style.logo}`} to="/">
                <p>
                  Neo-<span className={style.mart}>Mart</span>
                </p>
              </Link>
            </div>
            <div className={style.nav}>
            <Link className={style.navlink} to="/">
              Home
            </Link>
            <Link className={style.navlink} onClick={open}>
              Category <FaCaretDown />
            </Link>
            <Link className={style.navlink} to="/about">
              About
            </Link>
            <Link className={style.navlink} to="/blog">
              Blog
            </Link>

            <Link className={style.navlink} to="/contact">
              Contact
            </Link>

            <div className={style.cart}>
              <span>🙎‍♂️</span>
              <Link className={style.navlink} to="/cart">
                <span>🛒</span>
              </Link>
              {isopen ? (
                <button onClick={ToggelBtn}>
                  <span>❌</span>
                </button>
              ) : (
                <button onClick={ToggelBtn}>
                  <span className={style.hamburger}>🔽</span>
                </button>
              )}
            </div>
            </div>
          </nav>

          {/* for Mobile screen */}
          {isopen ? (
            <div className={style.activenav}>
              <Link className={style.navlink} to="/">
                Home
              </Link>
              <Link className={style.navlink} to="/All">
                All Products
              </Link>
              <Link className={style.navlink} to="/Category">
                Category
              </Link>
              <Link className={style.navlink} to="/contact">
                Contact
              </Link>
            </div>
          ) : (
            ""
          )}

          {/* for Category Selector btns */}
          {isdown && (
            <div className={style.category}>
              {category.map((cat, index) => (
                <button key={index} onClick={() => handleClick(cat)}>
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
