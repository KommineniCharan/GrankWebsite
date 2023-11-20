import React from "react";
import Header from "../header2/Header";
import { NavLink } from "react-router-dom";
import Seo from "../seo/Seo";
import { motion } from "framer-motion";

const Automotive = () => {
  return (
    <>
      <Seo
        title="Blog | G-Rank"
        description="Dive into our Blog to explore a treasure trove of articles, tips, and expertise that cover a wide range of topics. "
        name="Company name."
        type="article"
        YahooSeeker="INDEX, FOLLOW"
        msnbot="INDEX, FOLLOW"
        googlebot="INDEX, FOLLOW"
        keywords="react, meta tags, seo"
        searchengines="ALL"
        canonical="https://www.grank.co.in"
      ></Seo>
      <section className="section-top">
        <Header />
        {/* banner start */}
        <div
          className="creative-banner-display-ads"
          style={{ backgroundColor: "#fff", position: "relative" }}
        >
          <img
            className="img-fluid w-100"
            src="assest/photos/blog/blog-banner2.png"
            alt="G-Rank"
          />

          <div className="blog-banner-div">
            <motion.h2
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              Blogs
            </motion.h2>
          </div>
        </div>
        {/* banner end */}
        {/* images start */}
        <section className="blog-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 blog-images-section">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <img
                    className="img-fluid w-100"
                    src="assest/photos/blog/blog-img1.jpg"
                    alt="G-Rank"
                  />
                </motion.div>
                <motion.h4
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  Everyone wants a home, right? Yet, selling a home is not
                  child's play.
                </motion.h4>
                <h5>
                  Much has happened in 2022. With the industry constantly
                  changing, it is vital to level up the game and tap into
                  competitive marketing. Among all techniques, a digital
                  footprint is a modern way to capture the interest and engage
                  with potential buyers...
                </h5>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/blog-first"
                >
                  <span>
                    <h2>Read More...</h2>
                  </span>
                </NavLink>
              </div>
              <div className="col-12 col-md-6 col-lg-6 blog-images-section">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <img
                    className="img-fluid w-100"
                    src="assest/photos/blog/blog-img2.jpg"
                    alt="G-Rank"
                  />
                </motion.div>
                <motion.h4
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  Yes, digital marketing is essential for the success of any
                  business. But does it suffice? Honestly, no.
                </motion.h4>
                <h5>
                  Have you ever thought about why big businesses focus on brand
                  value? Because adding an extra dosage of branding is necessary
                  for quality business growth. Like two peas in a pod, branding
                  and...
                </h5>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/blog-second"
                >
                  <span>
                    <h2>Read More...</h2>
                  </span>
                </NavLink>
              </div>
              <div className="col-12 col-md-6 col-lg-6 blog-images-section">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  <img
                    className="img-fluid w-100"
                    src="assest/photos/blog/blog-img3.jpg"
                    alt="G-Rank"
                  />
                </motion.div>
                <motion.h4
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  Search Engine Optimization & Pay Per Click Are Effective For
                  Brands
                </motion.h4>
                <h5>
                  Are you also curious how search engine optimization & pay per
                  click are effective for brands? Moreover, can they work
                  together? It’s usual for tons of doubts to pop into your head
                  in this adventurous web world. The answer is yes, though...
                </h5>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/blog-third"
                >
                  <span>
                    <h2>Read More...</h2>
                  </span>
                </NavLink>
              </div>
              <div className="col-12 col-md-6 col-lg-6 blog-images-section">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  <img
                    className="img-fluid w-100"
                    src="assest/photos/blog/blog-img4.jpg"
                    alt="G-Rank"
                  />
                </motion.div>
                <motion.h4
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  How To Improve Your Seo With User-Friendly Interlinking
                </motion.h4>
                <h5>
                  Given the volume of material on the plate, it’s inevitable to
                  get mixed in this tricky system. Do not worry, we have an
                  Interlinking remedy for this. Call it a technique or a
                  hack,...
                </h5>

                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/blog-four"
                >
                  <span>
                    <h2>Read More...</h2>
                  </span>
                </NavLink>
              </div>
              <div className="col-12 col-md-6 col-lg-6 blog-images-section">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  <img
                    className="img-fluid w-100"
                    src="assest/photos/blog/blog-img5.jpg"
                    alt="G-Rank"
                  />
                </motion.div>
                <motion.h4
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  7 tips for helping you increase organic traffic
                </motion.h4>
                <h5>
                  Are you also constantly creating A1 content? It is upsetting
                  that we aren't getting organic traffic despite our best
                  efforts and never-ending work on our products and services...
                </h5>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/blog-five"
                >
                  <span>
                    <h2>Read More...</h2>
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
        {/* images end */}
      </section>
    </>
  );
};

export default Automotive;
