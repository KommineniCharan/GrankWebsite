import React, { useEffect, useRef } from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Seo from "../seo/Seo";
import { NavLink } from "react-router-dom";

const SearchEngineMarketing = () => {
  const settings3 = {
    // dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplaySpeed: 2000,
    // arrows: false,
    // className: "notes-slider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Seo
        title="PPC Services Company in Bangalore | Hyderabad"
        description="PPC Services agency in Bangalore and Hyderabad. Explore the art of paid advertising and keyword optimization that ensures your brand's visibility and success. "
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
        <div className="performance-banner">
          <img
            className="img-fluid w-100 mobile-none"
            src="assest/photos/performance-marketing/performance-sem-banner.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/performance-marketing/performance-sem-banner-mobile.png"
            alt="G-Rank"
          />
          <div className="performance-sem-banner-div">
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Search Engine
              <br />
              Marketing
            </motion.h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-4 col-md-4 col-lg-4 performance-sem-subdiv">
              <div>
                <img
                  className="img-fluid "
                  src="assest/photos/performance-marketing/ads.png"
                  alt="G-Rank"
                />
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-4 performance-sem-subdiv">
              <div>
                <img
                  className="img-fluid yahoo-img"
                  src="assest/photos/performance-marketing/yehoo-img.png"
                  alt="G-Rank"
                />
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-4 performance-sem-subdiv">
              <div>
                <img
                  className="img-fluid "
                  src="assest/photos/performance-marketing/bind-ads-logo2.png"
                  alt="G-Rank"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-12 col-md-6 col-lg-6 performance-div2"
              id="order2"
            >
              <h1>No Empty Promises, Only Conversions with SEM</h1>
              <p>
                Why settle for the ordinary when you can experience
                extraordinary results? Search engine marketing, is a highly
                effective way to increase your ranking on search engines like
                Google, and attract qualified traffic to your website. At
                G-Rank, we understand your success depends on more than just
                traffic. That's why we go beyond mere clicks and focus on
                generating high-quality conversions that impact your bottom
                line. Our proven strategies and innovative approaches ensure
                that every visitor to your site is a potential customer, primed
                and ready to convert.
              </p>
              <p>
                ​ Our comprehensive SEM services include keyword research, ad
                creation, campaign optimization, and conversion tracking,
                ensuring that every aspect of your marketing strategy aligns
                seamlessly.
              </p>
            </div>
            <div
              className="col-12 col-md-6 col-lg-6 performance-sem-div2"
              id="order1"
            >
              <img
                className="img-fluid "
                src="assest/photos/performance-marketing/performance-sem-object.png"
                alt="G-Rank"
              />
            </div>
          </div>
        </div>
        <div className="container-fluid ads-batch">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 ads-batch-div1">
              <h1>Our SEM Services</h1>
              <p>
                We provide a wide range of services related to
                <br /> SEM. Our services include:
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="row">
                <div className="col-4 col-md-4 col-lg-4 ads-batch-div2">
                  <img
                    className="img-fluid "
                    src="assest/photos/performance-marketing/ads-img-small.png"
                    alt="G-Rank"
                  />
                  <h1>Google Ads​</h1>
                </div>
                <div className="col-4 col-md-4 col-lg-4 ads-batch-div2">
                  <img
                    className="img-fluid "
                    src="assest/photos/performance-marketing/yehoo-img.png"
                    alt="G-Rank"
                  />
                  <h1>Facebook Ads​​</h1>
                </div>
                <div className="col-4 col-md-4 col-lg-4 ads-batch-div2">
                  <img
                    className="img-fluid "
                    src="assest/photos/performance-marketing/bing-imgs-small.png"
                    alt="G-Rank"
                  />
                  <h1>Bing Ads​</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="branding-process-div">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 ">
                {/* <div className="branding-consulting-process-img">
                  <motion.img
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="img-fluid branding-consulting-process-img"
                    src="assest/photos/branding/branding-consulting-process-img.png"
                    alt="G-Rank"
                  />
                </div> */}
                <img
                  className="img-fluid branding-pro-img mobile-none"
                  src="assest/photos/branding/branding-consulting-process-img.png"
                  alt="G-Rank"
                />
                <img
                  className="img-fluid branding-pro-img desktop-none"
                  src="assest/photos/branding/automation.png"
                  alt="G-Rank"
                />
              </div>
              <div className="col-12 col-md-6 col-lg-6 branding-consulting-process-text">
                <motion.h1
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  Our
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  Process
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  At G-Rank, we understand the importance of a well-executed
                  Search Engine Marketing (SEM) strategy in driving targeted
                  traffic and achieving business goals. Our SEM experts
                  collaborate closely with you to understand your business
                  objectives, target audience, and competitive landscape.
                  <br />
                  <br />
                  We conduct extensive keyword research to identify your
                  campaigns' most relevant and high-performing keywords. This
                  ensures that your ads reach the right audience at the right
                  time.​
                  <br />
                  <br />
                  We leverage advanced analytics tools to track key metrics,
                  identify trends, and make data-driven decisions to improve
                  your SEM campaigns continuously.​
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        {/* what we do start */}
        <div className="container-fluid branding-sem-consulting-what">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-7 " id="order2">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className=" branding-sem-consulting-what-heading"
              >
                <h1>What</h1>
                <h2>we Do</h2>
              </motion.div>
              <div className="branding-sem-consulting-what-text">
                <p>
                  Recognizing the potential of pay-per-click (PPC) advertising
                  for business growth
                </p>
                <p>
                  Employing experienced professionals who use advanced
                  strategies, meticulous research, and data-driven insights
                </p>
                <p>
                  Creating highly effective PPC campaigns tailored to individual
                  business goals
                </p>
                <p>
                  Offering comprehensive services including keyword research, ad
                  creation, campaign management, bid optimization, and
                  performance tracking
                </p>
                <p>
                  Staying up-to-date with industry trends and innovations to
                  maintain campaign effectiveness
                </p>
                <p>
                  Providing location-specific PPC services for targeted audience
                  reach (e.g., PPC services in Bangalore and Hyderabad)
                </p>
                <p>
                  Emphasizing transparency through detailed reporting and
                  continuous optimization
                </p>
                <p>
                  Consistently monitoring campaigns, using data-driven
                  adjustments to maximize ROI and competitiveness
                </p>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-5" id="order1">
              <motion.img
                initial={{ opacity: 0, scale: 0, y: 200 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="img-fluid branding-consulting-process-img"
                src="assest/photos/branding/what-we-do-img-blue.png"
                alt="G-Rank"
              />
            </div>
          </div>
        </div>
        {/* what we do end */}

        {/* Quick Link section start */}
        <section>
          <div className="container-fluid">
            <div>
              <motion.h2
                className="branding-quick-link"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                Quick Links
                <p className="d-block"> For You</p>
              </motion.h2>
              <Slider {...settings3}>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/branding"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">Branding</h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/creative-content"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">
                      Creative & <p className="d-block"> Content</p>
                    </h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/organic-marketing"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">
                      Organic <p className="d-block"> marketing</p>
                    </h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/performance-marketing"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">
                      Performance <p className="d-block"> marketing</p>
                    </h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/social-media"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">Social Media</h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/web-development"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">
                      Web <p className="d-block"> Development</p>
                    </h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/domain"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">Domain</h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/hosting"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">
                      Web <p className="d-block"> Hosting</p>
                    </h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/security"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">Security</h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/email"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">Email</h1>
                  </div>
                </NavLink>
              </Slider>
            </div>
          </div>
        </section>
        {/* Quick Link section end */}

        <section>
          <div className="performance-footerimg-div">
            <img
              className="img-fluid w-100"
              src="assest/photos/branding/branding-footer-img.png"
              alt="G-Rank"
            />
            <div className="performance-footer-div-text">
              <h1>Learn more about our sevices</h1>
              <div className="searchArea">
                <button type="submit" tabindex="2">
                  Explore
                </button>
                <div className="inputDiv">
                  <input type="text" id="inputField" tabindex="1" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <img
          className="img-fluid w-100"
          src="assest/photos/branding/branding-footer-img.png"
          alt="G-Rank"
        /> */}
      </section>
    </>
  );
};

export default SearchEngineMarketing;
