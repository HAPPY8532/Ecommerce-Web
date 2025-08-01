import React from 'react'


import Layout from '../../components/Layout/Layout'
import style from './Cart.module.css'

function Cart() {
  return (
    <Layout>
        <div className={style.cartcontainer}>
            <h1>Cart page</h1>
        </div>
    </Layout>
  )
}

export default Cart
