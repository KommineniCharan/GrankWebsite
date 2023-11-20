import React from "react";
import Header from "../header2/Header";
import Seo from "../seo/Seo";
import { motion } from "framer-motion";
const Automotive = () => {
  return (
    <>
      <Seo
        title="Career | G-Rank"
        description="Explore our Career webpage to discover exciting opportunities, a supportive work environment, and a chance to be part of a dynamic team. "
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
            src="assest/photos/career/career-banner.png"
            alt="G-Rank"
          />

          <div className="career-banner-div">
            {/* <h2>Hello there!</h2> */}
            <h2 className="waviy ">
              <span>Hello there!</span>
            </h2>
            <motion.h3
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              If you have it in you to be a change-maker, team player and
              impactful contributor, you are welcome.
            </motion.h3>
          </div>
          <div className="career-yellow-div">
            <h2>What we look for in you</h2>
          </div>
        </div>
        {/* banner end */}
        {/* second-section start */}
        <section className="career-second-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 col-lg-4 career-second-div">
                <motion.img
                  className="img-fluid"
                  src="assest/photos/career/career-icon1.png"
                  alt="G-Rank"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                />
                <h1>Accountablity</h1>
              </div>
              <div className="col-12 col-md-4 col-lg-4 career-second-div">
                <motion.img
                  className="img-fluid "
                  src="assest/photos/career/career-icon2.png"
                  alt="G-Rank"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5 }}
                />
                <h1>Curiosity</h1>
              </div>
              <div className="col-12 col-md-4 col-lg-4 career-second-div">
                <motion.img
                  className="img-fluid"
                  src="assest/photos/career/career-icon3.png"
                  alt="G-Rank"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.8 }}
                />
                <h1>Proactiveness</h1>
              </div>
            </div>
          </div>
        </section>
        {/* second-section end */}
        {/* career at g-rank start */}
        <section className=" career-at-g-rank-section">
          <div className="container">
            <div className="row">
              <motion.div
                className="col-12 career-at-g-rank-heading"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <h1>Careers at G-Rank</h1>
                <h2>
                  We want to make agency life pleasant, productive and
                  empowering
                </h2>
              </motion.div>
              <motion.div
                className="col-12 col-md-4 col-lg-4 career-at-g-rank-div"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <div>
                  <h1>Lead Copywriter</h1>
                  <h2>1+ Yrs of Experience</h2>
                </div>
              </motion.div>
              <div className="col-12 col-md-4 col-lg-4 career-at-g-rank-div">
                <div>
                  <h1>Lead Copywriter</h1>
                  <h2>1+ Yrs of Experience</h2>
                </div>
              </div>
              <motion.div
                className="col-12 col-md-4 col-lg-4 career-at-g-rank-div"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <div>
                  <h1>Lead Copywriter</h1>
                  <h2>1+ Yrs of Experience</h2>
                </div>
              </motion.div>
              <div className="col-12 col-md-4 col-lg-4 career-at-g-rank-div">
                <div>
                  <h1>Lead Copywriter</h1>
                  <h2>1+ Yrs of Experience</h2>
                </div>
              </div>
              <motion.div
                className="col-12 col-md-4 col-lg-4 career-at-g-rank-div"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <div>
                  <h1>Lead Copywriter</h1>
                  <h2>1+ Yrs of Experience</h2>
                </div>
              </motion.div>
              <div className="col-12 col-md-4 col-lg-4 career-at-g-rank-div">
                <div>
                  <h1>Lead Copywriter</h1>
                  <h2>1+ Yrs of Experience</h2>
                </div>
              </div>
              <motion.div
                className="col-12 col-md-4 col-lg-4 career-at-g-rank-div"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <div>
                  <h1>Lead Copywriter</h1>
                  <h2>1+ Yrs of Experience</h2>
                </div>
              </motion.div>
              <div className="col-12 col-md-4 col-lg-4 career-at-g-rank-div">
                <div>
                  <h1>Lead Copywriter</h1>
                  <h2>1+ Yrs of Experience</h2>
                </div>
              </div>
              <motion.div
                className="col-12 col-md-4 col-lg-4 career-at-g-rank-div"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <div>
                  <h1>Lead Copywriter</h1>
                  <h2>1+ Yrs of Experience</h2>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/*  career at g-rank end */}
        {/*  dont see start */}
        <section className="career-dont-see-section">
          <div className="container">
            <div className="row">
              <div className="col-12 career-dont-see-div">
                <h1>Don't see a suitable position?</h1>
                <h2>
                  We are for everyone. Write to us at{" "}
                  <span> careers@grank.co.in</span>
                </h2>
              </div>
            </div>
          </div>
        </section>
        {/*  dont see end */}
      </section>
    </>
  );
};

export default Automotive;
