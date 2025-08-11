import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import style from "./Product.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../cartfolder/cartSlice";
import { toast } from "react-toastify";

function Product() {
  const { category } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success(`${item.title} Added To Cart`)
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((res) => {
        setProduct(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, [category]);

  return (
    <Layout>
      <div className="container">
        <h1 className={style.category}>{category}</h1>
        <div className={style.product}>
          {loading ? (
            <p className={style.loading}>Loading products...</p>
          ) : product.length === 0 ? (
            <p>No products found in "{category}".</p>
          ) : (
            product.map((item) => (
              <div className={style.card} key={item.id}>
                <Link className={style.link} to={`/productdetail/${item.id}`}>
                  <div className={style.imgcontainer}>
                    <img src={item.thumbnail} alt={item.title} />
                  </div>
                  <p className={style.brand}>{item.brand}</p>
                  <p>
                    <strong>{item.title}</strong>
                  </p>
                  <p>{"⭐".repeat(Math.round(item.rating))}</p>
                  <p>
                    Price:{" "}
                    {category === "womens-dresses" ? (
                      <>
                        <span style={{ textDecoration: "line-through", color: "lightgray" }}>
                          ${item.price.toFixed(2)}
                        </span>{" "}
                        <br />
                        <span style={{ color: "green" }}>
                          ${Math.floor(item.price * 0.7)}
                        </span>
                      </>
                    ) : (
                      <>
                        <span style={{ textDecoration: "line-through", color: "lightgray" }}>
                          ${item.price.toFixed(2)}
                        </span>{" "}
                        <br />
                        <span style={{ color: "green" }}>
                          $
                          {(
                            item.price -
                            (item.price * item.discountPercentage) / 100
                          ).toFixed(2)}
                        </span>
                      </>
                    )}
                  </p>
                </Link>
                <button onClick={() => handleAddToCart(item)}>add to cart</button>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Product;
