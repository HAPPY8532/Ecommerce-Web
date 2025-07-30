import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className="head">
    <div>
        <Link to='/'>
        <h1>Logo</h1>
        </Link>
    </div>
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/All'>All Products</Link>
        <Link to='/Category'>Category</Link>
        <Link to='/contact'>Contact</Link>
    </nav>
    <div className='cart'>
        <span>🙎‍♂️</span>
        <Link to='/cart'>
        <span>🛒</span>
        </Link>
         <span className='hamm'>🔽</span>

    </div>
    </div>
    </>
  )
}

export default Navbar
