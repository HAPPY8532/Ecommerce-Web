import React from 'react'

import { Link } from 'react-router-dom'
import style from './Footer.module.css'

function Footer() {
  return (
    <>
    <div className={style.footer}>
        <div className={style.brand}>
            <Link to='/'><h1>Logo</h1></Link>
        </div>
        <div className={style.linksfo}>
            <Link to='/'><span>Home page one</span></Link>
            <Link to='/'><span>Home page one</span></Link>
            <Link to='/'><span>Home page one</span></Link>
            <Link to='/'><span>Home page one</span></Link>
        </div>
        <div className={style.linksfo}>
            <Link to='/'><span>Home page two</span></Link>
            <Link to='/'><span>Home page two</span></Link>
            <Link to='/'><span>Home page two</span></Link>
            <Link to='/'><span>Home page two</span></Link>
        </div>
        <div className={style.linksfo}>
            <Link to='/cart'><span>cart page one</span></Link>
            <Link to='/cart'><span>cart page one</span></Link>
            <Link to='/cart'><span>cart page one</span></Link>
            <Link to='/cart'><span>cart page one</span></Link>
        </div>
        <div className={style.linksfo}>
            <Link to='/cart'><span>cart page two</span></Link>
            <Link to='/cart'><span>cart page two</span></Link>
            <Link to='/cart'><span>cart page two</span></Link>
            <Link to='/cart'><span>cart page two</span></Link>
        </div>

    </div>
    <div className="copy">
        <p>@copy &copy; Happy Kumar 2025</p>
    </div>

    </>
  )
}

export default Footer
