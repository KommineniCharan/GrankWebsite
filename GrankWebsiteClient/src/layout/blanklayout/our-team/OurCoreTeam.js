import React from "react";
import Header from "../header2/Header";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const OurCoreTeam = () => {
  return (
    <>
      <section className="section-top">
        <Header />

        {/* banner start */}
        <div
          className="creative-banner-display-ads"
          style={{ backgroundColor: "#fff", position: "relative" }}
        >
          <img
            className="img-fluid w-100"
            src="assest/photos/our-team/meet-our-team-banner-white1.png"
            alt="G-Rank"
          />

          <div className="meet-our-team-banner-div">
            <h2>Meet Our Team</h2>
            <h3>
              We are a team of dreamers, thinkers and doers. We are not just all
              work, We have fun and much more..!
            </h3>
          </div>
        </div>
        {/* banner end */}
        <section className="meet-our-core-team-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="festive-img-div">
                  <motion.img
                    className="img-fluid"
                    src="assest/photos/gallery/gallery7.jpeg"
                    alt="G-Rank"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="festive-img-div2">
                  <motion.img
                    className="img-fluid"
                    src="assest/photos/gallery/gallery4.jpg"
                    alt="G-Rank"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                <div className="festive-img-div3">
                  <motion.img
                    className="img-fluid"
                    src="assest/photos/gallery/gallery1.jpeg"
                    alt="G-Rank"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="meet-our-festive-moment">
                  <motion.h2
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    Festive Moments <br />
                    Captured in Colours
                  </motion.h2>
                  <motion.h3
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    At G-Rank, we Celebrate festivals and Immortalize each
                    moment. We believe in making each moment count.
                  </motion.h3>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "#000" : "#000",
                    })}
                    to="/our-gallery"
                  >
                    <span className="meet-our-team">
                      See More
                      <img
                        className="img-fluid"
                        src="assest/photos/our-team/right-arrow.png"
                        alt="G-Rank"
                      />
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="meet-our-core-team-section2">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6" id="order2">
                <div className="meet-our-festive-moment2">
                  <motion.h2
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    Birthday Blim
                    <br />
                    Captured in Colours
                  </motion.h2>
                  <motion.h3
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    At G-Rank, birthday's call for massive celebrations.
                    Birthday bumps, cakes, Dance, Music's all of that to make
                    the day of our team eventful.
                  </motion.h3>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "#000" : "#000",
                    })}
                    to="/our-gallery"
                  >
                    <span className="meet-our-team2">
                      See More
                      <img
                        className="img-fluid"
                        src="assest/photos/our-team/right-arrow-white.png"
                        alt="G-Rank"
                      />
                    </span>
                  </NavLink>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6" id="order1">
                <div className="festive-img-div">
                  <motion.img
                    className="img-fluid"
                    src="assest/photos/our-team/meet-img.png"
                    alt="G-Rank"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="festive-img-div2">
                  <motion.img
                    className="img-fluid"
                    src="assest/photos/our-team/meet-img.png"
                    alt="G-Rank"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                <div className="festive-img-div3">
                  <motion.img
                    className="img-fluid"
                    src="assest/photos/our-team/meet-img.png"
                    alt="G-Rank"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="meet-our-core-team-section3">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="festive-img-div">
                  <motion.img
                    className="img-fluid"
                    src="assest/photos/our-team/meet-img.png"
                    alt="G-Rank"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="festive-img-div2">
                  <motion.img
                    className="img-fluid"
                    src="assest/photos/our-team/meet-img.png"
                    alt="G-Rank"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                <div className="festive-img-div3">
                  <motion.img
                    className="img-fluid"
                    src="assest/photos/our-team/meet-img.png"
                    alt="G-Rank"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="meet-our-festive-moment">
                  <motion.h2
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    Gaming Adventures
                    <br />
                    Captured in Colour
                  </motion.h2>
                  <motion.h3
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    Every Month-end Saturday calls for fun games and frolic at
                    G-Rank. Our Anniversary and team outings mean never ending
                    joy and togetherness.
                  </motion.h3>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "#000" : "#000",
                    })}
                    to="/our-gallery"
                  >
                    <span className="meet-our-team">
                      See More
                      <img
                        className="img-fluid"
                        src="assest/photos/our-team/right-arrow.png"
                        alt="G-Rank"
                      />
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default OurCoreTeam;
