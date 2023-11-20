import React from "react";
import Header from "../header2/Header";
import Seo from "../seo/Seo";
import { motion } from "framer-motion";

const EcoLife = () => {
  return (
    <>
      <Seo
        title="EcoLife"
        description="Beginner friendly page for learning React Helmet."
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
            src="assest/photos/case-studies/eco-life-banner.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/case-studies/eco-life-banner-mobile.png"
            alt="G-Rank"
          />

          <div className="case-sub-banner-div" style={{ color: "#00B4AB" }}>
            <h2>Real Estate Industry</h2>
          </div>
          <div className="case-sub-banner-div2" style={{ color: "#00B4AB" }}>
            <h2>Builders & Development</h2>
          </div>
        </div>
        {/* banner end */}
        {/* section2 Start */}
        <section className="web-section2">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 align-self-center">
                <img
                  className="img-fluid w-100"
                  src="assest/photos/case-studies/sub-banner4.png"
                  alt="G-Rank"
                />
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="row">
                  <div className="col-12">
                    <motion.h1
                      className="section2-web-develop-header"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      About the Client
                    </motion.h1>
                    <p className="section2-web-develop-passage">
                      Ecolife Developers is a group of dynamic professionals
                      from diverse fields of construction, planning and
                      architecture. Located in Bangalore, this Prestigious Real
                      Estate Builders & Developers group builds luxury
                      apartments in the eye of Bangalore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section2 end */}
        <section className="">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 p-0">
                <img
                  className="img-fluid w-100 sub-banner-img"
                  src="assest/photos/yellow-action-back.png"
                  alt="G-Rank"
                />
                <div className="sub-banner-div">
                  <h1>4</h1>
                  <h2>Years of Association</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* what we offer start */}
        <section className="challenge-sec">
          <div className="container">
            <div className="row">
              <div class="col-12 col-lg-6">
                <h1 class="social-header">Challenges:</h1>
              </div>
              <div className="col-12 col-lg-6 what-we-offer-div align-self-center case-padding-none">
                <p>
                  To reach out to the real estate audience for branding,
                  awareness and thereby increase leads, conversions and sales.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* what we offer end */}
        {/* what we offer start */}
        <section className="">
          <div className="container">
            <div className="row">
              <div class="col-12">
                <h1 class="social-header">What We Offered:</h1>
              </div>
              <div className="col-12 col-lg-6 what-we-offer-div" id="order2">
                <p> Google SEO Keywords </p>
                <p>Google Remarketing</p>
                <p>Google Adwords </p>
                <p>Remarketing</p>
                <p>Banner Ads</p>
                <p>G-Liv Serv (24x7 online chat assistance)</p>
                <p>Social Media Optimisation</p>
              </div>
              <div className="col-12 col-lg-6" id="order1">
                <img
                  className="img-fluid "
                  src="assest/photos/case-studies/what-we-offer-img2.png"
                  alt="G-Rank"
                />
              </div>
            </div>
          </div>
        </section>
        {/* what we offer end */}
        {/* what we offer start */}
        <section className="">
          <div className="container">
            <div className="row">
              <div class="col-12">
                <h1 class="social-header">Results:</h1>
              </div>

              <div className="col-12  result-img">
                <img
                  className="img-fluid "
                  src="assest/photos/case-studies/result-graph6.png"
                  alt="G-Rank"
                />
              </div>
            </div>
          </div>
        </section>
        {/* what we offer end */}
        {/* what we offer start */}
        <section className="result-text-section">
          <div className="container">
            <div className="row">
              <div className="col-12 result-text">
                <h1>
                  Over a course of 4 years, from 2020, ‌leads increased from 223
                  per year to 920 to 1704 in the year 2022. Total Leads : 2850
                </h1>
                <h2>660%</h2>
                <h3>increase in leads</h3>
              </div>
            </div>
          </div>
        </section>
        {/* what we offer end */}
      </section>
    </>
  );
};

export default EcoLife;
