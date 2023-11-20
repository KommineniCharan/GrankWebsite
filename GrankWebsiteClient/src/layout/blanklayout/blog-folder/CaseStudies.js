import React from "react";
import Header from "../header2/Header";
import { NavLink } from "react-router-dom";
import Seo from "../seo/Seo";
import { motion } from "framer-motion";

const CaseStudies = () => {
  return (
    <>
      <Seo
        title="Case Studies"
        description="Explore the stories of our success. Dive into our Case Studies to witness firsthand how we've helped businesses overcome challenges, achieve milestones, and realize their goals. "
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
            className="img-fluid w-100 mobile-none"
            src="assest/photos/case-studies/case-studies-banner2.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/case-studies/case-studies-banner-mobile.png"
            alt="G-Rank"
          />

          <div className="case-banner-div">
            <motion.h2
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Case Studies
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
                  transition={{ duration: 1.2 }}
                >
                  <img
                    className="img-fluid w-100"
                    src="assest/photos/case-studies/case-studies-img1.png"
                    alt="G-Rank"
                  />
                </motion.div>
                <h1 className="case-studies-div">
                  <img
                    className="img-fluid "
                    src="assest/photos/case-studies/dirak.png"
                    alt="G-Rank"
                  />
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "#000" : "#000",
                    })}
                    to="/dirak"
                  >
                    <h1>Dirak India</h1>
                  </NavLink>
                </h1>
              </div>
              <div className="col-12 col-md-6 col-lg-6 blog-images-section">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  <img
                    className="img-fluid w-100"
                    src="assest/photos/case-studies/case-studies-img2.png"
                    alt="G-Rank"
                  />
                </motion.div>
                <h1 className="case-studies-div">
                  <img
                    className="img-fluid "
                    src="assest/photos/case-studies/ace.png"
                    alt="G-Rank"
                  />
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "#000" : "#000",
                    })}
                    to="/ace-force"
                  >
                    <h1>Ace Force</h1>
                  </NavLink>
                </h1>
              </div>
              <div className="col-12 col-md-6 col-lg-6 blog-images-section">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  <img
                    className="img-fluid w-100"
                    src="assest/photos/case-studies/case-studies-img3.png"
                    alt="G-Rank"
                  />
                </motion.div>
                <h1 className="case-studies-div">
                  <img
                    className="img-fluid "
                    src="assest/photos/case-studies/cms.png"
                    alt="G-Rank"
                  />
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "#000" : "#000",
                    })}
                    to="/cms"
                  >
                    <h1>CMS GP</h1>
                  </NavLink>
                </h1>
              </div>
              <div className="col-12 col-md-6 col-lg-6 blog-images-section">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  <img
                    className="img-fluid w-100"
                    src="assest/photos/case-studies/case-studies-img4.png"
                    alt="G-Rank"
                  />
                </motion.div>
                <h1 className="case-studies-div">
                  <img
                    className="img-fluid "
                    src="assest/photos/case-studies/shodhana.png"
                    alt="G-Rank"
                  />
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "#000" : "#000",
                    })}
                    to="/shodhana"
                  >
                    <h1>Shodhana</h1>
                  </NavLink>
                </h1>
              </div>
              <div className="col-12 col-md-6 col-lg-6 blog-images-section">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  <img
                    className="img-fluid w-100"
                    src="assest/photos/case-studies/case-studies-img5.png"
                    alt="G-Rank"
                  />
                </motion.div>
                <h1 className="case-studies-div">
                  <img
                    className="img-fluid "
                    src="assest/photos/case-studies/signature.png"
                    alt="G-Rank"
                  />
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "#000" : "#000",
                    })}
                    to="/signature"
                  >
                    <h1>Candeur Signature</h1>
                  </NavLink>
                </h1>
              </div>
              <div className="col-12 col-md-6 col-lg-6 blog-images-section">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  <img
                    className="img-fluid w-100"
                    src="assest/photos/case-studies/case-studies-img6.png"
                    alt="G-Rank"
                  />
                </motion.div>
                <h1 className="case-studies-div">
                  <img
                    className="img-fluid "
                    src="assest/photos/case-studies/eco-life.png"
                    alt="G-Rank"
                  />
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "#000" : "#000",
                    })}
                    to="/eco-life"
                  >
                    <h1>Ecolife Developers</h1>
                  </NavLink>
                </h1>
              </div>
              <div className="col-12 col-md-6 col-lg-6 blog-images-section">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  <img
                    className="img-fluid w-100"
                    src="assest/photos/case-studies/case-studies-img7.png"
                    alt="G-Rank"
                  />
                </motion.div>
                <h1 className="case-studies-div">
                  <img
                    className="img-fluid "
                    src="assest/photos/case-studies/jayabheri-nirvana.png"
                    alt="G-Rank"
                  />
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "#000" : "#000",
                    })}
                    to="/jayabheri"
                  >
                    <h1>Jayabheri Nirvane</h1>
                  </NavLink>
                </h1>
              </div>
              <div className="col-12 col-md-6 col-lg-6 blog-images-section">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  <img
                    className="img-fluid w-100"
                    src="assest/photos/case-studies/case-studies-img8.png"
                    alt="G-Rank"
                  />
                </motion.div>
                <h1 className="case-studies-div">
                  <img
                    className="img-fluid "
                    src="assest/photos/case-studies/ramky.png"
                    alt="G-Rank"
                  />
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "#000" : "#000",
                    })}
                    to="/Ramky"
                  >
                    <h1>Ramky Estate</h1>
                  </NavLink>
                </h1>
              </div>
              <div className="col-12 col-md-6 col-lg-6 blog-images-section">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  <img
                    className="img-fluid w-100"
                    src="assest/photos/case-studies/case-studies-img9.png"
                    alt="G-Rank"
                  />
                </motion.div>
                <h1 className="case-studies-div">
                  <img
                    className="img-fluid "
                    src="assest/photos/case-studies/Performax.png"
                    alt="G-Rank"
                  />
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "#000" : "#000",
                    })}
                    to="/performax"
                  >
                    <h1>Performax</h1>
                  </NavLink>
                </h1>
              </div>
            </div>
          </div>
        </section>
        {/* images end */}
      </section>
    </>
  );
};

export default CaseStudies;
