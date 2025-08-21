import React, { useEffect, useState } from "react";

import Layout from "../../components/Layout/Layout";
import style from "./Shop.module.css";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from '../../cartfolder/cartSlice';
import { toast } from "react-toastify";

function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState(10000);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get("search")?.trim() || "";

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category-list")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log("Categories fetch error:", err));
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      try {
        let url = "https://dummyjson.com/products";

        if (searchTerm) {
          url = `https://dummyjson.com/products/search?q=${encodeURIComponent(
            searchTerm
          )}`;
        } else if (selectedCategory) {
          url = `https://dummyjson.com/products/category/${selectedCategory}`;
        }

        const res = await axios.get(url);
        let fetchedProducts = res.data.products || res.data;

        fetchedProducts = fetchedProducts.filter((p) => p.price <= maxPrice);

        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products", error);
        setProducts([]);
      }
    }
    fetchProducts();
  }, [searchTerm, selectedCategory, maxPrice]);

  const dispatch = useDispatch()

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
    toast.success(`${item.title} Added To Cart`)
  }
  return (
    <Layout>
      <div className={style.main}>
        <aside className={style.aside}>
          <h3>Filters</h3>

          <div className={style.filterSection}>
            <h4>Category</h4>
            <div className={style.scrollList}>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={style.filterSection}>
            <h4>Brand</h4>
            <label><input type="checkbox" /> Apple</label>
            <label><input type="checkbox" /> Samsung</label>
            <label><input type="checkbox" /> Lenovo</label>
          </div>

          <div className={style.filterSection}>
            <h4>Price</h4>
            <input
              className={style.range}
              type="range"
              min={0}
              max={37000}
              step={50}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
            <div className={style.priceInputs}>
              <span>Up to: ${maxPrice}</span>
            </div>
            <div className={style.quickPriceButtons}>
              {[500, 1000, 1500, 2000].map((price, index) => (
                <button key={index} onClick={() => setMaxPrice(price)}>
                  Up to ₹{price}
                </button>
              ))}
              <button onClick={() => setMaxPrice(10000)}>Show All</button>
            </div>
          </div>

          <div className={style.filterSection}>
            <h4>Rating</h4>
            <label><input type="checkbox" /> 4★ & above</label>
            <label><input type="checkbox" /> 3★ & above</label>
          </div>
        </aside>

        <section className={style.Products}>
          <div className={style.banner}>
            <h1>Shop</h1>
            {searchTerm && (
              <p>
                Search results for: <strong>{searchTerm}</strong>
              </p>
            )}
          </div>

          <div className={style.productsGrid}>
            {products.length > 0 ? (
              products.map((item) => (
                <div key={item.id} className={style.card}>
                  <Link className={style.link} to={`/productdetail/${item.id}`}>
                  <div className={style.imagecontainer}>
                    <img src={item.thumbnail} alt={item.title} />
                  </div>
                  {item.brand && <h4>Brand: {item.brand}</h4>}
                  <h3>{item.title}</h3>
                  <p>Rating: {"⭐".repeat(Math.floor(item.rating))}</p>
                  <p>
                    Price:{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      ${item.price}
                    </span>{" "}
                    <span className={style.price}>
                      $
                      {(
                        (item.price * (100 - item.discountPercentage)) /
                        100
                      ).toFixed(2)}
                    </span>
                  </p>
                  <div className={style.sticker}>
                    {item.discountPercentage.toFixed(0)}% OFF
                  </div>
                  </Link>
                  <button onClick={() => handleAddToCart(item)} className={style.addtocart}>Add to cart</button>
                </div>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Shop;
