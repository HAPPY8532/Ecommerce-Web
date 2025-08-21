import React from 'react'

import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import {ToastContainer} from 'react-toastify'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Product from './Pages/Product/Product'
import ProductDetail from './Pages/ProductDetails/ProductDetail'
import About from './Pages/About/About'
import BlogPage from './Pages/Blog/BlogPage'
import Contact from './Pages/Contact/Contact'
import Shop from './Pages/Shop/Shop'

function App() {
  return (
    <>
     <div>
      <BrowserRouter>
      <ToastContainer position='top-right' autoClose={2000}/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/product/:category' element={<Product/>}/>
      <Route path='/productdetail/:id' element={<ProductDetail/>}/>
      <Route path="/blogpage/:id" element={<BlogPage />} />
      </Routes>
      </BrowserRouter>
      </div> 
    </>
  )
}

export default App
