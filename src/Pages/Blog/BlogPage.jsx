import React from "react";
import { useParams } from "react-router-dom";
import fake from "../../assets/images/fake.webp";
import Tips from "../../assets/images/tips.webp";
import gagets from "../../assets/images/gagets.webp";
import Layout from "../../components/Layout/Layout";
import style from './Blog.module.css'

const blogData = [
  {
    id: "1",
    title: "5 Tips for Smart Shopping",
    image: Tips,
    content: [
      "1. **Compare Prices Across Platforms:** Before buying anything, always check its price across multiple websites and apps. Use price comparison tools or extensions like Honey or Google Shopping to find the best deals.",
      "2. **Read Reviews Strategically:** Don't just look at the number of stars—read actual user feedback. Prioritize reviews with images and in-depth commentary to ensure the product meets your expectations.",
      "3. **Use Coupons and Cashback:** Always search for promo codes or coupons before checking out. Use cashback platforms like Rakuten or your credit card rewards to get extra savings.",
      "4. **Check Return and Warranty Policies:** Always verify if the product can be returned or replaced easily. Especially for electronics or clothes, flexible return policies can save you stress later.",
      "5. **Make a List and Stick to It:** Impulse purchases often lead to regret. Make a list of what you need before shopping, and try to avoid unnecessary scrolling or being influenced by 'limited time' banners.",
    ],
  },
  {
    id: "2",
    title: "Top 10 Trending Gadgets",
    image: gagets,
    content: [
      "1. **Smart Glasses:** Brands like Ray-Ban and Meta have released smart glasses that let you take photos, listen to music, and even answer calls — hands-free.",
      "2. **Portable Projectors:** Compact projectors like Anker Nebula make it easy to turn any wall into a home theater experience, perfect for travelers and small spaces.",
      "3. **Wireless Charging Stations:** Multi-device wireless chargers are trending, especially with support for phones, earbuds, and smartwatches in one place.",
      "4. **Smart Rings:** Fitness tracking is going beyond watches. Smart rings like Oura track sleep, activity, and heart rate discreetly.",
      "5. **Foldable Smartphones:** With better durability and design, foldables from Samsung and OnePlus are making waves in 2025.",
      "6. **AI-Powered Assistants:** Devices like Rabbit R1 and Humane AI pin are taking voice assistants to the next level with on-the-go AI.",
      "7. **Pet Tech:** Automatic feeders, GPS collars, and pet cameras are trending among pet owners who want more peace of mind.",
      "8. **Air Purifiers with Smart Sensors:** Modern purifiers can now detect air quality and auto-adjust — a must-have for urban living.",
      "9. **Wearable Health Monitors:** Beyond smartwatches, there are patches and bands that give real-time glucose, blood pressure, and hydration data.",
      "10. **Augmented Reality Headsets:** Apple Vision Pro and similar AR devices are setting the stage for immersive experiences in gaming, work, and education.",
    ],
  },
  {
    id: "3",
    title: "How to Spot Fake Reviews",
    image: fake,
    content: [
      "1. **Check for Repetition:** Fake reviews often use the same phrases repeatedly. If multiple reviews look like copy-paste versions of each other, be cautious.",
      "2. **Look at Reviewer Profiles:** If the reviewer has only one review or their profile lacks a name/photo, it might be fake. Trust profiles with consistent reviewing history.",
      "3. **Watch Out for Extreme Language:** Over-the-top praise like 'best product ever!!!' or harsh bashing without explanation could indicate a fake review.",
      "4. **Check the Timeline:** A sudden surge of 5-star reviews within a short time is suspicious. It often suggests paid or manipulated reviews.",
      "5. **Use Fake Review Detector Tools:** Websites like Fakespot or ReviewMeta can help analyze reviews and provide a trust score for listings.",
      "6. **Verify Verified Purchases:** Always look for 'Verified Purchase' tags, especially on marketplaces like Amazon. These reviews are more likely to be real.",
      "7. **Look for Specific Details:** Genuine reviews often mention specific product features, pros/cons, and personal experiences — not just generic statements.",
    ],
  },
];

function BlogPage() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="container">
        <h2>Blog not found</h2>
      </div>
    );
  }

  return (
    <Layout>
    <div className="container">
      <div className={style.blog}>
      <img
        src={blog.image}
        alt={blog.title}
      />
      <h1>{blog.title}</h1>
      <p style={{ marginTop: "1rem" }}>
        {blog.content.map((paragraph, index) => (
          <p key={index} style={{ marginBottom: "1rem", lineHeight: "1.6" }}>
            {paragraph}
          </p>
        ))}
      </p>
      </div>
    </div>
    </Layout>
  );
}

export default BlogPage;
