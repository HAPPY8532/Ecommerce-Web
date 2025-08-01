import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import Layout from '../Layout/Layout';
import axios from 'axios';
import style from './Product.module.css'

function Product() {
  const { category } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${category}`)
    .then((res) => {
      setProduct(res.data.products)
    })
  }, [category])
  return (
    <>
    <Layout>
      
    <div className={style.product}>

      {
        product.map((item, index) => (
          <div className={style.card} key={index}>
            <div className={style.imgcontainer}><img src={item.thumbnail}/></div>
            <p>Title:{item.title}</p>
            <p>Price:{item.price}</p>
            <p>Rating:{item.rating}</p>
          </div>
        ))
      }
      {/* You can now fetch products by this category */}
    </div>
    </Layout>
    </>
  );
}

export default Product;
