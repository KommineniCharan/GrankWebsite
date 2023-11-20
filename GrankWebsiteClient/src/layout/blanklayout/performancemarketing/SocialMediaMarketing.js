import React, { useEffect, useRef } from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Seo from "../seo/Seo";
import { NavLink } from "react-router-dom";

const SocialMediaMarketing = () => {
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
        title="Social Media Marketing Agency in Bangalore | Hyderabad"
        description="Social media marketing company in Bangalore and Hyderabad. Explore how we turn social platforms into your brand's strongest assets, connecting you with your audience and achieving your goals."
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
            src="assest/photos/performance-marketing/performance-smm-banner.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/performance-marketing/performance-smm-banner-mobile.png"
            alt="G-Rank"
          />
          <div className="performance-smm-banner-div">
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Social Media
              <br />
              Marketing
            </motion.h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-4 col-md-4 col-lg-4 performance-smm-subdiv">
              <div>
                <img
                  className="img-fluid "
                  src="assest/photos/performance-marketing/smm-ads11.png"
                  alt="G-Rank"
                />
                <h4>Social media audit</h4>
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-4 performance-smm-subdiv">
              <div>
                <img
                  className="img-fluid"
                  src="assest/photos/performance-marketing/smm-ads22.png"
                  alt="G-Rank"
                />
                <h4>Social media management</h4>
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-4 performance-smm-subdiv">
              <div>
                <img
                  className="img-fluid "
                  src="assest/photos/performance-marketing/smm-ads33.png"
                  alt="G-Rank"
                />
                <h4>Social media ads</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 performance-div2">
              <h1>Key to your Social Media Success​</h1>
              <p>
                Social media marketing has revolutionized how businesses shape
                consumer behavior, encompassing various strategies such as
                engaging content promotion and personalized messaging based on
                extracted personal data. The strength of social media marketing
                lies in its exceptional capabilities across three key marketing
                domains: connectivity, interaction, and customer insights.
              </p>
              <p>
                ​ At G-Rank, we get together advance tools and technologies to
                guarantee the effectiveness and efficiency of your social media
                campaigns. Through advanced analytics and automated scheduling,
                we harness the potential of technology to optimize business
                outcomes.​
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <img
                className="img-fluid "
                src="assest/photos/performance-marketing/smm-key-img.png"
                alt="G-Rank"
              />
            </div>
          </div>
        </div>
        <div className="container-fluid ads-batch">
          <div className="row">
            <div className="col-12 ads-batch-div1">
              <h1>Our SEM Services</h1>
            </div>
            <div className="col-12">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-4 ">
                    <div className="smm-ads-batch-div2">
                      <h1>Social media audit</h1>
                      <p>
                        Our team analyze your brand's social media performance,
                        compare it to competitors, provide audience insights,
                        and develop a creative strategy aligned with your
                        business goals.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 col-lg-4 ">
                    <div className="smm-ads-batch-div2">
                      <h1>Social media management</h1>
                      <p>
                        Our team handle your brand's social media channels by
                        creating tailored monthly content calendars, driving
                        engagement through customized creatives, and evaluating
                        effectiveness through performance reports.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 col-lg-4 ">
                    <div className="smm-ads-batch-div2">
                      <h1>Social media ads</h1>
                      <p>
                        Our team works on your social media account to drive
                        conversions. We develop compelling messages and deploy
                        impactful creatives to reduce traffic costs and boost
                        click-through rates.
                      </p>
                    </div>
                  </div>
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
                  At G-Rank, we pride ourselves on providing exceptional social
                  media marketing (SMM) services to help your business thrive in
                  the digital landscape. Our proven process maximizes your
                  brand's visibility, engagement, and conversions.​
                  <br />
                  <br />
                  We comprehensive analysis your business, target audience, and
                  competitors to develop a tailored strategy that aligns with
                  your goals and maximizes your online presence. We focus on
                  creating compelling and engaging content that resonates with
                  your audience across various social media platforms.​ .​
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* what we do start */}
        <div className="container-fluid branding-sem-consulting-what">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-7" id="order2">
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
                  Tailored online marketing solutions aligned with business
                  objectives
                </p>
                <p>
                  Tailored online marketing solutions aligned with business
                  objectives
                </p>
                <p>
                  Team of skilled professionals with deep industry knowledge of
                  social media trends and strategies
                </p>
                <p>
                  Customized solutions for uniqueness of each business, ensuring
                  high effectiveness
                </p>
                <p>
                  Prominent social media marketing agency in Bangalore and
                  Hyderabad
                </p>
                <p>
                  Comprehensive services: strategic planning, content creation,
                  social media advertising, and analytics
                </p>
                <p>
                  Collaborative approach to understand goals and target
                  audience, creating data-driven strategies
                </p>
                <p>
                  Commitment to staying ahead in social media marketing by
                  monitoring trends, updates, and user behavior
                </p>
                <p>Ongoing campaign optimization for maximum ROI</p>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-5 " id="order1">
              <motion.img
                initial={{ opacity: 0, scale: 0, y: 200 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="img-fluid branding-consulting-process-img"
                src="assest/photos/branding/what-we-do-img-yellow2.png"
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

export default SocialMediaMarketing;
