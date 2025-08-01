import React from 'react'


import style from './Category.module.css'
function Category() {
  return (
    <>
    <div className={style.categorysection}>
      <h1>Categories</h1>
      <div className={style.category}>
        <button>Laptop & Computer</button>
        <button>Phone</button>
        <button>Camera's</button>
        <button>Accesseries</button>
        <button>smart Tv</button>
      </div>
      </div>
    </>
  )
}

export default Category
