import { BlogPostsData } from "@/data";
import React from "react";
import { Col, Row } from "react-bootstrap";
import BlogCard from "./blog-card";

const BlogTwo = () => {
  return (
    <section className="blog-style-one sec-pad">
      <div className="thm-container">
        <div className="sec-title text-center">
          <span>Blog posts</span>
          <h3>Latest News</h3>
          <p>
            There are many variations of passages of lorem Ipsum available, but{" "}
            <br />
            the majority have suffered alteration in some form.
          </p>
        </div>
        <Row>
        </Row>
      </div>
    </section>
  );
};

export default BlogTwo;
