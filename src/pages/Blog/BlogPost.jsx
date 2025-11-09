import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogData } from "../../data/BlogData"; 
import "../../styles/BlogPost.css";            

export default function BlogPost() {
  const { id } = useParams();
  const post = blogData.find((b) => b.id === parseInt(id));

  if (!post) {
    return (
      <section className="blog-post">
        <p>ბლოგი ვერ მოიძებნა 😢</p>
        <Link to="/blog" className="back-link">← დაბრუნება ბლოგზე</Link>
      </section>
    );
  }

  return (
    <section className="blog-post">
      {post.image && <img src={post.image} alt={post.title} className="blog-image" />}
      <h1>{post.title}</h1>

      <p className="blog-text">{post.content}</p> 
      <Link to="/blog" className="back-link">← დაბრუნება ბლოგზე</Link>
    </section>
  );
}