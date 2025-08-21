// src/Pages/CartPage/CartPage.jsx
import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
}  from "../../cartfolder/cartSlice.js";
import style from './Cart.module.css';
import Layout from "../../components/Layout/Layout";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className={style.emptyCart}>
          <h2>Your cart is empty 🛒</h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container">
        <h2 className={style.title}>Your Shopping Cart</h2>
        <ul className={style.cartList}>
          {cartItems.map((item) => (
            <li key={item.id} className={style.cartItem}>
              <div className={style.imageContainer}>
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <div className={style.details}>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <div className={style.buttonGroup}>
                  <button
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    disabled={item.quantity === 1}
                    className={style.quantityBtn}
                  >
                    -
                  </button>
                  <button
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    className={style.quantityBtn}
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className={style.removeBtn}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <h2 className={style.total}>Total: ${totalPrice.toFixed(2)}</h2>
      </div>
    </Layout>
  );
};

export default Cart;
