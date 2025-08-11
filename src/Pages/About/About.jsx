import React from 'react' 

import Layout from "../../components/Layout/Layout";
import style from './About.module.css'
function About() {
  return (
    <>
      <Layout>
        <h1 className={style.about}>This is About Page</h1>
      </Layout>
    </>
  )
}

export default About
