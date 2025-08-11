import React, { useEffect, useState } from 'react';
import style from './BestDeal.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../cartfolder/cartSlice';
import { toast } from 'react-toastify';


function BestDeal() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => {
        // console.log("API Response:", res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);


  const dispatch = useDispatch()

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
    toast.success(`${item.title} Added To Cart`)

  }
  const bestDeals = products.filter((item) => item.price >= 12 && item.price <= 200);

  return (
    <div className="container">
      <div className={style.products}>
        <p className={style.heading}>.....Popular Products.....</p>
        <h1>Our Best Products</h1>
        <div className={style.cards}>
          {products.length === 0 ? (
            <p>Loading...</p>
          ) : bestDeals.length === 0 ? (
            <p>No deals at $50 found.</p>
          ) : (
            bestDeals.map((item) => (
              <div key={item.id}  className={style.card}>
                <Link to={`/productdetail/${item.id}`}>

                <div className={style.imgcontainer}>
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <p>{item.brand}</p>
                <p className={style.title}>{item.title}</p>
                <p>Rating: {"⭐".repeat(Math.round(item.rating))}</p>
                <p>Price: ${item.price}</p>
                </Link>
                <button onClick={() => handleAddToCart(item)}>Add To Cart</button>
              </div>
              
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default BestDeal;
