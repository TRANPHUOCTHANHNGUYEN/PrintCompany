import React from "react";
import { Row, Col } from "react-bootstrap";
import { BlogPostsData } from "@/data";
import BlogCard from "@/components/blog-card";
import PostPaginations from "@/components/post-paginations";

const BlogOne = () => {
  return (
    <section className="blog-style-one sec-pad blog-page">
      <div className="thm-container">
        <Row>
        </Row>
        <PostPaginations />
      </div>
    </section>
  );
};

export default BlogOne;
