import React, { useState } from "react";
import style from "./Navbar.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Navbar() {
  const [isopen, setisopen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const ToggelBtn = () => {
    setisopen(!isopen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedSearch = searchTerm.trim();
    if (trimmedSearch) {
      navigate(`/shop?search=${encodeURIComponent(trimmedSearch)}`);
      setSearchTerm("");
    } else {
      // Agar empty search hai to shop page bina query ke jao
      navigate("/shop");
    }
  };

  return (
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
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? `${style.navlink} ${style.active}` : style.navlink
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              end
              className={({ isActive }) =>
                isActive ? `${style.navlink} ${style.active}` : style.navlink
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${style.navlink} ${style.active}` : style.navlink
              }
            >
              About us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${style.navlink} ${style.active}` : style.navlink
              }
            >
              Contact us
            </NavLink>

            {/* Search Form */}
            <form onSubmit={handleSearch} className={style.search}>
              <input
                type="text"
                placeholder="Search product here............."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit">
                <FaMagnifyingGlass />
              </button>
            </form>

            <div className={style.cart}>
              <span>🙎‍♂️</span>
              <Link className={style.navlink} to="/cart">
                <span>🛒</span>
              </Link>
              <button onClick={ToggelBtn}>
                {isopen ? <span>❌</span> : <span className={style.hamburger}>🔽</span>}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {isopen && (
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
        )}
      </div>
    </div>
  );
}

export default Navbar;
