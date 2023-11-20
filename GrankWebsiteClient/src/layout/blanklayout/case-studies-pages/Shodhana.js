import React from "react";
import Header from "../header2/Header";
import Seo from "../seo/Seo";
import { motion } from "framer-motion";

const Shodhana = () => {
  return (
    <>
      <Seo
        title="Shodhana"
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
            src="assest/photos/case-studies/shodhana-banner.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/case-studies/shodhana-banner-mobile.png"
            alt="G-Rank"
          />

          <div className="case-sub-banner-div" style={{ color: "#00B3B0" }}>
            <h2>Pharmacy Industry</h2>
          </div>
          <div className="case-sub-banner-div2" style={{ color: "#00B3B0" }}>
            <h2>Pharmaceutical Ingredients</h2>
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
                  src="assest/photos/case-studies/sub-banner6.png"
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
                      A manufacturer of Active Pharmaceutical Ingredients and
                      Intermediates, Shodhana Laboratories caters to generic and
                      custom requirements of some of the most widely recognized
                      brands in the market today.
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
        <section className="">
          <div className="container">
            <div className="row">
              <div class="col-12">
                <h1 class="social-header">What We Offered:</h1>
              </div>
              <div className="col-12 col-lg-6 what-we-offer-div" id="order2">
                <p> Google SEO Keywords - 44</p>

                <p>G-Liv Serv (24x7 online chat assistance)</p>
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
                  src="assest/photos/case-studies/result-graph4.png"
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
                  Over a course of more than 4 years, from February 2019,
                  <br /> the leads increased from 148 per year to 220 to 243 to
                  367 in the year 2023.
                  <br /> There is a notable hike of more than 20 % <br />
                  in the traffic with Total Leads : 978
                </h1>
                <h1>
                  The client has also gotten enquiries from countries <br />
                  all over the world like USA, Malaysia, Japan, UK, Pakistan,
                  <br />
                  Bangladesh, Egypt, Turkey and Algeria.
                </h1>
                <h2>147%</h2>
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

export default Shodhana;
