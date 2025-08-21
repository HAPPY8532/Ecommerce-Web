import React from 'react';

import style from './Blog.module.css';
import { Link } from 'react-router-dom';
import fake from '../../assets/images/fake.webp';
import Tips from '../../assets/images/tips.webp';
import gagets from '../../assets/images/gagets.webp';

const blogs = [
  {
    id: 1,
    title: "5 Tips for Smart Shopping",
    image: Tips,
    summary: "Discover how to make the most of your online shopping experience with these 5 practical tips.",
  },
  {
    id: 2,
    title: "Top 10 Trending Gadgets",
    image: gagets,
    summary: "Explore the top 10 gadgets that are making waves in the market this season.",
  },
  {
    id: 3,
    title: "How to Spot Fake Reviews",
    image: fake,
    summary: "Learn how to identify genuine reviews from fake ones and shop confidently.",
  }
];

function BlogSection() {
  return (
    <section className="container" id="blog-section">
      <div className={style.blogSection}>
        <p className={style.subtitle}>Latest Insights</p>
        <h1 className={style.title}>From Our Blog</h1>

        <div className={style.grid}>
          {blogs.map((blog) => (
            <Link to={`/blogpage/${blog.id}`} key={blog.id} className={style.card}>
              <div className={style.imageWrapper}>
                <img src={blog.image} alt={`Blog: ${blog.title}`} />
              </div>
              <h3 className={style.blogTitle}>{blog.title}</h3>
              <p className={style.summary}>{blog.summary}</p>
              <span className={style.readMore}>Read More →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
