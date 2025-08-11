import React from 'react'

import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import {ToastContainer} from 'react-toastify'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Product from './Pages/Product/Product'
import ProductDetail from './Pages/ProductDetails/ProductDetail'
import About from './Pages/About/About'
import Blog from './Pages/Blog/Blog'
import Contact from './Pages/Contact/Contact'

function App() {
  return (
    <>
     <div>
      <BrowserRouter>
      <ToastContainer position='top-right' autoClose={2000}/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/product/:category' element={<Product/>}/>
      <Route path='/productdetail/:id' element={<ProductDetail/>}/>
      </Routes>
      </BrowserRouter>
      </div> 
    </>
  )
}

export default App
