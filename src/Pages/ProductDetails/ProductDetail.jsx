import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../../components/Layout/Layout";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useDispatch } from "react-redux";

import { addToCart } from "../../cartfolder/cartSlice";




import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "./ProductDetail.module.css";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();


  console.log(product);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(console.error);
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  // Size arrays
  const letterSizes = ["S", "M", "L", "XL", "XXL"];
  const numberSizes = ["6", "7", "8", "9", "10"];

  // Categories
  const clothesCategories = ["womens-dresses", "mens-shirts"];
  const shoeCategories = ["mens-shoes", "womens-shoes"];

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };


  return (
    <Layout>
      <div className="container">
        <div className={style.productDetail}>
          <div className={style.swiper}>
            <Swiper
              modules={[Pagination, Navigation]}
              slidesPerView={1}
              spaceBetween={10}
              pagination={{ clickable: true }}
              navigation={true}
              loop={false}
              grabCursor={true}
              simulateTouch={true}
              cssMode={false}
            >
              {product.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`product-${idx}`}
                    className={style.swipeImage}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className={style.content}>
            <h1>{product.title}</h1>
            <p>
              <strong>{product.brand}</strong>
            </p>
            <p className={style.stock}>
              Stock: <span>{product.availabilityStatus}</span>
            </p>
            <p>
              <strong>Rating:</strong> {product.rating} ⭐
            </p>
            <span> {product.warrantyInformation}</span>

            <p>
              <strong>Price:</strong>{" "}
              {product.discountPercentage > 0 ? (
                <>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "gray",
                      marginRight: "10px",
                    }}
                  >
                    ${product.price.toFixed(2)}
                  </span>
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    $
                    {(
                      product.price -
                      (product.price * product.discountPercentage) / 100
                    ).toFixed(2)}
                  </span>
                </>
              ) : (
                <span>${product.price.toFixed(2)}</span>
              )}
            </p>
            <p>Minimum order:{product.minimumOrderQuantity}</p>

            <p>Description:{product.description}</p>
          </div>
          <div className={style.addcard}>
            <div className={style.cardimg}>
              <img src={product.thumbnail} alt="" />
            </div>
            <div>
              <p className={style.addtitle}>{product.title}</p>
              <p className={style.addbrand}>{product.brand}</p>
            </div>
            {/* Size display based on category */}
            {clothesCategories.includes(product.category) && (
              <div className={style.sizes}>
                <strong>Sizes:</strong>
                <ul>
                  {letterSizes.map((size, i) => (
                    <li key={i}>{size}</li>
                  ))}
                </ul>
              </div>
            )}

            {shoeCategories.includes(product.category) && (
              <div className={style.sizes}>
                <strong>Shoe Sizes:</strong>
                <ul>
                  {numberSizes.map((size, i) => (
                    <li key={i}>{size}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className={style.addcart}>
              <p>
                $
                {(
                  product.price -
                  (product.price * product.discountPercentage) / 100
                ).toFixed(2)}
              </p>
              <button onClick={handleAddToCart}>add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetail;
