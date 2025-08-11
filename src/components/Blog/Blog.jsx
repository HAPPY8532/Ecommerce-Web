import React from 'react';
import style from './Blog.module.css';
import { Link } from 'react-router-dom';
import fake from '../../assets/images/fake.webp'
import Tips from '../../assets/images/tips.webp'
import gagets from '../../assets/images/gagets.webp'

const blogs = [
  {
    id: 1,
    title: "5 Tips for Smart Shopping",
    image: Tips,
    summary: "Discover how to make the most of your online shopping experience with these 5 practical tips.",
    slug: "/blog/5-tips"
  },
  {
    id: 2,
    title: "Top 10 Trending Gadgets",
    image: gagets,
    summary: "Explore the top 10 gadgets that are making waves in the market this season.",
    slug: "/blog/top-gadgets"
  },
  {
    id: 3,
    title: "How to Spot Fake Reviews",
    image: fake,
    summary: "Learn how to identify genuine reviews from fake ones and shop confidently.",
    slug: "/blog/fake-reviews"
  }
];

function BlogSection() {
  return (
    <div className="container">
      <div className={style.blogSection} id='blog-section'>
        <p>Latest Insights</p>
        <h1>From Our Blog</h1>
        <div className={style.grid}>
          {blogs.map(blog => (
            <div className={style.card} key={blog.id}>
              <div className={style.image}>
                <img src={blog.image} alt={blog.title} />
              </div>
              <h3>{blog.title}</h3>
              <p>{blog.summary}</p>
              <Link to={blog.slug} className={style.readMore}>
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
