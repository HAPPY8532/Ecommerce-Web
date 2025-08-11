import React, { useEffect, useState } from "react";

import style from "./Navbar.module.css";
import { Link, NavLink,  } from "react-router-dom";
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




  return (
    <>
      <div className={style.head}>
        <div className="container">
          <nav>
            <div>
              <NavLink className={`${style.navlink} ${style.logo}`} to="/">
                <p>
                  Neo-<span className={style.mart}>Mart</span>
                </p>
              </NavLink>
            </div>
            <div className={style.nav}>
            <NavLink to="/" end  className={({isActive}) => 
            isActive ? `${style.navlink} ${style.active}`: style.navlink
            }>
              Home
            </NavLink>
          
            <NavLink to="/about"  className={({isActive}) => 
            isActive ? `${style.navlink} ${style.active}`: style.navlink }>
              About
            </NavLink>
            <NavLink   to="/blog"  className={({isActive}) => 
            isActive ? `${style.navlink} ${style.active}`: style.navlink}>
              Blog
            </NavLink>

            <NavLink  to="/contact"  className={({isActive}) => 
            isActive ? `${style.navlink} ${style.active}`: style.navlink}>
              Contact
            </NavLink>

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
        </div>
      </div>
    </>
  );
}

export default Navbar;
