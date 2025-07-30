import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className="footer">
        <div className="brand">
            <Link to='/'><h1>Logo</h1></Link>
        </div>
        <div className="links-fo">
            <Link to='/'><span>Home page one</span></Link>
            <Link to='/'><span>Home page one</span></Link>
            <Link to='/'><span>Home page one</span></Link>
            <Link to='/'><span>Home page one</span></Link>
        </div>
        <div className="links-fo">
            <Link to='/'><span>Home page two</span></Link>
            <Link to='/'><span>Home page two</span></Link>
            <Link to='/'><span>Home page two</span></Link>
            <Link to='/'><span>Home page two</span></Link>
        </div>
        <div className="links-fo">
            <Link to='/cart'><span>cart page one</span></Link>
            <Link to='/cart'><span>cart page one</span></Link>
            <Link to='/cart'><span>cart page one</span></Link>
            <Link to='/cart'><span>cart page one</span></Link>
        </div>
        <div className="links-fo">
            <Link to='/cart'><span>cart page two</span></Link>
            <Link to='/cart'><span>cart page two</span></Link>
            <Link to='/cart'><span>cart page two</span></Link>
            <Link to='/cart'><span>cart page two</span></Link>
        </div>

    </div>

    </>
  )
}

export default Footer
