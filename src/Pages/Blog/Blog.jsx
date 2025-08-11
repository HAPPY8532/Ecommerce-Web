import React from 'react'
import Layout from '../../components/Layout/Layout'
import style from './Blog.module.css'

function Blog() {
  return (
    <>
      <Layout>
        <h1 className={style.blog}>This is Blog Page</h1>
      </Layout>
    </>
  )
}

export default Blog
