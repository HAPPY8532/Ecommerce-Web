import React from 'react'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Product from './components/Product/Product'

function App() {
  return (
    <>
     <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/product/:category' element={<Product/>}/>
      </Routes>
      </BrowserRouter>
      </div> 
    </>
  )
}

export default App
